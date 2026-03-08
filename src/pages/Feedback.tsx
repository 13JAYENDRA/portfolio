import React, { useState } from 'react';
import './Feedback.css';

const Feedback: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Simulate sending feedback to backend/email
      console.log('Feedback submitted:', formData);
      
      // In a real app, you would send this to your backend:
      // const response = await fetch('/api/feedback', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData),
      // });

      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitted(false), 5000);
    } catch (error) {
      console.error('Error submitting feedback:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="feedback-page">
      <div className="feedback-container">
        <div className="feedback-header">
          <h1 className="feedback-title">💬 Send Me Your Feedback</h1>
          <p className="feedback-subtitle">I'd love to hear your thoughts, suggestions, or just connect! Drop a message below.</p>
        </div>

        {submitted && (
          <div className="success-message">
            <div className="success-content">
              <h3>✅ Thank You!</h3>
              <p>Your message has been received. I'll get back to you soon!</p>
            </div>
          </div>
        )}

        <form className="feedback-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name" className="form-label">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email" className="form-label">Your Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your.email@example.com"
              required
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label htmlFor="message" className="form-label">Your Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Share your thoughts, feedback, or suggestions..."
              required
              rows={6}
              className="form-textarea"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="submit-button"
          >
            {loading ? 'Sending...' : 'Send Message'}
          </button>
        </form>

        <div className="feedback-info">
          <h3>Other Ways to Connect</h3>
          <p>📧 Email: jayendrarathod07@gmail.com</p>
          <p>📱 Phone: +91-7058519325</p>
          <p>💼 LinkedIn: <a href="https://linkedin.com/in/jayendra-r" target="_blank" rel="noopener noreferrer">linkedin.com/in/jayendra-r</a></p>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
