import './PizzaItem.css';

function PizzaItem({ pizza }) {
    return (
        <div className="col">
            <div className="card">
                <img src={pizza.image_path} class="card-img-top" alt="a pizza" />
                <div class="card-body">
                    <h5 class="card-title">{pizza.name}</h5>
                    <p class="card-text">{pizza.description}
                    </p>
                    <p id="price-text">{pizza.price}</p>
                </div>
                <div class="card-footer">
                    <p>ADD OR REMOVE BUTTON</p>
                </div>
            </div>
        </div>
    );
}

export default PizzaItem;
