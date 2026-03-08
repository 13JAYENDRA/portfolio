import React from 'react';
import './ExtracurricularActivities.css';

const activities = [
  {
    title: "SMM Team Core Member",
    organization: "AI Club VIT Bhopal",
    description: "Social media management and AI project coordinator",
    icon: "📱",
    image: "https://picsum.photos/id/312/400/300"
  },
  {
    title: "EM Team Core Member",
    organization: "Linux Club",
    description: "Event management and technical workshop organization",
    icon: "🛠️",
    image: "https://picsum.photos/id/300/400/300"
  },
  {
    title: "Volleyball Player",
    organization: "Svabhimani Club Akola",
    description: "Team sports and leadership development",
    icon: "🏐",
    image: "https://picsum.photos/id/315/400/300"
  }
];

const ExtracurricularActivities: React.FC = () => {
  return (
    <div className="extracurricular-page">
      <div className="quote">
        <p>"Beyond the classroom, building skills and communities." 🌟</p>
      </div>

      <div className="activities-section">
        <h2>Extracurricular Activities</h2>
        <div className="activities-grid">
          {activities.map((activity, index) => (
            <div key={index} className="activity-card" style={{ animationDelay: `${index * 0.2}s`, backgroundImage: `url(${activity.image})` }}>
              <div className="activity-overlay">
                <div className="activity-icon">{activity.icon}</div>
                <div className="activity-content">
                  <h3>{activity.title}</h3>
                  <p className="organization">{activity.organization}</p>
                  <p className="description">{activity.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="highlights-section">
        <h3>Key Highlights</h3>
        <ul className="highlights-list">
          <li>Leadership and team coordination experience</li>
          <li>Event organization and management expertise</li>
          <li>Passionate about technology and innovation</li>
          <li>Active community contributor</li>
          <li>Sports and wellness advocate</li>
        </ul>
      </div>
    </div>
  );
};

export default ExtracurricularActivities;
