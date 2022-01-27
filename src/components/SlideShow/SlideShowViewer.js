const SlideShowViewer = (props) => {
    return (
        <div className={`carousel-item ${props.IsActive}`} key={props.id} data-id={`${props.dataId}`}>
            <img src={`https://live.staticflickr.com/${props.server}/${props.id}_${props.secret}_m.jpg`} className="d-block ms-auto me-auto slideshow_img" alt="abc" />
        </div>
    );
}

export default SlideShowViewer;