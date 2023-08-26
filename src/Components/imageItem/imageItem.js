import React from "react";
// import './imageItem.css'

const ImageItem = ({webformatURL,largeImageURL,onOpenModal}) => {
    return(
        <li className="ImageItem">
            <img className="ImageItem-image" src={webformatURL} 
            data-largeurl={largeImageURL} 
            alt="" 
            onClick={e => onOpenModal(e.target.dataset.largeurl)}/>
        </li>
    )
}

export default ImageItem;
