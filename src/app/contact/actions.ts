"use server";

interface FormState {
  success: boolean;
  message: string;
}

export async function submitContactForm(_state: FormState, formData: FormData) {
  // Simulate a delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const name = formData.get("name");
  const email = formData.get("email");
  const project = formData.get("project");
  const message = formData.get("message");

  // Log the submission (in a real app, you'd send an email or save to DB)
  console.log("Contact form submission:", { name, email, project, message });

  return {
    success: true,
    message: "Thank you! We'll get back to you shortly.",
  };
}
