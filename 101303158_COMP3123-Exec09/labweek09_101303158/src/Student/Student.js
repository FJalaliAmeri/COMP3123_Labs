import React, { Fragment } from 'react';
import College from '../College/College';

function Student (props){
    const {sid, fnm, lnm} = props.student;
    return (
        <Fragment>
            <h3>{sid}</h3>
            <h4>{fnm} {lnm}</h4>
            <College city = "Toronto"/>
        </Fragment>
      );
}

export default Student;