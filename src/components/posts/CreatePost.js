import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { createPost } from "../../store/actions/postActions";
import { Redirect } from "react-router-dom";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { storage, db } from "../../config/fbConfig";
import { moreWords } from "../filters/filters";
import capitalize from "capitalize-sentence";
const Filter = require("bad-words");
const filter = new Filter({ list: moreWords });

const StyledCreatePost = styled.section`
  #schoolName,
  #content {
    border-radius: 15px;
    border: none;
    width: 100%;
    margin: 0.25rem 0;
    font-size: inherit;
  }

  #schoolName {
    padding: 10px 15px;
    background: #fff;
    font-family: "Poppins";
  }

  #content {
    height: 10rem;
  }

  #upload-post-btn {
    visibility: hidden;
    position: absolute;
    animation: pulse 0.5s infinite alternate;
  }

  #upload-post-warn {
    color: #f44336;
    display: none;
  }

  input[placeholder],
  textarea[placeholder] {
    padding: 10px 15px;
  }

  .upload-container {
    display: flex;
    margin-top: -1.75rem;
  }

  .input-field:first-of-type {
    margin-top: 2rem;
  }

  @media (max-width: 813px) {
    #schoolName,
    #content {
      font-size: 0.9rem;
    }

    .btn {
      font-size: 0.8rem;
      padding: 0px 12.5px;
    }
  }
`;

const CreatePost = (props) => {
  const [schoolName, setSchoolName] = useState("");
  const [schoolLogo, setSchoolLogo] = useState("");
  const [content, setContent] = useState("");
  const [postBackground, setPostBackground] = useState(null);
  const [progress, setProgress] = useState(0);
  const [authorEmail] = useState(props.auth.email);
  const state = {
    schoolName,
    schoolLogo,
    content,
    postBackground,
    progress,
    authorEmail,
  };

  const handleSelect = () => {
    const schoolList = document.getElementById("schoolName");
    const value = schoolList.value;
    const array = value.split(",");
    setSchoolName(array[0]);
    setSchoolLogo(array[1]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setContent(capitalize(filter.clean(content)));

    if (content.includes("*")) {
      document.getElementById("upload-post-warn").style.display = "block";
      return null;
    } else {
      props.createPost(state);
      props.history.push("/");
    }
  };

  const handleChoose = (e) => {
    if (e.target.files[0]) {
      const postBackground = e.target.files[0];
      setPostBackground(postBackground);
    }
  };

  const handleUpload = () => {
    const imageName = `${
      postBackground.name + Math.round(Math.random() * 1000000000000)
    }`;
    const uploadTask = storage
      .ref(`images/feed/${imageName}`)
      .put(postBackground);
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
          .ref("images/feed")
          .child(imageName)
          .getDownloadURL()
          .then((postBackground) => {
            setPostBackground(postBackground);
          });
      }
    );
    uploadTask.snapshot.ref.getDownloadURL().then(function (downloadURL) {
      return downloadURL;
    });
  };

  useEffect(() => {
    db.collection("schools")
      .get()
      .then((snap) =>
        snap.forEach((doc) => {
          const { schoolName, schoolLogo } = doc.data();
          const schoolList = document.getElementById("schoolName");
          const option = document.createElement("option");
          const p = document.createElement("p");
          const img = document.createElement("img");
          schoolList.appendChild(option);
          option.appendChild(p);
          option.appendChild(img);
          p.value = schoolName;
          p.innerText = schoolName;
          img.value = schoolLogo;
          option.value = [p.value, img.value];
        })
      );
  }, []);

  const { auth } = props;
  const uploadPostButton = document.getElementById("upload-post-btn");

  if (!auth.uid) return <Redirect to="/" />;
  if (
    schoolLogo !== "" &&
    postBackground !== null &&
    progress === 100 &&
    content !== ""
  ) {
    uploadPostButton.disabled = false;
    uploadPostButton.style.visibility = "visible";
  }

  return (
    <StyledCreatePost className="site-container">
      <div className="container">
        <form onSubmit={handleSubmit}>
          <h1>Create new post</h1>
          <div className="input-field">
            <label htmlFor="schoolName" />
            <select
              id="schoolName"
              onChange={handleSelect}
              defaultValue="Select your school"
            >
              <option disabled>Select your school</option>
            </select>
          </div>
          <div className="input-field">
            <label htmlFor="content" />
            <textarea
              placeholder="Type your post content here..."
              id="content"
              onChange={(e) => setContent(e.target.value)}
            />
          </div>
          <button
            id="upload-post-btn"
            disabled
            className="btn"
            style={{ margin: "5rem 0 0 0" }}
            onClick={handleSubmit}
          >
            Upload Post
          </button>
        </form>
        <progress value={progress} max="100" />
        <br />
        <div className="upload-container">
          <input
            className="custom-file-input"
            type="file"
            onChange={handleChoose}
          />
          <button
            className="btn btn-choose"
            style={{ margin: "0 0 0 0.5rem" }}
            onClick={handleUpload}
          >
            Upload an image
          </button>
        </div>
        <p id="upload-post-warn">You can't post using swear words!</p>
      </div>
    </StyledCreatePost>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    schools: state.firestore.ordered.schools,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createPost: (post) => dispatch(createPost(post)),
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([{ collection: "schools", orderBy: ["createdAt", "desc"] }])
)(CreatePost);
