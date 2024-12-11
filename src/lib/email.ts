import sgMail from '@sendgrid/mail'

interface EmailOptions {
  to: string
  subject: string
  text?: string
  html?: string
  attachments?: Array<{
    filename: string
    content: Buffer
  }>
}

if (!process.env.SENDGRID_API_KEY) {
  console.warn('SENDGRID_API_KEY is not set in environment variables')
}

sgMail.setApiKey(process.env.SENDGRID_API_KEY || '')

export async function sendEmail(options: EmailOptions): Promise<void> {
  try {
    const msg = {
      to: options.to,
      from: process.env.EMAIL_FROM || 'noreply@e3sisterskenya.org',
      subject: options.subject,
      text: options.text || '',
      html: options.html || '',
      attachments: options.attachments?.map(attachment => ({
        filename: attachment.filename,
        content: attachment.content.toString('base64'),
        type: 'application/pdf',
        disposition: 'attachment'
      }))
    }

    await sgMail.send(msg)
    console.log(`Email sent successfully to ${options.to}`)
  } catch (error) {
    console.error('Error sending email:', error)
    throw new Error('Failed to send email')
  }
}