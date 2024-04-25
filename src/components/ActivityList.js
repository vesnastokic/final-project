import React from "react";

const ActivityList = () => {
  const activities = [
    {
      id: 1,
      name: "Outdoor Scavenger Hunt",
      description: "Create a list of items for your kids to find in nature.",
      image: "https://www.greenchildmagazine.com/wp-content/uploads/2024/01/nature-scavenger-hunt-for-kids.jpg",
    },
    {
      id: 2,
      name: "Indoor Obstacle Course",
      description:
        "Set up pillows, chairs, and other household items for an indoor obstacle course.",
      image: "https://pdxparent.com/wp-content/uploads/2021/11/gearguideobstacle2.jpg",
    },
    {
      id: 3,
      name: "DIY Craft Time",
      description:
        "Gather some craft supplies and let your kids' creativity flow.",
      image: "https://i.pinimg.com/originals/56/d6/54/56d654f3c5d6ea34dbfdc26b2b22f02d.jpg", 
    },
  ];

  return (
    <div className="activity-list">
      <h2>Choose an Activity</h2>
      <ul className="list-unstyled">
        {activities.map((activity) => (
          <li key={activity.id} className="activity-item">
            <img src={activity.image} alt={activity.name} />
            <h3>{activity.name}</h3>
            <p>{activity.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ActivityList;