import { useState , useEffect} from 'react';
import Grid from './Grid.js';
import Footer from './Footer.js';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

const GridView = () => {
    const [ photos , setPhotos ] = useState();
    const [ page , setPage ] = useState(1);
    const [ showgrid,setShowGrid ] = useState(true);
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

    const goToPageHandler = (value) => {
        setPage(Number(value));
    }

    const toggleGridView = () => {
        setShowGrid((showgrid) => !showgrid);
    }

    console.log(photos);

    return (
        <div>
            {photos ? <Grid photos={photos.photo} toggleGridView={toggleGridView} showgrid={showgrid} /> : <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open
            >
                <CircularProgress color="inherit" />
            </Backdrop>}
            {showgrid && <Footer total_pages={total_pages} page={page} previousPageButtonHandler={previousPageHandler} nextPageButtonHandler={nextPageHandler} goToPageButtonHandler={goToPageHandler} />}
        </div>
    );
}

export default GridView;