import React, { useState } from "react"
import FadeInSection from "./FadeInSection"

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        mobile: "",
        email: "",
        message: "",
    })

    const [status, setStatus] = useState({ success: false, error: false, message: "" })

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setStatus({ success: false, error: false, message: "" })

        try {
            const response = await fetch("http://localhost:5000/api/sendMail", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            })

            const result = await response.json()
            if (response.ok) {
                setStatus({ success: true, error: false, message: result.success })
                setFormData({ name: "", mobile: "", email: "", message: "" }) 
            } else {
                setStatus({ success: false, error: true, message: result.error })
            }
        } catch (error) {
            setStatus({ success: false, error: true, message: "Failed to send email. Please try again later." })
        }
    }

    return (
        <FadeInSection id="contact">
            <div className="py-20 bg-gray-100">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center">Contact</h2>
                    <form className="mt-10 max-w-lg mx-auto" onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Name"
                            className="w-full p-3 mb-4 border rounded"
                            required
                        />
                        <input
                            type="tel"
                            name="mobile"
                            value={formData.mobile}
                            onChange={handleChange}
                            placeholder="Mobile"
                            className="w-full p-3 mb-4 border rounded"
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Email"
                            className="w-full p-3 mb-4 border rounded"
                            required
                        />
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Message"
                            className="w-full p-3 mb-4 border rounded"
                            required
                        ></textarea>
                        <button
                            type="submit"
                            className="w-full p-3 bg-blue-500 text-white font-bold rounded hover:bg-blue-600 transition"
                        >
                            Send
                        </button>
                    </form>
                    {status.message && (
                        <div
                            className={`mt-4 text-center p-3 rounded ${status.success
                                    ? "bg-green-100 text-green-800 border-green-500"
                                    : "bg-red-100 text-red-800 border-red-500"
                                } border`}
                        >
                            {status.message}
                        </div>
                    )}
                </div>
            </div>
        </FadeInSection>
    )
}

export default Contact
