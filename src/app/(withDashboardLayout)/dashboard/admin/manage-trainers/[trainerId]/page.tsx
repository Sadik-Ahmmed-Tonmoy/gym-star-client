'use client'
import React from 'react';
import UpdateTrainer from './UpdateTrainer';


interface TrainerId {
    params: {
        trainerId: string;
    };
  }

const trainerPage = ({ params }: TrainerId) => {
    return (
        <div>
            <UpdateTrainer id={params?.trainerId}/>
        </div>
    );
};

export default trainerPage;