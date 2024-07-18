import React from "react";

const GameFrame = ({ machineId }) => {
  const gameUrl = `https://rtgdemocdk.services-games.com:2072/Lobby.aspx?instantPlay=true&user=&sPassword=&encrypted=True&token=&forReal=False&handcount=&clientIP=186.176.225.66&height=720&width=1280&cdkModule=game&skinId=1&sessionGUID=4cf3f15d-c9ee-4dd4-8bf8-f34b51624c46&gameId=18&machId=${machineId}`;

  return (
    <iframe
      src={gameUrl}
      className="w-full h-[720px]"
      title="Game Frame"
    ></iframe>
  );
};

export default GameFrame;
