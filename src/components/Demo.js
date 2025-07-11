import React, { useState, useEffect } from "react";
import "./Demo.css";

const Demo = () => {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  // 분기 2: 메모리 저장 - 폼 데이터를 localStorage에 저장
  const [formData, setFormData] = useState(() => {
    const saved = localStorage.getItem('demo-formData');
    return saved ? JSON.parse(saved) : {
      firstName: '',
      lastName: '',
      email: '',
      companyName: '',
      phoneNumber: '',
      jobTitle: '',
      companyWebsite: '',
      organizationInfo: '',
      country: '',
      projectInfo: '',
      optInProductUpdates: false,
      optInSalesOutreach: false,
      optInEvents: false
    };
  });

  // 분기 2: formData 변경 시 localStorage에 저장
  useEffect(() => {
    localStorage.setItem('demo-formData', JSON.stringify(formData));
  }, [formData]);

  const handleDemoRequest = () => {
    setIsDemoModalOpen(true);
  };

  const closeDemoModal = () => {
    setIsDemoModalOpen(false);
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Demo request submitted:', formData);
    alert('Demo request submitted successfully!');
    
    // 분기 2: 성공적으로 제출 후 localStorage 데이터 삭제
    localStorage.removeItem('demo-formData');
    
    // 분기 2: 폼 데이터 초기화
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      companyName: '',
      phoneNumber: '',
      jobTitle: '',
      companyWebsite: '',
      organizationInfo: '',
      country: '',
      projectInfo: '',
      optInProductUpdates: false,
      optInSalesOutreach: false,
      optInEvents: false
    });
    
    setIsDemoModalOpen(false);
  };

  return (
    <>
      <section className="demo-section">
        <div className="demo-container">
          <div className="demo-buttons">
            <button className="demo-btn request" onClick={handleDemoRequest}>
              Request a Demo
              <span className="arrow">→</span>
            </button>
            <button className="demo-btn mission">
              Join Our Mission
              <span className="arrow">→</span>
            </button>
          </div>
        </div>
      </section>

      {/* Demo Request Modal */}
      {isDemoModalOpen && (
        <div className="demo-modal-overlay" onClick={closeDemoModal}>
          <div className="demo-modal-container" onClick={(e) => e.stopPropagation()}>
            <div className="demo-modal-header">
              <h2>Demo Request Inquiry</h2>
              <button className="demo-modal-close" onClick={closeDemoModal}>
                ×
              </button>
            </div>
            
            <form className="demo-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="firstName">First Name *</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="lastName">Last Name *</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="companyName">Company Name *</label>
                  <input
                    type="text"
                    id="companyName"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phoneNumber">Phone Number *</label>
                  <input
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="jobTitle">Job Title *</label>
                  <input
                    type="text"
                    id="jobTitle"
                    name="jobTitle"
                    value={formData.jobTitle}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="country">Country *</label>
                <select
                  id="country"
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select Country</option>
                  <option value="US">United States</option>
                  <option value="KR">South Korea</option>
                  <option value="JP">Japan</option>
                  <option value="CN">China</option>
                  <option value="UK">United Kingdom</option>
                  <option value="DE">Germany</option>
                  <option value="FR">France</option>
                  <option value="CA">Canada</option>
                  <option value="AU">Australia</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="projectInfo">Tell us about your project</label>
                <textarea
                  id="projectInfo"
                  name="projectInfo"
                  value={formData.projectInfo}
                  onChange={handleInputChange}
                  placeholder="Describe your project requirements..."
                ></textarea>
              </div>

              <div className="checkbox-group">
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    name="optInProductUpdates"
                    checked={formData.optInProductUpdates}
                    onChange={handleInputChange}
                  />
                  <span className="checkbox-text">I would like to receive product updates</span>
                </label>
                
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    name="optInSalesOutreach"
                    checked={formData.optInSalesOutreach}
                    onChange={handleInputChange}
                  />
                  <span className="checkbox-text">I agree to sales outreach</span>
                </label>
                
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    name="optInEvents"
                    checked={formData.optInEvents}
                    onChange={handleInputChange}
                  />
                  <span className="checkbox-text">I would like to be invited to events</span>
                </label>
              </div>

              <div className="form-actions">
                <button type="button" className="cancel-btn" onClick={closeDemoModal}>
                  Cancel
                </button>
                <button type="submit" className="submit-btn">
                  Submit Request
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Demo; 