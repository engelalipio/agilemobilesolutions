import React from 'react';
import { createRoot } from 'react-dom/client';

import mcsdImg    from './resources/Engel_MCSD.png';
import mcseImg    from './resources/Engel_MCSE.png';
import tuDevImg   from './resources/Engel_TU_DEV.png';
import tuMgrImg   from './resources/Engel_TU_DEV_Manager.png';
import icagilePdf from './resources/ICAgile_Certificate.pdf';

const container = document.getElementById('react-about');
if (container) {
    createRoot(container).render(<About />);
}

const skills = [
    {
        title: 'Project Management & Software Life Cycle',
        color: '#1d4ed8',
        tags: ['SDLC', 'SCRUM', 'Sprints', 'Backlogs', 'Forecasting', 'Taxonomy'],
    },
    {
        title: 'Programming Languages',
        color: '#065f46',
        tags: ['C#', 'Python', 'Java', 'Objective-C', 'C++', 'Visual Basic.NET', 'FlexBuilder', 'P-SQL', 'T-SQL', 'PHP'],
    },
    {
        title: 'Java Frameworks & IDEs',
        color: '#5b21b6',
        tags: ['J2EE', 'MVC', 'Spring', 'Struts', 'Hibernate', 'JSP', 'JSF', 'Facelets', 'Android', 'AI Software Development', 'MCP Server', 'LLMs', 'Claude', 'ChatGPT', 'Gemini', 'Devin AI'],
    },
    {
        title: '.NET Frameworks',
        color: '#92400e',
        tags: ['MVC.NET', 'ASP.NET', 'Windows Workflow Foundation', 'WCF', 'Component Development'],
    },
    {
        title: 'SQL & Database',
        color: '#991b1b',
        tags: ['DDL Object Creation', 'AWR Investigation', 'DML Script Creation', 'Explain Plan'],
    },
    {
        title: 'iOS Development',
        color: '#075985',
        tags: ['Objective-C', 'MVC', 'XCode', 'Interface Builder'],
    },
];

export default function About() {
    return (
        <div className="ams-page">
            <div className="ams-about-header">
                <h2>Experience Summary</h2>
                <p>Over 25 years delivering enterprise software, mobile applications, and cloud solutions.</p>
            </div>

            <p className="ams-section-label">Technical skills</p>
            {skills.map((s) => (
                <div className="ams-skill-card" key={s.title}>
                    <h3 style={{ color: s.color }}>&#11015; {s.title}</h3>
                    <div>
                        {s.tags.map((t) => (
                            <span
                                className="ams-skill-tag"
                                key={t}
                                style={{ background: s.color + '18', color: s.color }}
                            >
                                {t}
                            </span>
                        ))}
                    </div>
                </div>
            ))}

            <p className="ams-section-label" style={{ marginTop: 32 }}>Certifications &amp; memberships</p>

            {/* Microsoft */}
            <div className="ams-cert-group">
                <div className="ams-cert-group-header">
                    <div className="ams-cert-dot-lg" style={{ background: '#1d4ed8' }} />
                    <h3>Microsoft Certifications</h3>
                </div>
                <p>Microsoft Certified Professional &mdash; ID <strong>1017311</strong> since 1998</p>
                <ul className="ams-cert-bullets">
                    <li>Microsoft Certified Systems Engineer &mdash; MCSE</li>
                    <li>Microsoft Certified Solutions Developer &mdash; MCSD</li>
                    <li>Microsoft Certified Trainer &mdash; MCT</li>
                </ul>
                <div className="ams-cert-artifacts">
                    <a className="ams-artifact-link" href={mcsdImg} target="_blank" rel="noopener noreferrer">
                        🖼 MCSD Certificate
                    </a>
                    <a className="ams-artifact-link" href={mcseImg} target="_blank" rel="noopener noreferrer">
                        🖼 MCSE Certificate
                    </a>
                    <a className="ams-artifact-link" href={tuDevImg} target="_blank" rel="noopener noreferrer">
                        🖼 TU Developer
                    </a>
                    <a className="ams-artifact-link" href={tuMgrImg} target="_blank" rel="noopener noreferrer">
                        🖼 TU Dev Manager
                    </a>
                </div>
            </div>

            {/* iOS */}
            <div className="ams-cert-group">
                <div className="ams-cert-group-header">
                    <div className="ams-cert-dot-lg" style={{ background: '#065f46' }} />
                    <h3>iOS/Mac &amp; Safari Developer Programs</h3>
                </div>
                <p>Member since <strong>2011</strong></p>
                <ul className="ams-cert-bullets">
                    <li>Developer ID &mdash; <strong>174054634</strong></li>
                    <li>Team ID &mdash; <strong>B7QMBU3EE6</strong></li>
                </ul>
            </div>

            {/* BlackBerry */}
            <div className="ams-cert-group">
                <div className="ams-cert-group-header">
                    <div className="ams-cert-dot-lg" style={{ background: '#5b21b6' }} />
                    <h3>BlackBerry Enterprise Council</h3>
                </div>
                <p>Member as of <strong>2013</strong></p>
                <ul className="ams-cert-bullets">
                    <li>Personally selected by RIM&rsquo;s Chief Mobility Officer to join BlackBerry&rsquo;s Enterprise Council</li>
                    <li>Attended BlackBerry Live 2013 in Orlando by invitation</li>
                </ul>
            </div>

            {/* ICAgile */}
            <div className="ams-cert-group">
                <div className="ams-cert-group-header">
                    <div className="ams-cert-dot-lg" style={{ background: '#166534' }} />
                    <h3>ICAgile Certified Professional</h3>
                </div>
                <ul className="ams-cert-bullets">
                    <li>Agile Programming &mdash; ICP-PRG</li>
                </ul>
                <div className="ams-cert-artifacts">
                    <a className="ams-artifact-link pdf" href={icagilePdf} target="_blank" rel="noopener noreferrer">
                        📄 ICAgile Certificate (PDF)
                    </a>
                    <a
                        className="ams-artifact-link external"
                        href="https://icagile.com/Agile-Professionals/Find-Agile-Professionals/ctl/UserDetails/mid/938/uid/da5f3c63-f996-49e6-82cd-81529d64abb9"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        🔗 ICAgile Profile
                    </a>
                </div>
            </div>
        </div>
    );
}
