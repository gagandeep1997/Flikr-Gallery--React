import Header from './components/Header';
import classes from './styles/css/App.module.css';

function App() {
    return (
        <div className={`${classes.gridview}`}>
            <Header />
        </div>
    );
}

export default App;