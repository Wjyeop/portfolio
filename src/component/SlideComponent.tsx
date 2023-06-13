import React, { useState } from 'react';

interface SlideComponentProps {
  images: string[];
}

const SlideComponent: React.FC<SlideComponentProps> = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + images.length) % images.length);
  };

  return (
    <div className="slide-container">
      <button onClick={goToPrevSlide}>이전</button>
      <img src={images[currentSlide]} alt="Slide" />
      <button onClick={goToNextSlide}>다음</button>
    </div>
  );
};

export default SlideComponent;
