import React, {FC} from 'react';
import {Svg, Path} from 'react-native-svg';

interface ITornado {
  color?: string;
  width?: number;
  height?: number;
}
const TornadoIcon: FC<ITornado> = ({width, color, height}) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M1.5 3C1.5 2.72386 1.72386 2.5 2 2.5H22C22.2761 2.5 22.5 2.72386 22.5 3C22.5 3.27614 22.2761 3.5 22 3.5H2C1.72386 3.5 1.5 3.27614 1.5 3ZM2.5 6C2.5 5.72386 2.72386 5.5 3 5.5H18C18.2761 5.5 18.5 5.72386 18.5 6C18.5 6.27614 18.2761 6.5 18 6.5H3C2.72386 6.5 2.5 6.27614 2.5 6ZM5.5 9C5.5 8.72386 5.72386 8.5 6 8.5H16C16.2761 8.5 16.5 8.72386 16.5 9C16.5 9.27614 16.2761 9.5 16 9.5H6C5.72386 9.5 5.5 9.27614 5.5 9ZM9.5 13C9.5 12.7239 9.72386 12.5 10 12.5H17C17.2761 12.5 17.5 12.7239 17.5 13C17.5 13.2761 17.2761 13.5 17 13.5H10C9.72386 13.5 9.5 13.2761 9.5 13ZM12.5 17C12.5 16.7239 12.7239 16.5 13 16.5H18C18.2761 16.5 18.5 16.7239 18.5 17C18.5 17.2761 18.2761 17.5 18 17.5H13C12.7239 17.5 12.5 17.2761 12.5 17ZM11.5 21C11.5 20.7239 11.7239 20.5 12 20.5H15C15.2761 20.5 15.5 20.7239 15.5 21C15.5 21.2761 15.2761 21.5 15 21.5H12C11.7239 21.5 11.5 21.2761 11.5 21Z"
        fill={color}
      />
    </Svg>
  );
};

export default TornadoIcon;