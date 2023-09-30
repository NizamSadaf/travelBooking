import Masonry,{ ResponsiveMasonry } from "react-responsive-masonry";
import galleryImages from "./GalleryImages";
import React from 'react'
import './image-gallery.css'
const MasonryImageGallery = () => {
    const columnsCountBreakPoints = { 350: 1, 750: 2, 900: 3 };
  return (
      <ResponsiveMasonry columnsCountBreakPoints={columnsCountBreakPoints}>
          <Masonry gutter="1rem">
            {galleryImages.map((image,index) => (
                <img className="masonry_img" src={image} key={index} style={{width: '100%',
                display: 'block',
                borderRadius: '10px'}}/>
            ))}
          </Masonry>
    
    </ResponsiveMasonry>
  )
}

export default MasonryImageGallery


