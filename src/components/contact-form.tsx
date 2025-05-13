/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react'
import { ArrowRight } from 'lucide-react'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [feedbackMessage, setFeedbackMessage] = useState('')
  const [isSuccess, setIsSuccess] = useState<boolean | null>(null)

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSubmitting(true)
    setFeedbackMessage('')
    setIsSuccess(null)

    // Message validation
    if (formData.message.length < 10 || formData.message.length > 1000) {
      setFeedbackMessage('Message must be between 10 and 1000 characters.')
      setIsSuccess(false)
      setIsSubmitting(false)
      return
    }

    const payload = {
      ...formData,
      site: 'https://www.haive.tech/',
    }

    try {
      const response = await fetch('https://v3backend.nidum.ai/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      })

      if (!response.ok) {
        const errorResponse = await response.json()
        const message = errorResponse.errors?.[0]?.message || `Failed to send message. Status: ${response.status}`
        throw new Error(message)
      }

      setFeedbackMessage('Message sent successfully!')
      setIsSuccess(true)
      setFormData({ name: '', email: '', subject: '', message: '' })
    } catch (error: any) {
      console.error('Error sending email:', error)
      setFeedbackMessage(error.message || 'Something went wrong. Please try again later.')
      setIsSuccess(false)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className='w-full flex justify-center'>
      <div className='w-full max-w-2xl'>
        <h2 className='text-3xl text-haive-orange font-bold text-center mb-10'>Contact Us</h2>

        <form onSubmit={handleSubmit} className='grid grid-cols-1 md:grid-cols-2 gap-6 text-white'>
          <div className='flex flex-col'>
            <label htmlFor='name' className='mb-2 text-sm text-gray-300'>
              Name
            </label>
            <input
              id='name'
              name='name'
              type='text'
              required
              value={formData.name}
              onChange={handleInputChange}
              placeholder='Your name'
              className='bg-transparent border border-white/10 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-haive-range-light'
            />
          </div>

          <div className='flex flex-col'>
            <label htmlFor='email' className='mb-2 text-sm text-gray-300'>
              Email
            </label>
            <input
              id='email'
              name='email'
              type='email'
              required
              value={formData.email}
              onChange={handleInputChange}
              placeholder='your@email.com'
              className='bg-transparent border border-white/10 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-haive-range-light'
            />
          </div>

          <div className='md:col-span-2 flex flex-col'>
            <label htmlFor='subject' className='mb-2 text-sm text-gray-300'>
              Subject
            </label>
            <input
              id='subject'
              name='subject'
              type='text'
              required
              value={formData.subject}
              onChange={handleInputChange}
              placeholder="What's this about?"
              className='bg-transparent border border-white/10 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-haive-range-light'
            />
          </div>

          <div className='md:col-span-2 flex flex-col'>
            <label htmlFor='message' className='mb-2 text-sm text-gray-300'>
              Message
            </label>
            <textarea
              id='message'
              name='message'
              rows={5}
              required
              maxLength={1000}
              value={formData.message}
              onChange={handleInputChange}
              placeholder='Your message...'
              className='bg-transparent border border-white/10 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-haive-range-light'
            />
          </div>

          <div className='md:col-span-2 flex justify-center mt-4'>
            <button
              type='submit'
              disabled={isSubmitting}
              className='bg-haive-orange text-white font-medium px-6 py-3 rounded-md flex items-center gap-2 hover:bg-haive-orange-light transition-all duration-200'>
              {isSubmitting ? 'Sending...' : 'Send Message'}
              {!isSubmitting && <ArrowRight size={18} />}
            </button>
          </div>

          {feedbackMessage && (
            <div className={`md:col-span-2 text-center text-sm mt-4 ${isSuccess ? 'text-green-400' : 'text-red-500'}`}>
              {feedbackMessage}
            </div>
          )}
        </form>
      </div>
    </div>
  )
}

export default ContactForm
