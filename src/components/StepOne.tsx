import React from 'react';
import styled from '@emotion/styled';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { IInitialState } from '../reducer/types';
import { setConstructionUnit, changeStep } from '../actions';

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
  const { constructionUnit } = useSelector((state: IInitialState) => state);
  const dispatch = useDispatch();
  const history = useHistory();
  console.log(constructionUnit);

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
      <div>
        <Button>Отмена</Button>
        <Button>Далее</Button>
      </div>
    </Wrapper>
  );
};

export default StepOne;
