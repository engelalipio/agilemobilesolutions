import React from 'react';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('react-services');
if (container) {
    createRoot(container).render(<Services />);
}

export default function Services() {
    return (
        <div> 
            <section class="content-wrapper main-content clear-fix">
            <h3>The Services (React)</h3>
             <h3>performed by Agile Mobile Solutions, are organized into various logical milestones described below.</h3>
                <p>Please note that project management will span into all milestones but is described separately for clarity purposes.</p>              
            <h3>Description of Services:</h3>
            <ol class="round">
                <li >
                    <h5>Project Management</h5>
                    Project management encompasses all of the tasks necessary to ensure that the project is run effectively and efficiently to achieve the required deliverables on time and on budget. It plays an integral part in each of the milestones detailed in the following sections. <br />
                    Below are listed the primary tasks that comprise Agile Mobile Solutions Software’s project management services:<br />
                    •	Define scope and create project plan document<br />
                    •	Identify, analyze, plan for, and monitor risks<br />
                    •	Document requirements and implementation processes<br />
                    •	Plan for changes to scope and address when they arise<br />
                    •	Manage project for milestones & deliverables<br />
                </li>
                <li>
                    <h5>Application Design</h5>
                    Initial discussions about requirements will take place during kick-off meeting and finalized and adjusting during design phase. <br />
                    There are four main sets of requirements, user interface requirements, business requirements, technical requirements and security requirements.
                </li>
                <li>
                    <h5>Graphic Design</h5>
                    The importance of user interface design cannot be understated as how the application looks and feels has a direct impact on the user’s perception of the application and willingness to use the app on a regular basis. <br />
                    An application can provide outstanding functionality and still receive poor ratings from users if it does not look good.<br />
                    •	Provide design for user interface and user experience<br />
                    •	Consider cross platform differences and tablet/smartphone form factor<br />
                    •	Validate design with key stakeholders<br />
                </li>
                <li>
                    <h5>Application Development</h5>
                    The development phase comprises all of the tasks to realize the requirements and designs previously created in a mobile application. <br />
                    The Application Configuration phase focuses on the visual, navigational, and functional aspects of the application from an end user’s perspective and typically consists of the following high level tasks:<br />
                    •	Configure application for uploading and downloading<br />
                    •	Configure app workflow and UI elements to match design<br />
                    •	Agile Mobile Solutions will perform unit testing of the configuration to verify that the application is structured appropriately from a visual perspective.<br />
                </li>
                <li>
                    <h5>Quality Assurance Testing Support</h5>
                    The Customer’s QA team will create test cases based off the business requirement document and test on a sample set of devices and simulators across all desired platforms to provide a valid representation of the target user base.<br />
                    Agile Mobile Solutions implementation team will work with the QA team to address issues that arise during testing and the QA team will then sign off on the application once it is deemed ready to release to production.
                </li>
                <li>
                    <h5>Deployment Support</h5>
                    Deployment must be planned to ensure that all requirements and timelines are met and all required processes are followed. The following high level items should be considered in the deployment plan.<br />
                    •	Define deployment strategy and marketing<br />
                    •	Ensure infrastructure is correctly defined and built<br />
                    •	Follow any internal release processes to avoid last minute roadblocks<br />
                    •	Sign up for developer and distribution accounts<br />
                    •	Execute knowledge transfer/training and continuing support plan<br />
                    •	Monitor and plan growth<br />
                    •	Identify app owner and provide knowledge to support and enhance application.<br />
                </li>
                </ol>
        </section > 
        </div>
    );
}