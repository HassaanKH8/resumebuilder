import React from "react";
import "../Resume.css";
import jsPDF from "jspdf";
import html2canvas from 'html2canvas';

const ResumePage = ({ personalInfo, educationInfo, workExperience, skills }) => {

    const handleDownload = () => {
        const input = document.getElementById('resumeContent');

        html2canvas(input, {
            scale: 2
        }).then((canvas) => {
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF('p', 'mm', 'a4');
            const pageWidth = pdf.internal.pageSize.width;
            const pageHeight = pdf.internal.pageSize.height;

            pdf.addImage(imgData, 'PNG', 0, 0, pageWidth, pageHeight);
            pdf.save(`${personalInfo.fullname}.pdf`);
        });

    };

    return (
        <div className="container">
            <button onClick={handleDownload} className="printButton">
                Download Resume
            </button>
            <div id="resumeContent" className="resumePage">
                <header className="resumeHeader">
                    <div className="headerInfo">
                        <h1 className="fullName">{personalInfo.fullname}</h1>
                        <p className="contactInfo">
                            {personalInfo.email} | {personalInfo.phoneNo}
                        </p>
                    </div>
                </header>

                <div className="mainContent">
                    <div className="contentColumn">
                        {educationInfo[0].wanttoadd && (
                            <section className="educationSection">
                                <h2>Education</h2>
                                {educationInfo.map((edu, index) => (
                                    <div key={index} className="educationItem">
                                        <p className="institution">{edu.instituteType}</p>
                                        <p className="institution2">{edu.instituteName}</p>
                                        <p>{edu.levelCompleted}, {edu.graduationMonth} {edu.graduationYear}</p>
                                    </div>
                                ))}
                            </section>
                        )}

                        {workExperience[0].wanttoadd && (
                            <section className="experienceSection">
                                <h2>Experience</h2>
                                {workExperience.map((work, index) => (
                                    <div key={index} className="experienceItem">
                                        <p className="jobTitle">{work.jobTitle}</p>
                                        <p className="companyName">{work.companyName}</p>
                                        <p className="workDates">
                                            {work.startDate} - {work.isCurrent ? "Present" : work.endDate}
                                        </p>
                                    </div>
                                ))}
                            </section>
                        )}
                    </div>

                    <div className="contentColumn">
                        {skills.length > 0 && (
                            <section className="skillsSection">
                                <h2>Skills</h2>
                                <ul className="skillsList">
                                    {skills.map((skill, index) => (
                                        <li key={index}>{skill}</li>
                                    ))}
                                </ul>
                            </section>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResumePage;
