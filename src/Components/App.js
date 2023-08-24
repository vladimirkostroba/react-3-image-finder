import React,{Component} from 'react'
import Searchbar from './Searchbar/Searchbar'

import imagesApi from '../servises/imagesApi'

export default class App extends Component {

    state = {
        images:[],
        page:1,
        searchQuery:'',

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

        imagesApi(page,searchQuery).then(result =>{
    
            this.setState(prevState => ({
                images:[...prevState.images,...result.hits],
                page:prevState.page + 1
            })

            )
        });
    }

    // ПОЛУУЧЕНИЕ ЗАПРОСА ИЗ ФОРМЫ

    handleFormSubmit = query => {
        this.setState({
            searchQuery:query
        })

        this.getImages();
    }



    render(){
        return(
            <Searchbar onSubmit={this.handleFormSubmit}/>
        )
    }

}