import React from "react";

export const Iframe = (data) => {
  const allData = data?.data; // Pristupamo svojstvu "data" u objektu "data"
  const firstObject = allData[0]; // Pristupamo prvom objektu u nizu
  const iframeLink = firstObject["iframe-link"]; // Pristupamo svojstvu "iframe-link" u prvom objektu
  const titleLink = firstObject["game-name"];

  return <iframe src={iframeLink} title={titleLink} loading="lazy"></iframe>;
};
