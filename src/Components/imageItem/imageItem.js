import React from "react";
// import './imageItem.css'

const ImageItem = ({webformatURL,largeImageURL}) => {
    return(
        <li className="ImageItem">
            <img className="ImageItem-image" src={webformatURL} data-url={largeImageURL} alt="" />
        </li>
    )
}

export default ImageItem;
