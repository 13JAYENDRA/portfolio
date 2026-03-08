import React from "react";
import "./Blogs.css";
import { FaMedium } from "react-icons/fa";

const blogs = [
  {
    title: "CNN Vs RasNet",
    platform: "Medium",
    icon: <FaMedium />,
    link: "https://medium.com/@jayendrarathod07/how-skip-connections-revolutionized-deep-learning-my-hands-on-journey-with-cnns-and-resnet-on-1ad908d443da",
    description:
      "How Skip Connections Revolutionized Deep Learning: My Hands-on Journey with CNNs and ResNet on CIFAR-10",
  },
  {
    title: "Virtual Keyboard using OpenCV for Specially-Abled",
    platform: "researchgate.net",
    icon: <FaMedium />,
    link: "https://https://www.researchgate.net/publication/380720477_Gesture-Controlled_Virtual_Keyboard_using_OpenCV_for_Specially-Abled",
    description:
      "This research proposes a vision-based virtual keyboard implemented using Python and OpenCV, allowing touchless text input through real-time gesture detection and tracking.",
  },
  {
    title: "Random Forest vs XGBoost",
    platform: "Medium",
    icon: <FaMedium />,
    link: "https://medium.com/@jayendrarathod07/random-forest-vs-xgboost-which-one-should-you-use-and-why-0e738df7ab09",
    description:
      "A comparison of Random Forest and XGBoost algorithms in terms of performance, use cases, and implementation.",
  },
];

const Blogs: React.FC = () => {
  return (
    <div className="blogs-container">
      <h2 className="blogs-title">Blog & Research papers</h2>
      <p className="blogs-intro">
        A collection of my thoughts and tutorials on software development.
      </p>
      <div className="blogs-grid">
        {blogs.map((blog, index) => (
          <a
            href={blog.link}
            key={index}
            target="_blank"
            rel="noopener noreferrer"
            className="blog-card"
            style={{ "--delay": `${index * 0.2}s` } as React.CSSProperties}
          >
            <div className="blog-icon animated-icon">{blog.icon}</div>
            <div className="blog-info animated-text">
              <h3 className="blog-title">{blog.title}</h3>
              <p className="blog-description">{blog.description}</p>
              <span className="blog-platform">{blog.platform}</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
