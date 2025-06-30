import React from 'react';
import { motion } from 'framer-motion';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="footer">
      <div className="footer-container">
        <motion.div
          className="footer-content"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="footer-section">
            <h3 className="footer-title">VMS Holdings</h3>
            <p className="footer-subtitle">
              벤처인증, 25년 부산대표기업, 소셜벤처기업
            </p>
          </div>

          <div className="footer-section">
            <div className="footer-info">
              <div className="info-item">
                <span className="info-label">사업자등록번호:</span>
                <span className="info-value">152-88-03359</span>
              </div>
              <div className="info-item">
                <span className="info-label">주소:</span>
                <span className="info-value">
                  부산 영도구 태종로 727, 한국해양대학교 해양벤처진흥센터 704호
                </span>
              </div>
              <div className="info-item">
                <span className="info-label">전화:</span>
                <span className="info-value">+82) 02-2699-0790</span>
              </div>
              <div className="info-item">
                <span className="info-label">이메일:</span>
                <span className="info-value">cs@vmsforsea.com</span>
              </div>
            </div>
          </div>

          <div className="footer-section">
            <div className="footer-links">
              <a href="#privacy" className="footer-link">개인정보 보호정책</a>
              <a href="#terms" className="footer-link">이용약관</a>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="footer-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="copyright">
            © (주)VMS Holdings {currentYear}. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer; 