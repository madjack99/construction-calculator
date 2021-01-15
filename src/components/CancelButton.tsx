import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { Button } from '../styles/customElements';
import { resetState } from '../actions';

const CancelButton = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const handleCancel = () => {
    dispatch(resetState());
    history.push('step-one');
  };
  return <Button onClick={handleCancel}>Отмена</Button>;
};

export default CancelButton;
