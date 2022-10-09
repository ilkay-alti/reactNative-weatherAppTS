import React, {FC} from 'react';
import {Svg, Path} from 'react-native-svg';

interface ITstorm {
  color?: string;
  width?: number;
  height?: number;
}
const TstormIcon: FC<ITstorm> = ({width, color, height}) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Path
        d="M16 4.00002C16 6.43312 17.7379 8.4603 20.0401 8.90797C20.0187 8.93048 19.997 8.95279 19.9749 8.97488C19.4708 9.47894 18.8513 9.79711 18.2014 9.9294C18.5393 10.1448 18.8412 10.4078 19.0968 10.7083C19.6748 10.4894 20.2167 10.1473 20.682 9.68199C20.9995 9.36451 21.2596 9.0114 21.4624 8.63552C21.6265 8.33117 21.3458 8.00002 21 8.00002C18.7909 8.00002 17 6.20916 17 4.00002C17 3.57614 17.0659 3.16766 17.1881 2.78427C17.3045 2.41901 17.0575 2.00537 16.6805 2.07484C15.815 2.23432 14.9873 2.64872 14.318 3.31803C13.5177 4.11832 13.0819 5.14505 13.0105 6.19198C13.3968 6.46875 13.7487 6.78725 14.0588 7.1405C13.856 6.04539 14.1781 4.87219 15.0251 4.02514C15.3303 3.71995 15.6769 3.4833 16.0467 3.31465C16.0159 3.53902 16 3.76785 16 4.00002Z"
        fill={color}
      />
      <Path
        d="M14.9644 10L14.7517 9.28525C14.0138 6.80612 11.7165 5 9 5C5.68629 5 3 7.68629 3 11C3 13.6674 4.68931 15.6207 6.69989 16.4976C6.953 16.608 7.0687 16.9027 6.95831 17.1558C6.84791 17.4089 6.55323 17.5246 6.30011 17.4142C3.99605 16.4093 2 14.1373 2 11C2 7.13401 5.13401 4 9 4C12.171 4 14.8496 6.10851 15.7101 9H16.5C18.9853 9 21 11.0147 21 13.5C21 15.9853 18.9853 18 16.5 18H15.5C15.2239 18 15 17.7761 15 17.5C15 17.2239 15.2239 17 15.5 17H16.5C18.433 17 20 15.433 20 13.5C20 11.567 18.433 10 16.5 10H14.9644Z"
        fill={color}
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12.8 13.1C13.0209 13.2657 13.0657 13.5791 12.9 13.8L10.5 17H12.5C12.6894 17 12.8625 17.107 12.9472 17.2764C13.0319 17.4458 13.0136 17.6485 12.9 17.8L9.9 21.8C9.73431 22.0209 9.42091 22.0657 9.2 21.9C8.97908 21.7343 8.93431 21.4209 9.1 21.2L11.5 18H9.5C9.31061 18 9.13748 17.893 9.05279 17.7236C8.96809 17.5542 8.98637 17.3515 9.1 17.2L12.1 13.2C12.2657 12.9791 12.5791 12.9343 12.8 13.1Z"
        fill={color}
      />
    </Svg>
  );
};

export default TstormIcon;
