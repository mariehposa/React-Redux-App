import React from "react";
import { Formik, Form, Field} from 'formik';
import { connect } from "react-redux";
import * as actionCreators from "../state/actionCreators";

const initialUserForm = {
  name: '',
}


export function SearchForm(props) {
   console.log(props);
   
    function search(formValues, actions){
        const term = `?name=${formValues.name}`
        // const newUrl = url+term
        // console.log(newUrl);
        
        // searchByName(term);
        
        // const name = formValues.name.toLowerCase();
        // const newCharacters = characterData.filter(character => character.name.toLowerCase().includes(name))
        // setCharacterData(newCharacters)
    }
    


  return (
    <section className="search-form">
     <Formik
            initialValues={initialUserForm}
            onSubmit={search}
            render={props => {
                return (
                    <Form>
                        <label>
                            Name
                            <Field name='name' type='text' placeholder='Search name here!' />
                        </label>
                        <button type='submit'>Search</button>
                    </Form>
                )
            }}
        />
    </section>
  );
}


export default connect(
    state => state,
    actionCreators,
)(SearchForm)