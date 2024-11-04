'use server';

import { Resend } from 'resend';
import ReservationEmail from '../_components/emails/ReservationEmail';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendReservationEmail(formData) {
  try {
    const firstName = formData.get('first_name');
    const lastName = formData.get('last_name');
    const email = formData.get('email');
    const date = formData.get('date');
    const time = formData.get('time');
    const persons = formData.get('person');
    const message = formData.get('message');

    const data = await resend.emails.send({
      from: 'Reservations <reservation@thetaprooms.com>',
      to: [email],
      subject: `Reservation Request from ${firstName} ${lastName}`,
      react: ReservationEmail({
        firstName,
        lastName,
        email,
        date,
        time,
        persons,
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
