const GridViewer = (props) => {
    return (
        <div className="img-grid col-3 d-flex align-items-center mb-4 position-relative overflow-hidden" key={props.id}>
            <img src={`https://live.staticflickr.com/${props.serverid}/${props.id}_${props.secret}_m.jpg`} alt="text123" data-id={`${props.dataid}`} onClick={props.goToPhotoHandler} />
            <a className="download-btn" href={`https://live.staticflickr.com/${props.serverid}/${props.id}_${props.secret}_m.jpg`} target="_blank" rel="noreferrer">Download original</a>
        </div>
    );
}

export default GridViewer;