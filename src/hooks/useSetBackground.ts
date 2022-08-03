import { useEffect } from 'react';

export const useSetBackground = (background: string, isUrl: boolean = false) => {
  const backgroundStyle = isUrl ? `url(${background})` : background;

  useEffect(() => {
    document.body.style.background = backgroundStyle;
    document.body.style.backgroundSize = '100%';
    document.body.style.backgroundRepeat = 'no-repeat';

    return () => {
      document.body.style.background = '';
      document.body.style.background = '';
      document.body.style.backgroundSize = '';
      document.body.style.backgroundRepeat = '';
    };
  }, []);
};
