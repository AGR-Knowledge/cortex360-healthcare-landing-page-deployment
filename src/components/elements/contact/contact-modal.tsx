"use client";

import { useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";
import { useContact } from "@/context/contact.context";

const ContactModal = () => {
    const { isContactModalOpen, closeContactModal } = useContact();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        message: ''
    });
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    useEffect(() => {
        if (isContactModalOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }

        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isContactModalOpen]);

    const validateForm = () => {
        const newErrors: Record<string, string> = {};

        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email address';
        }

        if (!formData.company.trim()) {
            newErrors.company = 'Company name is required';
        }

        if (!formData.message.trim()) {
            newErrors.message = 'Message is required';
        } else if (formData.message.trim().length < 10) {
            newErrors.message = 'Message must be at least 10 characters long';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));

        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        setIsSubmitting(true);
        setSubmitStatus('idle');

        try {
            const response = await fetch('https://getform.io/f/bkkpkdxb', {
                method: 'POST',
                body: new FormData(e.target as HTMLFormElement),
            });

            if (response.ok) {
                setSubmitStatus('success');
                setFormData({
                    name: '',
                    email: '',
                    company: '',
                    message: ''
                });
                setTimeout(() => {
                    closeContactModal();
                    setSubmitStatus('idle');
                }, 2000);
            } else {
                setSubmitStatus('error');
            }
        } catch (error) {
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    if (!isContactModalOpen) return null;

    return (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-2 sm:p-4 md:p-6">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                onClick={closeContactModal}
            />

            {/* Modal */}
            <div className="relative bg-white rounded-xl sm:rounded-2xl shadow-2xl w-full max-w-[95vw] sm:max-w-[85vw] md:max-w-2xl lg:max-w-3xl max-h-[95vh] sm:max-h-[90vh] overflow-y-auto">
                {/* Header */}
                <div className="flex items-center justify-between p-4 sm:p-6 border-b border-gray-200">
                    <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">Contact Us</h2>
                    <button
                        onClick={closeContactModal}
                        className="p-1.5 sm:p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
                    >
                        <FaTimes className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
                    </button>
                </div>

                {/* Content */}
                <div className="p-4 sm:p-6">
                    <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8 text-center leading-relaxed">
                        Get in touch with our team to learn more about Cortex360 AI solutions for healthcare & pharma.
                    </p>

                    {/* Contact Form */}
                    <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4" action="https://getform.io/f/bkkpkdxb" method="POST">
                        <div>
                            <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
                                Name *
                            </label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 ${errors.name ? 'border-red-500' : 'border-gray-300'
                                    }`}
                                placeholder="Enter your full name"
                            />
                            {errors.name && (
                                <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.name}</p>
                            )}
                        </div>

                        <div>
                            <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
                                Work Email *
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 ${errors.email ? 'border-red-500' : 'border-gray-300'
                                    }`}
                                placeholder="Enter your email"
                            />
                            {errors.email && (
                                <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.email}</p>
                            )}
                        </div>

                        <div>
                            <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
                                Company *
                            </label>
                            <input
                                type="text"
                                name="company"
                                value={formData.company}
                                onChange={handleInputChange}
                                className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 ${errors.company ? 'border-red-500' : 'border-gray-300'
                                    }`}
                                placeholder="Enter your company name"
                            />
                            {errors.company && (
                                <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.company}</p>
                            )}
                        </div>

                        <div>
                            <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
                                Message *
                            </label>
                            <textarea
                                name="message"
                                rows={3}
                                value={formData.message}
                                onChange={handleInputChange}
                                className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 resize-none ${errors.message ? 'border-red-500' : 'border-gray-300'
                                    }`}
                                placeholder="Tell us about your needs..."
                            />
                            {errors.message && (
                                <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.message}</p>
                            )}
                        </div>

                        {/* Submit Status Messages */}
                        {submitStatus === 'success' && (
                            <div className="p-3 sm:p-4 bg-green-50 border border-green-200 rounded-lg">
                                <p className="text-green-800 text-center text-sm sm:text-base">Thank you! Your message has been sent successfully.</p>
                            </div>
                        )}

                        {submitStatus === 'error' && (
                            <div className="p-3 sm:p-4 bg-red-50 border border-red-200 rounded-lg">
                                <p className="text-red-800 text-center text-sm sm:text-base">Sorry, there was an error sending your message. Please try again.</p>
                            </div>
                        )}

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className={`w-full py-3 sm:py-4 px-4 sm:px-6 rounded-lg font-semibold text-base sm:text-lg transition-colors duration-200 ${isSubmitting
                                ? 'bg-gray-400 cursor-not-allowed'
                                : 'bg-orange-500 hover:bg-orange-600'
                                } text-white`}
                        >
                            {isSubmitting ? 'Sending...' : 'Send Message'}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactModal;
