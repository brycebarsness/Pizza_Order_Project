import axios from 'axios';
import './PizzaList.css';

function PizzaList() {

    axios.get('/api/pizza').then((response) =>{
        
    })

    return (
        <>

        </>
    );
}

export default PizzaList;


// Make the async request
axios.get('/stuff').then( (response) => {
    // THEN when response comes back, update redux
    dispatch({
      type: 'SET_STUFF',
      payload: response.data
    })
}) 