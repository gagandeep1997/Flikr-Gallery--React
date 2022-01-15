import { Fragment } from 'react';
import Button from 'react-bootstrap/Button'

function App() {
    return (
        <Fragment>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-6"><h1>Flikr Gallery</h1></div>
                    <div className="col-6"><Button variant="primary">Primary</Button></div>
                </div>
            </div>
        </Fragment>
    );
}

export default App;