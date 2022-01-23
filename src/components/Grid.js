import SlideShow from './SlideShow';
import Footer from './Footer.js';

const Grid = (props) => {
    const data = props.photos.map((pic) => {
        return (
            <div className="col-3 d-flex align-items-center mb-4" key={pic.id}>
                <img src={`https://live.staticflickr.com/${pic.server}/${pic.id}_${pic.secret}_m.jpg`} alt="text123" />
            </div>
        );
    });
    
    return (
        <div className="bg-light" style={{minHeight:"350px"}}>
            <div className="container bg-white">
                <div className="row">
                    <div className="col-12 text-end">
                        <button type="button" className="btn btn-danger" onClick={props.toggleGridView}>{props.showgrid ? "View slideshow":"View Grid"}</button>
                    </div>
                </div>
                <div className="row">
                    {props.showgrid && data}
                    {!props.showgrid && <SlideShow photos={props.photos} page={props.page} total_pages={props.total_pages} nextPageHandler={props.nextPageHandler} previousPageHandler={props.previousPageHandler} />}
                </div>
                <div className="row">
                    {props.showgrid && <Footer total_pages={props.total_pages} page={props.page} previousPageButtonHandler={props.previousPageHandler} nextPageButtonHandler={props.nextPageHandler} goToPageButtonHandler={props.goToPageHandler}/>}
                </div>
            </div>
        </div>
    );
}

export default Grid;