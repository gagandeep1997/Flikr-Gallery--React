import { Fragment , useState , useEffect , useContext } from "react";
import SlideShowCarousel from './SlideShowCarousel';
import SlideShowFooter from './SlideShowFooter';
import SlideShowViewer from './SlideShowViewer';
import ContextApiStore from '../../store/ContextApiStore';

const SlideShow = (props) => {
    const [ isPrevButtonDisabled , setIsPrevButtonDisabled ] = useState(true);
    const [ SlideShowPhotos , setSlideShowPhotos ] = useState();
    const ctx = useContext(ContextApiStore);
    
    var TotalPhotos = props.TotalPages*20;

    useEffect(() => {
        var i=0;
        const SlideShow = ctx.PhotosObj.photo.map((pic) => {
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
    },[ctx.PhotosObj,props.isPrev]);

    const nextPhotoClickListner = () => {
        if(ctx.photono === 1){
            setIsPrevButtonDisabled(false);
        }
        props.nextPhotoHandler();
    }
    
    const prevPhotoClickListner = () => {
        if(ctx.photono === 2){
            setIsPrevButtonDisabled(true);
        }
        props.previousPhotoHandler();
    }

    if(props.IsGridPhotoClicked){
        if(document.getElementsByClassName("active")[0]){
            document.getElementsByClassName("active")[0].classList.remove("active");
            var val = (ctx.photono % 20) === 0 ? 20 : (ctx.photono % 20);
            document.querySelectorAll(`[data-id="${val}"]`)[1].classList.add("active");
        }
    }

    var currentimageObject = ctx.PhotosObj.photo[(ctx.photono-1)%20];
    var title = currentimageObject.title;
    var imageURL = 'https://live.staticflickr.com/'+currentimageObject.server+'/'+currentimageObject.id+'_'+currentimageObject.secret+'_z.jpg';
    
    return (
        <Fragment>
            <SlideShowCarousel SlideShowPhotos={SlideShowPhotos} isPrevButtonDisabled={isPrevButtonDisabled} prevPhotoClickListner={prevPhotoClickListner} nextPhotoClickListner={nextPhotoClickListner} />
            <SlideShowFooter title={title} TotalPhotos={TotalPhotos} imageURL={imageURL} />
        </Fragment>
    );
}

export default SlideShow;