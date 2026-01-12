import React, { useState, FormEvent } from "react"

import H, { hLevel } from "../shared/H"

const ContactSection = (): React.ReactElement => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    // Formspree endpoint - replace with your Formspree form ID
    // Get your form ID from https://formspree.io/forms
    // Example: https://formspree.io/f/YOUR_FORM_ID
    const formspreeEndpoint = 
      process.env.GATSBY_FORMSPREE_ENDPOINT || 
      "https://formspree.io/f/mlggegjz"

    if (!formspreeEndpoint) {
      console.error("Formspree endpoint not configured. Please set GATSBY_FORMSPREE_ENDPOINT in your .env file")
      setSubmitStatus("error")
      setIsSubmitting(false)
      return
    }

    try {
      // Formspree expects form-urlencoded data, not JSON
      const formDataToSend = new URLSearchParams()
      formDataToSend.append("name", formData.name)
      formDataToSend.append("email", formData.email)
      formDataToSend.append("message", formData.message)

      const response = await fetch(formspreeEndpoint, {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formDataToSend,
      })

      const result = await response.json()

      if (response.ok) {
        setSubmitStatus("success")
        setFormData({ name: "", email: "", message: "" })
      } else {
        // Log the error for debugging
        console.error("Formspree error:", result)
        setSubmitStatus("error")
      }
    } catch (error) {
      console.error("Form submission error:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <div className="mt-16">
      <H
        level={hLevel.h2}
        className="font-display font-bold mb-2 text-gray-900 dark:text-gray-100"
      >
        Contact Me
      </H>
      <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">
        Send me a message
      </div>
      <div className="text-sm text-gray-500 dark:text-gray-400 mb-6">
        Fill out the form below and I&apos;ll respond back to you within 24 hours...
      </div>
      
      <form onSubmit={handleSubmit} className="max-w-2xl">
        <div className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Your name"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="your.email@example.com"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-y"
              placeholder="Your message here..."
            />
          </div>

          {submitStatus === "success" && (
            <div className="p-3 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-md text-sm">
              Message sent successfully! I&apos;ll get back to you soon.
            </div>
          )}

          {submitStatus === "error" && (
            <div className="p-3 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 rounded-md text-sm">
              Something went wrong. Please try again or reach out via social media.
            </div>
          )}

          <div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-2 transition duration-200 ease-in-out flex flex-row items-center uppercase font-medium text-xs tracking-wider hover:bg-white dark:hover:bg-gray-700 hover:text-black dark:hover:text-white py-2 px-3 rounded shadow-sm border border-solid border-white dark:border-gray-600 hover:border-gray-400 dark:hover:border-gray-500 bg-black dark:bg-gray-800 text-white dark:text-gray-100 disabled:cursor-not-allowed disabled:bg-white dark:disabled:bg-gray-800 disabled:text-gray-500 dark:disabled:text-gray-400 disabled:border-gray-300 dark:disabled:border-gray-600"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default ContactSection

