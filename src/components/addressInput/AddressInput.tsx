import React, { useCallback, useMemo, useState } from 'react';
import Input from '../input/Input';
import { InputType } from '../input/InputType';
import { Option } from '../../models/types/Option';
import { AddressInformation } from '../../models/types/AddressInformation';
import { getSuggestions } from './helpers/getSuggestions';

interface AddressInputProps {
  setAddressInfo?: (addressInfo: AddressInformation) => any,
  placeholder?: string,
}

const AddressInput = ({ placeholder, setAddressInfo }: AddressInputProps) => {
  const [suggestions, setSuggestions] = useState<Array<AddressInformation>>([]);
  const [targetOption, setTargetOption] = useState();

  const onChange = useCallback((value: string) => {
    getSuggestions(value)
      .then((suggestions) => {
        setSuggestions(suggestions);
      })
      .catch(error => console.log('error', error));
  }, [setSuggestions, setTargetOption, targetOption, suggestions]);

  const inputSuggestions = useMemo(() => {
    return [...suggestions?.map((suggestion, index) => ({
      label: suggestion?.value,
      value: `${suggestion?.value} ${index}`
    }))];
  }, [suggestions]);

  const onTargetSuggestionSet = ({ label }: Option) => {
    const addressInfo = suggestions.find((option) => option?.value === label);

    if (setAddressInfo && addressInfo) {
      setAddressInfo(addressInfo);
    }
  };

  return (
    <>
      <Input
        placeholder={placeholder || 'Место рождения'}
        options={inputSuggestions}
        setTargetOption={onTargetSuggestionSet}
        inputType={InputType.optionsInput}
        onChange={onChange}
      />
    </>
  );
};

export default AddressInput;
