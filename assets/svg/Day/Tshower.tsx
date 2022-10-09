import React, {FC} from 'react';
import {Svg, Path} from 'react-native-svg';

interface ITshower {
  color?: string;
  width?: number;
  height?: number;
}
const TshowerIcon: FC<ITshower> = ({width, color, height}) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Path
        d="M15.6304 7.33325L15.8661 8H17C19.2091 8 21 9.79086 21 12C21 14.2091 19.2091 16 17 16H16.5C16.2239 16 16 16.2239 16 16.5C16 16.7761 16.2239 17 16.5 17H17C19.7614 17 22 14.7614 22 12C22 9.23858 19.7614 7 17 7H16.5732C15.5436 4.08702 12.7655 2 9.5 2C5.35786 2 2 5.35786 2 9.5C2 12.3598 3.33639 14.4892 5.22486 15.7337C5.45543 15.8857 5.76553 15.822 5.91749 15.5914C6.06945 15.3608 6.00571 15.0507 5.77514 14.8988C4.16078 13.8348 3 12.0157 3 9.5C3 5.91015 5.91015 3 9.5 3C12.3286 3 14.7376 4.80731 15.6304 7.33325Z"
        fill={color}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M8 13C8.27614 13 8.5 13.2239 8.5 13.5V20.5C8.5 20.7761 8.27614 21 8 21C7.72386 21 7.5 20.7761 7.5 20.5V13.5C7.5 13.2239 7.72386 13 8 13ZM14 13C14.2761 13 14.5 13.2239 14.5 13.5V20.5C14.5 20.7761 14.2761 21 14 21C13.7239 21 13.5 20.7761 13.5 20.5V13.5C13.5 13.2239 13.7239 13 14 13ZM11 14.5C11.2761 14.5 11.5 14.7239 11.5 15V22C11.5 22.2761 11.2761 22.5 11 22.5C10.7239 22.5 10.5 22.2761 10.5 22V15C10.5 14.7239 10.7239 14.5 11 14.5Z"
        fill={color}
      />
    </Svg>
  );
};

export default TshowerIcon;