import React from 'react';
import './Compas.scss';
import Zone from '../../components/zone/Zone';
import { ChakraProps } from '../ChakraProps';

const Compas = ({ chakra }: ChakraProps) => {
  return (
    <div className={'zones-compass-table'}>
      <svg className={'image'} viewBox="0 0 332 331" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M162.169 9.56V14.888H169.969V17H159.937V0.199999H169.849V2.312H162.169V7.472H169.249V9.56H162.169Z" fill="white"/>
        <path d="M161.016 331H158.424L153.6 314.2H155.952L159.792 328.024L163.872 314.2H166.128L170.208 328.024L174.048 314.2H176.4L171.576 331H168.984L165 317.584L161.016 331Z" fill="white"/>
        <path d="M165 42V292" stroke="white" strokeWidth="2"/>
        <path d="M290 167L40 167" stroke="white" strokeWidth="2"/>
        <path d="M112 114L218.066 220.066" stroke="white" strokeWidth="2"/>
        <path d="M218.066 114L112 220.066" stroke="white" strokeWidth="2"/>
        <path d="M325.287 176.312C323.719 176.312 322.375 175.952 321.255 175.232C320.151 174.496 319.375 173.48 318.927 172.184L320.847 171.08C321.487 173.112 322.983 174.128 325.335 174.128C326.471 174.128 327.343 173.896 327.951 173.432C328.575 172.968 328.887 172.336 328.887 171.536C328.887 170.752 328.583 170.152 327.975 169.736C327.431 169.368 326.415 168.944 324.927 168.464L323.319 167.936C322.967 167.792 322.503 167.584 321.927 167.312C321.367 167.024 320.959 166.736 320.703 166.448C319.999 165.68 319.646 164.744 319.646 163.64C319.646 162.168 320.159 161.016 321.183 160.184C322.207 159.32 323.455 158.888 324.927 158.888C326.239 158.888 327.391 159.216 328.383 159.872C329.375 160.528 330.119 161.424 330.615 162.56L328.743 163.64C328.023 161.912 326.751 161.048 324.927 161.048C324.015 161.048 323.279 161.272 322.719 161.72C322.159 162.168 321.879 162.776 321.879 163.544C321.879 164.28 322.143 164.84 322.671 165.224C323.215 165.624 324.127 166.024 325.407 166.424L326.391 166.736C326.935 166.944 327.231 167.056 327.279 167.072C327.791 167.264 328.351 167.528 328.959 167.864C329.391 168.104 329.823 168.472 330.255 168.968C330.815 169.528 331.095 170.368 331.095 171.488C331.095 172.96 330.559 174.136 329.487 175.016C328.399 175.88 326.999 176.312 325.287 176.312Z" fill="white"/>
        <path d="M10.6072 171.728V159.2H12.8392V176H11.0392L2.39919 163.448V176H0.167188V159.2H1.96719L10.6072 171.728Z" fill="white"/>
        <path d="M219.485 109.26C218.178 109.26 217.058 108.96 216.125 108.36C215.205 107.747 214.558 106.9 214.185 105.82L215.785 104.9C216.318 106.593 217.565 107.44 219.525 107.44C220.472 107.44 221.198 107.247 221.705 106.86C222.225 106.473 222.485 105.947 222.485 105.28C222.485 104.627 222.232 104.127 221.725 103.78C221.272 103.473 220.425 103.12 219.185 102.72L217.845 102.28C217.552 102.16 217.165 101.987 216.685 101.76C216.218 101.52 215.878 101.28 215.665 101.04C215.078 100.4 214.785 99.62 214.785 98.7C214.785 97.4733 215.212 96.5133 216.065 95.82C216.918 95.1 217.958 94.74 219.185 94.74C220.278 94.74 221.238 95.0133 222.065 95.56C222.892 96.1067 223.512 96.8533 223.925 97.8L222.365 98.7C221.765 97.26 220.705 96.54 219.185 96.54C218.425 96.54 217.812 96.7267 217.345 97.1C216.878 97.4733 216.645 97.98 216.645 98.62C216.645 99.2333 216.865 99.7 217.305 100.02C217.758 100.353 218.518 100.687 219.585 101.02L220.405 101.28C220.858 101.453 221.105 101.547 221.145 101.56C221.572 101.72 222.038 101.94 222.545 102.22C222.905 102.42 223.265 102.727 223.625 103.14C224.092 103.607 224.325 104.307 224.325 105.24C224.325 106.467 223.878 107.447 222.985 108.18C222.078 108.9 220.912 109.26 219.485 109.26ZM228.29 102.8V107.24H234.79V109H226.43V95H234.69V96.76H228.29V101.06H234.19V102.8H228.29Z" fill="white"/>
        <path d="M92.6199 105.44V95H94.4799V109H92.9799L85.7799 98.54V109H83.9199V95H85.4199L92.6199 105.44ZM99.3346 102.8V107.24H105.835V109H97.4746V95H105.735V96.76H99.3346V101.06H105.235V102.8H99.3346Z" fill="white"/>
        <path d="M218.434 240.26C217.127 240.26 216.007 239.96 215.074 239.36C214.154 238.747 213.507 237.9 213.134 236.82L214.734 235.9C215.267 237.593 216.514 238.44 218.474 238.44C219.421 238.44 220.147 238.247 220.654 237.86C221.174 237.473 221.434 236.947 221.434 236.28C221.434 235.627 221.181 235.127 220.674 234.78C220.221 234.473 219.374 234.12 218.134 233.72L216.794 233.28C216.501 233.16 216.114 232.987 215.634 232.76C215.167 232.52 214.827 232.28 214.614 232.04C214.027 231.4 213.734 230.62 213.734 229.7C213.734 228.473 214.161 227.513 215.014 226.82C215.867 226.1 216.907 225.74 218.134 225.74C219.227 225.74 220.187 226.013 221.014 226.56C221.841 227.107 222.461 227.853 222.874 228.8L221.314 229.7C220.714 228.26 219.654 227.54 218.134 227.54C217.374 227.54 216.761 227.727 216.294 228.1C215.827 228.473 215.594 228.98 215.594 229.62C215.594 230.233 215.814 230.7 216.254 231.02C216.707 231.353 217.467 231.687 218.534 232.02L219.354 232.28C219.807 232.453 220.054 232.547 220.094 232.56C220.521 232.72 220.987 232.94 221.494 233.22C221.854 233.42 222.214 233.727 222.574 234.14C223.041 234.607 223.274 235.307 223.274 236.24C223.274 237.467 222.827 238.447 221.934 239.18C221.027 239.9 219.861 240.26 218.434 240.26ZM230.266 240H228.106L224.086 226H226.046L229.246 237.52L232.646 226H234.526L237.926 237.52L241.126 226H243.086L239.066 240H236.906L233.586 228.82L230.266 240Z" fill="white"/>
        <path d="M93.4227 236.44V226H95.2827V240H93.7827L86.5827 229.54V240H84.7227V226H86.2227L93.4227 236.44ZM103.457 240H101.297L97.2773 226H99.2373L102.437 237.52L105.837 226H107.717L111.117 237.52L114.317 226H116.277L112.257 240H110.097L106.777 228.82L103.457 240Z" fill="white"/>
        <rect x="110" y="112" width="110" height="110" rx="55" stroke="white" strokeWidth="2"/>
        <path d="M29 113H30V113C59.8234 113 84 137.177 84 167V169C84 198.823 59.8234 223 30 223V223H29" stroke="white" strokeWidth="2" strokeLinecap="round"/>
        <path d="M300 113H299V113C269.177 113 245 137.177 245 167V169C245 198.823 269.177 223 299 223V223H300" stroke="white" strokeWidth="2" strokeLinecap="round"/>
        <path d="M220 304L220 303V303C220 273.177 195.823 249 166 249L164 249C134.177 249 110 273.177 110 303V303L110 304" stroke="white" strokeWidth="2" strokeLinecap="round"/>
        <path d="M220 32L220 33V33C220 62.8234 195.823 87 166 87L164 87C134.177 87 110 62.8234 110 33V33L110 32" stroke="white" strokeWidth="2" strokeLinecap="round"/>
      </svg>
      {chakra?.map((compassItem, index) => (
        <div className={`section-${index + 1} section`} key={index}>
          <Zone value={compassItem.value} color={compassItem.color === 'red' ? '#FFA8A8' : compassItem.color === 'green' ? '#FBFE72' : '#49BC5B'} tip={compassItem?.tip} />
        </div>
      ))}
    </div>
  );
};

export default Compas;