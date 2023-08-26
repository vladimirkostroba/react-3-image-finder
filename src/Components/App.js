import React,{Component, Fragment} from 'react'
import Searchbar from './Searchbar/Searchbar'
import ImageGallery from './imageGallery/imageGallery'
import Modal from './Modal/Modal'

import imagesApi from '../servises/imagesApi'

export default class App extends Component {

    state = {
        images:[],
        page:1,
        searchQuery:'',
        loading:false,
        error:null,
        openModal:false,
        largeImgUrl:null,

    }

    // ДОБАВЛЕНИЕ ОБЪЕКТОВ В STATE.IMAGES

    componentDidUpdate(prevProps,prevState){
        const prevQuery = prevState.searchQuery;
        const nextQuery = this.state.searchQuery;

        if(prevQuery !== nextQuery){
            this.getImages();
        }
    }

    getImages = () => {
        const{page,searchQuery} = this.state;

        this.setState({loading:true});

        imagesApi(page,searchQuery).then(result =>
    
            this.setState(prevState => ({
                images:[...prevState.images,...result.hits],
                page:prevState.page + 1
            })

            )
        )
        .catch(error => this.setState({error}))
        .finally(() => this.setState({loading:false}));


    }

    // ПОЛУУЧЕНИЕ ЗАПРОСА ИЗ ФОРМЫ

    handleFormSubmit = query => {
        this.setState({
            searchQuery:query
        })

        this.getImages();
    }

    // Открытие модалки

    
    openModal =(url)=> {
        this.setState({
            openModal: true,
            largeImgUrl:url
        })
    }

    closeModal =()=>{
        this.setState({
            openModal: false,
            largeImgUrl:''
        })
    }

    // scroll




    render(){
        const{images,loading,openModal,largeImgUrl} = this.state;

        return(
            <Fragment>
                <Searchbar onSubmit={this.handleFormSubmit}/>
                {images.length > 0 && 
                <ImageGallery images={images} onOpenModal={this.openModal}/>}
                {images.length > 0 && 
                <button type='button' className='Button' 
                onClick={this.getImages}>{loading ? '...' : 'Load more'}</button>}
                {openModal && 
                <Modal onClose={this.closeModal}>
                    <img src={largeImgUrl} alt='#'/>
                </Modal>} 
            </Fragment>
        )
    }

}