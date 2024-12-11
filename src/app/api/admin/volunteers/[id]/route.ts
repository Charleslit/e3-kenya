import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function PATCH(
  request: NextRequest,
  { params }: any
) {
  try {
    const body = await request.json()
    const { status } = body

    const updatedVolunteer = await prisma.volunteerApplication.update({
      where: { id: params.id },
      data: { status },
    })

    return NextResponse.json(updatedVolunteer)
  } catch (error) {
    console.error("Failed to update volunteer status:", error)
    return NextResponse.json(
      { error: "Failed to update volunteer status" },
      { status: 500 }
    )
  }
}

export async function GET(
  request: NextRequest,
  { params }: any
) {
  try {
    const volunteer = await prisma.volunteerApplication.findUnique({
      where: { id: params.id },
    })

    if (!volunteer) {
      return NextResponse.json(
        { error: "Volunteer not found" },
        { status: 404 }
      )
    }

    return NextResponse.json(volunteer)
  } catch (error) {
    console.error("Failed to fetch volunteer:", error)
    return NextResponse.json(
      { error: "Failed to fetch volunteer" },
      { status: 500 }
    )
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: any
) {
  try {
    await prisma.volunteerApplication.delete({
      where: { id: params.id },
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Failed to delete volunteer:", error)
    return NextResponse.json(
      { error: "Failed to delete volunteer" },
      { status: 500 }
    )
  }
}