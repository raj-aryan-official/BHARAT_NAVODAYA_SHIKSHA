import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Auth.css';

const SignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    schoolName: '',
    schoolType: 'government', // government, private, or international
    principalName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    totalStudents: '',
    totalTeachers: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.schoolName.trim()) {
      newErrors.schoolName = 'School name is required';
    }
    
    if (!formData.principalName.trim()) {
      newErrors.principalName = 'Principal name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = 'Phone number must be 10 digits';
    }
    
    if (!formData.address.trim()) {
      newErrors.address = 'Address is required';
    }

    if (!formData.city.trim()) {
      newErrors.city = 'City is required';
    }

    if (!formData.state.trim()) {
      newErrors.state = 'State is required';
    }

    if (!formData.pincode.trim()) {
      newErrors.pincode = 'Pincode is required';
    } else if (!/^\d{6}$/.test(formData.pincode)) {
      newErrors.pincode = 'Pincode must be 6 digits';
    }

    if (!formData.totalStudents.trim()) {
      newErrors.totalStudents = 'Total students count is required';
    }

    if (!formData.totalTeachers.trim()) {
      newErrors.totalTeachers = 'Total teachers count is required';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    }
    
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    
    if (!formData.agreeToTerms) {
      newErrors.agreeToTerms = 'You must agree to the terms and conditions';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Here you would typically make an API call to register the school
      console.log('School registration submitted:', formData);
      navigate('/dashboard');
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        <div className="auth-header">
          <h1>Register Your School</h1>
          <p>Create an account to access the school dashboard</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="schoolName" className="form-label">School Name</label>
            <input
              id="schoolName"
              name="schoolName"
              type="text"
              value={formData.schoolName}
              onChange={handleChange}
              className={`form-input ${errors.schoolName ? 'border-red-500' : ''}`}
              placeholder="Enter your school name"
            />
            {errors.schoolName && (
              <p className="text-red-500 text-sm mt-1">{errors.schoolName}</p>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="schoolType" className="form-label">School Type</label>
            <select
              id="schoolType"
              name="schoolType"
              value={formData.schoolType}
              onChange={handleChange}
              className={`form-input ${errors.schoolType ? 'border-red-500' : ''}`}
            >
              <option value="government">Government School</option>
              <option value="private">Private School</option>
              <option value="international">International School</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="principalName" className="form-label">Principal's Name</label>
            <input
              id="principalName"
              name="principalName"
              type="text"
              value={formData.principalName}
              onChange={handleChange}
              className={`form-input ${errors.principalName ? 'border-red-500' : ''}`}
              placeholder="Enter the principal's name"
            />
            {errors.principalName && (
              <p className="text-red-500 text-sm mt-1">{errors.principalName}</p>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="email" className="form-label">School Email</label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              value={formData.email}
              onChange={handleChange}
              className={`form-input ${errors.email ? 'border-red-500' : ''}`}
              placeholder="school@example.com"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="phone" className="form-label">Contact Number</label>
            <input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              className={`form-input ${errors.phone ? 'border-red-500' : ''}`}
              placeholder="Enter your contact number"
            />
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="totalStudents" className="form-label">Total Students</label>
            <input
              id="totalStudents"
              name="totalStudents"
              type="number"
              value={formData.totalStudents}
              onChange={handleChange}
              className={`form-input ${errors.totalStudents ? 'border-red-500' : ''}`}
              placeholder="Enter the total number of students"
            />
            {errors.totalStudents && (
              <p className="text-red-500 text-sm mt-1">{errors.totalStudents}</p>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="totalTeachers" className="form-label">Total Teachers</label>
            <input
              id="totalTeachers"
              name="totalTeachers"
              type="number"
              value={formData.totalTeachers}
              onChange={handleChange}
              className={`form-input ${errors.totalTeachers ? 'border-red-500' : ''}`}
              placeholder="Enter the total number of teachers"
            />
            {errors.totalTeachers && (
              <p className="text-red-500 text-sm mt-1">{errors.totalTeachers}</p>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="address" className="form-label">School Address</label>
            <textarea
              id="address"
              name="address"
              rows="3"
              value={formData.address}
              onChange={handleChange}
              className={`form-input ${errors.address ? 'border-red-500' : ''}`}
              placeholder="Enter the school address"
            />
            {errors.address && (
              <p className="text-red-500 text-sm mt-1">{errors.address}</p>
            )}
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="city" className="form-label">City</label>
              <input
                id="city"
                name="city"
                type="text"
                value={formData.city}
                onChange={handleChange}
                className={`form-input ${errors.city ? 'border-red-500' : ''}`}
                placeholder="Enter the city"
              />
              {errors.city && (
                <p className="text-red-500 text-sm mt-1">{errors.city}</p>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="state" className="form-label">State</label>
              <input
                id="state"
                name="state"
                type="text"
                value={formData.state}
                onChange={handleChange}
                className={`form-input ${errors.state ? 'border-red-500' : ''}`}
                placeholder="Enter the state"
              />
              {errors.state && (
                <p className="text-red-500 text-sm mt-1">{errors.state}</p>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="pincode" className="form-label">Pincode</label>
              <input
                id="pincode"
                name="pincode"
                type="text"
                value={formData.pincode}
                onChange={handleChange}
                className={`form-input ${errors.pincode ? 'border-red-500' : ''}`}
                placeholder="Enter the pincode"
              />
              {errors.pincode && (
                <p className="text-red-500 text-sm mt-1">{errors.pincode}</p>
              )}
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="password" className="form-label">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                className={`form-input ${errors.password ? 'border-red-500' : ''}`}
                placeholder="Create a password"
              />
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">{errors.password}</p>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                value={formData.confirmPassword}
                onChange={handleChange}
                className={`form-input ${errors.confirmPassword ? 'border-red-500' : ''}`}
                placeholder="Confirm your password"
              />
              {errors.confirmPassword && (
                <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>
              )}
            </div>
          </div>

          <div className="terms-checkbox">
            <input
              id="agreeToTerms"
              name="agreeToTerms"
              type="checkbox"
              checked={formData.agreeToTerms}
              onChange={handleChange}
            />
            <label htmlFor="agreeToTerms">
              I agree to the <Link to="/terms">Terms and Conditions</Link>
            </label>
            {errors.agreeToTerms && (
              <p className="text-red-500 text-sm mt-1">{errors.agreeToTerms}</p>
            )}
          </div>

          <button type="submit" className="auth-button">
            Register School
          </button>

          <div className="auth-footer">
            Already have an account?{' '}
            <Link to="/login">Sign in</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp; 