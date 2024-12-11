import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { prisma } from '@/lib/prisma'

export async function GET() {
  try {
    const session = await getServerSession()
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    // Get all applications from the last 30 days
    const thirtyDaysAgo = new Date()
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30)

    // Get total counts by status
    const [
      totalApplications,
      pendingCount,
      approvedCount,
      contactedCount,
      positionCounts,
      recentApplications
    ] = await Promise.all([
      // Total applications
      prisma.volunteerApplication.count(),
      // Pending applications
      prisma.volunteerApplication.count({
        where: { status: 'PENDING' }
      }),
      // Approved applications
      prisma.volunteerApplication.count({
        where: { status: 'APPROVED' }
      }),
      // Contacted applications
      prisma.volunteerApplication.count({
        where: { status: 'CONTACTED' }
      }),
      // Position counts
      prisma.volunteerApplication.groupBy({
        by: ['position'],
        _count: true,
        orderBy: {
          _count: {
            position: 'desc'
          }
        },
        take: 5
      }),
      // Recent applications (last 30 days)
      prisma.volunteerApplication.findMany({
        where: {
          createdAt: {
            gte: thirtyDaysAgo
          }
        },
        orderBy: {
          createdAt: 'asc'
        }
      })
    ])

    // Calculate percentages
    const total = pendingCount + approvedCount + contactedCount
    const pendingPercentage = total > 0 ? (pendingCount / total) * 100 : 0
    const approvedPercentage = total > 0 ? (approvedCount / total) * 100 : 0
    const contactedPercentage = total > 0 ? (contactedCount / total) * 100 : 0

    // Calculate popular positions with percentages
    const popularPositions = positionCounts.map((pos: any) => ({
      name: pos.position,
      count: pos._count,
      percentage: (pos._count / totalApplications) * 100
    }))

    // Calculate weekly average
    const weeklyAverage = Math.round(recentApplications.length / 4)

    // Calculate response rate (approved + contacted / total)
    const responseRate = total > 0 
      ? Math.round(((approvedCount + contactedCount) / total) * 100)
      : 0

    return NextResponse.json({
      totalApplications,
      pending: pendingCount,
      approved: approvedCount,
      contacted: contactedCount,
      pendingPercentage,
      approvedPercentage,
      contactedPercentage,
      popularPositions,
      weeklyAverage,
      responseRate: `${responseRate}%`
    })
  } catch (error) {
    console.error('Error fetching volunteer stats:', error)
    return NextResponse.json(
      { error: 'Failed to fetch volunteer statistics' },
      { status: 500 }
    )
  }
}
