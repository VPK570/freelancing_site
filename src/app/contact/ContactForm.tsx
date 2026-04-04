"use client";

import { useActionState, useState } from "react";
import { submitContactForm } from "./actions";
import Button from "@/components/Button";
import { Check } from "lucide-react";

const initialState = {
  success: false,
  message: "",
};

const projectTypes = [
  { value: "web-design", label: "Web Design" },
  { value: "development", label: "Development" },
  { value: "branding", label: "Branding" },
  { value: "strategy", label: "Strategy" },
];

export default function ContactForm() {
  const [state, formAction, isPending] = useActionState(submitContactForm, initialState);
  const [selectedProject, setSelectedProject] = useState("");

  if (state.success) {
    return (
      <div className="bg-surface-container border border-primary/20 p-8 text-center">
        <div className="w-12 h-12 bg-primary/10 flex items-center justify-center mx-auto mb-4">
          <Check className="w-6 h-6 text-primary" strokeWidth={2} />
        </div>
        <h3 className="font-display text-2xl font-semibold tracking-tight mb-3 text-primary">
          Message Received
        </h3>
        <p className="text-on-surface/60 leading-relaxed">{state.message}</p>
      </div>
    );
  }

  return (
    <form action={formAction} className="space-y-8">
      <div>
        <label
          htmlFor="name"
          className="block text-xs uppercase tracking-widest text-on-surface/50 mb-3 font-medium"
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full bg-transparent border-b border-outline/20 py-3 text-base focus:border-primary focus:outline-none transition-colors duration-300 placeholder:text-on-surface/25"
          placeholder="Your name"
        />
      </div>
      <div>
        <label
          htmlFor="email"
          className="block text-xs uppercase tracking-widest text-on-surface/50 mb-3 font-medium"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full bg-transparent border-b border-outline/20 py-3 text-base focus:border-primary focus:outline-none transition-colors duration-300 placeholder:text-on-surface/25"
          placeholder="your@email.com"
        />
      </div>
      <div>
        <label className="block text-xs uppercase tracking-widest text-on-surface/50 mb-4 font-medium">
          Project Type
        </label>
        <div className="flex flex-wrap gap-2">
          {projectTypes.map((type) => {
            const isSelected = selectedProject === type.value;
            return (
              <button
                key={type.value}
                type="button"
                onClick={() => setSelectedProject(type.value)}
                className={`px-4 py-2.5 text-sm border transition-all duration-300 cursor-pointer ${
                  isSelected
                    ? "bg-primary text-white border-primary"
                    : "bg-transparent text-on-surface/60 border-outline/20 hover:border-primary/40 hover:text-primary"
                }`}
              >
                {type.label}
              </button>
            );
          })}
        </div>
        <input type="hidden" name="project" value={selectedProject} />
      </div>
      <div>
        <label
          htmlFor="message"
          className="block text-xs uppercase tracking-widest text-on-surface/50 mb-3 font-medium"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          className="w-full bg-transparent border-b border-outline/20 py-3 text-base focus:border-primary focus:outline-none transition-colors duration-300 resize-none placeholder:text-on-surface/25"
          placeholder="Tell us about your project..."
        />
      </div>
      <div>
        <Button type="submit" disabled={isPending}>
          {isPending ? "Sending..." : "Send Message"}
        </Button>
      </div>
    </form>
  );
}
