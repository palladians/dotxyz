'use client'

import { Layout } from '@/components/Layout'
import { box, center, container, stack } from '../../../styled-system/patterns'
import { Input } from '@/components/Input'
import { Button } from '@/components/Button'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const schema = z.object({
  name: z.string().min(2).max(64),
  email: z.string().email().max(64),
  message: z.string().min(3).max(128)
})

const ContactPage = () => {
  const [messageSent, setMessageSent] = useState<boolean>(false)
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues: {
      name: '',
      email: '',
      message: ''
    },
    resolver: zodResolver(schema)
  })
  const onSubmit = async (data: Record<string, string>) => {
    await fetch('/contact/send', {
      method: 'POST',
      body: JSON.stringify({
        name: data.name,
        email: data.email,
        message: data.message
      })
    })
    setMessageSent(true)
  }
  return (
    <Layout>
      <div className={container({ marginTop: '8rem' })}>
        <div className={center()}>
          {messageSent ? (
            <div className={box()}>Message sent successfully</div>
          ) : (
            <form
              className={stack({ maxWidth: '32rem', width: '100%' })}
              onSubmit={handleSubmit(onSubmit)}
              noValidate
            >
              <h2 className={box({ fontSize: '2rem', fontWeight: 'semibold' })}>
                Contact us
              </h2>
              <label>Your name</label>
              <input className={Input} {...register('name')} />
              {errors.name?.message && (
                <div className={box({ fontSize: 12, color: 'red.600' })}>
                  {errors.name?.message}
                </div>
              )}
              <label>Email Address</label>
              <input className={Input} {...register('email')} />
              {errors.email?.message && (
                <div className={box({ fontSize: 12, color: 'red.600' })}>
                  {errors.email?.message}
                </div>
              )}
              <label>Message</label>
              <textarea className={Input} {...register('message')} />
              {errors.message?.message && (
                <div className={box({ fontSize: 12, color: 'red.600' })}>
                  {errors.message?.message}
                </div>
              )}
              <div>
                <button type="submit" className={Button({ scheme: 'outline' })}>
                  Send
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </Layout>
  )
}

export default ContactPage
