const Grid = (props) => {
    const data = props.photos.map((pic) => {
        return (
            <div className="col-3 d-flex align-items-center mb-4">
                <img src={`https://live.staticflickr.com/${pic.server}/${pic.id}_${pic.secret}_m.jpg`} alt="text123" />
            </div>
        );
    });
    
    return (
        <div className="bg-light">
            <div className="container bg-white">
                <div className="row">
                    <div className="col-12 text-end">
                        <button type="button" className="btn btn-danger">View slideshow</button>
                    </div>
                </div>
                <div className="row">
                    {data}
                </div>
            </div>
        </div>
    );
}

export default Grid;