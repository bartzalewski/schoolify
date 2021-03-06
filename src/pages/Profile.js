import React, { useState, useEffect } from "react";
import styled from "styled-components";
import firebase, { storage, db } from "../config/fbConfig";

const StyledProfile = styled.section`
  .profile-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    font-size: 1.125rem;
    margin: 2rem 0;
    background: #fff;
    padding: 25px;
    border-radius: 15px;

    img {
      width: 150px;
      height: 150px;
      transition: 0.2s;
      border-radius: 100px;
      position: relative;
      object-fit: contain;

      &:hover {
        transition: 0.2s;
        box-shadow: 0 0 0 2pt #fe843f;
      }
    }

    svg {
      position: absolute;
      bottom: 0;
      right: 0;
      cursor: pointer;
      transition: 0.2s;

      &:hover {
        transition: 0.2s;
        fill: #fe843f;
      }
    }

    h2 {
      font-size: 2rem;
      font-weight: 300;
      margin-top: 1rem;
    }

    .profile-bold {
      font-weight: 600;
    }

    .profile-school {
      margin: 1rem 0 0 0;
    }
  }

  .avatar-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: relative;
    width: fit-content;
  }

  .profile-info-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: relative;
  }

  .custom-file-input {
    visibility: hidden;
    width: 1px;
    height: 1px;

    &::before {
      width: 1px;
      height: 1px;
    }
  }

  .avatar-btn {
    margin-top: 1rem;
  }

  @media (max-width: 813px) {
    h2 {
      font-size: 1.2rem !important;
      margin: 0.5rem !important;
    }

    img {
      width: 100px !important;
      height: 100px !important;
    }

    .profile-bold,
    .profile-normal {
      font-size: 0.9rem;
    }
  }
`;

const Profile = (props) => {
  const [userAvatar, setUserAvatar] = useState(null);
  const [url, setUrl] = useState("");
  const [schoolName, setSchoolName] = useState("");
  const [className, setClassName] = useState("");
  const [progress, setProgress] = useState(0);
  const [active, setActive] = useState(false);
  // const state = { userAvatar, url, schoolName, className, progress, active };

  const handleChoose = (e) => {
    if (e.target.files[0]) {
      const userAvatar = e.target.files[0];
      setUserAvatar(userAvatar);
    }
  };

  const handleUpload = () => {
    const imageName = `${
      userAvatar.name + Math.round(Math.random() * 1000000000000)
    }`;

    const uploadTask = storage.ref(`images/users/${imageName}`).put(userAvatar);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progress);
      },
      () => {
        storage
          .ref("images/users")
          .child(imageName)
          .getDownloadURL()
          .then((url) => {
            setUrl(url);
          });
        db.collection("users")
          .get()
          .then((snap) =>
            snap.forEach((doc) => {
              db.collection("users").doc(doc.id).update({ userAvatar: url });
            })
          );
      }
    );
  };

  const handleEditPicture = () => {
    const fileInput = document.getElementById("imageInput");
    fileInput.click();
  };

  useEffect(() => {
    db.collection("schools")
      .where("schoolId", "==", `${props.profile.schoolId}`)
      .get()
      .then((snap) =>
        snap.forEach((doc) => {
          const schoolName = doc.data().schoolName;
          setSchoolName(schoolName);
        })
      );
    db.collection("classes")
      .where("schoolId", "==", `${props.profile.schoolId}`)
      .get()
      .then((snap) =>
        snap.forEach((doc) => {
          const className = doc.data().className;
          setClassName(className);
        })
      );
    // console.log(state);
  });

  return (
    <StyledProfile className="site-container">
      <div className="container">
        <h1>Profile</h1>
        <div className="profile-container">
          <div className="avatar-container">
            <img
              title="Your avatar"
              src={
                props.profile.userAvatar || firebase.auth().currentUser.photoURL
              }
              alt=""
            />
            <svg
              className="upload-pic"
              onClick={handleEditPicture}
              width="20"
              height="20"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M17.0833 4.58331H14.5833C14.4041 4.58331 14.245 4.46913 14.1883 4.29831L13.925 3.50831C13.6408 2.65581 12.8467 2.08331 11.9483 2.08331H8.05164C7.15332 2.08331 6.35914 2.65581 6.07582 3.50749L5.8125 4.29831C5.755 4.46913 5.59582 4.58331 5.41668 4.58331H2.91668C1.30832 4.58331 0 5.89167 0 7.49999V15C0 16.6083 1.30832 17.9167 2.91668 17.9167H17.0834C18.6917 17.9167 20 16.6083 20 15V7.49999C20 5.89167 18.6917 4.58331 17.0833 4.58331ZM19.1667 15C19.1667 16.1483 18.2317 17.0833 17.0834 17.0833H2.91668C1.76836 17.0833 0.833359 16.1483 0.833359 15V7.49999C0.833359 6.35167 1.76836 5.41667 2.91668 5.41667H5.41668C5.955 5.41667 6.43168 5.07335 6.6025 4.56249L6.86668 3.77081C7.03668 3.25999 7.51336 2.91663 8.05168 2.91663H11.9484C12.4867 2.91663 12.9634 3.25995 13.1342 3.77163L13.3975 4.56245C13.5683 5.07327 14.045 5.41663 14.5833 5.41663H17.0833C18.2316 5.41663 19.1666 6.35163 19.1666 7.49995V15H19.1667Z" />
              <path d="M10 6.25C7.2425 6.25 5 8.4925 5 11.25C5 14.0075 7.2425 16.25 10 16.25C12.7575 16.25 15 14.0075 15 11.25C15 8.4925 12.7575 6.25 10 6.25ZM10 15.4167C7.7025 15.4167 5.83332 13.5475 5.83332 11.25C5.83332 8.9525 7.7025 7.08332 10 7.08332C12.2975 7.08332 14.1667 8.9525 14.1667 11.25C14.1667 13.5475 12.2975 15.4167 10 15.4167Z" />
              <path d="M10 7.91669C8.16168 7.91669 6.66668 9.41168 6.66668 11.25C6.66668 11.48 6.85336 11.6667 7.08336 11.6667C7.31336 11.6667 7.5 11.48 7.5 11.25C7.5 9.87168 8.62168 8.75001 10 8.75001C10.23 8.75001 10.4167 8.56333 10.4167 8.33333C10.4167 8.10333 10.23 7.91669 10 7.91669Z" />
            </svg>
          </div>
          <div className="profile-info-container">
            {!active && userAvatar !== null && (
              <button className="avatar-btn" onClick={handleUpload}>
                Click to change your avatar!
              </button>
            )}
            <h2>
              {props.profile.firstName} {props.profile.lastName}{" "}
              {firebase.auth().currentUser.displayName}
            </h2>
          </div>
          <input
            id="imageInput"
            className="custom-file-input"
            type="file"
            onChange={handleChoose}
          />
          <div className="profile-school">
            <p className="profile-bold">School:</p>
            <p className="profile-normal">
              {schoolName ? schoolName : "Your school"}
            </p>
          </div>
          <div className="profile-class">
            <p className="profile-bold">Class:</p>
            <p className="profile-normal">
              {className ? className : "Your class"}
            </p>
          </div>
        </div>
      </div>
    </StyledProfile>
  );
};

export default Profile;
