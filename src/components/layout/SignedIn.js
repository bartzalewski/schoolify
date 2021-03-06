import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Route, Switch } from "react-router-dom";
import Reminders from "../../components/Reminders/Reminders";
import Plan from "../../components/Plan/Plan";
import Homework from "../../components/Homework/Homework";
import Tests from "../../components/Tests/Tests";
import News from "../../pages/News";
import Notification from "../../pages/Notification.js";
import Lessons from "../../pages/Lessons.js";
import Chat from "../../pages/Chat";
import CreatePost from "../../components/posts/CreatePost";
import CreateSchool from "../../components/schools/CreateSchool";
import ViewSchools from "../../components/schools/ViewSchools";
import More from "../../pages/More";
import Error from "../../pages/Error";
import ClassPlan from "../../components/lessons/ClassPlan";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { connect } from "react-redux";
import Navbar from "../../components/Navbar/Navbar";
import Profile from "../../pages/Profile";
import storage from "local-storage-fallback";
import TeacherPanel from "../../pages/TeacherPanel";
import SchoolProfile from "../schools/SchoolProfile";

const DarkTheme = createGlobalStyle`
	aside, nav, #schoolName, #schoolName::placeholder, #content, #content::placeholder, .custom-file-input::before, .btn-choose, .list-item, .new-chat-title, .teacher-panel-wrapper>.box {
		background: ${(props) =>
      props.theme.mode === "dark" ? "#1F1F1F" : null} !important;
		color: ${(props) => (props.theme.mode === "dark" ? "#EEE" : null)} !important;
	}

	body, section, .posts-btn, .school-list-page, .zsz-page, .input-reminder, .input-reminder::placeholder, .input-homework, .input-homework::placeholder, .input-tests, .input-tests::placeholder, .list-item-selected, .friend-sent, .user-sent, #chat-text-box, #chat-input-email, #chat-input-msg, .btn-chat-submit, .list-item:hover, .school-profile-header {
		background: ${(props) =>
      props.theme.mode === "dark" ? "#141414" : null} !important;
		color: ${(props) => (props.theme.mode === "dark" ? "#EEE" : null)} !important;
	}

	.posts-list, .add-post, .lesson-box, .box-add, .notification-item, .box-error-page, .settings-box, .profile-container, .chat-wrapper, .new-class-plan, .school-profile-wrapper {
		background: ${(props) =>
      props.theme.mode === "dark" ? "#1F1F1F" : null} !important;
	}

	.box, .upload-pic, .submit-message-icon {
		fill: ${(props) => (props.theme.mode === "dark" ? "#EEE" : null)};
	}

	.box {
		color: ${(props) => (props.theme.mode === "dark" ? "#EEE" : null)} !important;

		svg {
			fill: ${(props) => (props.theme.mode === "dark" ? "#EEE" : null)};
		}
	}

	nav {
		border-bottom: 1px solid ${(props) =>
      props.theme.mode === "dark" ? "#000" : "#d2d2d2"} !important
	}

	.new-class-plan, .class-number-item,
			.class-hours-item,
			.class-first-day-item,
			.class-second-day-item,
			.class-third-day-item,
			.class-fourth-day-item,
			.class-fifth-day-item {
				border-color: ${(props) =>
          props.theme.mode === "dark" ? "#141414" : null} !important
			}

	.aside-reminders {
		border-right: 1px solid ${(props) =>
      props.theme.mode === "dark" ? "#000" : "#d2d2d2"} !important;
		border-bottom: 1px solid ${(props) =>
      props.theme.mode === "dark" ? "#000" : "#d2d2d2"} !important;
	}

	.aside-homework {
		border-left: 1px solid ${(props) =>
      props.theme.mode === "dark" ? "#000" : "#d2d2d2"} !important;
		border-bottom: 1px solid ${(props) =>
      props.theme.mode === "dark" ? "#000" : "#d2d2d2"} !important;
	}

	.aside-tests {
		border-left: 1px solid ${(props) =>
      props.theme.mode === "dark" ? "#000" : "#d2d2d2"} !important;
	}

	@media (max-width: 1124px) {
    .aside-reminders, .aside-homework, .aside-tests {
      border-bottom: 1px solid ${(props) =>
        props.theme.mode === "dark" ? "#000" : "#d2d2d2"} !important;
    }
  }
`;

const StyledWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 1124px) {
    display: block;
  }
`;

const StyledHome = styled.div`
  position: relative;
  top: 125px;

  @media (max-width: 1359px) {
    top: 60px;
  }

  @media (max-width: 1124px) {
    position: static;
    display: flex;
    justify-content: center;
  }
`;

const StyledLeftSide = styled.div``;

const StyledRightSide = styled.div``;

const StyledDesktop = styled.div``;

const SignedIn = ({ profile }) => {
  const onChange = (newName) => {
    setTheme({ mode: `${newName}` });
  };

  const getInitialTheme = () => {
    const savedTheme = storage.getItem("theme");
    return savedTheme ? JSON.parse(savedTheme) : { mode: "light" };
  };

  const [theme, setTheme] = useState(Object(getInitialTheme));

  useEffect(() => {
    storage.setItem("theme", JSON.stringify(theme));
  });

  if (profile.accountType === "teacher") {
    return (
      <ThemeProvider theme={theme}>
        <DarkTheme />
        <StyledDesktop>
          <Navbar profile={profile} />
          <StyledWrapper>
            <StyledLeftSide>
              <Reminders profile={profile} />
              {window.innerWidth <= 1124 ? (
                <Homework profile={profile} />
              ) : null}
              {window.innerWidth <= 1124 ? <Tests profile={profile} /> : null}
              {/* <Plan profile={profile} /> */}
            </StyledLeftSide>
            <StyledHome>
              <Switch>
                <Route
                  exact
                  path="/"
                  component={() => <News profile={profile} />}
                />
                <Route path="/notifications" component={Notification} />
                <Route
                  path="/profile"
                  component={() => <Profile profile={profile} />}
                ></Route>
                <Route path="/lessons" component={Lessons} />
                <Route path="/chat" component={Chat} />
                <Route path="/create" component={CreatePost} />
                <Route path="/add" component={CreateSchool} />
                <Route path="/school-list" component={ViewSchools} />
                <Route path="/lessons-zsz" component={ClassPlan} />
                <Route path="/school-profile" component={SchoolProfile} />
                <Route
                  path="/panel"
                  component={() => <TeacherPanel profile={profile} />}
                ></Route>
                <Route
                  path="/more"
                  component={() => (
                    <More theme={theme} profile={profile} onChange={onChange} />
                  )}
                />
                <Route component={Error} />
              </Switch>
            </StyledHome>
            <StyledRightSide>
              {window.innerWidth > 1124 ? <Homework /> : null}
              {window.innerWidth > 1124 ? <Tests /> : null}
            </StyledRightSide>
          </StyledWrapper>
        </StyledDesktop>
      </ThemeProvider>
    );
  } else {
    return (
      <ThemeProvider theme={theme}>
        <DarkTheme />
        <StyledDesktop>
          <Navbar profile={profile} />
          <StyledWrapper>
            <StyledLeftSide>
              <Reminders profile={profile} />
              {window.innerWidth <= 1124 ? (
                <Homework profile={profile} />
              ) : null}
              {window.innerWidth <= 1124 ? <Tests profile={profile} /> : null}
            </StyledLeftSide>
            <StyledHome>
              <Switch>
                <Route
                  exact
                  path="/"
                  component={() => <News profile={profile} />}
                />
                <Route path="/notifications" component={Notification} />
                <Route
                  path="/profile"
                  component={() => <Profile profile={profile} />}
                ></Route>
                <Route path="/lessons" component={Lessons} />
                <Route path="/chat" component={Chat} />
                <Route path="/school-list" component={ViewSchools} />
                <Route path="/lessons-zsz" component={ClassPlan} />
                <Route path="/school-profile" component={SchoolProfile} />
                <Route
                  path="/more"
                  component={() => (
                    <More theme={theme} profile={profile} onChange={onChange} />
                  )}
                />
                <Route component={Error} />
              </Switch>
            </StyledHome>
            <StyledRightSide>
              {window.innerWidth > 1124 ? <Homework /> : null}
              {window.innerWidth > 1124 ? <Tests /> : null}
            </StyledRightSide>
          </StyledWrapper>
        </StyledDesktop>
      </ThemeProvider>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    theme: state.theme,
  };
};

export default connect(mapStateToProps)(SignedIn);
