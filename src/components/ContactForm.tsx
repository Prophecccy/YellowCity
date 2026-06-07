import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'Security Services',
    location: 'Erode',
    message: '',
  });

  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [validationError, setValidationError] = useState<string | null>(null);

  const services = [
    'Security Services',
    'Housekeeping Services',
    'Deep Cleaning Services',
    'Private Detective Agency',
  ];

  const locations = [
    'Erode',
    'Salem',
    'Karur',
    'Coimbatore',
    'Namakkal',
    'Tirupur',
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setValidationError(null);
  };

  const validateForm = () => {
    if (!formData.name.trim()) return 'Please input your name.';
    if (!formData.phone.trim()) return 'Please input your contact number.';
    
    // Indian Mobile number validation (10 digits)
    const phoneRegex = /^[6789]\d{9}$/;
    if (!phoneRegex.test(formData.phone.replace(/[\s-]/g, ''))) {
      return 'Please input a valid Indian mobile number (e.g. 9876543210).';
    }

    if (!formData.email.trim()) return 'Please input your email address.';
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      return 'Please input a valid email address.';
    }

    if (!formData.message.trim()) return 'Please provide brief details about your requirement.';

    return null;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const error = validateForm();
    if (error) {
      setValidationError(error);
      return;
    }

    setFormStatus('submitting');
    
    try {
      // Form submission using Web3Forms
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: 'YOUR_ACCESS_KEY_HERE', // User to replace with actual access key
          subject: `New Lead - ${formData.service} from ${formData.location}`,
          from_name: formData.name,
          ...formData
        })
      });

      const result = await response.json();
      if (result.success) {
        setFormStatus('success');
        setFormData({
          name: '',
          phone: '',
          email: '',
          service: 'Security Services',
          location: 'Erode',
          message: '',
        });
      } else {
        setFormStatus('error');
      }
    } catch (err) {
      console.error(err);
      setFormStatus('error');
    }
  };

  return (
    <section 
      id="contact"
      style={{
        position: 'relative',
        zIndex: 5,
        borderBottom: '1px solid var(--grid-line)',
        backgroundColor: 'var(--bg-deep)'
      }}
      className="section-padding"
    >
      <div className="main-wrapper">
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '4rem',
            alignItems: 'start'
          }}
          className="contact-layout-grid"
        >
          {/* Form Left Side Narrative details */}
          <div className="contact-narrative-col" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div className="font-technical">[INITIATE_CONTACT]</div>
            <h2 style={{ fontSize: 'var(--font-size-section)', color: 'var(--text-primary)' }}>
              SYNC WITH <br/>
              OUR SERVICE <br/>
              <span className="font-serif-italic" style={{ color: 'var(--brand-yellow)', textShadow: '0 2px 10px rgba(255,210,0,0.1)' }}>matrix.</span>
            </h2>
            <p>
              Fill out the parameters on the right to sync your operational objectives with our service matrix. Our dispatch coordinator will reply with a detailed resource planning document within 12 hours.
            </p>
            
            {/* Drawing details card */}
            <div 
              style={{
                marginTop: '2rem',
                border: '1px solid var(--grid-line)',
                padding: '2rem',
                backgroundColor: 'var(--bg-panel)',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.8rem',
                color: 'var(--text-muted)',
                position: 'relative'
              }}
            >
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <div>// COMMUNICATIONS_LOG</div>
                <div>STATE: STANDBY [AWAITING_INPUT]</div>
                <div>SECURE: TLS_1.3_ENCRYPTED</div>
                <div>ENDPOINT: web3forms.com</div>
              </div>
            </div>
          </div>

          {/* Form Content Cell */}
          <div 
            style={{
              backgroundColor: 'var(--bg-card)',
              border: '1px solid var(--grid-line)',
              position: 'relative',
              boxShadow: '0 10px 40px rgba(0,0,0,0.03)'
            }}
            className="premium-form-card"
          >
            <div className="font-technical" style={{ marginBottom: '2rem', display: 'flex', justifyContent: 'space-between' }}>
              <span>[FORM_PARAMS_INPUT]</span>
              <span style={{ color: 'var(--text-muted)' }}>* REQUIRED</span>
            </div>

            <AnimatePresence mode="wait">
              {formStatus === 'success' ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  style={{ 
                    display: 'flex', 
                    flexDirection: 'column', 
                    alignItems: 'center', 
                    textAlign: 'center',
                    padding: '3rem 0',
                    gap: '1rem' 
                  }}
                >
                  <div style={{ fontSize: '3rem', color: 'var(--brand-yellow)' }}>✓</div>
                  <h3 style={{ fontFamily: 'var(--font-title)', color: 'var(--text-primary)' }}>SUBMISSION LOGGED</h3>
                  <p style={{ fontSize: '0.95rem' }}>
                    Your parameters have been logged and synced. A regional operational manager will contact you shortly.
                  </p>
                  <button 
                    onClick={() => setFormStatus('idle')}
                    className="btn-draft"
                    style={{ marginTop: '1.5rem' }}
                  >
                    Send Another Log
                  </button>
                </motion.div>
              ) : (
                <motion.form 
                  onSubmit={handleSubmit}
                  style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}
                >
                  {/* Name field */}
                  <div className="input-group">
                    <label className="input-label">CLIENT_NAME *</label>
                    <input 
                      type="text" 
                      name="name" 
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="e.g. John Doe"
                      className="draft-input"
                      disabled={formStatus === 'submitting'}
                    />
                  </div>

                  {/* Phone & Email Fields Side by Side */}
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
                    <div className="input-group">
                      <label className="input-label">CONTACT_TEL *</label>
                      <input 
                        type="tel" 
                        name="phone" 
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="e.g. 9876543210"
                        className="draft-input"
                        disabled={formStatus === 'submitting'}
                      />
                    </div>
                    <div className="input-group">
                      <label className="input-label">EMAIL_ADDRESS *</label>
                      <input 
                        type="email" 
                        name="email" 
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="e.g. client@company.com"
                        className="draft-input"
                        disabled={formStatus === 'submitting'}
                      />
                    </div>
                  </div>

                  {/* Dropdowns Side by Side */}
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
                    <div className="input-group">
                      <label className="input-label">SERVICE_MATRIX</label>
                      <select 
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="draft-select"
                        disabled={formStatus === 'submitting'}
                      >
                        {services.map(s => <option key={s} value={s}>{s}</option>)}
                      </select>
                    </div>
                    <div className="input-group">
                      <label className="input-label">OPERATING_SECTOR</label>
                      <select 
                        name="location"
                        value={formData.location}
                        onChange={handleInputChange}
                        className="draft-select"
                        disabled={formStatus === 'submitting'}
                      >
                        {locations.map(l => <option key={l} value={l}>{l}</option>)}
                      </select>
                    </div>
                  </div>

                  {/* Message details */}
                  <div className="input-group">
                    <label className="input-label">OPERATIONAL_REQUIREMENT_DETAILS *</label>
                    <textarea 
                      name="message" 
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      placeholder="Outline your security deployment schedule, housekeeping size, deep cleaning scale or surveillance task parameters..."
                      className="draft-textarea"
                      disabled={formStatus === 'submitting'}
                    />
                  </div>

                  {/* Errors display */}
                  {validationError && (
                    <div className="error-alert">
                      [VAL_ERROR] {validationError}
                    </div>
                  )}

                  {formStatus === 'error' && (
                    <div className="error-alert">
                      [API_ERROR] Server submission failed. Please try again or call corporate desk directly.
                    </div>
                  )}

                  {/* Submit Button */}
                  <button 
                    type="submit" 
                    className="btn-draft btn-draft-accent"
                    style={{ alignSelf: 'flex-start', marginTop: '1rem', width: '100%', justifyContent: 'center' }}
                    disabled={formStatus === 'submitting'}
                  >
                    <span>{formStatus === 'submitting' ? 'LOGGING...' : 'TRANSMIT PARAMETERS'}</span>
                    <span className="font-technical">[0.04]</span>
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      <style>{`
        .contact-narrative-col {
          padding-right: 1.5rem;
        }
        @media (min-width: 768px) {
          .contact-narrative-col {
            padding-right: 0;
          }
        }
        .input-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .input-label {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: var(--text-muted);
          letter-spacing: 0.05em;
        }
        .draft-input, .draft-textarea, .draft-select {
          background-color: var(--bg-panel);
          border: 1px solid var(--grid-line);
          color: var(--text-primary);
          padding: 0.85rem;
          font-family: var(--font-mono);
          font-size: 0.9rem;
          outline: none;
          transition: all 0.3s ease;
          width: 100%;
        }
        .draft-input:focus, .draft-textarea:focus, .draft-select:focus {
          border-color: var(--text-primary);
          box-shadow: 0 0 10px var(--brand-yellow-glow);
          background-color: #ffffff;
        }
        .draft-select option {
          background-color: var(--bg-card);
          color: var(--text-primary);
        }
        .error-alert {
          background-color: rgba(220, 38, 38, 0.08);
          border: 1px solid rgba(220, 38, 38, 0.3);
          color: #ef4444;
          font-family: var(--font-mono);
          font-size: 0.8rem;
          padding: 0.75rem;
        }
      `}</style>
    </section>
  );
};

export default ContactForm;
