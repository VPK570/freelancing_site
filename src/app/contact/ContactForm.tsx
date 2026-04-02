"use client";

import { useActionState } from "react";
import { submitContactForm } from "./actions";
import Button from "@/components/Button";

const initialState = {
  success: false,
  message: "",
};

export default function ContactForm() {
  const [state, formAction, isPending] = useActionState(submitContactForm, initialState);

  if (state.success) {
    return (
      <div className="bg-surface-container border border-primary/20 p-8 text-center animate-in fade-in slide-in-from-bottom-4 duration-700">
        <h3 className="font-display text-2xl uppercase tracking-tighter mb-4 text-primary">
          Message Received
        </h3>
        <p className="text-on-surface/70 leading-relaxed">
          {state.message}
        </p>
      </div>
    );
  }

  return (
    <form action={formAction} className="space-y-8">
      <div>
        <label
          htmlFor="name"
          className="block text-xs uppercase tracking-widest text-on-surface/50 mb-3"
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full bg-transparent border-b border-outline/20 py-3 text-lg focus:border-primary focus:outline-none transition-colors duration-300"
          placeholder="Your name"
        />
      </div>
      <div>
        <label
          htmlFor="email"
          className="block text-xs uppercase tracking-widest text-on-surface/50 mb-3"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full bg-transparent border-b border-outline/20 py-3 text-lg focus:border-primary focus:outline-none transition-colors duration-300"
          placeholder="your@email.com"
        />
      </div>
      <div>
        <label
          htmlFor="project"
          className="block text-xs uppercase tracking-widest text-on-surface/50 mb-3"
        >
          Project Type
        </label>
        <select
          id="project"
          name="project"
          className="w-full bg-transparent border-b border-outline/20 py-3 text-lg focus:border-primary focus:outline-none transition-colors duration-300 appearance-none pointer-events-auto"
        >
          <option value="" className="bg-surface">Select a service</option>
          <option value="web-design" className="bg-surface">Web Design</option>
          <option value="development" className="bg-surface">Development</option>
          <option value="branding" className="bg-surface">Branding</option>
          <option value="strategy" className="bg-surface">Strategy</option>
        </select>
      </div>
      <div>
        <label
          htmlFor="message"
          className="block text-xs uppercase tracking-widest text-on-surface/50 mb-3"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          className="w-full bg-transparent border-b border-outline/20 py-3 text-lg focus:border-primary focus:outline-none transition-colors duration-300 resize-none"
          placeholder="Tell us about your project..."
        />
      </div>
      <div>
        <Button disabled={isPending}>
          {isPending ? "Sending..." : "Send Message"}
        </Button>
      </div>
    </form>
  );
}
