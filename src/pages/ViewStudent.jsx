import React, { useState } from 'react';
import { FaSearch, FaFilter, FaEdit, FaTrash, FaEye } from 'react-icons/fa';
import './Auth.css';
import './ViewStudent.css';

const ViewStudent = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    class: '',
    section: '',
    gender: ''
  });

  // Mock data - replace with actual API call
  const students = [
    {
      id: 1,
      firstName: 'John',
      lastName: 'Doe',
      class: '10',
      section: 'A',
      rollNumber: '101',
      gender: 'Male',
      email: 'john.doe@example.com',
      phone: '1234567890'
    },
    // Add more mock data as needed
  ];

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const filteredStudents = students.filter(student => {
    const matchesSearch = 
      student.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.rollNumber.includes(searchTerm);
    
    const matchesFilters = 
      (!filters.class || student.class === filters.class) &&
      (!filters.section || student.section === filters.section) &&
      (!filters.gender || student.gender === filters.gender);

    return matchesSearch && matchesFilters;
  });

  return (
    <div className="auth-container students-container">
      <div className="auth-box" style={{ maxWidth: '1200px' }}>
        <div className="auth-header">
          <h2>View Students</h2>
          <p>Search and filter student records</p>
        </div>

        <div className="search-filter-container">
          <div className="search-box">
            <div className="form-group search-input-container">
              <input
                type="text"
                placeholder="Search by name or roll number"
                value={searchTerm}
                onChange={handleSearch}
                className="search-input"
              />
              <FaSearch className="search-icon" />
            </div>
          </div>

          <div className="filters-grid">
            <div className="form-group">
              <label>Class</label>
              <select name="class" value={filters.class} onChange={handleFilterChange}>
                <option value="">All Classes</option>
                {[...Array(12)].map((_, i) => (
                  <option key={i + 1} value={(i + 1).toString()}>Class {i + 1}</option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label>Section</label>
              <select name="section" value={filters.section} onChange={handleFilterChange}>
                <option value="">All Sections</option>
                <option value="A">Section A</option>
                <option value="B">Section B</option>
                <option value="C">Section C</option>
                <option value="D">Section D</option>
              </select>
            </div>

            <div className="form-group">
              <label>Gender</label>
              <select name="gender" value={filters.gender} onChange={handleFilterChange}>
                <option value="">All</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>
        </div>

        <div className="students-table-container">
          <table className="students-table">
            <thead>
              <tr>
                <th>Roll No.</th>
                <th>Name</th>
                <th>Class</th>
                <th>Section</th>
                <th>Gender</th>
                <th>Contact</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredStudents.map(student => (
                <tr key={student.id}>
                  <td>{student.rollNumber}</td>
                  <td>{`${student.firstName} ${student.lastName}`}</td>
                  <td>{student.class}</td>
                  <td>{student.section}</td>
                  <td>{student.gender}</td>
                  <td>
                    <div className="student-email">{student.email}</div>
                    <div className="student-phone">{student.phone}</div>
                  </td>
                  <td>
                    <div className="table-actions">
                      <button className="auth-button" style={{ 
                        padding: '0.5rem',
                        backgroundColor: '#3b82f6'
                      }}>
                        <FaEye />
                      </button>
                      <button className="auth-button" style={{ 
                        padding: '0.5rem',
                        backgroundColor: '#10b981'
                      }}>
                        <FaEdit />
                      </button>
                      <button className="auth-button" style={{ 
                        padding: '0.5rem',
                        backgroundColor: '#ef4444'
                      }}>
                        <FaTrash />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filteredStudents.length === 0 && (
          <div className="no-results">
            No students found matching your search criteria
          </div>
        )}
      </div>
    </div>
  );
};

export default ViewStudent;