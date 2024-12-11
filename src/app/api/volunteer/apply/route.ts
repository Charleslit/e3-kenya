import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function POST(req: Request) {
  try {
    const data = await req.json()

    // Save to database
    const application = await prisma.volunteerApplication.create({
      data: {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        position: data.position,
        experience: data.experience,
        availability: data.availability,
        additionalInfo: data.additionalInfo,
        status: 'PENDING'
      }
    })

    // Send notification email (implement this based on your email service)
    // await sendNotificationEmail({
    //   to: process.env.ADMIN_EMAIL,
    //   subject: `New Volunteer Application: ${data.position}`,
    //   template: 'volunteer-application',
    //   data: { ...data, applicationId: application.id }
    // })

    return NextResponse.json({ 
      success: true, 
      message: 'Application submitted successfully' 
    })
  } catch (error) {
    console.error('Error submitting volunteer application:', error)
    return NextResponse.json(
      { success: false, message: 'Failed to submit application' },
      { status: 500 }
    )
  }
}
