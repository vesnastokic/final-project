import React from 'react';
import ActivityList from './ActivityList';

const ActivitiesPage = () => {
  return (
    <div>
      <h1>Activities for Kids</h1>
      <img src="https://www.splashlearn.com/blog/wp-content/uploads/2022/04/Team-building-activities-for-kids-Featured-Image.jpg" alt="Activities" className="activities-image" />

      <ActivityList />
    </div>
  );
};

export default ActivitiesPage;
