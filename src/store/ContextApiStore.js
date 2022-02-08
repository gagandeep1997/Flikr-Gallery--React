import React , { useEffect , useState } from "react";

const ContextApiStore = React.createContext({
    PhotosObj : null,
    Page : 1,
    photono : 1,
    IsLoading : true,
    PageDecrement : () => {},
    PageIncrement : () => {},
    GoToPage : (val) => {},
    PhotoDecrement : () => {},
    PhotoIncrement : () => {},
    previousPagePhotoChange : () => {},
    nextPagePhotoChange : () => {},
    GoToPhoto : (event) => {},
    Loader : (value) => {}
});

export const ContextApiStoreProvider = (props) => {
    const [ Page , setPage ] = useState(1);
    const [ photono , setPhotono ] = useState(1);
    const [ IsLoading , setIsloading] = useState(true);
    const [ PhotosObj , setPhotosObj ] = useState();

    const fetchdata = async (url) => {
        const response = await fetch(url);
        if(response.status === 200){
            setIsloading(false);
        }
        const fetchedPhotosObj = await response.json();
        setPhotosObj(fetchedPhotosObj.photos);
    };
    
    useEffect(() => {
        const tag_name = "cars";
        const url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&per_page=20&page=${Page}&api_key=c4122618b102891a0dfef83e11bfce73&tags=${tag_name}&format=json&nojsoncallback=1`;
        fetchdata(url);
    },[Page]);

    const PageIncrementHandler = () => {
        setPage((Page) => Page + 1);
    }

    const PageDecrementHandler = () => {
        setPage((Page) => Page - 1);
    }
    
    const GoToPageHandler = (value) => {
        setPage(value);
        setPhotono(((value-1)*20)+1);
    }

    const PhotoIncrementHandler = () => {
        setPhotono((Photo) => Photo + 1);
    }

    const PhotoDecrementHandler = () => {
        setPhotono((Photo) => Photo - 1);
    }

    const previousPagePhotoHandler = () => {
        setPhotono(((Page-2)*20)+1);
    }

    const nextPagePhotoHandler = () => {
        setPhotono((Page*20)+1);
    }

    const GoToPhotoHandler = (event) => {
        setPhotono((Page-1)*20 + Number(event.currentTarget.attributes[2].value));
    }

    const LoaderHandler = (value) => {
        setIsloading(value);
    }

    return <ContextApiStore.Provider value={{
        PhotosObj : PhotosObj,
        Page : Page,
        photono : photono, 
        IsLoading : IsLoading, 
        PageDecrement : PageDecrementHandler, 
        PageIncrement : PageIncrementHandler,
        GoToPage : GoToPageHandler,
        PhotoDecrement : PhotoDecrementHandler, 
        PhotoIncrement : PhotoIncrementHandler,
        previousPagePhotoChange : previousPagePhotoHandler,
        nextPagePhotoChange : nextPagePhotoHandler,
        GoToPhoto : GoToPhotoHandler,
        Loader : LoaderHandler
    }}>
        {props.children}
    </ContextApiStore.Provider>
}

export default ContextApiStore;