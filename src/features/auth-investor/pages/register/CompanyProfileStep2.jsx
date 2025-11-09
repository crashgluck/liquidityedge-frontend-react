import { useState } from "react";
import Card from "../../../../shared/components/Card";
import AuthLayout from "../../layouts/AuthLayout";
import { useNavigate } from "react-router-dom";

export default function CompanyProfileStep2() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState({ name: "", email: "", general: "" });

  const prevStep = () => {
    navigate("/company-profile-step-1");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError({ name: "", email: "", general: "" });

    let newError = {};

    if (!name) newError.name = "Please enter your organisation name.";
    if (!email) newError.email = "Please enter your organisation email.";

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email && !emailRegex.test(email)) {
      newError.email = "Invalid email format.";
    }

    if (Object.keys(newError).length > 0) {
      setError(newError);
      return;
    }

    try {
      console.log(`Organisation: ${name}, Email: ${email}`);
      await new Promise((resolve) => setTimeout(resolve, 500));
      navigate("/company-profile-step-3");
    } catch (err) {
      setError({ general: "Error saving company information." });
    }
  };

  return (
    <AuthLayout>
      <Card className="backdrop-blur-md bg-blue-950/70 text-white p-8 mx-3 border border-white/30 rounded-xl shadow-lg w-96">
        <div className="flex items-center mb-6">
          <div className="flex space-x-2 mr-4">
            <span className="w-8 h-1 bg-white/30 rounded-full"></span>
            <span className="w-8 h-1 bg-white rounded-full"></span>
            <span className="w-8 h-1 bg-white/30 rounded-full"></span>
          </div>
          <p className="text-sm text-white/70">2/3</p>
        </div>

        <h2 className="text-2xl font-bold mb-8 text-start">
          Let's continue setting up your company profile
        </h2>

        <form onSubmit={handleSubmit}>
          {/* Organisation Name */}
          <div className="my-4">
            <label
              htmlFor="org-name"
              className="text-start block text-white/80 text-sm mb-1"
            >
              Name of your organisation <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="org-name"
              placeholder="Placeholder"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="bg-blue-900/50 border border-white/20 w-full p-3 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
            {error.name && (
              <p className="text-red-400 text-sm mt-1">{error.name}</p>
            )}
          </div>

          {/* Organisation Email */}
          <div className="my-4">
            <label
              htmlFor="org-email"
              className="text-start block text-white/80 text-sm mb-1"
            >
              Organisation Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="org-email"
              placeholder="Placeholder"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-blue-900/50 border border-white/20 w-full p-3 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
            {error.email && (
              <p className="text-red-400 text-sm mt-1">{error.email}</p>
            )}
          </div>

          {error.general && (
            <p className="text-red-400 text-sm mt-4">{error.general}</p>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between space-x-4 mt-8">
            <button
              type="button"
              onClick={prevStep}
              className="w-1/2 bg-blue-800/50 text-white p-3 rounded-md hover:bg-blue-800 transition-colors font-semibold"
            >
              Previous
            </button>
            <button
              type="submit"
              className="w-1/2 bg-blue-700 text-white p-3 rounded-md hover:bg-blue-800 transition-colors font-semibold"
            >
              Next
            </button>
          </div>
        </form>
      </Card>
    </AuthLayout>
  );
}
