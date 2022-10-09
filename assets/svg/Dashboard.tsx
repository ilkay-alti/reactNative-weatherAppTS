import React, {FC} from 'react';
import {Svg, Path} from 'react-native-svg';

interface IDashboard {
  width?: number;
  height?: any;
}
const DashboardIcon: FC<IDashboard> = ({width, height}) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 32 32" fill="none">
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12.5573 13.3341H8.77599C8.22115 13.3294 7.68721 13.5454 7.29162 13.9345C6.89604 14.3236 6.67123 14.8539 6.66666 15.4087V23.2607C6.67692 24.4156 7.62111 25.3437 8.77599 25.3341H12.5573C13.1122 25.3387 13.6461 25.1227 14.0417 24.7336C14.4373 24.3445 14.6621 23.8142 14.6667 23.2594V15.4087C14.6621 14.8539 14.4373 14.3236 14.0417 13.9345C13.6461 13.5454 13.1122 13.3294 12.5573 13.3341Z"
        stroke="#36424D"
        stroke-width="1.2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12.5573 5.33415H8.77599C7.64433 5.30276 6.70077 6.19324 6.66666 7.32482V8.67681C6.70077 9.80839 7.64433 10.6989 8.77599 10.6675H12.5573C13.689 10.6989 14.6325 9.80839 14.6667 8.67681V7.32482C14.6325 6.19324 13.689 5.30276 12.5573 5.33415Z"
        stroke="#36424D"
        stroke-width="1.2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M19.4427 17.3342H23.2227C23.7777 17.3392 24.312 17.1234 24.7079 16.7343C25.1038 16.3451 25.3288 15.8146 25.3333 15.2596V7.40891C25.3288 6.85407 25.1039 6.32377 24.7084 5.93469C24.3128 5.54562 23.7788 5.32962 23.224 5.33424H19.4427C18.8878 5.32962 18.3539 5.54562 17.9583 5.93469C17.5627 6.32377 17.3379 6.85407 17.3333 7.40891V15.2596C17.3379 15.8144 17.5627 16.3447 17.9583 16.7338C18.3539 17.1229 18.8878 17.3389 19.4427 17.3342Z"
        stroke="#36424D"
        stroke-width="1.2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M19.4427 25.3341H23.2227C24.3548 25.3663 25.2992 24.4756 25.3333 23.3435V21.9915C25.2992 20.8599 24.3557 19.9694 23.224 20.0008H19.4427C18.311 19.9694 17.3674 20.8599 17.3333 21.9915V23.3421C17.3667 24.4742 18.3105 25.3655 19.4427 25.3341Z"
        stroke="#36424D"
        stroke-width="1.2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};

export default DashboardIcon;
