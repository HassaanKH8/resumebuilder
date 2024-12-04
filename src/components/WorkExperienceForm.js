import React, { useState } from "react";
import "../App.css";

const WorkExperienceForm = ({ setWEDone, workExperienceList, setWorkExperienceList }) => {
  const [wantToAddWE, setWantToAddWE] = useState(false);

  const handleChange = (index, field, value) => {
    const updatedList = [...workExperienceList];
    updatedList[index][field] = value;
    setWorkExperienceList(updatedList);
  };

  const handleAddExperience = () => {
    setWorkExperienceList([
      ...workExperienceList,
      {
        wanttoadd: wantToAddWE,
        jobTitle: "",
        companyName: "",
        startDate: "",
        endDate: "",
        isCurrent: false,
      },
    ]);
  };

  const handleRemoveExperience = (index) => {
    const updatedList = workExperienceList.filter((_, i) => i !== index);
    setWorkExperienceList(updatedList);
  };

  const handleToggleWantToAdd = (checked) => {
    setWantToAddWE(checked);
    const updatedList = workExperienceList.map((work) => ({
      ...work,
      wanttoadd: checked,
    }));
    setWorkExperienceList(updatedList);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(workExperienceList); // Log updated work experience list
    setWorkExperienceList(workExperienceList);
    setWEDone(true);
  };

  return (
    <div className="workExperienceForm">
      <h1 className="personalinfoheading">Work Experience Info</h1>
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
          Want to add work experience?
        </p>
        <input
          style={{
            accentColor: "#36454f",
            color: "#efeee9",
            width: "15px",
            height: "15px",
          }}
          type="checkbox"
          checked={wantToAddWE}
          onChange={(e) => handleToggleWantToAdd(e.target.checked)}
        />
      </div>

      {wantToAddWE ? (
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
          {workExperienceList.map((work, index) => (
            <div key={index} className="workExperienceEntry">
              <h3 className="edentry">Entry {index + 1}</h3>
              <div className="edform">
                <label className="weentrylabel">Job Title:</label>
                <input
                  type="text"
                  className="entryinput"
                  placeholder="Enter Job Title"
                  value={work.jobTitle}
                  onChange={(e) =>
                    handleChange(index, "jobTitle", e.target.value)
                  }
                />
              </div>

              <div className="edform">
                <label className="weentrylabel">Company Name:</label>
                <input
                  type="text"
                  className="entryinput"
                  placeholder="Enter Company Name"
                  value={work.companyName}
                  onChange={(e) =>
                    handleChange(index, "companyName", e.target.value)
                  }
                />
              </div>

              <div className="edform">
                <label className="weentrylabel">Start Date:</label>
                <input
                  type="date"
                  className="entryinput"
                  value={work.startDate}
                  onChange={(e) =>
                    handleChange(index, "startDate", e.target.value)
                  }
                />
              </div>

              <div className="edform">
                <label className="weentrylabel">End Date:</label>
                <input
                  type="date"
                  className="entryinput"
                  value={work.isCurrent ? "" : work.endDate}
                  disabled={work.isCurrent}
                  onChange={(e) =>
                    handleChange(index, "endDate", e.target.value)
                  }
                />
              </div>

              <div className="edform">
                <label>
                  <input
                    style={{
                      accentColor: "#36454f",
                      color: "#efeee9",
                    }}
                    type="checkbox"
                    checked={work.isCurrent}
                    onChange={(e) =>
                      handleChange(index, "isCurrent", e.target.checked)
                    }
                  />
                  <p
                    style={{
                      display: "inline",
                      marginLeft: 10,
                      fontFamily: "EB Garamond",
                      fontSize: 18,
                      color: "#36454f",
                    }}
                  >
                    Currently Working Here
                  </p>
                </label>
              </div>

              <button
                type="button"
                className="remove-btn"
                onClick={() => handleRemoveExperience(index)}
              >
                Remove Entry
              </button>
            </div>
          ))}

          <button
            type="button"
            onClick={handleAddExperience}
            className="add-btn"
          >
            Add Another Work Experience
          </button>
          <button type="submit" className="submit-btn">
            Save Work Experience
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
          <button className="submit-btn" onClick={() => setWEDone(true)}>
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default WorkExperienceForm;
