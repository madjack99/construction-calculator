import React, { useState } from 'react';
import styled from '@emotion/styled';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { IInitialState } from '../reducer/types';
import { setConstructionUnit, changeStep } from '../actions';
import CancelButton from './CancelButton';
import ErrorMessage from './ErrorMessage';

import {
  Wrapper,
  MainTitle,
  StepNo,
  QuestionBox,
  QuestionTitle,
  OptionLink,
  Button,
} from '../styles/customElements';

const constructionUnitsOptions = ['Жилой дом', 'Гараж'];

const StepOne = () => {
  const [error, setError] = useState(false);

  const dispatch = useDispatch();
  const history = useHistory();

  const handleConstructionUnitSelect = (
    e: React.MouseEvent<HTMLAnchorElement>
  ) => {
    e.preventDefault();
    const { innerText } = e.currentTarget;
    dispatch(setConstructionUnit(innerText));

    if (innerText === 'Жилой дом') {
      dispatch(changeStep('step-two'));
      history.push('step-two');
    } else {
      dispatch(changeStep('step-three'));
      history.push('step-three');
    }
  };

  const renderConstructionUnitsOptions = () => {
    return constructionUnitsOptions.map((constructionUnit, idx) => (
      <li key={idx}>
        <OptionLink onClick={handleConstructionUnitSelect}>
          {constructionUnit}
        </OptionLink>
      </li>
    ));
  };

  return (
    <Wrapper>
      <MainTitle>Калькулятор цены конструкций</MainTitle>
      <StepNo>Шаг 1</StepNo>
      <QuestionBox>
        <QuestionTitle>Что будем строить?</QuestionTitle>
        <ul>{renderConstructionUnitsOptions()}</ul>
      </QuestionBox>
      {error && <ErrorMessage>Выберите тип постройки</ErrorMessage>}
      <div>
        <CancelButton />
        <Button onClick={() => setError(true)}>Далее</Button>
      </div>
    </Wrapper>
  );
};

export default StepOne;
