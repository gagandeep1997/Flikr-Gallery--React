const SlideShowFooter = (props) => {
    return (
        <div className="col-8 offset-2 mt-2">
            <div className="row">
                <div className="col-6">
                    <p className="ms-2 title fw-bold">{props.title}</p>
                    <p className="ms-2 mt-1">By <u className="text-danger">Gagan Deep</u></p>
                </div>
                <div className="col-6">
                    <p className="text-end me-2 download-file">{`${props.photono} of ${props.TotalPhotos}`}</p>
                    <p className="text-end me-2">
                        <a href={props.imageURL} target="_blank" rel="noreferrer"><u className="text-danger ms-5">Download original</u></a>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default SlideShowFooter;