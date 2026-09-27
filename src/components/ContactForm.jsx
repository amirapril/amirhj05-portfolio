"use client";

import { useState } from "react";
import { FiSend } from "react-icons/fi";
import { profile } from "@/data/profile";

const initialForm = { name: "", email: "", message: "" };

export default function ContactForm() {
  const [form, setForm] = useState(initialForm);
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name}`);
    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name}\n${form.email}`
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-field">
        <label htmlFor="name">Name</label>
        <input
          id="name"
          name="name"
          type="text"
          className="form-control"
          placeholder="Your name"
          required
          value={form.name}
          onChange={handleChange}
        />
      </div>

      <div className="form-field">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          className="form-control"
          placeholder="you@example.com"
          required
          value={form.email}
          onChange={handleChange}
        />
      </div>

      <div className="form-field">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          className="form-control"
          placeholder="Tell me about your project…"
          required
          value={form.message}
          onChange={handleChange}
        />
      </div>

      <button type="submit" className="btn-accent" style={{ width: "100%" }}>
        Send Message <FiSend aria-hidden="true" />
      </button>

      {sent && (
        <p className="form-status" role="status">
          Opening your email app — thanks for reaching out!
        </p>
      )}
      <p className="form-hint">
        This form opens a message in your email app. To get form messages
        delivered somewhere else, easy to swap with Formspree later.
      </p>
    </form>
  );
}