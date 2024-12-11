'use client'

import { useState } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { toast } from 'sonner'

const volunteerFormSchema = z.object({
  firstName: z.string().min(2, 'First name must be at least 2 characters'),
  lastName: z.string().min(2, 'Last name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().optional(),
  location: z.string().min(2, 'Please enter your location'),
  interests: z.array(z.string()).min(1, 'Please select at least one area of interest'),
  skills: z.string().min(10, 'Please tell us about your relevant skills'),
  availability: z.string().min(1, 'Please indicate your availability'),
  message: z.string().optional(),
})

type VolunteerFormData = z.infer<typeof volunteerFormSchema>

const volunteerInterests = [
  { id: 'pad-making', label: 'Pad Making & Training' },
  { id: 'education', label: 'Education Programs' },
  { id: 'fundraising', label: 'Fundraising' },
  { id: 'community', label: 'Community Outreach' },
  { id: 'admin', label: 'Administrative Support' },
  { id: 'marketing', label: 'Marketing & Communications' },
]

export function VolunteerForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [selectedInterests, setSelectedInterests] = useState<string[]>([])

  const form = useForm<VolunteerFormData>({
    resolver: zodResolver(volunteerFormSchema),
    defaultValues: {
      interests: [],
    },
  })

  const onSubmit = async (data: VolunteerFormData) => {
    setIsSubmitting(true)
    try {
      // TODO: Implement API endpoint
      await fetch('/api/volunteer/apply', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      toast.success('Thank you for your interest in volunteering! We will contact you soon.')
      form.reset()
      setSelectedInterests([])
    } catch (error) {
      toast.error('Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const toggleInterest = (interestId: string) => {
    setSelectedInterests(prev => {
      const newInterests = prev.includes(interestId)
        ? prev.filter(id => id !== interestId)
        : [...prev, interestId]
      form.setValue('interests', newInterests)
      return newInterests
    })
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="text-sm font-medium">First Name</label>
          <Input
            {...form.register('firstName')}
            placeholder="Enter your first name"
            className="w-full"
          />
          {form.formState.errors.firstName && (
            <p className="text-sm text-red-500">{form.formState.errors.firstName.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Last Name</label>
          <Input
            {...form.register('lastName')}
            placeholder="Enter your last name"
            className="w-full"
          />
          {form.formState.errors.lastName && (
            <p className="text-sm text-red-500">{form.formState.errors.lastName.message}</p>
          )}
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium">Email</label>
        <Input
          {...form.register('email')}
          type="email"
          placeholder="Enter your email address"
          className="w-full"
        />
        {form.formState.errors.email && (
          <p className="text-sm text-red-500">{form.formState.errors.email.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium">Phone (Optional)</label>
        <Input
          {...form.register('phone')}
          type="tel"
          placeholder="Enter your phone number"
          className="w-full"
        />
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium">Location</label>
        <Input
          {...form.register('location')}
          placeholder="City, Country"
          className="w-full"
        />
        {form.formState.errors.location && (
          <p className="text-sm text-red-500">{form.formState.errors.location.message}</p>
        )}
      </div>

      <div className="space-y-4">
        <label className="text-sm font-medium">Areas of Interest</label>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {volunteerInterests.map((interest) => (
            <Button
              key={interest.id}
              type="button"
              variant={selectedInterests.includes(interest.id) ? 'default' : 'outline'}
              className="h-auto py-2 px-4 text-sm"
              onClick={() => toggleInterest(interest.id)}
            >
              {interest.label}
            </Button>
          ))}
        </div>
        {form.formState.errors.interests && (
          <p className="text-sm text-red-500">{form.formState.errors.interests.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium">Relevant Skills & Experience</label>
        <Textarea
          {...form.register('skills')}
          placeholder="Tell us about your skills and experience that could benefit our mission"
          className="w-full h-32"
        />
        {form.formState.errors.skills && (
          <p className="text-sm text-red-500">{form.formState.errors.skills.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium">Availability</label>
        <select
          {...form.register('availability')}
          className="w-full h-10 px-3 border rounded-md"
        >
          <option value="">Select your availability</option>
          <option value="flexible">Flexible</option>
          <option value="weekdays">Weekdays</option>
          <option value="weekends">Weekends</option>
          <option value="evenings">Evenings</option>
          <option value="summer">Summer Only</option>
        </select>
        {form.formState.errors.availability && (
          <p className="text-sm text-red-500">{form.formState.errors.availability.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium">Additional Message (Optional)</label>
        <Textarea
          {...form.register('message')}
          placeholder="Any additional information you'd like to share"
          className="w-full h-32"
        />
      </div>

      <Button
        type="submit"
        className="w-full"
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Submitting...' : 'Submit Volunteer Application'}
      </Button>
    </form>
  )
}
