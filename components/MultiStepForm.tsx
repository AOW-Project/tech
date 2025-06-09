'use client'
import React, { useState } from 'react';
import { SERVICES } from './MainSection'; // Import SERVICES from MainSection.tsx

interface FormData {
  service?: string;
  subservice?: string;
  projectDescription?: string;
  currentIssues?: string;
  file?: File | null;
  name?: string;
  phone?: string;
  email?: string;
  company?: string;
}

interface MultiStepFormProps {
  isMobile?: boolean;
}

const MultiStepForm: React.FC<MultiStepFormProps> = ({ isMobile }): JSX.Element => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({});
  const [serviceIdx, setServiceIdx] = useState(0);
  const [subIdx, setSubIdx] = useState(0);

  const totalSteps = 3; // Define total number of steps

  const handleServiceChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const index = Number(e.target.value);
    setServiceIdx(index);
    setSubIdx(0);
    setFormData({ ...formData, service: SERVICES[index].value, subservice: SERVICES[index].sub[0] });
  };

  const handleSubChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const index = Number(e.target.value);
    setSubIdx(index);
    setFormData({ ...formData, subservice: SERVICES[serviceIdx].sub[index] });
  };

  const handleNext = () => {
    setCurrentStep(currentStep + 1);
  };

  const handlePrev = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission, e.g., send formData to an API
    console.log('Form Data:', formData);
    alert('Form submitted!');
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="h-[400px] flex flex-col justify-between">
            <div className="space-y-4">
              <h2 className="text-black text-lg font-semibold">Let's create something Extraordinary together!!!</h2>
              <h3 className="text-[#1b8bf9] text-lg font-semibold">YOUR JOURNEY TOWARDS EXCELLENCE STARTS HERE</h3>
              <div>
                <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-1">
                  Services
                </label>
                <select
                  id="service"
                  name="service"
                  className="w-full border border-gray-300 rounded-full p-2 text-gray-900 focus:ring-2 focus:ring-[#1b8bf9]"
                  value={serviceIdx}
                  onChange={handleServiceChange}
                  required
                >
                  <option value="">Select a Service</option>
                  {SERVICES.map((s, idx) => (
                    <option value={idx} key={s.value}>
                      {s.label}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="subservice" className="block text-sm font-semibold text-gray-700 mb-1">
                  Subservices
                </label>
                <select
                  id="subservice"
                  name="subservice"
                  className="w-full border border-gray-300 rounded-full p-2 text-gray-900 focus:ring-2 focus:ring-[#1b8bf9]"
                  value={subIdx}
                  onChange={handleSubChange}
                  required
                >
                  <option value="">Select a Subservice</option>
                  {SERVICES[serviceIdx]?.sub.map((sub, idx) => (
                    <option value={idx} key={sub}>
                      {sub}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="flex justify-end">
              <button
                type="button"
                onClick={handleNext}
                className="w-auto px-8 py-2 bg-[#084C6B] text-white rounded-full font-semibold text-base hover:bg-[#053449] transition-colors"
              >
                Next
              </button>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="h-[400px] flex flex-col justify-between">
            <div className="space-y-4">
              <h2 className="text-[#1b8bf9] text-lg font-bold">GOT A VISION OR IDEA? LETS TURN IT INTO REALITY</h2>
              <div>
                <label htmlFor="projectDescription" className="block text-sm font-semibold text-gray-700 mb-1">
                  Describe your project
                </label>
                <input
                  type="text"
                  id="projectDescription"
                  name="projectDescription"
                  className="w-full border border-gray-300 rounded-full p-2 text-gray-900 focus:ring-2 focus:ring-[#1b8bf9]"
                  value={formData.projectDescription || ''}
                  onChange={(e) => setFormData({ ...formData, projectDescription: e.target.value })}
                  required
                />
              </div>
              <div>
                <label htmlFor="currentIssues" className="block text-sm font-semibold text-gray-700 mb-1">
                  Current Issues
                </label>
                <input
                  type="text"
                  id="currentIssues"
                  name="currentIssues"
                  className="w-full border border-gray-300 rounded-full p-2 text-gray-900 focus:ring-2 focus:ring-[#1b8bf9]"
                  value={formData.currentIssues || ''}
                  onChange={(e) => setFormData({ ...formData, currentIssues: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Drop a file
                </label>
                <div className="flex items-center">
                  <input type="file" id="fileUpload" className="hidden" onChange={(e) => setFormData({ ...formData, file: e.target.files ? e.target.files[0] : null })} />
                  <label htmlFor="fileUpload" className="cursor-pointer flex items-center">
                    <img src="/images/footer/load%20file.png" alt="Upload file icon" className="w-6 h-6 mr-2" />
                    <span className="text-gray-700">Drop a file</span>
                  </label>
                  {formData.file && <span className="ml-2 text-sm text-gray-600">{formData.file.name}</span>}
                </div>
              </div>
            </div>
            <div className="flex justify-end">
              <button
                type="button"
                onClick={handleNext}
                className="w-auto px-8 py-2 bg-[#084C6B] text-white rounded-full font-semibold text-base hover:bg-[#053449] transition-colors"
              >
                Next
              </button>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="h-[320px] flex flex-col justify-between">
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-800">Let's connect!</h2>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full border border-gray-300 rounded-full p-2 text-gray-900 focus:ring-2 focus:ring-[#1b8bf9]"
                    value={formData.name || ''}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-1">
                    Phone number*
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full border border-gray-300 rounded-full p-2 text-gray-900 focus:ring-2 focus:ring-[#1b8bf9]"
                    value={formData.phone || ''}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1">
                    Email Address*
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full border border-gray-300 rounded-full p-2 text-gray-900 focus:ring-2 focus:ring-[#1b8bf9]"
                    value={formData.email || ''}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-1">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="w-full border border-gray-300 rounded-full p-2 text-gray-900 focus:ring-2 focus:ring-[#1b8bf9]"
                    value={formData.company || ''}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="w-auto px-8 py-2 bg-[#084C6B] text-white rounded-full font-semibold text-base hover:bg-[#053449] transition-colors"
              >
                Submit
              </button>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      {/* Stepper Component */}
      <div className="flex justify-between mb-6">
        {[...Array(totalSteps)].map((_, index) => (
          <div
            key={index}
            className={`w-1/3 h-[2px] rounded-full ${index === 1 ? 'mx-1' : ''} ${currentStep > index ? 'bg-[#1b8bf9]' : 'bg-gray-300'}`}
            onClick={() => setCurrentStep(index + 1)}
            style={{ cursor: 'pointer' }}
          ></div>
        ))}
      </div>
      {renderStep()}
    </form>
  );
};

export default MultiStepForm; 