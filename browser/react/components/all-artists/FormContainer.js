import React from 'react';
import Form from './Form';
import { connect } from 'react-redux';

function formDecorator (innerComponent) {

	return class StatefulForm extends React.Component {

		constructor (props) {
	    	super(props);
	    	this.state = {
	        	input: ''
	        }	
	      		this.handleChange = this.handleChange.bind(this);
	    }

	    handleChange (evt) {
	      this.setState({ input: evt.target.value });
	    }

	    render () {
	      return (
	        <InnerComponent handleChange={this.handleChange}  />
	      )
	    }
	  }
	}

	// const mapDispatchToProps = function (dispatch) {

	//   return {
	//     handleSubmit: function (formInput) {
	//       const newStory = {
	//         id: formInput,
	//         title: formInput
	//       }
	//       const action = addStory(newStory);
	//       dispatch(action);
	//     }
	//   }
	// }

	// const statefulReduxComponentCreator = connect(null, mapDispatchToProps);

	const StatefulForm = FormDecorator(Form);
	// const FormContainer = statefulReduxComponentCreator(StatefulForm);
	export default StatefulForm;
		}



}