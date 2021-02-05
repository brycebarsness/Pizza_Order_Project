
import {useState} from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

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
            <div id="customerInfo">
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

/*
<form>
  <div class="form-group row">
    <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
    <div class="col-sm-10">
      <input type="email" class="form-control" id="inputEmail3" placeholder="Email">
    </div>
  </div>
  <div class="form-group row">
    <label for="inputPassword3" class="col-sm-2 col-form-label">Password</label>
    <div class="col-sm-10">
      <input type="password" class="form-control" id="inputPassword3" placeholder="Password">
    </div>
  </div>
  <fieldset class="form-group">
    <div class="row">
      <legend class="col-form-label col-sm-2 pt-0">Radios</legend>
      <div class="col-sm-10">
        <div class="form-check">
          <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked>
          <label class="form-check-label" for="gridRadios1">
            First radio
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2">
          <label class="form-check-label" for="gridRadios2">
            Second radio
          </label>
        </div>
        <div class="form-check disabled">
          <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios3" value="option3" disabled>
          <label class="form-check-label" for="gridRadios3">
            Third disabled radio
          </label>
        </div>
      </div>
    </div>
  </fieldset>
  <div class="form-group row">
    <div class="col-sm-2">Checkbox</div>
    <div class="col-sm-10">
      <div class="form-check">
        <input class="form-check-input" type="checkbox" id="gridCheck1">
        <label class="form-check-label" for="gridCheck1">
          Example checkbox
        </label>
      </div>
    </div>
  </div>
  <div class="form-group row">
    <div class="col-sm-10">
      <button type="submit" class="btn btn-primary">Sign in</button>
    </div>
  </div>
</form>
*/