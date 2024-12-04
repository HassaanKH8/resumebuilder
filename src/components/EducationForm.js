import React, { useState } from "react";
import "../App.css";

const EducationForm = ({ setEdusaved, educationList, setEducationList }) => {
  const [wantToAddE, setWantToAddE] = useState(false);

  const handleChange = (index, field, value) => {
    const updatedList = [...educationList];
    updatedList[index][field] = value;
    setEducationList(updatedList);
  };

  const handleAddEducation = () => {
    setEducationList([
      ...educationList,
      {
        wanttoadd: wantToAddE,
        instituteType: "",
        instituteName: "",
        levelCompleted: "",
        graduationMonth: "",
        graduationYear: "",
      },
    ]);
  };

  const handleRemoveEducation = (index) => {
    const updatedList = educationList.filter((_, i) => i !== index);
    setEducationList(updatedList);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(educationList);
    setEdusaved(true);
    setEducationList(educationList);
  };

  const handleToggleWantToAdd = (checked) => {
    setWantToAddE(checked);
    const updatedList = educationList.map((edu) => ({
      ...edu,
      wanttoadd: checked,
    }));
    setEducationList(updatedList);
  };

  return (
    <div>
      <h1 className="personalinfoheading">Education Info</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: 10,
          alignItems: "center",
        }}
      >
        <p
          style={{
            display: "inline",
            fontFamily: "EB Garamond",
            fontSize: 20,
            color: "#36454f",
            marginRight: 10,
          }}
        >
          Want to add education info?
        </p>
        <input
          style={{
            accentColor: "#36454f",
            color: "#efeee9",
            width: "15px",
            height: "15px",
          }}
          type="checkbox"
          checked={wantToAddE}
          onChange={(e) => handleToggleWantToAdd(e.target.checked)}
        />
      </div>
      {wantToAddE ? (
        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            width: "90%",
            justifySelf: "center",
            alignItems: "center",
          }}
        >
          {educationList.map((edu, index) => (
            <div key={index} className="educationEntry">
              <h3 className="edentry">Entry {index + 1}</h3>
              <div className="edform">
                <label className="entrylabel">Institute Type:</label>
                <select
                  className="edentryinput"
                  value={edu.instituteType}
                  required
                  onChange={(e) =>
                    handleChange(index, "instituteType", e.target.value)
                  }
                >
                  <option value="">Select an Institute</option>
                  <option value="High School">High School</option>
                  <option value="College">College</option>
                  <option value="University">University</option>
                </select>
              </div>

              <div className="edform">
                <label className="entrylabel">Institute Name:</label>
                <input
                  required
                  className="edentryinput"
                  value={edu.instituteName}
                  onChange={(e) =>
                    handleChange(index, "instituteName", e.target.value)
                  }
                  placeholder="Institute Name"
                />
              </div>

              <div className="edform">
                <label className="entrylabel">Level Completed:</label>
                <select
                  className="edentryinput"
                  value={edu.levelCompleted}
                  required
                  onChange={(e) =>
                    handleChange(index, "levelCompleted", e.target.value)
                  }
                >
                  <option value="">Select Education Level</option>
                  <option value="Graduated High School">Graduated High School</option>
                  <option value="Completed Bachelor's Degree">
                    Bachelor's Degree
                  </option>
                  <option value="Master's Degree">Master's Degree</option>
                </select>
              </div>

              <div className="edform">
                <label className="entrylabel">Graduation Month:</label>
                <select
                  className="edentryinput"
                  value={edu.graduationMonth}
                  required
                  onChange={(e) =>
                    handleChange(index, "graduationMonth", e.target.value)
                  }
                >
                  <option value="">Select Month</option>
                  {[
                    "January",
                    "February",
                    "March",
                    "April",
                    "May",
                    "June",
                    "July",
                    "August",
                    "September",
                    "October",
                    "November",
                    "December",
                  ].map((month) => (
                    <option key={month} value={month}>
                      {month}
                    </option>
                  ))}
                </select>
              </div>

              <div className="edform">
                <label className="entrylabel">Graduation Year:</label>
                <input
                  type="number"
                  className="edentryinput"
                  placeholder="Year"
                  required
                  min="1900"
                  max="2100"
                  value={edu.graduationYear}
                  onChange={(e) =>
                    handleChange(index, "graduationYear", e.target.value)
                  }
                />
              </div>

              <button
                type="button"
                className="remove-btn"
                onClick={() => handleRemoveEducation(index)}
              >
                Remove Entry
              </button>
            </div>
          ))}

          <button type="button" onClick={handleAddEducation} className="add-btn">
            Add Another Education Entry
          </button>
          <button type="submit" className="submit-btn">
            Save Education Details
          </button>
        </form>
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: 10,
          }}
        >
          <button
            className="submit-btn"
            onClick={() => {
              setEdusaved(true);
            }}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default EducationForm;
