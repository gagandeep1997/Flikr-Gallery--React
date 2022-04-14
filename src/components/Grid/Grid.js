import { useState , useEffect , useContext } from 'react';
import SlideShow from '../SlideShow/SlideShow';
import GridFooter from './GridFooter';
import GridViewer from './GridViewer';
import ContextApiStore from '../../store/ContextApiStore';

const Grid = (props) => {
    const [ GridPhotos , setGridPhotos ] = useState();
    const ctx = useContext(ContextApiStore);

    useEffect(() => {
        var i=0;
        const Grid = ctx.PhotosObj.photo.map((pic) => {
            i++;
            return (
                <GridViewer key={pic.id} serverid={pic.server} id={pic.id} secret={pic.secret} goToPhotoHandler={props.goToPhotoHandler} dataid={i} />
            );
        });
        setGridPhotos(Grid);
    },[ctx.PhotosObj,props.goToPhotoHandler])
    
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
                    {props.showgrid && <GridFooter TotalPages={props.TotalPages} previousPageButtonHandler={props.previousPageHandler} nextPageButtonHandler={props.nextPageHandler} goToPageButtonHandler={props.goToPageHandler}/>}
                </div>
                <div className={`row ${props.showgrid ? "d-none" : ""}`}>
                    <SlideShow TotalPages={props.TotalPages} nextPhotoHandler={props.nextPhotoHandler} previousPhotoHandler={props.previousPhotoHandler} IsGridPhotoClicked={props.IsGridPhotoClicked} isPrev={props.isPrev} />
                </div>
            </div>
        </div>
    );
}

export default Grid;