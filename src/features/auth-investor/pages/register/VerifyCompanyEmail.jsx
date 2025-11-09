import { useState } from "react";
import Card from "../../../../shared/components/Card";
import AuthLayout from "../../layouts/AuthLayout";
import { useNavigate } from 'react-router-dom';

export default function VerifyCompanyEmail() {
  const navigate = useNavigate();

(false);
  const [error, setError] = useState(null);


  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

   
    // Ir al dashboard u otra página final
    navigate("/company-email-verified");
   

  };

  return (
    <AuthLayout>
      <Card >


        <h2 className="text-2xl font-bold mb-8 text-center">
   Verify your email
        </h2>
        <p className="text-center py-2 mb-4">
            We’ve sent a confirmation email to johndoe@company.com Please check your inbox and follow the link to activate your account.
        </p>
        <p className="text-center">
            Didn't receive the email? Check your spam folder or request a new one.
        </p>

        <form onSubmit={handleSubmit}>
          <div className="py-2">
            <button
              type="submit"
              className="w-full bg-blue-700 text-white p-3 rounded-md hover:bg-blue-800 transition-colors font-semibold"
            >
              Resend email
            </button>
          </div>
       
            
       
        </form>
      </Card>
    </AuthLayout>
  );
}
