import { useState , useEffect } from 'react';
import SlideShow from './SlideShow/SlideShow';
import Footer from './Footer.js';
import GridViewer from './GridViewer';
import SlideShowViewer from './SlideShow/SlideShowViewer';

const Grid = (props) => {
    const [ GridPhotos , setGridPhotos ] = useState();
    const [ SlideShowPhotos , setSlideShowPhotos ] = useState();

    useEffect(() => {
        var i=0;
        const Grid = props.PhotosArr.map((pic) => {
            i++;
            return (
                <GridViewer key={pic.id} serverid={pic.server} id={pic.id} secret={pic.secret} goToPhotoHandler={props.goToPhotoHandler} dataid={i} />
            );
        });

        i=0;
        const SlideShow = props.PhotosArr.map((pic) => {
            if(props.isPrev){
                if(i===19){
                    i++;
                    return(
                        <SlideShowViewer key={pic.id} dataId={i} server={pic.server} id={pic.id} secret={pic.secret} IsActive="active" />
                    );
                }else{
                    i++;
                    return(
                        <SlideShowViewer key={pic.id} dataId={i} server={pic.server} id={pic.id} secret={pic.secret} IsActive="" />
                    );
                }
            }else{
                if(i===0){
                    i++;
                    return(
                        <SlideShowViewer key={pic.id} dataId={i} server={pic.server} id={pic.id} secret={pic.secret} IsActive="active" />
                    );
                }else{
                    i++;
                    return(
                        <SlideShowViewer key={pic.id} dataId={i} server={pic.server} id={pic.id} secret={pic.secret} IsActive="" />
                    );
                }
            }
        })
        setGridPhotos(Grid);
        setSlideShowPhotos(SlideShow);
    },[props.PhotosArr,props.isPrev,props.goToPhotoHandler])
    
    return (
        <div className="bg-light" style={{minHeight:"350px"}}>
            <div className="container bg-white">
                <div className="row">
                    <div className="col-12 text-end">
                        <button type="button" className="btn btn-danger" onClick={props.toggleGridView}>{props.showgrid ? "View slideshow":"View Grid"}</button>
                    </div>
                </div>
                <div className={`row ${!props.showgrid ? "d-none" : ""}`}>
                    {GridPhotos}
                </div>
                <div className={`row ${props.showgrid ? "d-none" : ""}`}>
                    <SlideShow TotalPages={props.TotalPages} SlideShowPhotos={SlideShowPhotos} nextPhotoHandler={props.nextPhotoHandler} previousPhotoHandler={props.previousPhotoHandler} PhotosArr={props.PhotosArr} photono={props.photono} IsGridPhotoClicked={props.IsGridPhotoClicked} />
                </div>
                <div className={`row ${!props.showgrid ? "d-none" : ""}`}>
                    {props.showgrid && <Footer TotalPages={props.TotalPages} Page={props.Page} previousPageButtonHandler={props.previousPageHandler} nextPageButtonHandler={props.nextPageHandler} goToPageButtonHandler={props.goToPageHandler}/>}
                </div>
            </div>
        </div>
    );
}

export default Grid;