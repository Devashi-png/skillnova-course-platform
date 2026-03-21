import { useNavigate } from "react-router-dom";
import CourseCard from "../components/CourseCard";
import courses from "../data";
const Home = () => {
  const navigate = useNavigate();
  const popularCourses = courses.slice(0, 3);
   return (
    <div>
    {/* ================= HERO ================= */}
      <div className="hero">
        <h1>
          Master New Skills. <br />
          <span className="highlight">Build Your Future.</span>
        </h1>
       <p>
          Join thousands of learners upgrading their careers with
          industry-focused courses and real-world projects.
        </p>
       <button 
          className="cta-btn"
          onClick={() => navigate("/courses")}
        >
          Explore Courses
        </button>
     /* Hero Stats */
        <div className="hero-stats">
          <div>
            <h3>50+</h3>
            <p>Courses</p>
          </div>
          <div>
            <h3>5K+</h3>
            <p>Learners</p>
          </div>
          <div>
            <h3>100%</h3>
            <p>Career Focused</p>
          </div>
        </div>
      </div>
     /* ================= POPULAR COURSES ================= */
      <div className="course-section">
        <h2>Popular Courses</h2>
        <div className="course-grid">
          {popularCourses.map((course) => (
            <CourseCard
              key={course.id}
              id={course.id}
              title={course.title}
              price={course.price}
              duration={course.duration}
              instructor={course.instructor}
              level={course.level}
              rating={course.rating}
              popular={course.popular}
              image={course.image}   
            />
          ))}
        </div>
      </div>
   /* ================= TESTIMONIALS ================= */
      <div className="testimonials">
        <h2>What Our Students Say</h2>
        <div className="testimonial-grid">
        <div className="testimonial-card">
            <p>
              "This platform helped me understand React easily. The courses are
              very practical and beginner friendly."
            </p>
            <h4>— Priya Sharma</h4>
          </div>
        <div className="testimonial-card">
            <p>
              "The Full Stack Bootcamp was amazing. I built real projects and
              improved my development skills."
            </p>
            <h4>— Rahul Verma</h4>
          </div>
       <div className="testimonial-card">
            <p>
              "Perfect platform for beginners. The instructors explain concepts
              clearly and the UI is very easy to use."
            </p>
            <h4>— Ankit Singh</h4>
          </div>
         </div>
      </div>
    </div>
  );
};
export default Home;