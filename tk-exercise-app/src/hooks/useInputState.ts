import { useState } from 'react';

export default function useInputState(initialVal: any) {
  const [ value, setValue ] = useState(initialVal);

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setValue(evt.target.value);
  }

  const reset = () => {
    setValue('');
  }

  return [ value, handleChange, reset ];
};
