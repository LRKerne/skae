import React, { useEffect, useState } from "react";
import LogoNoBg from "../../resources/OnlyLogo-removebg-preview.png";
import Chart from "../atoms/chart";

export const Admin = ({
  formData,
  setFormData,
  page,
  setPage,
  totalPages,
}: any) => {
  const [adminPage, setAdminPage] = useState(0);

  return (
    <div className="admin-wrapper">
      <div className="admin-bar">
        <figure className="quiz-logo">
          <img src={LogoNoBg} alt="SKAE LOGO" />
          <span>SKAE</span>
        </figure>
        <ul className="admin-sidebarList">
          <li
            className="admin-sidebarListItem"
            onClick={() => {
              if (adminPage !== 0) {
                setAdminPage(0);
              }
            }}
            style={{
              background:
                adminPage === 0
                  ? "linear-gradient(180deg, rgba(255, 187, 200, 0) 0%, #FFBBC8 100%)"
                  : "linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #cecfec 100%)",
            }}
          >
            Dashboard
          </li>
          <li
            className="admin-sidebarListItem"
            onClick={() => {
              if (adminPage !== 1) {
                setAdminPage(1);
              }
            }}
            style={{
              background:
                adminPage === 1
                  ? "linear-gradient(180deg, rgba(255, 187, 200, 0) 0%, #FFBBC8 100%)"
                  : "linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #cecfec 100%)",
            }}
          >
            Performance
          </li>
          <li
            className="admin-sidebarListItem"
            onClick={() => {
              if (adminPage !== 2) {
                setAdminPage(2);
              }
            }}
            style={{
              background:
                adminPage === 2
                  ? "linear-gradient(180deg, rgba(255, 187, 200, 0) 0%, #FFBBC8 100%)"
                  : "linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #cecfec 100%)",
            }}
          >
            Avaliacoes
          </li>
          <li
            className="admin-sidebarListItem"
            onClick={() => {
              if (adminPage !== 3) {
                setAdminPage(3);
              }
            }}
            style={{
              background:
                adminPage === 3
                  ? "linear-gradient(180deg, rgba(255, 187, 200, 0) 0%, #FFBBC8 100%)"
                  : "linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #cecfec 100%)",
            }}
          >
            Suporte
          </li>
        </ul>
      </div>
      <div className="admin-otherpages">
        <div className="homePage">
          <div className="charts">
          <Chart />
          <Chart />
          <Chart />
          <Chart />
          <Chart />
          </div>
        </div>
      </div>
    </div>
  );
};
