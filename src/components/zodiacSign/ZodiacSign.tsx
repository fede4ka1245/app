import React from 'react';
import { SignProps } from './SignProps';
import Leo from './signs/Leo';
import Pisce from './signs/Pisce';
import Aquarius from './signs/Aquarius';
import Cancer from './signs/Cancer';
import Scorpio from './signs/Scorpio';
import Virgo from './signs/Virgo';
import Sagittarius from './signs/Sagittarius';
import Gemini from './signs/Gemini';
import Aries from './signs/Aries';
import Capricorn from './signs/Capricorn';
import Libra from './signs/Libra';
import Taurus from './signs/Taurus';

interface ZodiacSignProps extends SignProps {
  zodiacSign: string
}

const ZodiacSign = ({ width, height, zodiacSign }: ZodiacSignProps) => {
  const formattedZodiacSign = zodiacSign.toLowerCase();

  if (formattedZodiacSign === 'лев') {
    return <Leo />;
  } else if (formattedZodiacSign === 'Рыб') {
    return <Pisce />;
  } else if (formattedZodiacSign === 'вод') {
    return <Aquarius/>;
  } else if (formattedZodiacSign === 'рак') {
    return <Cancer />;
  } else if (formattedZodiacSign === 'ско') {
    return <Scorpio />;
  } else if (formattedZodiacSign === 'дев') {
    return <Virgo />;
  } else if (formattedZodiacSign === 'стр') {
    return <Sagittarius />;
  } else if (formattedZodiacSign === 'бли') {
    return <Gemini />;
  } else if (formattedZodiacSign === 'ове') {
    return <Aries />;
  } else if (formattedZodiacSign === 'коз') {
    return <Capricorn />;
  } else if (formattedZodiacSign === 'вес') {
    return <Libra />;
  } else if (formattedZodiacSign === 'тел') {
    return <Taurus />;
  } else {
    return <></>;
  }
};

export default ZodiacSign;
