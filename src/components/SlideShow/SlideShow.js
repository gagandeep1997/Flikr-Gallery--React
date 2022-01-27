import { Fragment , useState } from "react";
import SlideShowCarousel from './SlideShowCarousel';
import SlideShowFooter from './SlideShowFooter';

const SlideShow = (props) => {
    const [ isPrevButtonDisabled , setIsPrevButtonDisabled ] = useState(true);
    var TotalPhotos = props.TotalPages*20;

    const nextPhotoClickListner = () => {
        if(props.photono === 1){
            setIsPrevButtonDisabled(false);
        }
        props.nextPhotoHandler();
    }
    
    const prevPhotoClickListner = () => {
        if(props.photono === 2){
            setIsPrevButtonDisabled(true);
        }
        props.previousPhotoHandler();
    }

    if(props.IsGridPhotoClicked){
        if(document.getElementsByClassName("active")[0]){
            document.getElementsByClassName("active")[0].classList.remove("active");
            var val = (props.photono%20) === 0 ? 20 : (props.photono%20);
            document.querySelectorAll(`[data-id="${val}"]`)[1].classList.add("active");
        }
    }

    var currentimageObject = props.PhotosArr[(props.photono-1)%20];
    var title = currentimageObject.title;
    var imageURL = 'https://live.staticflickr.com/'+currentimageObject.server+'/'+currentimageObject.id+'_'+currentimageObject.secret+'_z.jpg';
    
    return (
        <Fragment>
            <SlideShowCarousel SlideShowPhotos={props.SlideShowPhotos} photono={props.photono} isPrevButtonDisabled={isPrevButtonDisabled} prevPhotoClickListner={prevPhotoClickListner} nextPhotoClickListner={nextPhotoClickListner} />
            <SlideShowFooter title={title} photono={props.photono} TotalPhotos={TotalPhotos} imageURL={imageURL} />
        </Fragment>
    );
}

export default SlideShow;