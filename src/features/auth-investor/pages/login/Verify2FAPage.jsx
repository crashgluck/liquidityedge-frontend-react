import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import AuthLayout from "../../layouts/AuthLayout";
import Card from "../../../../shared/components/Card";

export default function Verify2FAPage() {
  const navigate = useNavigate();
  const [code, setCode] = useState(["", "", "", "", "", ""]);
  const [error, setError] = useState(null);
  const inputsRef = useRef([]);

  const handleChange = (e, index) => {
    const val = e.target.value;
    if (/^\d?$/.test(val)) { // Allow only one digit
      const newCode = [...code];
      newCode[index] = val;
      setCode(newCode);

      // Move focus to the next input
      if (val && index < 5) {
        inputsRef.current[index + 1].focus();
      }
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !code[index] && index > 0) {
      inputsRef.current[index - 1].focus();
    }
  };

  const handleVerify = (e) => {
    e.preventDefault();
    setError(null);

    const fullCode = code.join("");
    if (fullCode.length < 6) {
      setError("Enter all 6 digits of the code");
      return;
    }

    // Mock verification
    setTimeout(() => {
      navigate("/forgot-password");
    }, 500);
  };

  return (
    <AuthLayout>
      <Card className="text-center mx-auto">
        <div >
        <h1 className="text-2xl font-bold mb-4">Security Verification</h1>
        <p className="mb-4 text-sm">
          A code has been sent to your email. Enter the code to continue.
        </p>

        <form onSubmit={handleVerify} className="flex flex-col items-center">
          <div className="flex gap-2 mb-4">
            {code.map((digit, i) => (
              <input
                key={i}
                type="text"
                maxLength={1}
                value={digit}
                onChange={(e) => handleChange(e, i)}
                onKeyDown={(e) => handleKeyDown(e, i)}
                ref={(el) => (inputsRef.current[i] = el)}
                className="w-12 h-12 text-center rounded border border-white/30 text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            ))}
          </div>

          {error && <p className="text-red-600 text-sm mb-2">{error}</p>}

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white p-2 rounded"
          >
            Verify
          </button>
        </form>
      </div>
      </Card>
    </AuthLayout>
  );
}
