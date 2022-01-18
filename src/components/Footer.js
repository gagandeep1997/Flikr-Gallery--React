import classes from "./Footer.module.css";

const Footer = () => {
    return (
        <footer className='bg-light'>
            <div className="container bg-white">
                <div className="row">
                    <div className="col-6">
                        <div className="row">
                            <div className="col-12">
                                <p className="mb-2">Showing page 1 of 118</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 d-flex align-items-center">
                                <p className="d-inline mb-0">Go to Page</p>
                                <input className="ms-2" />
                                <button className="btn btn-danger btn-sm ms-2">Go</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 text-end">
                        <button className="btn btn-danger">Previous page</button>
                        <button className="btn btn-danger ms-2">Next page</button>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;