import React from "react";
// import "./imageGallery.css"
import ImageItem from "../imageItem/imageItem";

const ImageGallery = ({images}) => {
     return(
        <ul className="ImageGallery">
            {images.map(({id,webformatURL,largeImageURL}) => (
                <ImageItem 
                key={id}
                webformatURL={webformatURL}
                largeImageURL={largeImageURL}
                />
            )
                )}
        </ul>
     )
}

export default ImageGallery; 

// id={id}
// webformatURL={webformatURL}
// largeImageURL={largeImageURL}