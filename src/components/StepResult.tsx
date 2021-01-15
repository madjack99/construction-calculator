import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import ErrorMessage from './ErrorMessage';
import { IInitialState } from '../reducer/types';
import { resetState } from '../actions';

import {
  Wrapper,
  MainTitle,
  StepNo,
  QuestionBox,
  QuestionTitle,
  Button,
  ResultMessageDiv,
} from '../styles/customElements';

const StepResult = () => {
  const {
    apiCallResult: { apiResultMessage, apiResultStatus },
  } = useSelector((store: IInitialState) => store);

  const history = useHistory();
  const dispatch = useDispatch();

  const isSuccess = apiResultStatus === 'ok';

  const handleNewCalculation = () => {
    dispatch(resetState());
    history.push('step-one');
  };

  return (
    <Wrapper>
      <MainTitle>Калькулятор цены конструкций</MainTitle>
      <StepNo>Результат рассчета</StepNo>
      <QuestionBox>
        <QuestionTitle>{isSuccess ? 'Успешно' : 'Ошибка'}</QuestionTitle>
        <ResultMessageDiv>
          {isSuccess ? (
            <p>{apiResultMessage}</p>
          ) : (
            <ErrorMessage>{apiResultMessage}</ErrorMessage>
          )}
        </ResultMessageDiv>
      </QuestionBox>
      <Button onClick={handleNewCalculation}>Новый расчет</Button>
    </Wrapper>
  );
};

export default StepResult;
