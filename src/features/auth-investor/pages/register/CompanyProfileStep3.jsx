import { useState } from "react";
import Card from "../../../../shared/components/Card";
import AuthLayout from "../../layouts/AuthLayout";
import { useNavigate } from "react-router-dom";

export default function CompanyProfileStep3() {
  const navigate = useNavigate();

  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [error, setError] = useState({
    mobile: "",
    password: "",
    repeatPassword: "",
    terms: "",
    general: "",
  });

  const prevStep = () => {
    navigate("/company-profile-step-2");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError({
      mobile: "",
      password: "",
      repeatPassword: "",
      terms: "",
      general: "",
    });

    let newError = {};

    if (!mobile) newError.mobile = "Please enter your mobile number.";
    else if (!/^\d{8,}$/.test(mobile))
      newError.mobile = "Mobile number must contain at least 8 digits.";

    if (!password) newError.password = "Please enter a password.";
    else if (password.length < 6)
      newError.password = "Password must be at least 6 characters long.";

    if (!repeatPassword)
      newError.repeatPassword = "Please repeat your password.";
    else if (password && password !== repeatPassword)
      newError.repeatPassword = "Passwords do not match.";

    if (!termsAccepted)
      newError.terms = "You must accept the Terms and Conditions.";

    if (Object.keys(newError).length > 0) {
      setError(newError);
      return;
    }

    try {
      console.log("Mobile:", mobile, "Password:", password);
      await new Promise((resolve) => setTimeout(resolve, 500));
      navigate("/verify-company-email");
    } catch (err) {
      setError({ general: "Error saving data." });
    }
  };

  return (
    <AuthLayout>
      <Card className="backdrop-blur-md bg-blue-950/70 text-white p-8 mx-3 border border-white/30 rounded-xl shadow-lg w-96">
        <div className="flex items-center mb-6">
          <div className="flex space-x-2 mr-4">
            <span className="w-8 h-1 bg-white/30 rounded-full"></span>
            <span className="w-8 h-1 bg-white/30 rounded-full"></span>
            <span className="w-8 h-1 bg-white rounded-full"></span>
          </div>
          <p className="text-sm text-white/70">3/3</p>
        </div>

        <h2 className="text-2xl font-bold mb-8 text-start">
          Final Step: Account Security
        </h2>

        <form onSubmit={handleSubmit}>
          {/* Mobile Number */}
          <div className="my-4">
            <label className="text-start block text-white/80 text-sm mb-1">
              Mobile Number <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              placeholder="Enter mobile number"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              className="bg-blue-900/50 border border-white/20 w-full p-3 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
            {error.mobile && (
              <p className="text-red-400 text-sm mt-1">{error.mobile}</p>
            )}
          </div>

          {/* Password */}
          <div className="my-4">
            <label className="text-start block text-white/80 text-sm mb-1">
              Password <span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-blue-900/50 border border-white/20 w-full p-3 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
            {error.password && (
              <p className="text-red-400 text-sm mt-1">{error.password}</p>
            )}
          </div>

          {/* Repeat Password */}
          <div className="my-4">
            <label className="text-start block text-white/80 text-sm mb-1">
              Repeat Password <span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              placeholder="Repeat password"
              value={repeatPassword}
              onChange={(e) => setRepeatPassword(e.target.value)}
              className="bg-blue-900/50 border border-white/20 w-full p-3 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
            {error.repeatPassword && (
              <p className="text-red-400 text-sm mt-1">
                {error.repeatPassword}
              </p>
            )}
          </div>

          {/* Terms and Conditions */}
          <div className="my-4 flex items-start space-x-2">
            <input
              type="checkbox"
              checked={termsAccepted}
              onChange={(e) => setTermsAccepted(e.target.checked)}
              className="w-4 h-4 accent-blue-500 mt-1"
            />
            <label className="text-white/80 text-sm">
              Please read and accept the{" "}
              <span className="text-blue-400 underline cursor-pointer">
                Terms and Conditions
              </span>{" "}
              before continuing.
            </label>
          </div>
          {error.terms && (
            <p className="text-red-400 text-sm mt-1">{error.terms}</p>
          )}

          {error.general && (
            <p className="text-red-400 text-sm mt-3">{error.general}</p>
          )}

          <div className="flex justify-between space-x-4 mt-6">
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
              Finish
            </button>
          </div>
        </form>
      </Card>
    </AuthLayout>
  );
}
