import classes from '../../css/Header.module.css';

const Header = () => {
    return (
        <header className='bg-light'>
            <div className="container bg-white">
                <div className="row">
                    <div className="col-8">
                        <h1 className={classes.headerName}>LBI</h1>
                    </div>
                    <div className="col-4">
                        <h4 className='text-end mt-3 me-1'>Flikr By Yahoo</h4>
                    </div>
                </div>
                <div className={`${classes.headerborder} row`}>
                    <span className="border-bottom mb-3 mx-3"></span>
                </div>
            </div>
        </header>
    );
}

export default Header;