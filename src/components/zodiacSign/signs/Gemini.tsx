import React from 'react';
import { SignProps } from '../SignProps';

const Gemini = ({ width, height }: SignProps) => {
  return (
    <svg width={ width || '22' } height={ height || 32 } viewBox="0 0 22 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18.303 5.02333C17.0608 5.37881 15.5472 5.891 13.7413 6.21023C13.6002 5.02569 13.48 4.19077 13.48 4.19077C13.48 4.19077 13.3861 4.96838 13.1775 6.17396C12.4781 6.21606 11.643 6.33652 10.9436 6.37862C10.0301 6.36342 9.19501 6.48385 8.41728 6.3903C8.15061 3.10799 7.73271 0.817263 7.73271 0.817263C7.73271 0.817263 7.37289 3.01444 7.07583 6.26051C7.07583 6.26051 6.94012 6.33885 6.8618 6.20321C5.65605 5.99507 4.50769 5.57295 3.70903 5.12977C2.91037 4.68659 2.11171 4.24341 1.74107 3.91483C1.37043 3.58625 1.07809 3.39332 1.07809 3.39332C1.07809 3.39332 1.23472 3.66461 1.54798 4.20718C1.86123 4.74975 2.38849 5.3496 3.20808 6.14241C3.94936 6.79958 5.11867 7.57134 6.61675 7.97242C6.83076 8.02972 6.83075 8.02971 7.04476 8.08701C6.93539 9.77787 6.84695 11.8183 6.83682 13.9945C6.80036 14.5581 6.76391 15.1217 6.86315 15.607L6.88409 15.9566L6.82669 16.1706L6.90501 16.3063L6.84762 16.5203L6.94686 17.0055L7.00965 18.0544C7.0515 18.7537 7.15075 19.2389 7.1926 19.9382C7.3337 21.1227 7.39647 22.1716 7.51664 23.0065C7.59496 23.1422 7.45928 23.2205 7.53759 23.3562C6.70247 23.4766 5.73164 23.6754 4.83914 24.0098C3.40384 24.6576 2.26087 25.4984 1.54592 26.4537C0.830971 27.4091 0.601417 28.265 0.429262 28.907C0.257107 29.549 0.278042 29.8986 0.278042 29.8986C0.278042 29.8986 0.471136 29.6063 0.721605 29.0999C0.972073 28.5936 1.41562 27.795 2.2872 27.1109C3.02308 26.5052 4.10866 25.8784 5.35088 25.5229C6.10768 25.2669 6.80711 25.2247 7.72054 25.2399C7.74147 25.5896 7.81978 25.7252 7.81978 25.7252C7.81978 25.7252 7.87716 25.5112 7.93454 25.2973C8.49826 25.3335 9.19768 25.2914 9.7614 25.3276C10.8888 25.4001 12.0163 25.4726 13.0863 25.7591C13.4313 29.1771 13.8492 31.4678 13.8492 31.4678C13.8492 31.4678 14.2091 29.2706 14.4278 25.8889C15.7119 26.2327 16.7819 26.5192 17.7163 26.884C19.7207 27.5353 20.8326 28.5211 20.8326 28.5211C20.8326 28.5211 20.1278 27.3003 18.1599 26.0854C17.2829 25.5065 15.9779 24.8131 14.6155 24.3337C14.6155 24.3337 14.6155 24.3337 14.4015 24.2764C14.5682 22.3716 14.5784 20.1954 14.5102 17.8837C14.494 14.095 14.2064 10.4631 13.9242 8.09401C14.4096 7.99462 15.0307 7.81687 15.4378 7.58184C16.8157 7.14801 17.9013 6.52126 18.7729 5.8372C20.4586 4.68306 21.3093 3.64938 21.3093 3.64938C21.2519 3.86336 20.1663 4.49012 18.303 5.02333ZM12.4119 18.01C12.4018 20.1861 12.5848 22.0699 12.6894 23.818C11.8333 23.5888 10.8416 23.438 9.71416 23.3655C9.15044 23.3293 8.5867 23.293 8.1013 23.3924L8.15868 23.1784C8.25253 22.4008 8.32546 21.2736 8.39837 20.1463C8.43483 19.5827 8.47128 19.0191 8.56512 18.2415L8.58066 17.3282L8.61711 16.7646L8.67447 16.5506L8.76833 15.773C8.80478 15.2094 8.84123 14.6458 8.74199 14.1605C8.69474 12.1984 8.6475 10.2362 8.48547 8.70208C9.2632 8.79562 10.1766 8.81082 10.8761 8.76873C11.5755 8.72663 12.2749 8.68454 12.896 8.5068C12.6145 10.8396 12.3957 14.2213 12.4119 18.01Z" fill="#99daea"/>
    </svg>
  );
};

export default Gemini;