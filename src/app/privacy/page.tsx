import React from 'react';
import Image from 'next/image';

const Privacy: React.FC = () => {
  return (
    <div className=" bg-white min-h-screen">

      <div className="container mx-auto p-4">
      <h1 className=" p-10 m-10 text-5xl font-bold text-center text-gray-800 mb-8">Privacy</h1>        
        <div className="flex flex-col md:flex-row items-center mb-10">
          <div className="content md:w-1/2 p-6">
            <h2 className=" font-semibold text-2xl text-gray-700 mb-4">Data Protection</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              We use industry-standard encryption and security protocols to keep your personal information safe and secure from unauthorized access.
            </p>
          </div>
          <div className="image md:w-1/2 p-6 text-center">
            <Image src="/data.jpg" alt="Data Protection" width={500} height={300} className="max-w-full h-auto rounded-lg" />
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row items-center">
          <div className="content md:w-1/2 p-6">
            <h2 className="font-semibold text-2xl text-gray-700 mb-4">Privacy Controls</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              You decide what you share and with whom. Customize your privacy settings to make your profile visible to friends, family, or keep it private.
            </p>
          </div>
          <div className="image md:w-1/2 p-6 text-center">
            <Image src="/privacycontrols.jpg" alt="Privacy Controls" width={500} height={300} className="max-w-full h-auto rounded-lg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
