import React from "react";

// Functional component for rendering the activity list
const ActivityList = () => {
  // Array of activity objects
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
      description: "Set up pillows, chairs, and other household items for an indoor obstacle course.",
      image: "https://pdxparent.com/wp-content/uploads/2021/11/gearguideobstacle2.jpg",
    },
    {
      id: 3,
      name: "DIY Craft Time",
      description: "Gather some craft supplies and let your kids' creativity flow.",
      image: "https://i.pinimg.com/originals/56/d6/54/56d654f3c5d6ea34dbfdc26b2b22f02d.jpg", 
    },
    {
      id: 4,
      name: "Kids helping In The Kitchen",
      description: "Bring them into the kitchen while you cook. Set them up someplace safe, a highchair or playpen and give them a few adult-sized cooking tools to bang around. Wooden spoons, whisks, spatulas, non-breakable mixing bowls, and spoons are all fair game here.",
      image: "https://cdn.apartmenttherapy.info/image/upload/f_auto,q_auto:eco,c_fill,g_center,w_730,h_913/k%2Farchive%2F6d20e0785d4273d3bfb35e3c09fed75b1ee58bde", 
    },
  ];

  // Render the list of activities
  return (
    <div className="activity-list">
      {/* Heading for the activity list */}
      <h2>Choose an Activity</h2>
      {/* Unordered list to hold individual activities */}
      <ul className="list-unstyled">
        {/* Mapping through the activities array to render each activity */}
        {activities.map((activity) => (
          <li key={activity.id} className="activity-item">
            {/* Image for the activity */}
            <img src={activity.image} alt={activity.name} />
            {/* Heading for the activity name */}
            <h3>{activity.name}</h3>
            {/* Description of the activity */}
            <p>{activity.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Exporting the ActivityList component as the default export
export default ActivityList;
