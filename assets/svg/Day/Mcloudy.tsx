import React, {FC} from 'react';
import {Svg, Path} from 'react-native-svg';

interface IMcloudy {
  color?: string;
  width?: number;
  height?: number;
}
const McloudyIcon: FC<IMcloudy> = ({width, color, height}) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M15.8661 10L15.6304 9.33325C14.7376 6.80731 12.3286 5 9.5 5C5.91015 5 3 7.91015 3 11.5C3 15.0899 5.91015 18 9.5 18H17C19.2091 18 21 16.2091 21 14C21 11.7909 19.2091 10 17 10H15.8661ZM9.5 4C12.7655 4 15.5436 6.08702 16.5732 9H17C19.7614 9 22 11.2386 22 14C22 16.7614 19.7614 19 17 19H9.5C5.35786 19 2 15.6421 2 11.5C2 7.35786 5.35786 4 9.5 4Z"
        fill={color}
      />
    </Svg>
  );
};

export default McloudyIcon;
