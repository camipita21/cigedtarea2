
import React, { useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const images = [
  "/books/images1.webp",
  "/books/images2.webp",
  "/books/images3.webp",
  "/books/images4.webp",
  "/books/images5.webp",
  "/books/images6.webp",
  "/books/images7.webp",
  "/books/images8.webp",
  "/books/images10.webp",
  "/books/images11.webp",
  "/books/images13.webp",
  "/books/images14.webp",
  "/books/images15.webp",
  "/books/images16.webp",
  "/books/images17.webp",
  "/books/images18.webp",
  "/books/images19.webp",
];

const GalleryBooks = () => {
  const [loadedImages, setLoadedImages] = useState([]);
  const [imageCount, setImageCount] = useState(0);
  const handleScroll = () => {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    if (scrollY + windowHeight >= documentHeight - 100) {
      loadMoreImages();
    }
  };

  const loadMoreImages = () => {
    if (imageCount < images.length) {
      const nextImages = images.slice(imageCount, imageCount + 19); //ahhhhh
      setLoadedImages((prev) => [...prev, ...nextImages]);
      setImageCount((prev) => prev + nextImages.length);
      console.log(imageCount);
    }
  };
  useEffect(() => {
    loadMoreImages();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <h1>Librería</h1>
      <div className="images-gallery">
        {loadedImages.map((src, index) => (
          <LazyLoadImage
            key={index}
            alt={`Imagen ${index + imageCount + 1}`} 
            src={src}
            effect="blur"
            loading="lazy"
            className="responsive-image"
          />
        ))}
      </div>
    </div>
  );
};

export default GalleryBooks;