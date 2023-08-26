import React ,{Component} from 'react';

class Modal extends Component {
    componentDidMount(){
       window.addEventListener('keydown', this.handleKeyDown);

    }

    componentWillUnmount(){
        window.removeEventListener('keydown',this.handleKeyDown)
    }

    handleKeyDown=e=>{
        if(e.code === 'Escape'){
            this.props.onClose();
        }
    }
    
    render(){
        return(
            <div className='Overlay'>
                <div className='Modal'>{this.props.children}</div>
            </div>
        )
    }
}

export default Modal;