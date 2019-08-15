import React from 'react';
import { connect } from 'react-redux'
import { removeFeature } from './actions'

const AddedFeature = props => {

  const remove = (e) => {
    e.preventDefault()
    props.removeFeature({ id: props.feature.id, name: props.feature.name, price: props.feature.price })
  }

  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onClick={remove}>X</button>
      {props.feature.name}
    </li>
  );
};

const mapStateToProps = (state) => {
  return {
  };
};

export default connect(mapStateToProps, { removeFeature })(AddedFeature);