
export type TTrainer = {
    _id: string;
    name: {
      firstName: string;
      lastName: string;
      _id: string;
    };
    email: string;
    passwordChangedAt: string;
    avatar: string;
    role: 'trainer' | 'trainee' | 'admin'; // Adjust role options if needed
    status: 'in-progress' | 'completed' | 'inactive'; // Adjust status options if needed
    classSchedules: Array<string>; // Define the structure of classSchedules if needed
    isDeleted: boolean;
    classCount: number;
    createdAt: string;
    updatedAt: string;
    __v: number;
    fullName: string;
    id: string;
  };
  
  export type TClass = {
    _id: string;
    className: string;
    trainer: TTrainer;
    date: string; // ISO date format
    startTime: string;
    endTime: string;
    duration: string;
    enrolledTrainees: Array<string>; // Define the structure if needed
    isDeleted: boolean;
    description: string;
    createdAt: string;
    updatedAt: string;
    id: string;
  };