"use server";

import { z } from "zod";

export interface FormState {
  success: boolean;
  message: string;
  errors?: {
    name?: string[];
    email?: string[];
    project?: string[];
    message?: string[];
  };
}

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  project: z.string().min(1, "Please select a project type"),
  message: z.string().min(20, "Message must be at least 20 characters"),
});

export async function submitContactForm(_state: FormState, formData: FormData): Promise<FormState> {
  // Simulate a delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const name = formData.get("name");
  const email = formData.get("email");
  const project = formData.get("project");
  const message = formData.get("message");

  const validatedFields = contactSchema.safeParse({
    name,
    email,
    project,
    message,
  });

  if (!validatedFields.success) {
    return {
      success: false,
      message: "Please fix the errors in the form.",
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  // Remove the console log to prevent leaking user data

  return {
    success: true,
    message: "Thank you! We'll get back to you shortly.",
  };
}
