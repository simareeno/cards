import React, { Component } from 'react';
import cards from '../../cards.json';
import Routes from '../routes';

export default class CardsApp extends Component {
  render() {
    return <Routes />;
  }
}

// export default connect(state => ({
//     state: state.counter
//   }),
//   (dispatch) => ({
//     actions: bindActionCreators(counterActions, dispatch)
//   })
// )(CardsApp);
