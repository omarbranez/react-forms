import React from 'react';
import ReactDOM from 'react-dom';
// import Form from './components/Form'
import ParentComponent from './components/ParentComponent'

ReactDOM.render(
  <div>
    {/* <Form /> */}
    <ParentComponent />
  </div>,
  document.getElementById('root')
);

// ParentComponent stores STATE
// sends form values and event callbacks as PROPS to FORM CHILD COMPONENT
// Form uses Controlled Form using PROPS
// Form's event callbacks change the STATE of ParentComponent