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
  const formattedZodiacSign = zodiacSign.toLowerCase().substring(0, 2);

  if (formattedZodiacSign === 'le') {
    return <Leo />;
  } else if (formattedZodiacSign === 'pi' || formattedZodiacSign === 'fi') {
    return <Pisce />;
  } else if (formattedZodiacSign === 'aq') {
    return <Aquarius/>;
  } else if (formattedZodiacSign === 'ca') {
    return <Cancer />;
  } else if (formattedZodiacSign === 'sc') {
    return <Scorpio />;
  } else if (formattedZodiacSign === 'vi') {
    return <Virgo />;
  } else if (formattedZodiacSign === 'sa') {
    return <Sagittarius />;
  } else if (formattedZodiacSign === 'ge') {
    return <Gemini />;
  } else if (formattedZodiacSign === 'ar') {
    return <Aries />;
  } else if (formattedZodiacSign === 'ca') {
    return <Capricorn />;
  } else if (formattedZodiacSign === 'li') {
    return <Libra />;
  } else if (formattedZodiacSign === 'ta') {
    return <Taurus />;
  } else {
    return <></>;
  }
};

export default ZodiacSign;
