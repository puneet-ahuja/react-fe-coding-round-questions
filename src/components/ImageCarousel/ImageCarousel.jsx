import "./ImageCarousel.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useEffect, useState } from "react";
import CircleIndicators from "./components/CircleIndicators/CircleIndicators";

const ImageCarousel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imageData, setImageData ] = useState([]);
  const [loading , setLoading] = useState(true);
  const [errorMessage , setErrorMessage] = useState('');

  useEffect(()=>{

    setLoading(true);
    fetch('https://picsum.photos/v2/list?limit=5&page=1')
    .then((response)=>response.json())
    .then((data)=>{
        setImageData(data);
        setLoading(false);
    })
    .catch((error)=>{
        setErrorMessage(error.message)
    })
  },[])


  const nextImage = () => {
    setCurrentImageIndex((currentImageIndex + 1) % imageData.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      currentImageIndex === 0 ? imageData.length - 1 : currentImageIndex - 1
    );
  };

  if(loading){
    return <>Loading Please Wait</>
  }

  if(errorMessage){
    return <>Something went wrong</>
  }

  return (
    <div className="image-slider-container">
      {/* Left Icon */}
      <FaArrowLeft
        size={40}
        color="white"
        className="arrow arrow-left"
        onClick={prevImage}
      />

      {/* Image */}
      {imageData &&
        Array.isArray(imageData) &&
        imageData.map(({ id, download_url: url }, index) => {
          return (
            <img
              key={id}
              src={url}
              alt={url}
              className={`image ${
                currentImageIndex === index ? "current-image" : ""
              }`}
            ></img>
          );
        })}

      {/* Right Icon */}
      <FaArrowRight
        size={40}
        color="white"
        className="arrow arrow-right"
        onClick={nextImage}
      />
      <div className="circle-indicators-container">
        <CircleIndicators 
            length={imageData.length}
            selectedIndex={currentImageIndex}
            onCircleClickHandler={setCurrentImageIndex}
        />
      </div>
    </div>
  );
};

export default ImageCarousel;
