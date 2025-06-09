import { z } from "zod";
import { MailOptions } from "./mailer";

// Contact Form Schema
export const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

// Multi-step Form Schema
export const multiStepFormSchema = z.object({
  service: z.string().min(1, "Service is required"),
  subservice: z.string().min(1, "Subservice is required"),
  projectDescription: z.string().min(10, "Project description must be at least 10 characters"),
  currentIssues: z.string().optional(),
  file: z.any().optional(), // File handling will be done separately
  name: z.string().min(1, "Name is required"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  email: z.string().email("Invalid email address"),
  company: z.string().optional(),
});

// Vacancy Form Schema (adjust based on your actual vacancy form fields)
export const vacancyFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  position: z.string().min(1, "Position is required"),
  experience: z.string().min(1, "Experience is required"),
  resume: z.any().optional(), // File handling will be done separately
});

// Email Mapping Functions
export const mapContactMail = (data: z.infer<typeof contactSchema>): MailOptions => ({
  to: process.env.CONTACT_FORM_RECIPIENT || "support@myapp.com",
  subject: `Contact Form Submission: ${data.name}`,
  text: `Name: ${data.name}\nEmail: ${data.email}\nMessage: ${data.message}`,
  html: `
    <h2>New Contact Form Submission</h2>
    <p><strong>Name:</strong> ${data.name}</p>
    <p><strong>Email:</strong> ${data.email}</p>
    <p><strong>Message:</strong></p>
    <p>${data.message}</p>
  `,
});

export const mapMultiStepFormMail = (data: z.infer<typeof multiStepFormSchema>): MailOptions => ({
  to: process.env.PROJECT_INQUIRY_RECIPIENT || "projects@myapp.com",
  subject: `New Project Inquiry: ${data.service} - ${data.subservice}`,
  text: `
    Service: ${data.service}
    Subservice: ${data.subservice}
    Project Description: ${data.projectDescription}
    Current Issues: ${data.currentIssues || 'N/A'}
    Name: ${data.name}
    Phone: ${data.phone}
    Email: ${data.email}
    Company: ${data.company || 'N/A'}
  `,
  html: `
    <h2>New Project Inquiry</h2>
    <p><strong>Service:</strong> ${data.service}</p>
    <p><strong>Subservice:</strong> ${data.subservice}</p>
    <p><strong>Project Description:</strong></p>
    <p>${data.projectDescription}</p>
    <p><strong>Current Issues:</strong> ${data.currentIssues || 'N/A'}</p>
    <hr/>
    <h3>Contact Information</h3>
    <p><strong>Name:</strong> ${data.name}</p>
    <p><strong>Phone:</strong> ${data.phone}</p>
    <p><strong>Email:</strong> ${data.email}</p>
    <p><strong>Company:</strong> ${data.company || 'N/A'}</p>
  `,
});

export const mapVacancyFormMail = (data: z.infer<typeof vacancyFormSchema>): MailOptions => ({
  to: process.env.CAREERS_RECIPIENT || "careers@myapp.com",
  subject: `Job Application: ${data.position} - ${data.name}`,
  text: `
    Position: ${data.position}
    Name: ${data.name}
    Email: ${data.email}
    Phone: ${data.phone}
    Experience: ${data.experience}
  `,
  html: `
    <h2>New Job Application</h2>
    <p><strong>Position:</strong> ${data.position}</p>
    <p><strong>Name:</strong> ${data.name}</p>
    <p><strong>Email:</strong> ${data.email}</p>
    <p><strong>Phone:</strong> ${data.phone}</p>
    <p><strong>Experience:</strong> ${data.experience}</p>
  `,
}); 