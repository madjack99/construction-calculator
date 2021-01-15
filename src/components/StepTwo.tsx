import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import CancelButton from './CancelButton';
import { setStoreys } from '../actions';
import useNumInput from './customHooks/useNumInput';

import {
  Wrapper,
  MainTitle,
  StepNo,
  QuestionBox,
  QuestionTitle,
  Button,
  NumInput,
} from '../styles/customElements';

const StepTwo = () => {
  const [storeys, storeysAttributes] = useNumInput(1);

  const dispatch = useDispatch();
  const history = useHistory();

  const handleStepChange = () => {
    dispatch(setStoreys(storeys));
    history.push('step-three');
  };

  return (
    <Wrapper>
      <MainTitle>Калькулятор цены конструкций</MainTitle>
      <StepNo>Шаг 2</StepNo>
      <QuestionBox>
        <QuestionTitle>Количество этажей (число):</QuestionTitle>
        <NumInput type='number' min='1' {...storeysAttributes} />
      </QuestionBox>
      <div>
        <CancelButton />
        <Button onClick={handleStepChange}>Далее</Button>
      </div>
    </Wrapper>
  );
};

export default StepTwo;
