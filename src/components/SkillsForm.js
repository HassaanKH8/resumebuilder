import React, { useState } from "react";

const SkillsForm = ({ setSubmited, submittedSkills, setSubmittedSkills, setWESubmitted }) => {
    const [skills, setSkills] = useState(submittedSkills || [""]);

    const handleSkillChange = (index, value) => {
        const updatedSkills = [...skills];
        updatedSkills[index] = value;
        setSkills(updatedSkills);
    };

    const handleAddSkill = () => {
        setSkills([...skills, ""]);
    };

    const handleRemoveSkill = (index) => {
        const updatedSkills = skills.filter((_, i) => i !== index);
        setSkills(updatedSkills);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validSkills = skills.filter(skill => skill.trim() !== "");
        setSubmited(true)
        setSubmittedSkills(validSkills);
    };

    return (
        <div className="skillsForm">
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                <img alt='backarrow' src={require("../assets/arrow.png")} style={{ height: 22, width: 22, marginRight: 20, marginTop: 20, cursor: 'pointer' }} onClick={() => { setWESubmitted(false) }} />
                <h1 className="personalinfoheading">Add Your Skills</h1>
            </div>
            <form onSubmit={handleSubmit}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 10 }}>
                    {skills.map((skill, index) => (
                        <div key={index} className="skill-entry">
                            <input
                                type="text"
                                className="entryinput2"
                                value={skill}
                                placeholder="Enter Skill"
                                onChange={(e) => handleSkillChange(index, e.target.value)}
                            />
                            <img
                                alt="delete"
                                onClick={() => handleRemoveSkill(index)}
                                src={require('../assets/trash.png')}
                                style={{ opacity: 0.6, width: 30, height: 30 }} />
                        </div>
                    ))}
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 20 }}>
                    <button type="button" onClick={handleAddSkill} className="add-skill-btn">
                        Add Another Skill
                    </button>
                    <button type="submit" className="submit-btn">
                        Submit Skills
                    </button>
                </div>
            </form>
        </div>
    );
};

export default SkillsForm;
