import React, { useCallback, useMemo, useState } from 'react';
import Input from '../input/Input';
import { InputType } from '../input/InputType';
import { Option } from '../../models/types/Option';
import { AddressInformation } from '../../models/types/AddressInformation';
import { getSuggestions } from '../../helpers/address/getSuggestions';
import { throttle } from '../../helpers/throttle';
import { AddressSuggestion } from '../../models/types/AddressSuggestion';

interface AddressInputProps {
  addressInfo?: Omit<AddressInformation, 'timeZoneOffset'>,
  setAddressInfo?: (addressInfo: Omit<AddressInformation, 'timeZoneOffset'>) => any,
  placeholder?: string,
  disabled?: boolean,
}

const AddressInput = ({ placeholder, setAddressInfo, disabled, addressInfo }: AddressInputProps) => {
  const [suggestions, setSuggestions] = useState<Array<AddressSuggestion>>([]);
  const throttledGetSuggestions = useMemo<(query: string) => void>(() => {
    const updateSuggestions = (query: string) => {
      getSuggestions(query)
        .then((suggestions) => {
          setSuggestions(suggestions);
        });
    };

    return throttle(updateSuggestions, 400);
  }, [setSuggestions]);

  const onChange = useCallback((value: string) => {
    throttledGetSuggestions(value);
  }, []);

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
        targetOption={{ label: addressInfo?.value as string, value: addressInfo?.value }}
        setTargetOption={onTargetSuggestionSet}
        inputType={InputType.optionsInput}
        onChange={onChange}
        disabled={disabled}
      />
    </>
  );
};

export default AddressInput;
