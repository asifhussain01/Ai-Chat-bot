// File: pages/api/send-email.ts

import express from "express";
import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

// Define a type for the expected response data for better type safety.
type ResponseData = {
  message?: string;
  error?: string;
};

export const sendEmail = async function sendEmail(
  req: express.Request,
  res: express.Response
) {
  // We only want to handle POST requests; reject all other methods.
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  const { name, email, company, subject, message, priority } = req.body;

  // Basic validation to ensure required fields are present.
  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: 'Please fill out all required fields.' });
  }

  // Create a transporter object using SMTP transport.
  // You need to use your own email service provider's details here.
  // For Gmail, you must generate an "App Password" instead of using your regular password.
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST, // e.g., 'smtp.gmail.com'
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_USER, // Your email address from .env.local
      pass: process.env.EMAIL_PASS, // Your email password or App Password from .env.local
    },
  });

  // Define the email content.
    const mailOptions = {
    from: `"Your App Name" <${process.env.EMAIL_USER}>`, // Sender address
    to: process.env.EMAIL_USER, // The email address that will receive the form submissions
    replyTo: email, // Set the reply-to field to the user's email for easy responses
    subject: `New Contact Form Submission: ${subject}`,
    html: `
      <h1>New Contact Form Submission</h1>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Company:</strong> ${company || 'N/A'}</p>
      <p><strong>Priority:</strong> ${priority || 'N/A'}</p>
      <hr>
      <h2>Message:</h2>
      <p>${message.replace(/\n/g, '<br>')}</p>
    `,
  };

  try {
    // Attempt to send the email
    await transporter.sendMail(mailOptions);
    return res.status(200).json({ message: "Thank you for your message! We'll get back to you within 24 hours." });
  } catch (error) {
    // Log the error and return a generic error message to the client.
    console.error('Error sending email:', error);
    return res.status(500).json({ error: 'Sorry, something went wrong. Please try again later.' });
  }
}
