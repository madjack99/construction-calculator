import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import CancelButton from './CancelButton';
import { setStoreys } from '../actions';

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
  const [storeys, setStoreysNo] = useState(1);

  const dispatch = useDispatch();
  const history = useHistory();

  const handleStoreysChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let storeysNo = +e.target.value;
    storeysNo = storeysNo < 1 ? 1 : storeysNo;
    setStoreysNo(storeysNo);
  };

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
        <NumInput
          type='number'
          min='1'
          value={storeys}
          onChange={handleStoreysChange}
        />
      </QuestionBox>
      <div>
        <CancelButton />
        <Button onClick={handleStepChange}>Далее</Button>
      </div>
    </Wrapper>
  );
};

export default StepTwo;
