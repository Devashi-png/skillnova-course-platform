import { useNavigate } from "react-router-dom";
const CourseCard = ({
  id,
  title,
  price,
  duration,
  instructor,
  level,
  rating,
  popular,
  image   
}) => {
  const navigate = useNavigate();
   return (
    <div
      className="course-card"
      onClick={() => navigate(`/courses/${id}`)}
      style={{ cursor: "pointer", position: "relative" }}
    >
       {/*  Image FIX */}
      <img src={image} alt={title} className="course-img" />
      {/* Popular Badge FIX */}
      {popular && <span className="badge">🔥 Popular</span>}
      <h3>{title}</h3>
      <p className="meta">👨‍🏫 {instructor}</p>
      <p className="meta">⏳ {duration} • 📘 {level}</p>
      <p className="meta">⭐ {rating}</p>
      <h4 className="price">₹{price}</h4>
      <button
         className="view-btn"
        onClick={(e) => {
          e.stopPropagation();
          navigate(`/courses/${id}`);
        }}
      >
        View Details
      </button>
    </div>
  );
};
export default CourseCard;