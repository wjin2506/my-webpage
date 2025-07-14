import React, { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import '../../components/Demo.css';

const CTASection = () => {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // 폼 데이터 관리 (localStorage에 저장)
  const [formData, setFormData] = useState(() => {
    const saved = localStorage.getItem('demo-formData');
    return saved ? JSON.parse(saved) : {
      firstName: '',
      lastName: '',
      businessEmail: '',
      phoneNumber: '',
      jobTitle: '',
      enterprise: '',
      country: '',
      projectInfo: '',
      optInProductUpdates: false,
      optInSalesOutreach: false,
      optInEvents: false
    };
  });

  // formData 변경 시 localStorage에 저장
  useEffect(() => {
    localStorage.setItem('demo-formData', JSON.stringify(formData));
  }, [formData]);

  // EmailJS 초기화
  useEffect(() => {
    // EmailJS Public Key 초기화
    emailjs.init("Bu5XOwkzSj9fTCs");
  }, []);

  // Header의 Get Started 버튼에서 Demo 모달 열기 이벤트 listen
  useEffect(() => {
    const handleOpenDemoModal = () => {
      setIsDemoModalOpen(true);
    };

    window.addEventListener('openDemoModal', handleOpenDemoModal);
    
    return () => {
      window.removeEventListener('openDemoModal', handleOpenDemoModal);
    };
  }, []);

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

  const handleFileUpload = (e) => {
    const files = Array.from(e.target.files);
    const newFiles = files.map(file => ({
      id: Date.now() + Math.random(),
      name: file.name,
      size: file.size,
      file: file
    }));
    setUploadedFiles(prev => [...prev, ...newFiles]);
  };

  const removeFile = (fileId) => {
    setUploadedFiles(prev => prev.filter(file => file.id !== fileId));
  };

  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // 이메일 템플릿에 전달할 데이터 준비 (EmailJS 템플릿 변수에 맞춤)
      const emailData = {
        from_name: `${formData.firstName} ${formData.lastName}`,
        from_email: formData.businessEmail,
        phone: formData.phoneNumber,
        company: formData.enterprise,
        country: formData.country,
        job_title: formData.jobTitle,
        project_description: formData.projectInfo || '프로젝트 설명이 제공되지 않았습니다.',
        files_info: uploadedFiles.length > 0 
          ? uploadedFiles.map(file => `${file.name} (${formatFileSize(file.size)})`).join(', ')
          : '첨부파일이 없습니다.',
        opt_product_updates: formData.optInProductUpdates ? '예' : '아니요',
        opt_sales_outreach: formData.optInSalesOutreach ? '예' : '아니요',
        opt_events: formData.optInEvents ? '예' : '아니요'
      };

      // EmailJS로 이메일 전송
      const result = await emailjs.send(
        'service_oh96wzb', // VMS Holdings Gmail Service
        'template_53307ep', // Contact Us Template
        emailData
      );

      console.log('Email sent successfully:', result);
      alert('Demo request submitted successfully! We will contact you soon.');
      
      // 성공적으로 제출 후 localStorage 데이터 삭제
      localStorage.removeItem('demo-formData');
      
      // 폼 데이터 초기화
      setFormData({
        firstName: '',
        lastName: '',
        businessEmail: '',
        phoneNumber: '',
        jobTitle: '',
        enterprise: '',
        country: '',
        projectInfo: '',
        optInProductUpdates: false,
        optInSalesOutreach: false,
        optInEvents: false
      });
      
      // 파일 목록 초기화
      setUploadedFiles([]);
      
      setIsDemoModalOpen(false);
    } catch (error) {
      console.error('Email sending failed:', error);
      alert('Failed to submit demo request. Please try again or contact us directly at vmsholdings@vmsforsea.com');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <section className="bg-global-5 py-12 sm:py-16 lg:py-20">
        <div className="w-full max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-8 justify-start items-center w-full border-t border-b border-global-3 py-8 sm:py-12 lg:py-10">
            
            {/* Request Demo Card */}
            <div 
              className="flex flex-col sm:flex-row lg:flex-row justify-between items-start w-full lg:w-1/2 bg-info-gray p-6 sm:p-8 lg:p-5 cursor-pointer hover:bg-opacity-90 transition-all duration-300 rounded-lg sm:rounded-none"
              onClick={handleDemoRequest}
            >
              <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-[50px] font-normal leading-tight sm:leading-tight lg:leading-[61px] text-left text-global-1 mb-6 sm:mb-8 lg:mb-[70px]">
                Request a Demo
              </h3>
              <img 
                src="/image/Arrow.png" 
                alt="Arrow" 
                className="w-8 sm:w-10 md:w-12 lg:w-[48px] h-8 sm:h-10 md:h-12 lg:h-[48px] self-start sm:self-end"
              />
            </div>

            {/* Join Mission Card */}
            <div className="flex flex-col sm:flex-row lg:flex-row justify-between items-start w-full lg:w-1/2 bg-global-1 p-6 sm:p-8 lg:p-5 cursor-pointer hover:bg-opacity-90 transition-all duration-300 rounded-lg sm:rounded-none">
              <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-[50px] font-normal leading-tight sm:leading-tight lg:leading-[61px] text-left text-global-5 mb-6 sm:mb-8 lg:mb-[70px]">
                Join Our Mission
              </h3>
              <img 
                src="/image/Arrow.png" 
                alt="Arrow" 
                className="w-8 sm:w-10 md:w-12 lg:w-[48px] h-8 sm:h-10 md:h-12 lg:h-[48px] mt-1 filter invert self-start sm:self-end"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Demo Request Modal */}
      {isDemoModalOpen && (
        <div className="demo-modal-overlay" onClick={closeDemoModal}>
          <div className="demo-modal-container" onClick={(e) => e.stopPropagation()}>
            <div className="demo-modal-header">
              <button className="demo-modal-close" onClick={closeDemoModal}>
                ×
              </button>
              <p className="demo-request-label">DEMO REQUEST INQUIRY</p>
              <h2 className="demo-main-title">Interested in solving your problems with VMS software?</h2>
            </div>
            
            {/* File Upload Area */}
            <div className="demo-file-upload-area">
              <div className="file-upload-zone">
                <input
                  type="file"
                  id="fileUpload"
                  className="file-input-hidden"
                  onChange={handleFileUpload}
                  multiple
                  accept=".pdf,.doc,.docx,.jpg,.jpeg,.png,.gif"
                />
                <label htmlFor="fileUpload" className="file-upload-label">
                  <div className="upload-icon">📁</div>
                  <p className="upload-text">ACQUIRE YOUR BUSINESS CASE ENABLED FASTER</p>
                  <p className="upload-subtext">BUSINESS OUTCOMES</p>
                  <p className="upload-instruction">Click to upload files or drag and drop</p>
                </label>
              </div>
              
              {/* Uploaded Files List */}
              {uploadedFiles.length > 0 && (
                <div className="uploaded-files-list">
                  {uploadedFiles.map((file) => (
                    <div key={file.id} className="uploaded-file-item">
                      <div className="file-info">
                        <span className="file-name">{file.name}</span>
                        <span className="file-size">({formatFileSize(file.size)})</span>
                      </div>
                      <button 
                        type="button" 
                        className="remove-file-btn"
                        onClick={() => removeFile(file.id)}
                      >
                        ×
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
            
            <form className={`demo-form ${uploadedFiles.length > 0 ? 'files-attached' : ''}`} onSubmit={handleSubmit}>
              {uploadedFiles.length === 0 && (
                <>
                  <div className="form-group">
                    <label htmlFor="firstName">FIRST NAME *</label>
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
                    <label htmlFor="lastName">LAST NAME *</label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="businessEmail">BUSINESS EMAIL ADDRESS *</label>
                    <input
                      type="email"
                      id="businessEmail"
                      name="businessEmail"
                      value={formData.businessEmail}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="phoneNumber">PHONE NUMBER *</label>
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
                    <label htmlFor="jobTitle">JOB TITLE *</label>
                    <input
                      type="text"
                      id="jobTitle"
                      name="jobTitle"
                      value={formData.jobTitle}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="enterprise">ENTERPRISE/INSTITUTION *</label>
                    <input
                      type="text"
                      id="enterprise"
                      name="enterprise"
                      value={formData.enterprise}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="country">COUNTRY *</label>
                    <select
                      id="country"
                      name="country"
                      value={formData.country}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">Select...</option>
                      <option value="US">United States</option>
                      <option value="KR">South Korea</option>
                      <option value="JP">Japan</option>
                      <option value="CN">China</option>
                      <option value="UK">United Kingdom</option>
                      <option value="DE">Germany</option>
                      <option value="FR">France</option>
                      <option value="CA">Canada</option>
                      <option value="AU">Australia</option>
                      <option value="SG">Singapore</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </>
              )}

              <div className="form-group">
                <label htmlFor="projectInfo">TELL US ABOUT YOUR PROJECT. A BIT OF CONTEXT WILL ALLOW US TO CONNECT YOU TO THE RIGHT TEAM FASTER.</label>
                <textarea
                  id="projectInfo"
                  name="projectInfo"
                  value={formData.projectInfo}
                  onChange={handleInputChange}
                  rows="4"
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
                  <span className="checkbox-text">OPT-IN TO RECEIVE VMS PRODUCT UPDATES</span>
                </label>
                
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    name="optInSalesOutreach"
                    checked={formData.optInSalesOutreach}
                    onChange={handleInputChange}
                  />
                  <span className="checkbox-text">OPT-IN TO PERSONALIZED SALES OUTREACH</span>
                </label>
                
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    name="optInEvents"
                    checked={formData.optInEvents}
                    onChange={handleInputChange}
                  />
                  <span className="checkbox-text">OPT-IN TO RECEIVE INVITES TO FUTURE EVENTS</span>
                </label>
              </div>

              <button type="submit" className="demo-submit-btn" disabled={isSubmitting}>
                {isSubmitting ? 'Submitting...' : 'Submit'}
              </button>
            </form>

            {/* Contact Information */}
            <div className="demo-contact-info">
              <div className="contact-section">
                <h4>CONTACT</h4>
              </div>
              
              <div className="contact-section">
                <h4>EMAIL</h4>
                <p>vmsholdings@vmsforsea.com</p>
              </div>
              
              <div className="contact-section">
                <h4>PHONE</h4>
                <p>+82 51-403-0790</p>
              </div>
              
              <div className="contact-section">
                <h4>ADDRESS</h4>
                <p>Rm 704, KMOU Venture Building, 727, Taejong-ro, Yeongdo-gu, Busan, Korea</p>
              </div>
              
              <div className="contact-section">
                <h4>OFFICE LOCATIONS</h4>
                <div className="office-locations-grid">
                  <div className="office-column">
                    <h5 className="office-country">KOREA</h5>
                    <div className="office-cities">
                      <span className="office-city">Busan</span>
                      <span className="office-city">Seoul</span>
                      <span className="office-city">Incheon</span>
                    </div>
                  </div>
                  <div className="office-column">
                    <h5 className="office-country">SINGAPORE</h5>
                    <div className="office-cities">
                      <span className="office-city">Singapore</span>
                    </div>
                  </div>
                  <div className="office-column">
                    <h5 className="office-country">USA</h5>
                    <div className="office-cities">
                      <span className="office-city">Atlanta</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CTASection;