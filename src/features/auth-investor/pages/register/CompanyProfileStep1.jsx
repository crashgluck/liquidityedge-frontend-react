import { useState } from "react";
import Card from "../../../../shared/components/Card";
import AuthLayout from "../../layouts/AuthLayout";
import { useNavigate, Link } from "react-router-dom";

export default function CreateCompanyProfile() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [error, setError] = useState({ name: "", surname: "" });

  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    setError({ name: "", surname: "" });

    let newError = {};
    if (!name) newError.name = "Please enter your name.";
    if (!surname) newError.surname = "Please enter your surname.";

    if (Object.keys(newError).length > 0) {
      setError(newError);
      return;
    }

    try {
      console.log(`Name: ${name}, Surname: ${surname}`);
      await new Promise((resolve) => setTimeout(resolve, 500));
      navigate("/company-profile-step-2");
    } catch (err) {
      setError({ general: err.detail || "Error saving profile." });
    }
  }

  return (
    <AuthLayout>
      <Card >
        <div className="flex items-center mb-6">
          <div className="flex space-x-2 mr-4">
            <span className="w-8 h-1 bg-white rounded-full"></span>
            <span className="w-8 h-1 bg-white/30 rounded-full"></span>
            <span className="w-8 h-1 bg-white/30 rounded-full"></span>
          </div>
          <p className="text-sm text-white/70">1/3</p>
        </div>

        <h2 className="text-2xl font-bold mb-8 text-start">
          Let's get started by creating your company profile
        </h2>

        <form onSubmit={handleSubmit}>
          <div className="my-4">
            <label
              htmlFor="name"
              className="text-start block text-white/80 text-sm mb-1"
            >
              Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Placeholder"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="bg-blue-900/50 border border-white/20 w-full p-3 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500"
              required
            />
            {error.name && (
              <p className="text-red-400 text-sm mt-1">{error.name}</p>
            )}
          </div>

          <div className="my-4">
            <label
              htmlFor="surname"
              className="text-start block text-white/80 text-sm mb-1"
            >
              Surname <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Placeholder"
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
              className="bg-blue-900/50 border border-white/20 w-full p-3 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500"
              required
            />
            {error.surname && (
              <p className="text-red-400 text-sm mt-1">{error.surname}</p>
            )}
          </div>

          {error.general && (
            <p className="text-red-400 text-sm mt-4">{error.general}</p>
          )}

          <button
            type="submit"
            className="w-full bg-blue-700 text-white p-3 mt-6 rounded-md hover:bg-blue-800 transition-colors font-semibold"
          >
            Next
          </button>

          <div className="text-center p-2 mt-6">
            <p className="text-white/70">
              Already have an account?{" "}
              <Link
                to="/"
                className="font-semibold text-blue-400 hover:text-blue-300 transition-colors"
              >
                Sign in
              </Link>
            </p>
          </div>
        </form>
      </Card>
    </AuthLayout>
  );
}
