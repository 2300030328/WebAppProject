import { useState } from "react";
import "./App.css";

export default function App() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    feedback: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNext = () => {
    if (step < 2) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}! Your feedback is submitted.`);

    // Clear the form after submission
    setFormData({
      name: "",
      email: "",
      feedback: "",
    });

    // Reset to first step
    setStep(1);
  };

  return (
    <div className="survey-container">
      <h1 className="title">Online Survey</h1>
      <form onSubmit={handleSubmit} className="survey-form">
        {step === 1 && (
          <>
            <label>Nacccccccccme:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <label>Email bublue:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </>
        )}

        {step === 2 && (
          <>
            <label>Your Feedback:</label>
            <textarea
              name="feedback"
              value={formData.feedback}
              onChange={handleChange}
              required
            ></textarea>
          </>
        )}

        <div className="buttons">
          {step > 1 && (
            <button
              type="button"
              onClick={handleBack}
              className="secondary-btn"
            >
              Back
            </button>
          )}
          {step < 2 ? (
            <button
              type="button"
              onClick={handleNext}
              className="primary-btn"
            >
              Next
            </button>
          ) : (
            <button type="submit" className="primary-btn">
              Submit
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
