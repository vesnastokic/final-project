import React from "react";

const ActivityList = () => {
  const activities = [
    {
      id: 1,
      name: "Outdoor Scavenger Hunt",
      description: "Create a list of items for your kids to find in nature.",
    },
    {
      id: 2,
      name: "Indoor Obstacle Course",
      description:
        "Set up pillows, chairs, and other household items for an indoor obstacle course.",
    },
    {
      id: 3,
      name: "DIY Craft Time",
      description:
        "Gather some craft supplies and let your kids' creativity flow.",
    },
  ];

  return (
    <div>
      <h2>Choose an Activity</h2>
      <ul>
        {activities.map((activity) => (
          <li key={activity.id}>
            <h3>{activity.name}</h3>
            <p>{activity.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ActivityList;
