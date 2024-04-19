"use client";
import React from "react";

const handleClick = (data) => {
  const link = data[0]["play-button-link"];
  window.open(link, "_blank");
};

const PlayButton = ({ data }) => {
  return (
    <button
      type="button"
      className="Transitions Btn_Play"
      onClick={() => handleClick(data)}
    >
      PLAY
    </button>
  );
};

export default PlayButton;
