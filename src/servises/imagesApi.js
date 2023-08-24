const apiKey = '35001387-39eff442400f6eb88f2a6844e';

const fetchImages = (page,searchQuery) => {
    const url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${searchQuery}&page=${page}&per_page=9&key=${apiKey}`;
    
    return fetch(url)
        .then(res => res.json())
}

export default fetchImages;