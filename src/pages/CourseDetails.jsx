import { useParams } from "react-router-dom";
import courses from "../data";
const CourseDetails = () => {
  const { id } = useParams();
 const course = courses.find((c) => c.id === Number(id));
  if (!course) {
    return <h2>Course not found</h2>;
  }
  return (
    <div className="page">
     <h1>{course.title}</h1>
     <div className="course-info">
        <p><strong>Instructor:</strong> {course.instructor}</p>
        <p><strong>Duration:</strong> {course.duration}</p>
        <p><strong>Level:</strong> {course.level}</p>
        <p><strong>Rating:</strong> ⭐ {course.rating}</p>
        <p><strong>Price:</strong> ₹{course.price}</p>
      </div>
    <p className="course-desc">{course.description}</p>
      {course.popular && (
        <p style={{marginTop:"10px", color:"#38bdf8", fontWeight:"bold"}}>
          🔥 Popular Course
        </p>
      )}
   <button className="cta-btn">
        Enroll Now
      </button>
    </div>
  );
};
export default CourseDetails;