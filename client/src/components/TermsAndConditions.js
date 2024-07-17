import React from 'react';

const TermsAndConditions = ({ onOpenPrivacy, onOpenTerms }) => (
  <div>
    <p className="mt-4 text-xs text-gray-600 text-center">
      Entertainment is a subscription service that will automatically renew for 1 USD / 7 Day(s). You can unsubscribe from the service at anytime, by sending STOP to **** for (operator) . To make use of this service, you must be 18 or more unless you have received permission from your parents or the person who is authorized to pay your bill.
    </p>
    <div className="mt-2 text-xs text-center">
      <button onClick={onOpenTerms} className="text-blue-600 hover:underline">Terms & Conditions</button>
      {' - '}
      <button onClick={onOpenPrivacy} className="text-blue-600 hover:underline">Privacy Policy</button>
    </div>
  </div>
);

export default TermsAndConditions;