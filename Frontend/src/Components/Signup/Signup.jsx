import React, { useState } from 'react';

function Signup() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [isScanning, setIsScanning] = useState(false);
    const [scanProgress, setScanProgress] = useState(0);

    const handleNameChange = (event) => {
      setName(event.target.value);
    };

    const handleEmailChange = (event) => {
      setEmail(event.target.value);
    };

    const handlePhoneChange = (event) => {
      setPhone(event.target.value);
    };

    const handleFingerprintScan = () => {
      setIsScanning(true);
      setScanProgress(0);

      // Simulate a fingerprint scan countdown for 3 seconds (3000 milliseconds)
      const scanInterval = setInterval(() => {
        if (scanProgress < 100) {
          setScanProgress(scanProgress + 10);
        } else {
          clearInterval(scanInterval);
          setIsScanning(false);
          alert('Fingerprint scan completed (simulated)');
        }
      }, 300);
    };

    const handleSubmit = (event) => {
      event.preventDefault();

      // Access the input values and fingerprint data here.
      console.log('Name:', name);
      console.log('Email:', email);
      console.log('Phone:', phone);
      setName('');
      setEmail('');
      setPhone('');
    };

  return (
    <div className="bg-gray-100 flex items-center justify-center h-screen">
      <div className="bg-white p-8 rounded-lg shadow-md w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
        <h2 className="text-2xl font-bold mb-6">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-600 text-sm">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={handleNameChange}
              className="w-full border rounded-lg p-2 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-600 text-sm">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={handleEmailChange}
              className="w-full border rounded-lg p-2 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="phone" className="block text-gray-600 text-sm">Phone</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={phone}
              onChange={handlePhoneChange}
              className="w-full border rounded-lg p-2 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="fingerprint" className="block text-gray-600 text-sm">Fingerprint</label>
            <button
              type="button"
              onClick={handleFingerprintScan}
              disabled={isScanning}
              className="w-full bg-blue-500 text-white font-bold py-2 rounded-lg hover:bg-blue-600 focus:outline-none"
            >
              {isScanning ? `Scanning... ${scanProgress}%` : 'Scan Fingerprint'}
            </button>
          </div>
          <div className="mt-8">
            <button type="submit" className="w-full bg-blue-500 text-white font-bold py-2 rounded-lg hover:bg-blue-600 focus:outline-none">Sign Up</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
