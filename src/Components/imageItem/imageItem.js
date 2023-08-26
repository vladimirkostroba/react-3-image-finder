import React from "react";
// import './imageItem.css'

const ImageItem = ({webformatURL,largeImageURL,onOpenModal}) => {
    return(
        <li className="ImageItem">
            <img className="ImageItem-image" src={webformatURL} 
            datatype={largeImageURL} 
            alt="" 
            onClick={(e) => onOpenModal(largeImageURL)}/>
        </li>
    )
}

export default ImageItem;
