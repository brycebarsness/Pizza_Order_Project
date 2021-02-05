import React from 'react';
import {useState} from 'react';
import { useDispatch } from 'react-redux';

function CustomerInfo() {
    const dispatch = useDispatch();

    let [name, setName]= useState('');
    let [street, setStreet] = useState('');
    let [city, setCity]= useState('');
    let [zip, setZip]= useState('');
    let [delivery, setDelivery]= useState('false');
    

   const resetInput = event =>{
        console.log( 'resetInput', event.target.value );
      setName(''),
      setStreet(''),
      setCity(''),
      setZip(''),
      setDelivery('false')

    } // end handleChange

    const handleSubmit = event => {
    event.preventDefault();
    let customerInfo = {
                        customer_name: name, 
                        street_address: street, 
                        city: city, 
                        zip: zip, 
                        delivery: delivery
                    };
    dispatch( { type: 'CUSTOMER_INFO', payload: customerInfo } );
    console.log(`in customerInfo form`, {name, street, city, zip, delivery});
    resetInput();
    }
        return(
            <div>
                <h1>CustomerInfo</h1>
                <form onSubmit={handleSubmit} className="add-customerInfo-form">
        <input 
          required 
          type="text"
          placeholder="name" 
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <input 
          required 
          type="text"
          placeholder="street" 
          value={street}
          onChange={(event) => setStreet(event.target.value)}
        />
        <input 
          required 
          type="text"
          placeholder="city" 
          value={city}
          onChange={(event) => setCity(event.target.value)}
        />
        <input 
          required 
          type="number"
          placeholder="zip" 
          value={zip}
          onChange={(event) => setZip(event.target.value)}
        />
        <input 
          required 
          type="checkbox"
          value={delivery}
          onChange={(event) => setDelivery(event.target.value)}
        />
          <button type="submit">
          Next
        </button>
         </form>

            </div>
        ) //end return
        
} // end function

export default CustomerInfo;