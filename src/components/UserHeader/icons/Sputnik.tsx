import { FC } from 'react';

interface IProps {
  isActive: boolean;
}

const Sputnik: FC<IProps> = ({ isActive }) => {
  return (
    <svg width="29" height="28" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12.5863 7.65234L14.7166 9.78264M21.0892 16.1553L18.9592 14.0253" stroke={isActive ? '#37366B' : '#ABB0B2'} strokeWidth="0.75" strokeLinecap="round"/>
      <path d="M19.7968 5.22386C20.0408 4.97978 20.4366 4.97978 20.6807 5.22386L23.5179 8.06111C23.762 8.30519 23.762 8.70091 23.5179 8.94499L16.1089 16.354C15.8113 16.6516 15.2633 16.5895 15.0118 16.1895C14.7175 15.7216 14.3454 15.1942 13.9465 14.7953C13.5475 14.3963 13.0201 14.0243 12.5523 13.73C12.1523 13.4785 12.0902 12.9304 12.3877 12.6329L19.7968 5.22386Z" stroke={isActive ? '#37366B' : '#ABB0B2'} strokeWidth="0.75"/>
      <rect x="28.2116" y="19.557" width="5.26248" height="7.66747" rx="0.625" transform="rotate(135 28.2116 19.557)" stroke={isActive ? '#37366B' : '#ABB0B2'} strokeWidth="0.75"/>
      <rect x="14.6066" y="5.95203" width="5.26248" height="7.66747" rx="0.625" transform="rotate(135 14.6066 5.95203)" stroke={isActive ? '#37366B' : '#ABB0B2'} strokeWidth="0.75"/>
      <path d="M8.33527 20.4072L4.0838 24.6587" stroke={isActive ? '#37366B' : '#ABB0B2'} strokeWidth="0.75" strokeLinecap="round"/>
      <path d="M7.56951 23.7733C9.00617 24.9652 10.4616 25.8138 11.6604 26.1584C12.8592 26.5031 13.7182 26.3198 14.0746 25.6434C14.4311 24.967 14.2604 23.8444 13.5948 22.488C12.9292 21.1316 11.8149 19.6356 10.4629 18.2831C9.11083 16.9307 7.61483 15.8157 6.25806 15.1491C4.90129 14.4825 3.7779 14.3107 3.10053 14.6661C2.42316 15.0216 2.23882 15.8796 2.5824 17.0778C2.92598 18.276 3.77364 19.7312 4.96492 21.168" stroke={isActive ? '#37366B' : '#ABB0B2'} strokeWidth="0.75" strokeLinecap="round"/>
      <path d="M13.8616 25.9341C15.3274 24.4683 16.1509 22.4802 16.1509 20.4072C16.1509 18.3342 15.3274 16.3461 13.8616 14.8803C12.3958 13.4145 10.4077 12.591 8.33472 12.591C6.26173 12.591 4.27364 13.4145 2.80782 14.8803" stroke={isActive ? '#37366B' : '#ABB0B2'} strokeWidth="0.75"/>
      <path d="M3.74209 26.0178L2.72465 25.0003C2.59866 24.8743 2.68789 24.6589 2.86607 24.6589H3.88376C3.99424 24.6589 4.08379 24.7485 4.08376 24.8589L4.08352 25.8764C4.08347 26.0545 3.86807 26.1437 3.74209 26.0178Z" stroke={isActive ? '#37366B' : '#ABB0B2'} strokeWidth="0.75" strokeLinecap="round"/>
      <path d="M10.916 2.58071L7.51487 5.98188M24.5207 16.1854L21.1196 19.5866M21.1196 16.1854L26.2213 21.2872M7.51487 2.58071L12.6166 7.68247M12.6166 4.2813L9.21545 7.68247M26.2213 17.886L22.8201 21.2872" stroke={isActive ? '#37366B' : '#ABB0B2'} strokeWidth="0.75" strokeLinecap="round"/>
    </svg>
  );
};

export default Sputnik;