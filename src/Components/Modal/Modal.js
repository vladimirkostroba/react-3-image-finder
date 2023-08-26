import React from "react";

const Modal = ({largeImgUrl}) => {
    return(
        <div className="Overlay">
             <div className="Modal">
                <img src={largeImgUrl} alt="" />
            </div>
        </div>
    )
}

export default Modal;
