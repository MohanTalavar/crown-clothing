import React from "react";
import "./Homepage-style.scss";
import { Directory } from "../components/directory/directory-component";

export const Homepage = () => {
  return (
    <div className="homepage">
      <Directory />
    </div>
  );
};
