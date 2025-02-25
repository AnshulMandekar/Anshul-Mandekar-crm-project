import React, { useState } from "react";
import Navbar from "./broker_registration/layout/navbar";
import Footer from "./broker_registration/layout/footer";
import PersonalInformation from "./broker_registration/form/personalinformation";
import AddressDetails from "./broker_registration/form/addressdetails";
import ProfessionalInformation from "./broker_registration/form/professionalinformation";
import BankDetails from "./broker_registration/form/bankdetails";
import DocumentUpload from "./broker_registration/form/documentupload";

function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    houseNumber: "",
    streetName: "",
    neighborhood: "",
    city: "",
    state: "",
    postalCode: "",
    country: "",
    reraNumber: "",
    panNumber: "",
    brokerageRate: "",
    incentive: "",
    companyType: "individual",
    accountNumber: "",
    ifscCode: "",
    bankName: "",
    termsAccepted: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? e.target.checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission here
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />

      <main className="flex-grow">
        <div className="max-w-4xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
          <div className="bg-white shadow rounded-lg p-8">
            <div className="mb-10">
              <h1 className="text-3xl font-bold text-gray-900">
                Broker Registration
              </h1>
              <p className="mt-2 text-gray-600">
                Complete the form below to register as a broker
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              <PersonalInformation
                formData={formData}
                handleInputChange={handleInputChange}
              />
              <AddressDetails
                formData={formData}
                handleInputChange={handleInputChange}
              />
              <ProfessionalInformation
                formData={formData}
                handleInputChange={handleInputChange}
              />
              <BankDetails
                formData={formData}
                handleInputChange={handleInputChange}
              />
              <DocumentUpload />

              {/* Terms and Submit */}
              <div className="pt-6">
                <div className="flex items-start mb-6">
                  <div className="flex items-center h-5">
                    <input
                      type="checkbox"
                      name="termsAccepted"
                      checked={formData.termsAccepted}
                      onChange={handleInputChange}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      required
                    />
                  </div>
                  <div className="ml-3">
                    <label className="text-sm text-gray-600">
                      I agree to the{" "}
                      <a href="#" className="text-blue-600 hover:text-blue-500">
                        Terms and Conditions
                      </a>{" "}
                      and{" "}
                      <a href="#" className="text-blue-600 hover:text-blue-500">
                        Privacy Policy
                      </a>
                    </label>
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Submit Registration
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
