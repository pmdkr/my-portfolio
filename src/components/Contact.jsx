import React from "react";
import { useSelector } from "react-redux";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import emailjs from 'emailjs-com';
import { useState } from 'react';

const Contact = () => {
    const theme = useSelector((state) => state.theme); // Access theme from Redux store
    const [form, setForm] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('Sending...');
        console.log('Sending email...', form);
        emailjs.send(
            'service_0nqxexr',      // e.g. 'service_xxx'
            'template_mnmdr9h',     // e.g. 'template_xxx'
            {
                from_name: form.name,
                from_email: form.email,
                message: form.message,
            },
            'LUp4QWaix4pAgM9sH'       // e.g. 'user_xxx'
        )
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                setStatus('Message sent successfully!');
                setForm({ name: '', email: '', message: '' });
            })
            .catch((err) => {
                console.error('FAILED...', err);
                setStatus('Failed to send message. Please try again.');
            });
    };

    return (
        <div
            className={`min-h-screen ${theme === "light"
                ? "bg-white"
                : "bg-gradient-to-r from-gray-800 via-gray-900 to-black"
                } pt-24`}
        >
            <div className="container mx-auto px-4">
                <motion.h1
                    className={`text-4xl font-bold text-center ${theme === "light" ? "text-white" : "text-gray-100"} mb-10`}
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                >
                    Let's Connect!
                </motion.h1>

                {/* Contact Form and Details Section */}
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Contact Form */}
                    <motion.div
                        className={`flex-1 max-w-2xl mx-auto rounded-lg shadow-2xl p-8 ${theme === "light" ? "bg-white" : "bg-gray-800"}`}
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div className="form-control">
                                <label className="label">
                                    <span
                                        className={`label-text text-lg font-semibold ${theme === "light" ? "text-gray-800" : "text-gray-100"
                                            }`}
                                    >
                                        Your Name
                                    </span>
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    value={form.name}
                                    onChange={handleChange}
                                    placeholder="Enter your name"
                                    className={`input input-bordered w-full focus:ring-2 ${theme === "light"
                                        ? "focus:ring-purple-500"
                                        : "focus:ring-gray-500"
                                        } focus:outline-none ${theme === "light" ? "bg-white" : "bg-gray-700"
                                        }`}
                                    required
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span
                                        className={`label-text text-lg font-semibold ${theme === "light" ? "text-gray-800" : "text-gray-100"
                                            }`}
                                    >
                                        Your Email
                                    </span>
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    placeholder="Enter your email"
                                    className={`input input-bordered w-full focus:ring-2 ${theme === "light"
                                        ? "focus:ring-purple-500"
                                        : "focus:ring-gray-500"
                                        } focus:outline-none ${theme === "light" ? "bg-white" : "bg-gray-700"
                                        }`}
                                    required
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span
                                        className={`label-text text-lg font-semibold ${theme === "light" ? "text-gray-800" : "text-gray-100"
                                            }`}
                                    >
                                        Your Message
                                    </span>
                                </label>
                                <textarea
                                    name="message"
                                    value={form.message}
                                    onChange={handleChange}
                                    className={`textarea textarea-bordered w-full h-32 focus:ring-2 ${theme === "light"
                                        ? "focus:ring-purple-500"
                                        : "focus:ring-gray-500"
                                        } focus:outline-none ${theme === "light" ? "bg-white" : "bg-gray-700"
                                        }`}
                                    placeholder="Write your message here..."
                                    required
                                ></textarea>
                            </div>
                            <div className="form-control">
                                <button
                                    type="submit"
                                    className={`btn w-full ${theme === "light"
                                        ? "bg-purple-600 hover:bg-purple-700"
                                        : "bg-gray-700 hover:bg-gray-600"
                                        } text-white font-bold py-3 rounded-lg transition duration-300 transform hover:scale-105`}
                                >
                                    Send Message
                                </button>
                            </div>
                            {status && <p className="text-center mt-4">{status}</p>}
                        </form>
                    </motion.div>

                    {/* Contact Details */}
                    <motion.div
                        className={`flex-1 max-w-2xl mx-auto rounded-lg shadow-2xl p-8 ${theme === "light" ? "bg-white" : "bg-gray-800"}`}
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        <motion.h2
                            className={`text-2xl font-bold ${theme === "light" ? "text-gray-800" : "text-gray-100"} mb-6`}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                        >
                            Contact Details
                        </motion.h2>
                        <div className="space-y-6">
                            {/* Email */}
                            <div className="flex items-center gap-4">
                                <FaEnvelope
                                    className={`w-6 h-6 ${theme === "light" ? "text-purple-600" : "text-purple-400"
                                        }`}
                                />
                                <p
                                    className={`text-lg ${theme === "light" ? "text-gray-800" : "text-gray-100"
                                        }`}
                                >
                                    pramodkrlohra@gmail.com
                                </p>
                            </div>

                            {/* Mobile Number */}
                            <div className="flex items-center gap-4">
                                <FaPhone
                                    className={`w-6 h-6 ${theme === "light" ? "text-purple-600" : "text-purple-400"
                                        }`}
                                />
                                <p
                                    className={`text-lg ${theme === "light" ? "text-gray-800" : "text-gray-100"
                                        }`}
                                >
                                    +91 8210279313
                                </p>
                            </div>

                            {/* Address */}
                            <div className="flex items-center gap-4">
                                <FaMapMarkerAlt
                                    className={`w-6 h-6 ${theme === "light" ? "text-purple-600" : "text-purple-400"
                                        }`}
                                />
                                <p
                                    className={`text-lg ${theme === "light" ? "text-gray-800" : "text-gray-100"
                                        }`}
                                >
                                    Ranchi,Jharkhand, India.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Social Media Links */}
                <div className="mt-12 text-center">
                    <h2
                        className={`text-2xl font-bold ${theme === "light" ? "text-white" : "text-gray-100"
                            } mb-6`}
                    >
                        Or find me on:
                    </h2>
                    <div className="flex justify-center space-x-6">
                        <a
                            href="https://github.com/yourusername"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`${theme === "light" ? "text-white" : "text-gray-100"
                                } hover:text-purple-300 transition duration-300`}
                        >
                            <FaGithub className="h-10 w-10" />
                        </a>
                        <a
                            href="https://linkedin.com/in/yourusername"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`${theme === "light" ? "text-white" : "text-gray-100"
                                } hover:text-purple-300 transition duration-300`}
                        >
                            <FaLinkedin className="h-10 w-10" />
                        </a>
                        <a
                            href="https://twitter.com/yourusername"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`${theme === "light" ? "text-white" : "text-gray-100"
                                } hover:text-purple-300 transition duration-300`}
                        >
                            <FaTwitter className="h-10 w-10" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;