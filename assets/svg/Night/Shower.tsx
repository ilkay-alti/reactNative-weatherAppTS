import React, {FC} from 'react';
import {Svg, Path} from 'react-native-svg';

interface IShower {
  color?: string;
  width?: number;
  height?: number;
}
const ShowerIcon: FC<IShower> = ({width, color, height}) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Path
        d="M16 4.00002C16 6.43312 17.7379 8.4603 20.0401 8.90797C20.0187 8.93048 19.997 8.95279 19.9749 8.97488C19.4708 9.47894 18.8513 9.79711 18.2014 9.9294C18.5393 10.1448 18.8412 10.4078 19.0968 10.7083C19.6748 10.4894 20.2167 10.1473 20.682 9.68199C20.9995 9.36451 21.2596 9.0114 21.4624 8.63552C21.6265 8.33117 21.3458 8.00002 21 8.00002C18.7909 8.00002 17 6.20916 17 4.00002C17 3.57614 17.0659 3.16766 17.1881 2.78427C17.3045 2.41901 17.0575 2.00537 16.6805 2.07484C15.815 2.23432 14.9873 2.64872 14.318 3.31803C13.5177 4.11832 13.0819 5.14505 13.0105 6.19198C13.3968 6.46875 13.7487 6.78725 14.0588 7.1405C13.856 6.04539 14.1781 4.87219 15.0251 4.02514C15.3303 3.71995 15.6769 3.4833 16.0467 3.31465C16.0159 3.53902 16 3.76785 16 4.00002Z"
        fill={color}
      />
      <Path
        d="M14.7517 9.28525L14.9644 10H16.5C18.433 10 20 11.567 20 13.5C20 15.433 18.433 17 16.5 17H16C15.7239 17 15.5 17.2239 15.5 17.5C15.5 17.7761 15.7239 18 16 18H16.5C18.9853 18 21 15.9853 21 13.5C21 11.0147 18.9853 9 16.5 9H15.7101C14.8496 6.10851 12.171 4 9 4C5.13401 4 2 7.13401 2 11C2 13.7229 3.46314 15.7564 5.22486 16.9175C5.45543 17.0694 5.76553 17.0057 5.91749 16.7751C6.06945 16.5446 6.00571 16.2345 5.77514 16.0825C4.24385 15.0733 3 13.3306 3 11C3 7.68629 5.68629 5 9 5C11.7165 5 14.0138 6.80612 14.7517 9.28525Z"
        fill={color}
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M7.5 15C7.77614 15 8 15.2239 8 15.5V17C8 17.2761 7.77614 17.5 7.5 17.5C7.22386 17.5 7 17.2761 7 17V15.5C7 15.2239 7.22386 15 7.5 15ZM13.5 15C13.7761 15 14 15.2239 14 15.5V17C14 17.2761 13.7761 17.5 13.5 17.5C13.2239 17.5 13 17.2761 13 17V15.5C13 15.2239 13.2239 15 13.5 15ZM10.5 16C10.7761 16 11 16.2239 11 16.5V18C11 18.2761 10.7761 18.5 10.5 18.5C10.2239 18.5 10 18.2761 10 18V16.5C10 16.2239 10.2239 16 10.5 16ZM7.5 18.5C7.77614 18.5 8 18.7239 8 19V21C8 21.2761 7.77614 21.5 7.5 21.5C7.22386 21.5 7 21.2761 7 21V19C7 18.7239 7.22386 18.5 7.5 18.5ZM13.5 18.5C13.7761 18.5 14 18.7239 14 19V21C14 21.2761 13.7761 21.5 13.5 21.5C13.2239 21.5 13 21.2761 13 21V19C13 18.7239 13.2239 18.5 13.5 18.5ZM10.5 19.5C10.7761 19.5 11 19.7239 11 20V22C11 22.2761 10.7761 22.5 10.5 22.5C10.2239 22.5 10 22.2761 10 22V20C10 19.7239 10.2239 19.5 10.5 19.5Z"
        fill={color}
      />
    </Svg>
  );
};

export default ShowerIcon;