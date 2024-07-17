import React, { useState } from 'react';
import Header from './components/Header';
import ProgressBar from './components/ProgressBar';
import PhoneInput from './components/PhoneInput';
import TermsAndConditions from './components/TermsAndConditions';
import Modal from './components/Modal';

const LandingPage = () => {
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [isTermsOpen, setIsTermsOpen] = useState(false);

  const handleSubmitSuccess = async (apiResponse) => {
    try {
      const response = await fetch('http://localhost:3001/api/upload-conversion', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          clickId: apiResponse.clickId,
          conversionTime: new Date().toISOString()
        }),
      });

      const data = await response.json();
      console.log('Conversion uploaded:', data);
    } catch (error) {
      console.error('Error uploading conversion:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-blue-200 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6">
        <Header />
        <ProgressBar />
        <h2 className="text-center text-lg font-semibold mb-4">Enter your phone number</h2>
        <PhoneInput onSubmitSuccess={handleSubmitSuccess} />
        <TermsAndConditions
          onOpenPrivacy={() => setIsPrivacyOpen(true)}
          onOpenTerms={() => setIsTermsOpen(true)}
        />
      </div>

      <Modal
        isOpen={isPrivacyOpen}
        onClose={() => setIsPrivacyOpen(false)}
        title="Privacy Policy"
        content={<p>This is the privacy policy content...</p>}
      />

      <Modal
        isOpen={isTermsOpen}
        onClose={() => setIsTermsOpen(false)}
        title="Terms and Conditions"
        content={<p>These are the terms and conditions...</p>}
      />
    </div>
  );
};

export default LandingPage;