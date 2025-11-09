import { useState } from "react";
import Card from "../../../../shared/components/Card";
import AuthLayout from "../../layouts/AuthLayout";
import { useNavigate } from "react-router-dom";

export default function CompanyEmailVerified() {
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    navigate("/dashboard");
  };

  return (
    <AuthLayout>
      <Card>
        <h2 className="text-2xl font-bold mb-8 text-center">
          Your application is being reviewed
        </h2>

        <p className="text-center py-2 mb-4">
          You will receive an email once your account has been verified and is ready
          to access the platform.
        </p>

        <p className="text-center">
          Reviews are typically completed within 24–48 hours.
        </p>

        <p className="text-center mt-4">
          Need help? Contact our support team at{" "}
          <span className="text-blue-400 underline cursor-pointer">
            support@example.com
          </span>
        </p>
      </Card>
    </AuthLayout>
  );
}
