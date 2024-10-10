import { Metadata } from 'next';
import React from 'react';


export const metadata: Metadata = {
    title: "Gym Star",
    description: "Gym Star offers dynamic class scheduling, personalized training, and seamless membership management for fitness enthusiasts, trainers, and administrators alike. Book your favorite classes, manage your schedule, and stay on top of your fitness goals with ease.",
  };
  

const CommonLayout = ({children} : {children: React.ReactNode}) => {
    return (
        <div>
            {children}
        </div>
    );
};

export default CommonLayout;