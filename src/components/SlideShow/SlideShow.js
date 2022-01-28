import { Fragment , useState , useEffect } from "react";
import SlideShowCarousel from './SlideShowCarousel';
import SlideShowFooter from './SlideShowFooter';
import SlideShowViewer from './SlideShowViewer';

const SlideShow = (props) => {
    const [ isPrevButtonDisabled , setIsPrevButtonDisabled ] = useState(true);
    const [ SlideShowPhotos , setSlideShowPhotos ] = useState();
    var TotalPhotos = props.TotalPages*20;

    useEffect(() => {
        var i=0;
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
        });
        setSlideShowPhotos(SlideShow);   
    },[props.PhotosArr,props.isPrev]);

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
            <SlideShowCarousel SlideShowPhotos={SlideShowPhotos} photono={props.photono} isPrevButtonDisabled={isPrevButtonDisabled} prevPhotoClickListner={prevPhotoClickListner} nextPhotoClickListner={nextPhotoClickListner} />
            <SlideShowFooter title={title} photono={props.photono} TotalPhotos={TotalPhotos} imageURL={imageURL} />
        </Fragment>
    );
}

export default SlideShow;