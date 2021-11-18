import React from "react";
import "./Tooltip.scss";

const Tooltip = ({ text, children, direction }) => {

  return (
    <div className="tooltipWrapper">
      <div className="tooltipIcon">{children}</div>
      <div className={`tooltipExplanation ${direction}`}><div className="arrow"></div><div className="tooltipText">{text}</div></div>
    </div>
  );
};

export default Tooltip;