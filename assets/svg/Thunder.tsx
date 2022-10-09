import React, {FC} from 'react';
import {Svg, Path} from 'react-native-svg';

interface IThunder {
  color?: string;
  width?: number;
  height?: number;
}
const ThunderIcon: FC<IThunder> = ({width, color, height}) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 32 32" fill="none">
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M15.2 6.66666L9.33334 18.1533H16.6667V25.3333L24 12.4107H16.6667L15.2 6.66666Z"
        stroke={color}
        stroke-width="1.2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};

export default ThunderIcon;
