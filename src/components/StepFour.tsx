import React, { useState } from 'react';
import styled from '@emotion/styled';

import ErrorMessage from './ErrorMessage';
import CancelButton from './CancelButton';
import useNumInput from './customHooks/useNumInput';

import {
  Wrapper,
  MainTitle,
  StepNo,
  QuestionBox,
  QuestionTitle,
  Button,
  NumInput,
  NumInputsWrapper,
} from '../styles/customElements';

const StepFour = () => {
  const [error, setError] = useState(false);

  const [xValue, xValueAttributes] = useNumInput(1);
  const [yValue, yValueAttributes] = useNumInput(1);

  const handleCalculate = () => {
    if (xValue < 1 || yValue < 1) {
      setError(true);
      return;
    }
  };

  return (
    <Wrapper>
      <MainTitle>Калькулятор цены конструкций</MainTitle>
      <StepNo>Шаг 4</StepNo>
      <QuestionBox>
        <QuestionTitle>Длина стен (в метрах):</QuestionTitle>
        <NumInputsWrapper>
          <NumInput type='number' min='1' {...xValueAttributes} />
          X
          <NumInput type='number' min='1' {...yValueAttributes} />
        </NumInputsWrapper>
      </QuestionBox>
      {error && <ErrorMessage>Введите размеры</ErrorMessage>}
      <div>
        <CancelButton />
        <Button onClick={handleCalculate}>Рассчитать</Button>
      </div>
    </Wrapper>
  );
};

export default StepFour;
