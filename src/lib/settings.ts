import { prisma } from './prisma'

export async function getSiteSettings() {
  const settings = await prisma.siteSettings.findFirst()
  if (!settings) {
    // Create default settings if none exist
    return prisma.siteSettings.create({
      data: {
        siteName: 'E3 Sisters Kenya',
        siteDescription: 'Empowering women and girls in Kenya',
        contactEmail: 'contact@e3sisterskenya.org',
        donationGoal: 50000,
        stripePublicKey: '',
        stripeSecretKey: '',
        sendgridApiKey: ''
      }
    })
  }
  return settings
}

export async function getNotificationSettings() {
  const settings = await prisma.notificationSettings.findFirst()
  if (!settings) {
    // Create default notification settings if none exist
    return prisma.notificationSettings.create({
      data: {
        emailNotifications: true,
        newDonationAlert: true,
        newVolunteerAlert: true,
        weeklyReports: false,
        monthlyReports: true
      }
    })
  }
  return settings
}

export async function updateSiteSettings(data: {
  siteName: string
  siteDescription?: string
  contactEmail: string
  donationGoal: number
  stripePublicKey: string
  stripeSecretKey: string
  sendgridApiKey: string
}) {
  const settings = await prisma.siteSettings.findFirst()
  if (settings) {
    return prisma.siteSettings.update({
      where: { id: settings.id },
      data
    })
  }
  return prisma.siteSettings.create({ data })
}

export async function updateNotificationSettings(data: {
  emailNotifications: boolean
  newDonationAlert: boolean
  newVolunteerAlert: boolean
  weeklyReports: boolean
  monthlyReports: boolean
}) {
  const settings = await prisma.notificationSettings.findFirst()
  if (settings) {
    return prisma.notificationSettings.update({
      where: { id: settings.id },
      data
    })
  }
  return prisma.notificationSettings.create({ data })
}

// Helper function to check if notifications are enabled for a specific type
export async function shouldNotify(type: 'donation' | 'volunteer' | 'weekly' | 'monthly') {
  const settings = await getNotificationSettings()
  if (!settings.emailNotifications) return false

  switch (type) {
    case 'donation':
      return settings.newDonationAlert
    case 'volunteer':
      return settings.newVolunteerAlert
    case 'weekly':
      return settings.weeklyReports
    case 'monthly':
      return settings.monthlyReports
    default:
      return false
  }
}
