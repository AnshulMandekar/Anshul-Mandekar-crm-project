import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const SignupForm = () => {
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        phone: '',
        companyType: '',
        gst: '',
        PanCard: '',
        street: '',
        city: '',
        state: '',
        pincode: '',
        password: '',
        confirmPassword: '',
        terms: false,
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const validateEmail = (email) => {
        return /\S+@\S+\.\S+/.test(email);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateEmail(formData.email)) {
            alert('Please enter a valid email address!');
            return;
        }

        if (formData.phone.length !== 10) {
            alert('Phone number must be 10 digits!');
            return;
        }

        if (formData.password !== formData.confirmPassword) {
            alert('Passwords do not match!');
            return;
        }

        if (!formData.terms) {
            alert('Please accept the terms and conditions');
            return;
        }

        try {
            const response = await fetch('http://localhost:8000/api/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();
            if (response.ok) {
                alert('Signup successful!');
                navigate('/login'); // Redirect to login page
            } else {
                alert(data.error || 'Error signing up');
            }
        } catch (error) {
            alert('Error signing up');
        }
    };

    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-gray-100 to-gray-300 p-4">
            <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-8 lg:p-12 border border-gray-200">
                <div className="text-center mb-6">
                    <img className="h-14 mx-auto" src="https://ai-public.creatie.ai/gen_page/logo_placeholder.png" alt="Logo" />
                    <h2 className="text-3xl font-bold text-gray-900 mt-4">Create Your Account</h2>
                    <p className="text-gray-600 mt-1">Join us to access exclusive features and benefits</p>
                </div>

                <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={handleSubmit}>
                    {Object.keys(formData).map((field) => (
                        field !== 'terms' && field !== 'confirmPassword' && (
                            <div key={field}>
                                <label className="block text-sm font-medium text-gray-700" htmlFor={field}>
                                    {field.replace(/([A-Z])/g, ' $1').replace('1', '').replace('2', '')}
                                </label>
                                <input
                                    id={field}
                                    name={field}
                                    type={field.includes('password') ? 'password' : field.includes('email') ? 'email' : field.includes('phone') ? 'tel' : 'text'}
                                    value={formData[field]}
                                    onChange={handleChange}
                                    className="block w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                    required
                                    maxLength={field === 'phone' ? '10' : undefined}
                                />
                            </div>
                        )
                    ))}

                    {/* Confirm Password Field */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700" htmlFor="confirmPassword">
                            Confirm Password
                        </label>
                        <input
                            id="confirmPassword"
                            name="confirmPassword"
                            type="password"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            className="block w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                            required
                        />
                    </div>

                    {/* Terms and Conditions */}
                    <div className="md:col-span-2 flex items-center">
                        <input
                            id="terms"
                            name="terms"
                            type="checkbox"
                            checked={formData.terms}
                            onChange={handleChange}
                            className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                        />
                        <label htmlFor="terms" className="ml-2 text-sm text-gray-900">
                            I agree to the{' '}
                            <a href="#" className="text-blue-500 hover:underline">
                                Terms and Conditions
                            </a>
                        </label>
                    </div>

                    {/* Submit Button */}
                    <div className="md:col-span-2">
                        <button
                            type="submit"
                            className="w-full py-3 text-white bg-blue-500 hover:bg-blue-600 rounded-md shadow-md font-medium transition duration-200"
                        >
                            Create Account
                        </button>
                    </div>
                </form>

                {/* Already have an account */}
                <div className="mt-6 text-center">
                    <p className="text-gray-600">Already have an account?</p>
                    <Link
                        to="/"
                        className="inline-block mt-2 px-6 py-2 text-blue-500 border border-blue-500 rounded-md hover:bg-blue-500 hover:text-white transition duration-200"
                    >
                        Sign in
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SignupForm;
