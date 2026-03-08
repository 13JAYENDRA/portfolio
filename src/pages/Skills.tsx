import React, { useEffect, useState } from 'react';
import './Skills.css';
import { getSkills } from '../queries/getSkills';

import { FaReact, FaNodeJs, FaAws, FaDocker, FaJava } from 'react-icons/fa';
import { SiRubyonrails, SiTypescript, SiPostgresql, SiMysql, SiKubernetes, SiGooglecloud, SiSpringboot, SiPhp, SiNetlify, SiHeroku, SiRabbitmq, SiImessage, SiPython } from 'react-icons/si';
import { Skill } from '../types';

// Import local images
import cppImage from '../images/C++.png';
import gitImage from '../images/git.png';
import javaImage from '../images/java.jpeg';
import mlImage from '../images/ml.jpg';
import pythonImage from '../images/Python-logo-notext.svg.png';

// Additional skill images uploaded by user
import opencvImage from '../images/Computer-Vision.jpg';
import mediapipeImage from '../images/mediapipe.png';
import tensorflowImage from '../images/TensorFlow_logo.png';
import stableBaselinesImage from '../images/stable baselines3.jpg';
import flaskImage from '../images/flask.png';
import fastapiImage from '../images/fastapi.png';
import streamlitImage from '../images/streamlit.png';
import celeryImage from '../images/celery.jpg';
import reactImage from '../images/react.png';
import typescriptImage from '../images/type script.png';
import tailwindcssImage from '../images/tailwandcss.png';
import rechartsImage from '../images/recharts.jpg';
import redisImage from '../images/redis.png';
import dockerImage from '../images/dcker.png';

const iconMap: { [key: string]: JSX.Element } = {
  SiRubyonrails: <SiRubyonrails />,
  FaNodeJs: <FaNodeJs />,
  SiSpringboot: <SiSpringboot />,
  FaJava: <FaJava />,
  SiPhp: <SiPhp />,
  FaReact: <FaReact />,
  SiTypescript: <SiTypescript />,
  FaAws: <FaAws />,
  FaDocker: <FaDocker />,
  SiPostgresql: <SiPostgresql />,
  SiMysql: <SiMysql />,
  SiKubernetes: <SiKubernetes />,
  SiGooglecloud: <SiGooglecloud />,
  SiHeroku: <SiHeroku />,
  SiNetlify: <SiNetlify />,
  SiRabbitmq: <SiRabbitmq />,
  SiImessage: <SiImessage />,
  SiPython: <SiPython />,
};

const skillImages: { [key: string]: string } = {
  'Python': pythonImage,
  'React': reactImage,
  'JavaScript': 'https://picsum.photos/id/151/400/300',
  'Java': javaImage,
  'Node.js': 'https://picsum.photos/id/180/400/300',
  'Ruby on Rails': 'https://picsum.photos/id/92/400/300',
  'Spring Boot': 'https://picsum.photos/id/120/400/300',
  'HTML5': 'https://picsum.photos/id/181/400/300',
  'CSS3': 'https://picsum.photos/id/199/400/300',
  'MySQL': 'https://picsum.photos/id/168/400/300',
  'PostgreSQL': 'https://picsum.photos/id/168/400/300',
  'AWS': 'https://picsum.photos/id/207/400/300',
  'Docker': dockerImage,
  'Kubernetes': 'https://picsum.photos/id/195/400/300',
  'Google Cloud': 'https://picsum.photos/id/201/400/300',
  'Git': 'https://picsum.photos/id/198/400/300',
  'C++': cppImage,
  'Git & GitHub': gitImage,
  'Machine Learning': mlImage,
  'OpenCV': opencvImage,
  'MediaPipe': mediapipeImage,
  'TensorFlow': tensorflowImage,
  'Stable-Baselines3': stableBaselinesImage,
  'Flask': flaskImage,
  'FastAPI': fastapiImage,
  'Streamlit': streamlitImage,
  'Celery': celeryImage,
  'TypeScript': typescriptImage,
  'TailwindCSS': tailwindcssImage,
  'Recharts': rechartsImage,
  'Redis': redisImage,
};

const Skills: React.FC = () => {

  const [skillsData, setSkillsData] = useState<Skill[]>([]);

  useEffect(() => {
    async function fetchSkills() {
      const data = await getSkills();
      setSkillsData(data);
    }

    fetchSkills()
  }, []);

  if (skillsData.length === 0) return <div>Loading...</div>;

  const skillsByCategory = skillsData.reduce((acc: any, skill: any) => {
    if (!acc[skill.category]) acc[skill.category] = [];
    acc[skill.category].push(skill);
    return acc;
  }, {});


  return (
    <div className="skills-container">
      {Object.keys(skillsByCategory).map((category, index) => (
        <div key={index} className="skill-category">
          <h3 className="category-title">{category}</h3>
          <div className="skills-grid">
            {skillsByCategory[category].map((skill: any, idx: number) => (
              <div key={idx} className="skill-card" style={{ backgroundImage: `url(${skillImages[skill.name] || 'https://picsum.photos/id/200/400/300'})` }}>
                <div className="skill-overlay">
                  <div className="icon">{iconMap[skill.icon] || <FaReact />}</div>
                  <h3 className="skill-name">
                    {skill.name.split('').map((letter: any, i: number) => (
                      <span key={i} className="letter" style={{ animationDelay: `${i * 0.05}s` }}>
                        {letter}
                      </span>
                    ))}
                  </h3>
                  <p className="skill-description">{skill.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
