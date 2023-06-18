import { useState } from "react";

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    joinedNewsLetter: true,
  });

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    const newValue = type === "checkbox" ? checked : value;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: newValue,
    }));
  };

  const [passWordMatch, setPasswordMatch] = useState();
  const [joinedNews, setJoinedNews] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (formData.password === formData.confirmPassword) {
        setPasswordMatch("Successfully signed up!")
    } else {
        setPasswordMatch('Password do not match!')
        return
    }
    if (formData.joinedNewsLetter === true) {
            setJoinedNews('Newsletter activated!')
        }
  };

  return (
    <section>
      <form onSubmit={handleSubmit} className="form">
        <input
          type="email"
          onChange={handleChange}
          value={formData.email}
          name="email"
          placeholder="Email address"
          className="form-input"
        />
        <input
          type="password"
          onChange={handleChange}
          value={formData.password}
          name="password"
          placeholder="Password"
          className="form-input"
        />
        <input
          type="password"
          onChange={handleChange}
          value={formData.confirmPassword}
          name="confirmPassword"
          placeholder="Confirm Password"
          className="form-input"
        />
        <p>{passWordMatch}</p>
        <div className="form-marketing">
          <input
            type="checkbox"
            onChange={handleChange}
            checked={formData.joinedNewsLetter}
            name="joinedNewsLetter"
            id="checkbox"
          />
          <label htmlFor="checkbox">I want to join the newsletter</label>
        </div>
        <p>{joinedNews}</p>
        <button className="submit-btn">Sign up</button>
      </form>
    </section>
  );
};

export default SignUpForm;