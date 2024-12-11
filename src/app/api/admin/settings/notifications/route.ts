import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { getNotificationSettings, updateNotificationSettings } from '@/lib/settings'

export async function GET() {
  try {
    const session = await getServerSession()
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const settings = await getNotificationSettings()
    return NextResponse.json(settings)
  } catch (error) {
    console.error('Error fetching notification settings:', error)
    return NextResponse.json(
      { error: 'Failed to fetch notification settings' },
      { status: 500 }
    )
  }
}

export async function POST(request: Request) {
  try {
    const session = await getServerSession()
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const data = await request.json()
    const settings = await updateNotificationSettings({
      emailNotifications: data.emailNotifications,
      newDonationAlert: data.newDonationAlert,
      newVolunteerAlert: data.newVolunteerAlert,
      weeklyReports: data.weeklyReports,
      monthlyReports: data.monthlyReports
    })

    return NextResponse.json(settings)
  } catch (error) {
    console.error('Error updating notification settings:', error)
    return NextResponse.json(
      { error: 'Failed to update notification settings' },
      { status: 500 }
    )
  }
}
