import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUsers, FaBook, FaChalkboardTeacher, FaCalendarAlt, FaPlus, FaFileAlt, FaBell, FaVideo, FaClock, FaMapMarkerAlt, FaUserPlus, FaChartLine } from 'react-icons/fa';
import './Dashboard.css';

const Dashboard = () => {
  const navigate = useNavigate();

  // Mock data for demonstration
  const stats = [
    {
      title: 'Total Students',
      value: '1,234',
      trend: '+12%',
      isPositive: true,
      icon: <FaUsers />
    },
    {
      title: 'Active Courses',
      value: '45',
      trend: '+5%',
      isPositive: true,
      icon: <FaBook />
    },
    {
      title: 'Teachers',
      value: '89',
      trend: '+3%',
      isPositive: true,
      icon: <FaChalkboardTeacher />
    },
    {
      title: 'Upcoming Events',
      value: '12',
      trend: '-2%',
      isPositive: false,
      icon: <FaCalendarAlt />
    }
  ];

  const recentActivities = [
    {
      id: 1,
      title: 'New Student Registration',
      description: 'John Doe joined Class 10A',
      time: '2 hours ago',
      icon: <FaUsers />
    },
    {
      id: 2,
      title: 'Course Update',
      description: 'Mathematics syllabus updated',
      time: '4 hours ago',
      icon: <FaBook />
    },
    {
      id: 3,
      title: 'Teacher Assignment',
      description: 'Mrs. Smith assigned to Class 8B',
      time: '1 day ago',
      icon: <FaChalkboardTeacher />
    }
  ];

  const quickActions = [
    {
      title: 'Add New Student',
      icon: <FaUserPlus />,
      onClick: () => navigate('/add-student'),
      color: '#2b6cb0'
    },
    {
      title: 'View Students',
      icon: <FaUsers />,
      onClick: () => navigate('/students'),
      color: '#38a169'
    },
    {
      title: 'Schedule Meeting',
      icon: <FaCalendarAlt />,
      onClick: () => navigate('/meetings'),
      color: '#d69e2e'
    },
    {
      title: 'View Reports',
      icon: <FaChartLine />,
      onClick: () => navigate('/reports'),
      color: '#805ad5'
    }
  ];

  const meetings = [
    {
      id: 1,
      title: 'BNS Department Monthly Review',
      description: 'Review of academic performance and upcoming initiatives',
      date: '2024-03-20',
      time: '10:00 AM',
      location: 'Conference Room A',
      status: 'upcoming',
      icon: <FaVideo />
    },
    {
      id: 2,
      title: 'Curriculum Development Meeting',
      description: 'Discussion on new teaching methodologies',
      date: '2024-03-18',
      time: '2:00 PM',
      location: 'Virtual Meeting',
      status: 'ongoing',
      icon: <FaVideo />
    },
    {
      id: 3,
      title: 'Teacher Training Workshop',
      description: 'Digital learning tools and techniques',
      date: '2024-03-15',
      time: '9:00 AM',
      location: 'Training Hall',
      status: 'completed',
      icon: <FaVideo />
    }
  ];

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1>School Dashboard</h1>
        <p>Welcome back! Here's what's happening at your school.</p>
      </div>

      {/* Stats Grid */}
      <div className="stats-grid">
        {stats.map((stat, index) => (
          <div key={index} className="stat-card">
            <h3>{stat.title}</h3>
            <div className="value">{stat.value}</div>
            <div className={`trend ${stat.isPositive ? 'positive' : 'negative'}`}>
              {stat.icon}
              <span>{stat.trend}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="quick-actions">
        {quickActions.map((action, index) => (
          <button
            key={index}
            className="action-card"
            onClick={action.onClick}
            style={{ '--action-color': action.color }}
          >
            <div className="action-icon">{action.icon}</div>
            <span>{action.title}</span>
          </button>
        ))}
      </div>

      {/* BNS Department Meetings */}
      <div className="meeting-section">
        <h2>
          <FaCalendarAlt />
          BNS Department Meetings
        </h2>
        <div className="meeting-list">
          {meetings.map((meeting) => (
            <div key={meeting.id} className={`meeting-item ${meeting.status}`}>
              <div className="meeting-icon">
                {meeting.icon}
              </div>
              <div className="meeting-details">
                <h4>{meeting.title}</h4>
                <p>{meeting.description}</p>
                <div className="meeting-meta">
                  <span>
                    <FaClock />
                    {meeting.time}
                  </span>
                  <span>
                    <FaMapMarkerAlt />
                    {meeting.location}
                  </span>
                </div>
              </div>
              <div className={`meeting-status ${meeting.status}`}>
                {meeting.status.charAt(0).toUpperCase() + meeting.status.slice(1)}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Activity */}
      <div className="recent-activity">
        <h2>Recent Activity</h2>
        <div className="activity-list">
          {recentActivities.map((activity) => (
            <div key={activity.id} className="activity-item">
              <div className="activity-icon">
                {activity.icon}
              </div>
              <div className="activity-details">
                <h4>{activity.title}</h4>
                <p>{activity.description}</p>
              </div>
              <div className="activity-time">
                {activity.time}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard; 