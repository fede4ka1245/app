export interface SignValueToMinutesProps {
  sign: string,
  minutes?: number,
  degrees?: number
}

export const signDegreesToMinutes = ({ sign, degrees, minutes }: SignValueToMinutesProps) => {
  const formattedSign = sign.substring(0, 2).toLowerCase();
  let signDegrees = 0;

  if (formattedSign === 'ar') {
    signDegrees = 0;
  } else if (formattedSign === 'ta') {
    signDegrees = 30;
  } else if (formattedSign === 'ge') {
    signDegrees = 60;
  } else if (formattedSign === 'ca') {
    signDegrees = 90;
  } else if (formattedSign === 'le') {
    signDegrees = 120;
  } else if (formattedSign === 'vi') {
    signDegrees = 150;
  } else if (formattedSign === 'li') {
    signDegrees = 180;
  } else if (formattedSign === 'sc') {
    signDegrees = 210;
  } else if (formattedSign === 'sa') {
    signDegrees = 240;
  } else if (formattedSign === 'ca') {
    signDegrees = 270;
  } else if (formattedSign === 'aq') {
    signDegrees = 300;
  } else if (formattedSign === 'pi') {
    signDegrees = 330;
  }

  if (degrees && minutes) {
    return (degrees + signDegrees) * 60 + minutes;
  }

  if (minutes) {
    return signDegrees * 60 + minutes;
  }

  if (degrees) {
    return (degrees + signDegrees) * 60;
  }

  return signDegrees;
};
