import { useState , useEffect, useCallback} from 'react';
import Grid from './Grid.js';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

const GridView = () => {
    const [ PhotosObj , setPhotosObj ] = useState();
    const [ Page , setPage ] = useState(1);
    const [ photono , setPhotono ] = useState(1);
    const [ showgrid,setShowGrid ] = useState(true);
    const [ isPrev , setIsPrev ] = useState(false);
    const [ IsLoading , setIsloading] = useState(true);
    const [ IsGridPhotoClicked , setIsGridPhotoClicked ] = useState(false);
    var TotalPages;
    
    const fetchdata = async (url) => {
        const response = await fetch(url);
        if(response.status === 200){
            setIsloading(false);
        }
        const fetchedPhotosObj = await response.json();
        setPhotosObj(fetchedPhotosObj.photos);
    };
    
    useEffect(() => {
        const tag_name = "cars";
        const url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&per_page=20&page=${Page}&api_key=c4122618b102891a0dfef83e11bfce73&tags=${tag_name}&format=json&nojsoncallback=1`;
        fetchdata(url);
    },[Page]);

    if(PhotosObj !== undefined){
        TotalPages = PhotosObj.pages;
    }
    
    const previousPageHandler = () => {
        if(Page !== 1){
            setIsloading(true);
            setPage((Page) => Page - 1);
            setPhotono(((Page-2)*20)+1);
            if(isPrev === true){
                setIsPrev(false);
            }
            setIsGridPhotoClicked(false);
        }
    }

    const previousPhotoHandler = () => {
        if(Page !== 1){
            if((((Page-1)*20)+1) === photono){
                setIsloading(true);
                setPage((Page) => Page - 1);
                setIsPrev(true);
            }
        }
        setPhotono((photo) => photo-1);
        setIsGridPhotoClicked(false);
    }

    const nextPageHandler = () => {
        setIsloading(true);
        setPage((Page) => Page + 1);
        setPhotono((Page*20)+1);
        if(isPrev===true){
            setIsPrev(false);
        }
        setIsGridPhotoClicked(false);
    }

    const nextPhotoHandler = () => {
        if(Page*20 === photono){
            setIsloading(true);
            setPage((Page) => Page + 1);
            if(isPrev===true){
                setIsPrev(false);
            }
        }
        setPhotono((photo) => photo+1);
        setIsGridPhotoClicked(false);
    }

    const goToPageHandler = (value) => {
        const val = Number(value);
        setIsloading(true);
        setPage(val);
        setPhotono(((val-1)*20)+1);
        setIsGridPhotoClicked(false);
    }

    const toggleGridView = () => {
        setShowGrid((showgrid) => !showgrid);
    }

    const goToPhotoHandler = useCallback((event) => {
        setShowGrid((showgrid) => !showgrid);
        setPhotono((Page-1)*20 + Number(event.currentTarget.children[0].attributes[2].value));
        setIsGridPhotoClicked(true);
    },[Page]);
    
    return (
        <div>
            {(PhotosObj && !IsLoading) ? <Grid PhotosArr={PhotosObj.photo} toggleGridView={toggleGridView} showgrid={showgrid} Page={Page} TotalPages={TotalPages} nextPageHandler={nextPageHandler} previousPageHandler={previousPageHandler} goToPageHandler={goToPageHandler} photono={photono} nextPhotoHandler={nextPhotoHandler} previousPhotoHandler={previousPhotoHandler} isPrev={isPrev} goToPhotoHandler={goToPhotoHandler} IsGridPhotoClicked={IsGridPhotoClicked} /> 
            : <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open >
                <CircularProgress color="inherit" />
              </Backdrop>}
        </div>
    );
}

export default GridView;