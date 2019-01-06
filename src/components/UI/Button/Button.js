import React from 'react'

import classes from './Button.module.css'

const button = (props) => (
    // We will pass btnType to the custom button component to set its styling, all buttons have the basic Button style.
    <button onClick={props.clicked} className={[classes.Button, classes[props.btnType]].join(' ')}>
        {props.children}
    </button>
);

export default button;