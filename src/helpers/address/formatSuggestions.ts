import { AddressSuggestion } from '../../models/types/AddressSuggestion';

export const formatSuggestions = (suggestions: Array<any>): Array<AddressSuggestion> => {
  return suggestions.map((suggestion) => {
    const latitude = suggestion.key.split(',')[3].replace('n', '.');
    const longitude = suggestion.key.split(',')[2].replace('e', '.');

    return {
      latitude,
      longitude,
      value: suggestion?.value,
      key: suggestion?.key
    };
  });
};
