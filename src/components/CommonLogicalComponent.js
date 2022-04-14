import { useState , useCallback , useContext} from 'react';
import Grid from './Grid/Grid';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import ContextApiStore from '../store/ContextApiStore';

const CommonLogicalComponent = () => {
    const ctx = useContext(ContextApiStore);
    const [ showgrid , setShowGrid ] = useState(true);
    const [ isPrev , setIsPrev ] = useState(false);
    const [ IsGridPhotoClicked , setIsGridPhotoClicked ] = useState(false);
    
    var TotalPages;

    if(ctx.PhotosObj !== undefined){
        TotalPages = ctx.PhotosObj.pages;
    }
    
    const previousPageHandler = () => {
        if(ctx.Page !== 1){
            ctx.Loader(true);
            ctx.PageDecrement();
            ctx.previousPagePhotoChange();
            if(isPrev === true){
                setIsPrev(false);
            }
            if(IsGridPhotoClicked){
                setIsGridPhotoClicked(false);
            }
        }
    }

    const nextPageHandler = () => {
        ctx.Loader(true);
        ctx.PageIncrement();
        ctx.nextPagePhotoChange();
        if(isPrev===true){
            setIsPrev(false);
        }
        if(IsGridPhotoClicked){
            setIsGridPhotoClicked(false);
        }
    }

    const previousPhotoHandler = () => {
        console.log(ctx.Page)
        if(ctx.Page !== 1){
            if((((ctx.Page-1)*20)+1) === ctx.photono){
                ctx.Loader(true);
                ctx.PageDecrement();
                setIsPrev(true);
            }
        }
        ctx.PhotoDecrement();
        if(IsGridPhotoClicked){
            setIsGridPhotoClicked(false);
        }
    }


    const nextPhotoHandler = () => {
        if(ctx.Page*20 === ctx.photono){
            ctx.Loader(true);
            ctx.PageIncrement();
            if(isPrev === true){
                setIsPrev(false);
            }
        }
        ctx.PhotoIncrement();
        if(IsGridPhotoClicked){
            setIsGridPhotoClicked(false);
        }
    }

    const goToPageHandler = (value) => {
        const val = Number(value);
        ctx.Loader(true);
        ctx.GoToPage(val);
        if(IsGridPhotoClicked){
            setIsGridPhotoClicked(false);
        }
    }
    
    const goToPhotoHandler = useCallback((event) => {
        setShowGrid((showgrid) => !showgrid);
        ctx.GoToPhoto(event);
        setIsGridPhotoClicked(true);
    },[ctx]);

    const toggleGridView = () => {
        setShowGrid((showgrid) => !showgrid);
    }
    
    return (
        <div>
            {(ctx.PhotosObj && !ctx.IsLoading) ? <Grid toggleGridView={toggleGridView} showgrid={showgrid} TotalPages={TotalPages} nextPageHandler={nextPageHandler} previousPageHandler={previousPageHandler} goToPageHandler={goToPageHandler} nextPhotoHandler={nextPhotoHandler} previousPhotoHandler={previousPhotoHandler} isPrev={isPrev} goToPhotoHandler={goToPhotoHandler} IsGridPhotoClicked={IsGridPhotoClicked} /> 
            : <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open >
                <CircularProgress color="inherit" />
              </Backdrop>}
        </div>
    );
}

export default CommonLogicalComponent;