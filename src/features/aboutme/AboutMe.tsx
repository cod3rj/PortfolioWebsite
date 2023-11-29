import { useState } from 'react';
import { motion } from 'framer-motion';
import './AboutMe.scss';
import About from "./tabs/About.tsx";
import Experience from "./tabs/Experience.tsx";
import Skills from "./tabs/Skills.tsx";

const AboutMe = () => {
    const [selectedTab, setSelectedTab] = useState('about');

    const tabs = [
        { id: 'about', label: 'Personal Info' },
        { id: 'experience', label: 'Qualifications' },
        { id: 'skills', label: 'Skills' },
        // Add more tabs as needed
    ];

    const renderTabContent = () => {
        // Implement content for each tab
        switch (selectedTab) {
            case 'about':
                return <About/>;
            case 'experience':
                return <Experience/>;
            case 'skills':
                return <Skills/>;
            // Add more cases as needed
            default:
                return null;
        }
    };

    const handleDownloadResume = () => {
        // Replace the link with the actual path to your resume.pdf
        const resumePath = '/path/to/resume.pdf';
        const link = document.createElement('a');
        link.href = resumePath;
        link.target = '_blank'; // Open in a new tab/window
        link.download = 'resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <>
            <div className="background">
                <div className="about-me-container">
                    <div className="imageContainer">
                        {/* SVG Blob Background */}
                        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                            <path fill="#F1C21B" d="M44.4,-58.2C59.7,-50,75.6,-39.9,76.6,-27.1C77.7,-14.4,63.8,0.9,53.9,
                            13.3C44.1,25.6,38.1,35,29.8,42.3C21.5,49.6,10.7,54.8,-2.4,58.1C-15.5,61.4,-31,62.8,-42.8,56.6C-54.6,50.4,-62.6,36.7,
                            -66,22.4C-69.3,8.1,-68,-6.8,-63.5,-20.6C-58.9,-34.4,-51.2,-47.1,-40.1,-56.6C-29,-66.1,-14.5,-72.5,0.1,-72.6C14.6,-72.6
                            ,29.2,-66.4,44.4,-58.2Z" transform="translate(100 100)" />
                        </svg>
                        {/* Profile Image */}
                        <img src="/assets/animatedMe.png" alt="" />
                        <button onClick={handleDownloadResume}>Download My Resume</button>
                    </div>
                    <div className="tabContainer">
                        <div className="tabs">
                            {tabs.map((tab) => (
                                <motion.div
                                    key={tab.id}
                                    className={`tab ${selectedTab === tab.id ? 'active' : ''}`}
                                    whileHover={{ scale: 1.1 }}
                                    onClick={() => setSelectedTab(tab.id)}
                                >
                                    {tab.label}
                                </motion.div>
                            ))}
                        </div>
                        <div className="content">{renderTabContent()}</div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutMe;
