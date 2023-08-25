const apiKey = '35001387-39eff442400f6eb88f2a6844e';

const fetchImages = (page,searchQuery) => {
    const url = `https://pixabay.com/api/?q=${searchQuery}&page=${page}&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=3`;
    
    return fetch(url)
        .then(res => res.json())
}

export default fetchImages;