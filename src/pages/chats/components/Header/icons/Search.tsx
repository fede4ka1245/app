import { FC } from 'react';

interface IProps {
  isActive: boolean;
}

const Search: FC<IProps> = ({ isActive }) => {
  return (
    <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="8.63636" cy="8.63636" r="7.63636" stroke={isActive ? '#37366B' : '#ABB0B2'} strokeWidth="2"/>
      <path d="M14.0909 14.0909L19.0909 19.0909" stroke={isActive ? '#37366B' : '#ABB0B2'} strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
};

export default Search;
