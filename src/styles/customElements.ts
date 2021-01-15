import styled from '@emotion/styled';

import { customColors } from './customColors';

const { black, grey, blue, green, white, red } = customColors;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: fit-content;
  margin: auto;
  padding: 5px 10px;
  border: 1px solid ${black};
  border-radius: 5px;
`;

export const MainTitle = styled.h1`
  margin-bottom: 0;
  font-size: 20px;
`;

export const StepNo = styled.p`
  color: ${grey};
`;

export const QuestionBox = styled.div`
  width: fit-content;
  margin: 0 0 10px;
  border: 1px solid ${black};
`;

export const QuestionTitle = styled.h2`
  margin: 0;
  padding: 5px 10px;
  font-size: 18px;
  background-color: ${grey};
  color: ${blue};
`;

export const OptionLink = styled.a`
  color: ${green};
`;

export const Button = styled.button`
  margin: 0 5px;
  border: 1px solid ${black};
  background-color: ${white};
  outline: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: ${grey};
  }
`;

export const ErrorDiv = styled.div`
  color: ${red};
`;

export const NumInput = styled.input`
  display: block;
  width: 40%;
  margin: 20px auto;
`;
