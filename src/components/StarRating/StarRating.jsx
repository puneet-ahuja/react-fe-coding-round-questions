import { FaStar } from "react-icons/fa";
import { useState } from "react";



const StarRating = ({
    noOfStars 
}) => {
    const [selected , setSelected] = useState(0);
    const [hovered, setHovered] = useState(null);


    return <div className="star-rating">
        {/* We figured that the fill is required to iterate over the array and return right value. */}
        {new Array(noOfStars).fill(0).map((_, index) => (
          <FaStar
            key={index}
            size={40}
            onMouseEnter={() => setHovered(index + 1)}
            onMouseLeave={() => setHovered(null)}
            onClick={() => setSelected(index + 1)}
            color={(hovered || selected) > index ? "#ffc107" : "#e4e5e9"}
          />
        ))}
        </div>;
  };
  
  export default StarRating;