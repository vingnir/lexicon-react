import React from 'react'
import { useRef } from 'react';


export const AddPersonForm = (props) => {
    const nameInputRef = useRef();
    const phoneInputRef = useRef();
    const cityInputRef = useRef();
    const countryInputRef = useRef();
    const languageInputRef = useRef();

    function submitHandler(event) { 
        event.preventDefault();

        const enteredName = nameInputRef.current.value;
        const enteredPhone = phoneInputRef.current.value;
        const enteredCity = cityInputRef.current.value;
        const enteredCountry = countryInputRef.current.value;
        const enteredLanguage = languageInputRef.current.value;

        const personData = {
          name: enteredName,
          cityName: enteredCity,
          countryName: enteredCountry,
          phoneNumber: enteredPhone,
        };

       // console.log(personData);
        props.onAddPerson(personData);
        }

  return (
    <div className="row justify-content-center justify-content-md-start m-3">
      <div className="col-md-4">
        <form onSubmit={submitHandler}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              ref={nameInputRef}
              aria-describedby="name"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="phone" className="form-label">
              Phone number
            </label>
            <input
              type="text"
              className="form-control"
              id="phone"
              ref={phoneInputRef}
            />
          </div>

          <div className="mb-3">
            <label className="form-label" htmlFor="city">
              City
            </label>
            <input
              type="text"
              className="form-control"
              id="city"
              ref={cityInputRef}
            />
          </div>

          <div className="mb-3">
            <label className="form-label" htmlFor="country">
              Country
            </label>
            <input
              type="text"
              className="form-control"
              id="country"
              ref={countryInputRef}
            />
          </div>

          <div className="mb-3">
            <label className="form-label" htmlFor="language">
              Language
            </label>
            <input
              type="text"
              className="form-control"
              id="language"
              ref={languageInputRef}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
