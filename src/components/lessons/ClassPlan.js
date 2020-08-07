import React from "react";
import styled from "styled-components";

const StyledClassPlan = styled.div`
  .new-class-plan {
    background: #fff;
    display: flex;
    flex-direction: column;
    font-size: 14px;
    border-radius: 15px;
    margin-top: 2rem;
    border: 1px solid #ececf0;

    .class-header {
      background: linear-gradient(90deg, #fe843f 0%, #fc5a37 100%);
      border-top-left-radius: 15px;
      border-top-right-radius: 15px;
      width: 100%;
      font-weight: bold;
      color: white;
      height: 42px;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .flex {
      display: flex;
      justify-content: space-between;

      .class-number {
        font-weight: 600;
        width: 50% !important;
      }

      .class-subheader {
        font-weight: 600;
      }

      .class-border-bottom-none {
        border-bottom: none !important;
      }

      .class-number,
      .class-number,
      .class-hours,
      .class-first-day,
      .class-second-day,
      .class-third-day,
      .class-fourth-day,
      .class-fifth-day {
        width: 100%;
      }

      .class-number-item,
      .class-hours-item,
      .class-first-day-item,
      .class-second-day-item,
      .class-third-day-item,
      .class-fourth-day-item,
      .class-fifth-day-item {
        height: 42px;
        border: 1px solid #ececf0;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .class-fifth-day-item {
        border-right: none;
      }

      .class-number-item {
        border-left: none;
      }
    }
  }
`;

export default function ClassPlan() {
  return (
    <StyledClassPlan className="zsz-page site-container">
      <div className="container">
        <h1>ZSZ im. Stanisława Staszica w Ząbkowicach Śląskich</h1>
        <div className="new-class-plan">
          <div className="class-header">4TI</div>
          <div className="flex">
            <div className="class-number">
              <div className="class-number-item class-subheader">No</div>
              <div className="class-number-item">1</div>
              <div className="class-number-item">2</div>
              <div className="class-number-item">3</div>
              <div className="class-number-item">4</div>
              <div className="class-number-item">5</div>
              <div className="class-number-item">6</div>
              <div className="class-number-item">7</div>
              <div className="class-number-item class-border-bottom-none">
                8
              </div>
            </div>
            <div className="class-hours">
              <div className="class-hours-item class-subheader">Hour</div>
              <div className="class-hours-item">8:00-8:45</div>
              <div className="class-hours-item">8:50-9:35</div>
              <div className="class-hours-item">9:40-10:25</div>
              <div className="class-hours-item">10:45-11:30</div>
              <div className="class-hours-item">11:35-12:20</div>
              <div className="class-hours-item">12:25-13:10</div>
              <div className="class-hours-item">13:15-14:00</div>
              <div className="class-hours-item class-border-bottom-none">
                14:05-14:50
              </div>
            </div>
            <div className="class-first-day">
              <div className="class-first-day-item class-subheader">Monday</div>
              <div className="class-first-day-item">mat</div>
              <div className="class-first-day-item">mat</div>
              <div className="class-first-day-item">witryny</div>
              <div className="class-first-day-item">witryny</div>
              <div className="class-first-day-item">adm.baz.da</div>
              <div className="class-first-day-item">prog.aplik</div>
              <div className="class-first-day-item">prog.aplik</div>
              <div className="class-first-day-item class-border-bottom-none">
                prog.aplik
              </div>
            </div>
            <div className="class-second-day">
              <div className="class-second-day-item class-subheader">
                Tuesday
              </div>
              <div className="class-second-day-item">j.ang</div>
              <div className="class-second-day-item">witryny</div>
              <div className="class-second-day-item">witryny</div>
              <div className="class-second-day-item">adm.baz.da</div>
              <div className="class-second-day-item">adm.baz.da</div>
              <div className="class-second-day-item">adm.baz.da</div>
              <div className="class-second-day-item">j.niem</div>
              <div className="class-second-day-item class-border-bottom-none">
                wf
              </div>
            </div>
            <div className="class-third-day">
              <div className="class-third-day-item class-subheader">
                Wednesday
              </div>
              <div className="class-third-day-item">r_mat</div>
              <div className="class-third-day-item">j.pol</div>
              <div className="class-third-day-item">adm.baz.da</div>
              <div className="class-third-day-item">adm.baz.da</div>
              <div className="class-third-day-item">j.pol</div>
              <div className="class-third-day-item">prog.aplik</div>
              <div className="class-third-day-item">prog.aplik</div>
              <div className="class-third-day-item class-border-bottom-none">
                rel
              </div>
            </div>
            <div className="class-fourth-day">
              <div className="class-fourth-day-item class-subheader">
                Thursday
              </div>
              <div className="class-fourth-day-item">witryny</div>
              <div className="class-fourth-day-item">witryny</div>
              <div className="class-fourth-day-item">r_mat</div>
              <div className="class-fourth-day-item">rel</div>
              <div className="class-fourth-day-item">wf</div>
              <div className="class-fourth-day-item">wf</div>
              <div className="class-fourth-day-item">prog.aplik</div>
              <div className="class-fourth-day-item class-border-bottom-none">
                prog.aplik
              </div>
            </div>
            <div className="class-fifth-day">
              <div className="class-fifth-day-item class-subheader">Friday</div>
              <div className="class-fifth-day-item">witryny</div>
              <div className="class-fifth-day-item">witryny</div>
              <div className="class-fifth-day-item">j.pol</div>
              <div className="class-fifth-day-item">j.ang</div>
              <div className="class-fifth-day-item">Z_W</div>
              <div className="class-fifth-day-item">prog.aplik</div>
              <div className="class-fifth-day-item"></div>
              <div className="class-fifth-day-item class-border-bottom-none"></div>
            </div>
          </div>
        </div>
      </div>
    </StyledClassPlan>
  );
}
