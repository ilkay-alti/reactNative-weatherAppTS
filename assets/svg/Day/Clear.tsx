import React, {FC} from 'react';
import {Svg, Path} from 'react-native-svg';

interface IClear {
  color?: string;
  width?: number;
  height?: number;
}
const ClearIcon: FC<IClear> = ({width, color, height}) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16ZM12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17Z"
        fill={color}
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12 1.5C12.2761 1.5 12.5 1.72386 12.5 2V5C12.5 5.27614 12.2761 5.5 12 5.5C11.7239 5.5 11.5 5.27614 11.5 5V2C11.5 1.72386 11.7239 1.5 12 1.5Z"
        fill={color}
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12 18.5C12.2761 18.5 12.5 18.7239 12.5 19V22C12.5 22.2761 12.2761 22.5 12 22.5C11.7239 22.5 11.5 22.2761 11.5 22V19C11.5 18.7239 11.7239 18.5 12 18.5Z"
        fill={color}
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M18.5 12C18.5 11.7239 18.7239 11.5 19 11.5L22 11.5C22.2761 11.5 22.5 11.7239 22.5 12C22.5 12.2761 22.2761 12.5 22 12.5L19 12.5C18.7239 12.5 18.5 12.2761 18.5 12Z"
        fill={color}
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M1.5 12C1.5 11.7239 1.72386 11.5 2 11.5L5 11.5C5.27614 11.5 5.5 11.7239 5.5 12C5.5 12.2761 5.27614 12.5 5 12.5L2 12.5C1.72386 12.5 1.5 12.2761 1.5 12Z"
        fill={color}
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M4.57538 4.57538C4.77064 4.38012 5.08722 4.38012 5.28249 4.57538L7.40381 6.6967C7.59907 6.89196 7.59907 7.20854 7.40381 7.40381C7.20854 7.59907 6.89196 7.59907 6.6967 7.40381L4.57538 5.28249C4.38012 5.08722 4.38012 4.77064 4.57538 4.57538Z"
        fill={color}
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M16.5962 16.5962C16.7915 16.4009 17.108 16.4009 17.3033 16.5962L19.4246 18.7175C19.6199 18.9128 19.6199 19.2294 19.4246 19.4246C19.2294 19.6199 18.9128 19.6199 18.7175 19.4246L16.5962 17.3033C16.4009 17.108 16.4009 16.7915 16.5962 16.5962Z"
        fill={color}
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M19.4246 4.57538C19.6199 4.77064 19.6199 5.08722 19.4246 5.28249L17.3033 7.40381C17.108 7.59907 16.7915 7.59907 16.5962 7.40381C16.4009 7.20854 16.4009 6.89196 16.5962 6.6967L18.7175 4.57538C18.9128 4.38012 19.2294 4.38012 19.4246 4.57538Z"
        fill={color}
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M7.40381 16.5962C7.59907 16.7915 7.59907 17.108 7.40381 17.3033L5.28249 19.4246C5.08722 19.6199 4.77064 19.6199 4.57538 19.4246C4.38012 19.2294 4.38012 18.9128 4.57538 18.7175L6.6967 16.5962C6.89196 16.4009 7.20854 16.4009 7.40381 16.5962Z"
        fill={color}
      />
    </Svg>
  );
};

export default ClearIcon;
