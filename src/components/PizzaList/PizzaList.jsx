import './PizzaList.css';
import { useSelector } from 'react-redux';
import PizzaItem from '../PizzaItem/PizzaItem';

function PizzaList() {
    const pizzas = useSelector(store => store.pizzaList);

    return (
        <>
        <div className="row row-cols-1 row-cols-md-3 g-4">
        {pizzas.map((pizza) => (
        <div key={pizza.id}>
            <PizzaItem 
            pizza={pizza}
            />
            </div>
        ))} 
        </div>
        </>
    );
}

export default PizzaList;


/*
            <>
                {images.map(image =>
                (<div key={image.id}>
                    <GalleryItem
                        image={image}
                        updateLikes={updateLikes}
                        deleteImage={deleteImage}
                    />
                </div>
                )
                )}
                <UploadForm
                    newImageDescription={newImageDescription}
                    setNewImageDescription={setNewImageDescription}
                    newImageName={newImageName}
                    setNewImageName={setNewImageName}
                    newImageYear={newImageYear}
                    setNewImageYear={setNewImageYear}
                    newImageURL={newImageURL}
                    setNewImageURL={setNewImageURL}
                    addImage={addImage}
                />
            </>
*/