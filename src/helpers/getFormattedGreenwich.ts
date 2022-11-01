export const getFormattedGreenwich = (greenwich: string | undefined) => {
  if (!greenwich) {
    return null;
  }

  if (greenwich.toLowerCase() === 'восток') {
    return '';
  } else {
    return '-';
  }
};
