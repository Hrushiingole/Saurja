import React from 'react';
import { PhoneIcon, EnvelopeIcon, MapPinIcon, IdentificationIcon, DocumentIcon } from '@heroicons/react/24/solid';

const Footer = () => {
  return (
    <div className="w-4/5 mt-auto border-t border-gray-300 py-4 flex items-center justify-center bg-gray-50">
      <div className="text-gray-500 flex flex-wrap justify-center space-x-4 text-xs text-gray-600">
        <p className="flex items-center">
          <PhoneIcon className="h-4 w-4 mr-1" /> 7860555222
        </p>
        <p className="flex items-center">
          <EnvelopeIcon className="h-4 w-4 mr-1" /> urjacart@gmail.com
        </p>
        <p className="flex items-center">
          <MapPinIcon className="h-4 w-4 mr-1" /> C-1026, C Block, Indira Nagar, Lucknow, U.P
        </p>
        <p className="flex items-center">
          <IdentificationIcon className="h-4 w-4 mr-1" /> GSTIN No. 09AADCU4632L1Z0
        </p>
        <p className="flex items-center">
          <DocumentIcon className="h-4 w-4 mr-1" /> CIN: U43222UP2023PTC193430
        </p>
        <p className="flex items-center">
          <DocumentIcon className="h-4 w-4 mr-1" /> PAN - AADCU4632L
        </p>
      </div>
    </div>
  );
};

export default Footer;
