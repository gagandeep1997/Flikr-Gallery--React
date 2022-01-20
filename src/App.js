import { useState , useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Grid from './components/Grid';

function App() {
    const [ photos , setPhotos ] = useState();
    const [ page , setPage ] = useState(1);
    var total_pages;
    
    const fetchdata = async (url) => {
        const response = await fetch(url);
        const photos = await response.json();
        setPhotos(photos.photos);
    };

    useEffect(() => {
        const tag_name = "cars";
        const url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&per_page=20&page=${page}&api_key=c4122618b102891a0dfef83e11bfce73&tags=${tag_name}&format=json&nojsoncallback=1`;
        fetchdata(url);
    },[page]);

    console.log(photos);
    if(photos!==undefined){
        total_pages = photos.pages;
    }
    return (
        <div>
            <Header />
            {photos!==undefined && <Grid photos={photos.photo} />}
            <Footer total_pages={total_pages} page={page} />
        </div>
    );
}

export default App;