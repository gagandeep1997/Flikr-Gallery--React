const GridViewer = (props) => {
    return (
        <div className="col-3 d-flex align-items-center mb-4" key={props.id} onClick={props.goToPhotoHandler}>
            <img src={`https://live.staticflickr.com/${props.serverid}/${props.id}_${props.secret}_m.jpg`} alt="text123" data-id={`${props.dataid}`} />
        </div>
    );
}

export default GridViewer;