import React from 'react';
import styled from '@emotion/styled';

import {
  Wrapper,
  MainTitle,
  StepNo,
  QuestionBox,
  QuestionTitle,
  OptionLink,
  Button,
} from '../styles/customElements';

const StepOne = () => {
  return (
    <Wrapper>
      <MainTitle>Калькулятор цены конструкций</MainTitle>
      <StepNo>Шаг 1</StepNo>
      <QuestionBox>
        <QuestionTitle>Что будем строить?</QuestionTitle>
        <ul>
          <li>
            <OptionLink href=''>Жилой дом</OptionLink>
          </li>
          <li>
            <OptionLink href=''>Гараж</OptionLink>
          </li>
        </ul>
      </QuestionBox>
      <div>
        <Button>Отмена</Button>
        <Button>Далее</Button>
      </div>
    </Wrapper>
  );
};

export default StepOne;
