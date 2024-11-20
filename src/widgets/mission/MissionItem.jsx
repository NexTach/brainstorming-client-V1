import React from 'react';

const MissionItem = ({ missionName }) => {
  return (
    <div>
      <label htmlFor="todo1">{missionName}</label>
      <input type="checkbox" id="todo1" />
    </div>
  );
};

export default MissionItem;
