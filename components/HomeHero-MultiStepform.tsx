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
          <div className="min-h-[220px] flex flex-col justify-between">
            <div className="space-y-2">
              <h2 className="text-[#000000] text-base font-inter font-weight: 500 mb-2">LET'S CREATE SOMETHING EXTRAORDINARY TOGETHER!</h2>
              <h3 className="mb-4 text-[#084C6B] text-sm font-bold">YOUR JOURNEY TOWARDS EXCELLENCE STARTS HERE</h3>
              <div>
                <label htmlFor="service" className="block text-base font-weight: 500 font-inter text-[gray-700] mb-1">Services*</label>
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
            </div>
            <div className="flex justify-end mb-1">
              <button
                type="button"
                onClick={handleNext}
                className="w-[180px] px-8 py-2 bg-[#084C6B] text-white rounded-full font-semibold text-base hover:bg-[#053449] transition-colors active:scale-95"
              >
                Next
              </button>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="min-h-[220px] flex flex-col justify-between">
            <div className="space-y-1">
              <h2 className="text-[#1b8bf9] text-sm font-semibold">GOT A VISION OR IDEA? LETS TURN IT INTO REALITY</h2>
              <div>
                <label htmlFor="projectDescription" className="block text-sm font-semibold text-gray-700 mb-1">
                  Describe your project
                </label>
                <input
                  type="text"
                  id="projectDescription"
                  name="projectDescription"
                  className="w-full border border-gray-300 rounded-full p-1 text-gray-900 focus:ring-2 focus:ring-[#1b8bf9]"
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
                  className="w-full border border-gray-300 rounded-full p-1 text-gray-900 focus:ring-2 focus:ring-[#1b8bf9]"
                  value={formData.currentIssues || ''}
                  onChange={(e) => setFormData({ ...formData, currentIssues: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-600 mb-1">
                 
                </label>
                <div className="flex items-center">
                  <input type="file" id="fileUpload" className="hidden" onChange={(e) => setFormData({ ...formData, file: e.target.files ? e.target.files[0] : null })} />
                  <label htmlFor="fileUpload" className="cursor-pointer flex items-center">
                    <img src="/images/footer/load%20file.png" alt="Upload file icon" className="w-6 h-6 mr-2" />
                    <span className="text-[#084C6B]">Drop a file</span>
                  </label>
                  {formData.file && <span className="ml-2 text-sm text-gray-600">{formData.file.name}</span>}
                </div>
              </div>
            </div>
            <div className="flex justify-end mt-4">
              <button
                type="button"
                onClick={handleNext}
                className="w-[180px] px-8 py-2 bg-[#084C6B] text-white rounded-full font-semibold text-base hover:bg-[#053449] transition-colors"
              >
                Next
              </button>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="min-h-[220px] flex flex-col justify-between">
            <div className="space-y-2">
              <h2 className="text-sm font-semibold text-[#1b8bf9]">LET'S CONNECT!</h2>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full border border-gray-300 rounded-full p-1 text-gray-900 focus:ring-2 focus:ring-[#1b8bf9]"
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
                    className="w-full border border-gray-300 rounded-full p-1 text-gray-900 focus:ring-2 focus:ring-[#1b8bf9]"
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
                    className="w-full border border-gray-300 rounded-full p-1 text-gray-900 focus:ring-2 focus:ring-[#1b8bf9]"
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
                    className="w-full border border-gray-300 rounded-full p-1 text-gray-900 focus:ring-2 focus:ring-[#1b8bf9]"
                    value={formData.company || ''}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-end mt-4">
              <button
                type="submit"
                className="w-[180px] px-8 py-2 bg-[#084C6B] text-white rounded-full font-semibold text-base hover:bg-[#053449] transition-colors"
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
      <div className="flex justify-between mb-5 mt-2">
        {[...Array(totalSteps)].map((_, index) => (
          <div
            key={index}
            className={`w-1/3 h-[3px] rounded-full ${index === 1 ? 'mx-1' : ''} ${currentStep > index ? 'bg-[#006D9F]' : 'bg-gray-300'}`}
            onClick={() => setCurrentStep(index + 1)}
            style={{ cursor: 'pointer' }}
          ></div>
        ))}
      </div>
      <div className="transition-all duration-300 ease-in-out">
        {renderStep()}
      </div>
    </form>
  );
};

export default MultiStepForm; 