import React from "react";

const Header = () => {
  return (
    <header style={headerStyle}>
      <h1 style={titleStyle}>
        Мемориальная страница памяти с именами погибших
      </h1>
    </header>
  );
};

const headerStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100px",
  backgroundColor: "#f0f0f0",
  padding: "20px",
};

const titleStyle = {
  margin: 0,
  fontSize: "24px",
  color: "#333",
};

export default Header;
