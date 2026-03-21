import reactImg from "./images/React.png";
import fullstackImg from "./images/fullstack.png";
import jsImg from "./images/javascript.jpg"; 
import nodeImg from "./images/node.png";
import uiuxImg from "./images/uiux.avif";
import dsaImg from "./images/dsa.png";

const courses = [
  {
    id: 1,
    title: "React for Beginners",
    price: 999,
    description: "Learn React from scratch including hooks and routing.",
    duration: "6 Weeks",
    instructor: "Rahul Sharma",
    level: "Beginner",
    rating: 4.5,
    popular: true,
    image: reactImg
  },
  {
    id: 2,
    title: "Full Stack Bootcamp",
    price: 1999,
    description: "Become a full stack developer with MERN stack.",
    duration: "10 Weeks",
    instructor: "Anjali Verma",
    level: "Intermediate",
    rating: 4.8,
    popular: true,
    image: fullstackImg
  },
  {
    id: 3,
    title: "JavaScript Mastery",
    price: 799,
    description: "Deep dive into modern JavaScript concepts.",
    duration: "5 Weeks",
    instructor: "Amit Singh",
    level: "Beginner",
    rating: 4.4,
    popular: true,
    image: jsImg
  },
  {
    id: 4,
    title: "Node.js Advanced",
    price: 1199,
    description: "Master backend development with Node and Express.",
    duration: "6 Weeks",
    instructor: "Rohit Mehra",
    level: "Advanced",
    rating: 4.6,
    popular: false,
    image: nodeImg
  },
  {
    id: 5,
    title: "UI/UX Design Basics",
    price: 699,
    description: "Learn design principles and Figma basics.",
    duration: "4 Weeks",
    instructor: "Sneha Kapoor",
    level: "Beginner",
    rating: 4.3,
    popular: false,
    image: uiuxImg
  },
  {
    id: 6,
    title: "Data Structures & Algorithms",
    price: 1499,
    description: "Crack coding interviews with DSA concepts.",
    duration: "8 Weeks",
    instructor: "Vikram Patel",
    level: "Intermediate",
    rating: 4.9,
    popular: false,
    image: dsaImg
  }
];

export default courses;