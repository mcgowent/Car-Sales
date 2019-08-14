import React from 'react';
import { connect } from 'react-redux'

import { buyItem } from './actions'

const AdditionalFeature = props => {

  const add = (e) => {
    e.preventDefault()
    props.buyItem({ id: props.feature.id, name: props.feature.name, price: props.feature.price })
  }

  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" onClick={add}>Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

const mapStateToProps = (state) => {
  return {
  };
};


export default connect(mapStateToProps, { buyItem })(AdditionalFeature);
