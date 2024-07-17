import React, { useState } from 'react';
import axios from 'axios';

const API_ENDPOINT = 'https://d3398n96t5wqx9.cloudfront.net/UsersAquisition/';
const ENCRYPTION_KEY = 'FtmJ7frzTyWOzintybbqIWzwwclcPtaI';
const ACCESS_TOKEN = '0e186445-0647-417c-ae27-8098533f1914';
const CAMPAIGN_ID = '6a0fa162-fb4c-4074-a6d4-402744e3590b';
const COUNTRY_CODE = '+964';

const PhoneInput = ({ onSubmitSuccess }) => {
  const [phoneNumber, setPhoneNumber] = useState(COUNTRY_CODE);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    if (!phoneNumber.startsWith(COUNTRY_CODE)) {
      setError('Please enter a valid Iraq phone number starting with +964');
      setIsLoading(false);
      return;
    }

    try {
      const response = await axios.post(API_ENDPOINT, {
        campaignId: CAMPAIGN_ID,
        phoneNumber: phoneNumber
      }, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${ACCESS_TOKEN}`,
          'X-Encryption-Key': ENCRYPTION_KEY
        }
      });

      console.log('API Response:', response.data);
      onSubmitSuccess(response.data);
    } catch (error) {
      console.error('API Error:', error);
      setError('An error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-8 space-y-6">
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
          Mobile number
        </label>
        <div className="mt-1 relative rounded-md shadow-sm">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <span className="text-gray-500 sm:text-sm">📱</span>
          </div>
          <input
            type="tel"
            name="phone"
            id="phone"
            className="focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
            placeholder={COUNTRY_CODE}
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
        </div>
      </div>
      
      <div>
        <button
          type="submit"
          disabled={isLoading}
          className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          {isLoading ? 'Submitting...' : 'CONTINUE'}
        </button>
      </div>
      
      {error && (
        <p className="mt-2 text-sm text-red-600" id="email-error">
          {error}
        </p>
      )}
    </form>
  );
};

export default PhoneInput;