import * as React from 'react';
import { connect } from 'react-redux';

const AppBodyContainer = props => {
  console.info(props);

  return <div>This is something</div>;
};

const AppBody = connect()(AppBodyContainer);

export default AppBody;
