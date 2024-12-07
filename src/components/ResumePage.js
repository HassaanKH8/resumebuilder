import React, { useState } from "react";
import "../Resume.css";
import jsPDF from "jspdf";
import html2canvas from 'html2canvas';

const ResumePage = ({ personalInfo, educationInfo, workExperience, skills, avatarImage, setimageSubmitted }) => {

    const [template, setTemplate] = useState(1);

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
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                <img alt='backarrow' src={require("../assets/arrow.png")} style={{ height: 22, width: 22, marginRight: 20, cursor: 'pointer' }} onClick={() => { setimageSubmitted(false) }} />
                <button onClick={handleDownload} className="printButton">
                    Download Resume
                </button>
            </div>

            <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                <select onChange={(e) => setTemplate(Number(e.target.value))} value={template}>
                    <option value={1}>Template 1 (Classic)</option>
                    <option value={2}>Template 2 (Modern)</option>
                    <option value={3}>Template 3 (Sleek)</option>
                </select>
            </div>

            <div id="resumeContent" className={`resumePage template-${template}`}>
                <header className="resumeHeader">
                    <img src={URL.createObjectURL(avatarImage)} style={{height: 100, width: 100, objectFit: 'contain', borderRadius: '50%', marginBottom: 10}}/>
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
