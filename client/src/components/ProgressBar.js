import React from 'react';

const ProgressBar = () => (
  <div className="mb-8">
    <div className="flex items-center justify-center mb-2">
      <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm">
        1
      </div>
      <div className="text-xs ml-2">STEP 1/2</div>
    </div>
    <div className="w-full bg-gray-200 rounded-full h-1">
      <div className="w-1/2 bg-blue-500 h-1 rounded-full"></div>
    </div>
  </div>
);

export default ProgressBar;