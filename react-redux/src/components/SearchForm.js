import React from "react";
import { Formik, Form, Field} from 'formik';
import { connect } from "react-redux";
import * as actionCreators from "../state/actionCreators";
import { StyledButton, FieldStyle } from './Styles';

const initialUserForm = {
  name: '',
}


export function SearchForm(props) {
    const {searchByName} = props;
   
    function search(formValues, actions){
        const term = `?name=${formValues.name}`
        searchByName(term);
        actions.resetForm();
    }

  return (
    <section className="search-form">
     <Formik
            initialValues={initialUserForm}
            onSubmit={search}
            render={props => {
                return (
                    <Form>
                        <FieldStyle name='name' type='text' placeholder='Search name here!' />
                        <StyledButton type='submit'>Search</StyledButton>
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