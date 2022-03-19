import React from 'react';
import Button from 'react-bootstrap/Button';

export default function Counter(props) {

  return (
    <Button onClick={props.onClick}> {props.type}</Button>
  )
}
