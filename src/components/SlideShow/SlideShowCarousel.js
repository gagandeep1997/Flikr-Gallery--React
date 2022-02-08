import { useContext } from 'react';
import ContextApiStore from '../../store/ContextApiStore';

const SlideShowCarousel = (props) => {
    const ctx = useContext(ContextApiStore);

    return (
        <div id="carouselExampleControls" className="carousel slide" data-bs-interval="false">
            <div className="carousel-inner">
                {props.SlideShowPhotos}
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev" onClick={props.prevPhotoClickListner} disabled={props.isPrevButtonDisabled && ctx.photono === 1 ? true : false}>
                <span className="carousel-control-prev-icon bg-dark" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next" onClick={props.nextPhotoClickListner}>
                <span className="carousel-control-next-icon bg-dark" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
}

export default SlideShowCarousel