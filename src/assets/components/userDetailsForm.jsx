import React, { useEffect, useState } from "react";

const UserDetailsForm = ({ onUserSubmit }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [showForm, setShowForm] = useState(false);

    useEffect(() => {
        const storedUser = localStorage.getItem("userData");
        if (!storedUser) {
            setShowForm(true); // Show form if no user data found
        }
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        const userData = { name, email };
        localStorage.setItem("userData", JSON.stringify(userData));
        onUserSubmit(userData); // Pass data to parent
        setShowForm(false); // Hide form
    };

    if (!showForm) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <form
                onSubmit={handleSubmit}
                className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-sm space-y-5 font-primary text-primary"
            >
                <h2 className="text-2xl font-semibold">Welcome!</h2>
                <p className="text-sm text-gray-500">Please enter your details to continue.</p>

                {/* Name Input */}
                <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />

                {/* Email Input */}
                <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />

                <button
                    type="submit"
                    className={`w-full py-2 rounded-lg transition ${name && email
                            ? "bg-primary text-white hover:bg-opacity-90"
                            : "bg-gray-300 text-gray-500 cursor-not-allowed"
                        }`}
                    disabled={!name || !email}
                >
                    Continue
                </button>

            </form>
        </div>
    );
};

export default UserDetailsForm;
