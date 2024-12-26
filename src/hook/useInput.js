import { useState } from "react";
export function useInput(defaultValue, validationFn) {
  const [enterValues, setEnterValues] = useState(defaultValue);
  const [didEdit, setDidEdit] = useState(false);
  const valueValidation = validationFn(enterValues);

  function handleBlur() {
    setDidEdit(true);
  }
  function handleValueChange(event) {
    setEnterValues(event.target.value);

    setDidEdit(false);
  }

  return {
    handleBlur,
    handleValueChange,
    value: enterValues,
    hasError: didEdit && !valueValidation,
  };
}
