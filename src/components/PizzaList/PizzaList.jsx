import './PizzaList.css';
import { useSelector } from 'react-redux';

function PizzaList() {
    const pizzas = useSelector(store => store.pizzaList)
    console.log(pizzas);
    return (
        <>
        <div /*className="card-deck col d-flex justify-content-center"*/>
            {pizzas.map((pizza, index) => (
                <div key={index}>{pizza.name}</div>
            ))}
            </div >
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