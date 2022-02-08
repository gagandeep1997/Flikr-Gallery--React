import { useRef , useContext } from "react";
import ContextApiStore from '../../store/ContextApiStore';

const GridFooter = (props) => {
    const pageInputRef = useRef();
    const ctx = useContext(ContextApiStore);

    const goToPageHandler = () => {
        props.goToPageButtonHandler(pageInputRef.current.value);
    }
    return (
        <footer>
            <div className="row pb-5">
                <div className="col-6">
                    <div className="row">
                        <div className="col-12">
                            <p className="mb-2">{`Showing page ${ctx.Page} of ${props.TotalPages}`}</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 d-flex align-items-center">
                            <p className="d-inline mb-0" >Go to Page</p>
                            <input type="number" className="ms-2" ref={pageInputRef} />
                            <button className="btn btn-danger btn-sm ms-2" onClick={goToPageHandler}>Go</button>
                        </div>
                    </div>
                </div>
                <div className="col-6 text-end">
                    <button className="btn btn-danger" onClick={props.previousPageButtonHandler}>Previous page</button>
                    <button className="btn btn-danger ms-2" onClick={props.nextPageButtonHandler}>Next page</button>
                </div>
            </div>
        </footer>
    );
}

export default GridFooter;