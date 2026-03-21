import { useState } from "react";
import CourseCard from "../components/CourseCard";
import courses from "../data";
const Courses = () => {
   const [search, setSearch] = useState("");
   // Search filter
  const filteredCourses = courses.filter((course) =>
    course.title.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div className="courses-page">
    <h1>All Courses</h1>
     {/* Search Box */}
      <input
        type="text"
        placeholder="Search courses..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-box"
      />
      {/* Course Grid */}
      <div className="course-grid">
      {filteredCourses.length === 0 ? (
          <p className="no-course">No courses found</p>
        ) : (
          filteredCourses.map((course) => (
            <CourseCard
              key={course.id}
              id={course.id}
              title={course.title}
              price={course.price}
              duration={course.duration}
              instructor={course.instructor}
              level={course.level}
              rating={course.rating}
              image={course.image}
            />
          ))
        )}
     </div>
   </div>
  );
};
export default Courses;