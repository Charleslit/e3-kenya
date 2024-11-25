import { NextResponse } from 'next/server'
import initiativesData from '@/data/initiatives.json'
import { Initiative } from '@/types/Initiative'

export async function GET() {
  return NextResponse.json(initiativesData.initiatives)
}

export async function POST(request: Request) {
  try {
    const initiative: Initiative = await request.json()
    // Here you would typically validate and save to a database
    // For now, we'll just return the initiative
    return NextResponse.json(initiative, { status: 201 })
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to create initiative' },
      { status: 400 }
    )
  }
} 