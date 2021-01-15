import { useState } from 'react';

type ReturnType = [
  number,
  { value: number; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void }
];

const useNumInput = (initValue: number): ReturnType => {
  const [value, setValue] = useState(initValue);

  const bindObject = {
    value,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
      console.log(+e.target.value);
      setValue(+e.target.value);
    },
  };

  return [value, bindObject];
};

export default useNumInput;
