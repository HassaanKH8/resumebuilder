import React, { useState } from "react";
import '../App.css'
import EducationForm from "./EducationForm";
import WorkExperienceForm from "./WorkExperienceForm";
import SkillsForm from "./SkillsForm";
import ResumePage from "./ResumePage";

const HomeScreen = () => {

  const [fname, setFname] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [personalInfoCompleted, setPersonalInfoCompleted] = useState(false);
  const [edInfoCompleted, setEdInfoCompleted] = useState(false);
  const [WESubmitted, setWESubmitted] = useState(false);
  const [skillsSubmitted, setSkillsSubmitted] = useState(false);

  const [personalInfo, setPersonalInfo] = useState({
    fullname: "",
    phoneNo: "",
    email: "",
  })

  const [edList, setEdList] = useState([
    {
      wanttoadd: false,
      instituteType: "",
      instituteName: "",
      levelCompleted: "",
      graduationMonth: "",
      graduationYear: "",
    },
  ]);
  const [skills, setSkills] = useState([]);

  const [WExperienceList, setWExperienceList] = useState([
    {
      wanttoadd: false,
      jobTitle: "",
      companyName: "",
      startDate: "",
      endDate: "",
      isCurrent: false,
    },
  ]);

  const handlePhoneChange = (e) => {
    const value = e.target.value;
    if (!/^[\d()+ -]*$/.test(value)) {
      alert("Only numeric values are allowed.");
      return
    }
    else {
      setPhone(value)
    }
  }

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value)
  }

  const handleNameChange = (e) => {
    const value = e.target.value;
    setFname(value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email !== "" && phone !== "" && fname !== "") {
      setPersonalInfoCompleted(true)
      setPersonalInfo({
        fullname: fname,
        phoneNo: phone,
        email: email,
      })
    }
  }

  return (
    <div className="homepage">
      <div className="navbar">
        <h1 className="heading">Awesome Resume Builder</h1>
      </div>
      <div className="bottomSection">
        {personalInfoCompleted ? (
          <div>
            {edInfoCompleted ? (
              <div>
                {WESubmitted ? (
                  <div>
                    {skillsSubmitted ? (
                      <ResumePage
                        personalInfo={personalInfo}
                        educationInfo={edList}
                        workExperience={WExperienceList}
                        skills={skills}
                      />
                    ) : (
                      <SkillsForm setSubmited={setSkillsSubmitted} setSubmittedSkills={setSkills} submittedSkills={skills} />
                    )}
                  </div>
                ) : (
                  <WorkExperienceForm setWEDone={setWESubmitted} workExperienceList={WExperienceList} setWorkExperienceList={setWExperienceList} />
                )}
              </div>
            ) : (
              <EducationForm setEdusaved={setEdInfoCompleted} educationList={edList} setEducationList={setEdList} />
            )}
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <h1 className="personalinfoheading">Personal Info</h1>
            <div style={{ display: "flex", flexDirection: 'column', alignItems: 'center', width: "300px", justifySelf: 'center' }}>
              <p className="entrylabel">Full Name:</p>
              <input
                className="entryinput"
                placeholder="Name"
                value={fname}
                required
                onChange={handleNameChange} />
            </div>
            <h1 className="contactinfoheading">Contact Info</h1>
            <div style={{ display: "flex", flexDirection: 'column', alignItems: 'center', width: "300px", justifySelf: 'center' }}>
              <p className="entrylabel">Phone Number :</p>
              <input
                className="entryinput"
                placeholder="Phone No."
                value={phone}
                required
                onChange={handlePhoneChange} />
              <p className="entrylabel">Email:</p>
              <input
                type="email"
                className="entryinput"
                placeholder="Email"
                value={email}
                required
                onChange={handleEmailChange} />
              <button type="submit" className="submit-btn2">SUBMIT</button>
            </div>
          </form>
        )}
      </div>
    </div >
  )
}

export default HomeScreen;