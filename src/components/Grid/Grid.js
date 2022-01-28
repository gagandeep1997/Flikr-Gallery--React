import { useState , useEffect } from 'react';
import SlideShow from '../SlideShow/SlideShow';
import GridFooter from './GridFooter';
import GridViewer from './GridViewer';

const Grid = (props) => {
    const [ GridPhotos , setGridPhotos ] = useState();

    useEffect(() => {
        var i=0;
        const Grid = props.PhotosArr.map((pic) => {
            i++;
            return (
                <GridViewer key={pic.id} serverid={pic.server} id={pic.id} secret={pic.secret} goToPhotoHandler={props.goToPhotoHandler} dataid={i} />
            );
        });
        
        setGridPhotos(Grid);
    },[props.PhotosArr,props.goToPhotoHandler])
    
    return (
        <div className="bg-light" style={{minHeight:"350px"}}>
            <div className="container bg-white" style={{minHeight:"88vh"}}>
                <div className="row">
                    <div className="col-12 text-end">
                        <button type="button" className="btn btn-danger" onClick={props.toggleGridView}>{props.showgrid ? "View slideshow":"View Grid"}</button>
                    </div>
                </div>
                <div className={`row ${!props.showgrid ? "d-none" : ""}`}>
                    {GridPhotos}
                </div>
                <div className={`row ${!props.showgrid ? "d-none" : ""}`}>
                    {props.showgrid && <GridFooter TotalPages={props.TotalPages} Page={props.Page} previousPageButtonHandler={props.previousPageHandler} nextPageButtonHandler={props.nextPageHandler} goToPageButtonHandler={props.goToPageHandler}/>}
                </div>
                <div className={`row ${props.showgrid ? "d-none" : ""}`}>
                    <SlideShow TotalPages={props.TotalPages} nextPhotoHandler={props.nextPhotoHandler} previousPhotoHandler={props.previousPhotoHandler} PhotosArr={props.PhotosArr} photono={props.photono} IsGridPhotoClicked={props.IsGridPhotoClicked} isPrev={props.isPrev} />
                </div>
            </div>
        </div>
    );
}

export default Grid;