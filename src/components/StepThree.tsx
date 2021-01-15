import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import CancelButton from './CancelButton';
import ErrorMessage from './ErrorMessage';
import { IInitialState } from '../reducer/types';
import { garageMaterials, houseMaterials } from '../constructionInfo';
import { setMaterial } from '../actions';

import {
  Wrapper,
  MainTitle,
  StepNo,
  QuestionBox,
  QuestionTitle,
  OptionLink,
  Button,
} from '../styles/customElements';

const StepThree = () => {
  const [error, setError] = useState(false);

  const { constructionUnit } = useSelector((store: IInitialState) => store);
  const dispatch = useDispatch();
  const history = useHistory();

  const targetMaterials =
    constructionUnit === 'Жилой дом' ? houseMaterials : garageMaterials;

  const handleConstructionMaterialSelect = (
    e: React.MouseEvent<HTMLAnchorElement>
  ) => {
    const { innerText } = e.currentTarget;
    dispatch(setMaterial(innerText));
    history.push('step-four');
  };

  const renderTargetMaterialsOptions = () => {
    return targetMaterials.map((material, idx) => (
      <li key={idx}>
        <OptionLink onClick={handleConstructionMaterialSelect}>
          {material}
        </OptionLink>
      </li>
    ));
  };

  return (
    <Wrapper>
      <MainTitle>Калькулятор цены конструкций</MainTitle>
      <StepNo>Шаг 3</StepNo>
      <QuestionBox>
        <QuestionTitle>Материал стен:</QuestionTitle>
        <ul>{renderTargetMaterialsOptions()}</ul>
      </QuestionBox>
      {error && <ErrorMessage>Выберите материал</ErrorMessage>}
      <div>
        <CancelButton />
        <Button onClick={() => setError(true)}>Далее</Button>
      </div>
    </Wrapper>
  );
};

export default StepThree;
