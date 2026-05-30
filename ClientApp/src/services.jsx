import React from 'react';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('react-services');
if (container) {
    createRoot(container).render(<Services />);
}

const services = [
    {
        title: 'Project Management',
        desc: 'Project management encompasses all tasks necessary to ensure the project is run effectively and efficiently to achieve the required deliverables on time and on budget.',
        bullets: [
            'Define scope and create project plan document',
            'Identify, analyze, plan for, and monitor risks',
            'Document requirements and implementation processes',
            'Plan for changes to scope and address when they arise',
            'Manage project for milestones & deliverables',
        ],
    },
    {
        title: 'Application Design',
        desc: 'Initial discussions about requirements take place during the kick-off meeting and are finalized during the design phase. There are four main sets of requirements:',
        bullets: [
            'User interface requirements',
            'Business requirements',
            'Technical requirements',
            'Security requirements',
        ],
    },
    {
        title: 'Graphic Design',
        desc: 'The importance of user interface design cannot be understated — how the application looks and feels directly impacts the user\'s willingness to use the app regularly.',
        bullets: [
            'Provide design for user interface and user experience',
            'Consider cross-platform differences and tablet/smartphone form factors',
            'Validate design with key stakeholders',
        ],
    },
    {
        title: 'Application Development',
        desc: 'The development phase comprises all tasks to realize the requirements and designs in a mobile application, focusing on visual, navigational, and functional aspects.',
        bullets: [
            'Configure application for uploading and downloading',
            'Configure app workflow and UI elements to match design',
            'Unit testing to verify structural integrity from a visual perspective',
        ],
    },
    {
        title: 'Quality Assurance Testing Support',
        desc: 'The QA team creates test cases based on the business requirement document and tests across a sample set of devices and simulators across all desired platforms.',
        bullets: [
            'Test across multiple device types and operating system versions',
            'Address issues identified during testing cycles',
            'Sign-off process once application is deemed production-ready',
        ],
    },
    {
        title: 'Deployment Support',
        desc: 'Deployment must be planned to ensure all requirements and timelines are met and all required processes are followed.',
        bullets: [
            'Define deployment strategy and marketing',
            'Ensure infrastructure is correctly defined and built',
            'Follow internal release processes to avoid last-minute roadblocks',
            'Sign up for developer and distribution accounts',
            'Execute knowledge transfer and continuing support plan',
            'Monitor and plan for growth',
        ],
    },
];

export default function Services() {
    return (
        <div className="ams-page">
            <div className="ams-services-hero">
                <h2>Our Services</h2>
                <p>
                    Agile Mobile Solutions services are organized into logical milestones.
                    Project management spans all milestones and is described separately for clarity.
                </p>
            </div>

            {services.map((s, i) => (
                <div className="ams-service-card" key={s.title}>
                    <div className="ams-service-num">{i + 1}</div>
                    <div className="ams-service-body">
                        <h3>{s.title}</h3>
                        <p>{s.desc}</p>
                        <ul className="ams-service-bullets">
                            {s.bullets.map((b) => (
                                <li key={b}>{b}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            ))}
        </div>
    );
}
