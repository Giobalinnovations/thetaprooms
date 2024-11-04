'use server';

import { Resend } from 'resend';
import ContactEmail from '../_components/emails/ContactEmail';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactEmail(formData) {
  try {
    const firstName = formData.get('first_name');
    const lastName = formData.get('last_name');
    const email = formData.get('email');
    const phone = formData.get('phone');
    const message = formData.get('message');

    const data = await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>',
      to: [email],
      subject: `Contact Form Submission from ${firstName} ${lastName}`,
      react: ContactEmail({
        firstName,
        lastName,
        email,
        phone,
        message,
      }),
    });

    if (data.error) {
      console.error('Resend API Error:', data.error);
      return { success: false, error: data.error.message };
    }

    console.log('Email sent successfully:', data);
    return { success: true, data };
  } catch (error) {
    console.error('Error sending email:', error);
    return {
      success: false,
      error: error.message || 'Failed to send email',
    };
  }
}
