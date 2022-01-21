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

    if(photos!==undefined){
        total_pages = photos.pages;
    }

    const previousPageHandler = () => {
        if(page!==1){
            setPage((page) => page - 1);
        }
    }

    const nextPageHandler = () => {
        setPage((page) => page + 1);
    }

    function goToPageHandler(value) {
        setPage(Number(value));
    }

    console.log(photos);

    return (
        <div>
            <Header />
            {photos && <Grid photos={photos.photo} />}
            <Footer total_pages={total_pages} page={page} previousPageButtonHandler={previousPageHandler} nextPageButtonHandler={nextPageHandler} goToPageButtonHandler={goToPageHandler} />
        </div>
    );
}

export default App;