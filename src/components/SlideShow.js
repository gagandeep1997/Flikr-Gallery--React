import { useState , useEffect } from "react";

const SlideShow = (props) => {
    const [ photono , setPhotono] = useState(((props.page-1)*20)+1);
    const [ data , setData ] = useState();
    const [ isPrevButtonDisabled , setIsPrevButtonDisabled ] = useState(true);
    var total_photos = props.total_pages*20;
    var currentPhotono = photono;
    
    useEffect(() => {
        var i=0;
        var data1 = props.photos.map((pic) => {
            if(currentPhotono % 2 !== 0){
                if(i===0){
                    i++;
                    return(
                        <div className="carousel-item active" key={pic.id}>
                            <img src={`https://live.staticflickr.com/${pic.server}/${pic.id}_${pic.secret}_m.jpg`} className="d-block ms-auto me-auto slideshow_img" alt="abc" />
                        </div>
                    );
                }else{
                    i++;
                    return(
                        <div className="carousel-item" key={pic.id}>
                            <img src={`https://live.staticflickr.com/${pic.server}/${pic.id}_${pic.secret}_m.jpg`} className="d-block ms-auto me-auto slideshow_img" alt="abc" />
                        </div>
                    );
                }
            }else{
                if(i===19){
                    i++;
                    return(
                        <div className="carousel-item active" key={pic.id}>
                            <img src={`https://live.staticflickr.com/${pic.server}/${pic.id}_${pic.secret}_m.jpg`} className="d-block ms-auto me-auto slideshow_img" alt="abc" />
                        </div>
                    );
                }else{
                    i++;
                    return(
                        <div className="carousel-item" key={pic.id}>
                            <img src={`https://live.staticflickr.com/${pic.server}/${pic.id}_${pic.secret}_m.jpg`} className="d-block ms-auto me-auto slideshow_img" alt="abc" />
                        </div>
                    );
                }
            }
        });
        setData(data1);
    },[props.photos]);

    const nextPhotoHandler = () => {
        if(photono === props.page*20){
            props.nextPageHandler();
        }
        setPhotono((photono) => photono + 1);
        if(photono === 1){
            setIsPrevButtonDisabled(false);
        }
    }

    const prevPhotoHandler = () => {
        if(((props.page-1)*20)+1){
            props.previousPageHandler();
        }
        if(photono!==1){
            setPhotono((photono) => photono-1);   
        }
        if(photono === 2){
            setIsPrevButtonDisabled(true);
        }
    }
    
    return (
        <div>
            <div id="carouselExampleControls" className="carousel slide" data-bs-interval="false">
                <div className="carousel-inner">
                    {data}
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev" onClick={prevPhotoHandler} disabled={isPrevButtonDisabled && photono===1 ? true : false}>
                    <span className="carousel-control-prev-icon bg-dark" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next" onClick={nextPhotoHandler}>
                    <span className="carousel-control-next-icon bg-dark" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <p>{`${photono} of ${total_photos}`}</p>
        </div>
    );
}

export default SlideShow;