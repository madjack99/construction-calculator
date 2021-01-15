import React, { useState } from 'react';
import styled from '@emotion/styled';

import ErrorMessage from './ErrorMessage';
import CancelButton from './CancelButton';

import {
  Wrapper,
  MainTitle,
  StepNo,
  QuestionBox,
  QuestionTitle,
  OptionLink,
  Button,
  NumInput,
} from '../styles/customElements';

const NumInputsWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const StepFour = () => {
  const [error, setError] = useState(false);

  return (
    <Wrapper>
      <MainTitle>Калькулятор цены конструкций</MainTitle>
      <StepNo>Шаг 4</StepNo>
      <QuestionBox>
        <QuestionTitle>Длина стен (в метрах):</QuestionTitle>
        <NumInputsWrapper>
          <NumInput />
          X
          <NumInput />
        </NumInputsWrapper>
      </QuestionBox>
      {error && <ErrorMessage>Введите размеры</ErrorMessage>}
      <div>
        <CancelButton />
        <Button onClick={() => setError(true)}>Далее</Button>
      </div>
    </Wrapper>
  );
};

export default StepFour;
