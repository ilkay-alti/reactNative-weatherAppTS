import React, {FC} from 'react';
import {Svg, Path, Defs, G, Rect, ClipPath} from 'react-native-svg';

interface IBike {
  color?: string;
  width?: number;
  height?: number;
}
const BikeIcon: FC<IBike> = ({width, color, height}) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <G clip-path="url(#clip0_1_117)">
        <Path
          d="M11.5 0C10.1211 0 9 1.12109 9 2.5C9 3.14844 9.25 3.74219 9.65625 4.1875L9.4375 4.125C9.29297 4.04688 9.19141 4.00781 9.125 4C9.01953 3.98438 8.91797 3.98438 8.8125 4C8.75 4.01562 8.68359 4.03516 8.625 4.0625C8.29297 4.12109 7.96094 4.22656 7.6875 4.5C7.1875 5.10156 6.78906 5.48828 6.1875 6.1875C5.08594 7.48828 4.5 8.30469 4 8.90625C3.80078 9.20703 3.09375 10.2891 3.59375 11.1875C4.09375 11.9883 4.89844 12.3867 6 12.6875C6.92578 12.9961 9.06641 13.6953 10.3125 14.0938L12.0625 19.3125C12.1289 19.7031 12.418 20.0156 12.7969 20.1133C13.1797 20.2109 13.582 20.0781 13.8281 19.7695C14.0742 19.4609 14.1172 19.0391 13.9375 18.6875L11.9375 12.6875C11.8516 12.4258 11.6562 12.2109 11.4062 12.0938L7.90625 10.5938L11.0625 6.71875L17.6875 8.9375C18.0391 9.11719 18.4609 9.07422 18.7695 8.82812C19.0781 8.58203 19.2109 8.17969 19.1133 7.79688C19.0156 7.41797 18.7031 7.12891 18.3125 7.0625L11.9062 4.9375C13.0898 4.74219 14 3.73828 14 2.5C14 1.12109 12.8789 0 11.5 0ZM5.625 3C3.92969 3.1875 1.78906 4.44531 1.1875 6.09375C0.488281 7.89453 2.5 8.8125 2.5 8.8125L7.09375 3.1875C6.69531 2.98828 6.19141 2.9375 5.625 3ZM19.5 11C17 11 15 13 15 15.5C15 18 17 20 19.5 20C22 20 24 18 24 15.5C24 13 22 11 19.5 11ZM19.5 12.5C21.1992 12.5 22.5 13.8008 22.5 15.5C22.5 17.1992 21.1992 18.5 19.5 18.5C17.8008 18.5 16.5 17.1992 16.5 15.5C16.5 13.8008 17.8008 12.5 19.5 12.5ZM4.5 15C2 15 0 17 0 19.5C0 22 2 24 4.5 24C7 24 9 22 9 19.5C9 17 7 15 4.5 15ZM4.5 16.5C6.19922 16.5 7.5 17.8008 7.5 19.5C7.5 21.1992 6.19922 22.5 4.5 22.5C2.80078 22.5 1.5 21.1992 1.5 19.5C1.5 17.8008 2.80078 16.5 4.5 16.5Z"
          fill={color}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_1_117">
          <Rect width={width} height={height} fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export default BikeIcon;