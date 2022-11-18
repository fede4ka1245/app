export const getFormattedZodiacSign = (sign: string) => {
  const formattedSign = sign.toLowerCase().substring(0, 3);

  if (formattedSign === 'лев') {
    return 'Leo';
  } else if (formattedSign === 'рыб') {
    return 'Pisce';
  } else if (formattedSign === 'вод') {
    return 'Aquarius';
  } else if (formattedSign === 'рак') {
    return 'Cancer';
  } else if (formattedSign === 'ско') {
    return 'Scorpio';
  } else if (formattedSign === 'дев') {
    return 'Virgo';
  } else if (formattedSign === 'стр') {
    return 'Sagittarius';
  } else if (formattedSign === 'бли') {
    return 'Gemini';
  } else if (formattedSign === 'ове') {
    return 'Aries';
  } else if (formattedSign === 'коз') {
    return 'Capricorn';
  } else if (formattedSign === 'вес') {
    return 'Libra';
  } else if (formattedSign === 'тел') {
    return 'Taurus';
  }
};
