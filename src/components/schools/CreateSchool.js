import React, { useState } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { createSchool } from "../../store/actions/schoolActions";
import { Redirect } from "react-router-dom";
import { storage } from "../../config/fbConfig";
import { moreWords } from "../filters/filters";
const Filter = require("bad-words");
const filter = new Filter({ list: moreWords });

const StyledCreateSchool = styled.section`
  #schoolName {
    border-radius: 15px;
    border: none;
    width: 100%;
    margin: 0.25rem 0;
    font-size: inherit;

    &:focus::placeholder {
      color: transparent !important;
    }
  }

  #upload-post-btn {
    visibility: hidden;
    position: absolute;
    animation: pulse 0.5s infinite alternate;
  }

  #create-school-warn {
    color: #f44336;
    display: none;
  }

  input[placeholder],
  textarea[placeholder] {
    padding: 10px 15px;
  }

  .upload-wrapper {
    margin-top: 1.25rem;
  }

  .upload-container {
    display: flex;
    margin-top: -2.5rem;
  }

  .input-field:first-of-type {
    margin-top: 2rem;
  }

  .school-logo-input {
    &::before {
      content: "Choose logo";
    }
  }

  .school-bg-input {
    &::before {
      content: "Choose background";
    }
  }

  @media (max-width: 813px) {
    #schoolName {
      font-size: 0.9rem;
    }

    .btn {
      font-size: 0.8rem;
      padding: 0px 12.5px;
    }
  }
`;

const CreateSchool = (props) => {
  const [schoolName, setSchoolName] = useState("");
  const [schoolLogo, setSchoolLogo] = useState(null);
  const [schoolBackground, setSchoolBackground] = useState(null);
  const [progress, setProgress] = useState(0);
  const state = { schoolName, schoolLogo, schoolBackground, progress };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSchoolName(filter.clean(schoolName));

    if (schoolName.includes("*")) {
      document.getElementById("create-school-warn").style.display = "block";
      return null;
    } else {
      props.createSchool(state);
      props.history.push("/school-list");
    }
  };

  const handleChooseSchoolLogo = (e) => {
    if (e.target.files[0]) {
      const schoolLogo = e.target.files[0];
      setSchoolLogo(schoolLogo);
    }
  };

  const handleUploadSchoolLogo = () => {
    const imageName = `${
      schoolLogo.name + Math.round(Math.random() * 1000000000000)
    }`;
    const uploadTask = storage
      .ref(`images/schools/logos/${imageName}`)
      .put(schoolLogo);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progress);
      },
      (err) => console.log(err),
      () => {
        storage
          .ref("images/schools/logos")
          .child(imageName)
          .getDownloadURL()
          .then((schoolLogo) => {
            setSchoolLogo(schoolLogo);
          });
      }
    );
    uploadTask.snapshot.ref.getDownloadURL().then(function (downloadURL) {
      return downloadURL;
    });
  };

  const handleChooseSchoolBackground = (e) => {
    if (e.target.files[0]) {
      const schoolBackground = e.target.files[0];
      setSchoolBackground(schoolBackground);
    }
  };

  const handleUploadSchoolBackground = () => {
    const { schoolBackground } = state;
    const imageName = `${
      schoolBackground.name + Math.round(Math.random() * 1000000000000)
    }`;
    const uploadTask = storage
      .ref(`images/schools/backgrounds/${imageName}`)
      .put(schoolBackground);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progress);
      },
      (err) => console.log(err),
      () => {
        storage
          .ref("images/schools/backgrounds")
          .child(imageName)
          .getDownloadURL()
          .then((schoolBackground) => {
            setSchoolBackground(schoolBackground);
          });
      }
    );
    uploadTask.snapshot.ref.getDownloadURL().then(function (downloadURL) {
      return downloadURL;
    });
  };

  const { auth } = props;
  const uploadPostButton = document.getElementById("upload-post-btn");
  if (!auth.uid) return <Redirect to="/" />;
  if (
    typeof state.schoolBackground !== "object" &&
    state.schoolBackground !== null &&
    state.schoolLogo !== Object &&
    typeof state.schoolLogo !== "object" &&
    state.progress === 100 &&
    state.schoolName !== ""
  ) {
    uploadPostButton.disabled = false;
    uploadPostButton.style.visibility = "visible";
  }
  return (
    <StyledCreateSchool className="site-container">
      <div className="container">
        <form onSubmit={handleSubmit}>
          <h1>Add a new school</h1>
          <div className="input-field">
            <label htmlFor="schoolName" />
            <input
              id="schoolName"
              type="text"
              placeholder="School Name"
              autoComplete="off"
              onChange={(e) => setSchoolName(e.target.value)}
            />
          </div>
          <button
            id="upload-post-btn"
            disabled
            className="btn"
            style={{ margin: "10rem 0 0 0" }}
            onClick={handleSubmit}
          >
            Add School
          </button>
        </form>
        <progress value={state.progress} max="100" />
        <br />
        <div className="upload-wrapper">
          <div className="upload-container">
            <input
              className="custom-file-input school-logo-input"
              type="file"
              onChange={handleChooseSchoolLogo}
            />
            <button
              className="btn btn-choose"
              style={{ margin: "0 0 0 0.5rem" }}
              onClick={handleUploadSchoolLogo}
            >
              Upload Scholo Logo
            </button>
          </div>
          <br />
          <progress value={state.progress} max="100" />
          <br />
          <div className="upload-container">
            <input
              className="custom-file-input school-bg-input"
              type="file"
              onChange={handleChooseSchoolBackground}
            />
            <button
              className="btn btn-choose"
              style={{ margin: "0 0 0 0.5rem" }}
              onClick={handleUploadSchoolBackground}
            >
              Upload School Background
            </button>
          </div>
          <p id="create-school-warn">
            You can't create school using swear words!
          </p>
        </div>
      </div>
    </StyledCreateSchool>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createSchool: (school) => dispatch(createSchool(school)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateSchool);
