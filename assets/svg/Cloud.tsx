import React, {FC} from 'react';
import {Svg, Path} from 'react-native-svg';

interface ICloud {
  color?: string;
  width?: number;
  height?: number;
}
const CloudIcon: FC<ICloud> = ({width, color, height}) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 18 18" fill="none">
      <Path
        d="M9 2.25C6.93897 2.25 5.146 3.68262 4.64941 5.65137C3.43652 5.83154 2.47412 6.79834 2.28516 8.05518C0.94043 8.51221 0 9.79541 0 11.25C0 13.1089 1.51611 14.625 3.375 14.625H14.625C16.4839 14.625 18 13.1089 18 11.25C18 10.2393 17.5518 9.29443 16.7783 8.65723C16.8442 8.39795 16.875 8.13428 16.875 7.875C16.875 5.82715 15.0645 4.15723 12.9287 4.55273C12.1377 3.14209 10.6479 2.25 9 2.25ZM9 3.375C10.3579 3.375 11.5796 4.18359 12.1113 5.43164L12.3091 5.91504L12.8013 5.74805C13.0562 5.66455 13.2847 5.625 13.5 5.625C14.7393 5.625 15.75 6.63574 15.75 7.875C15.75 8.13867 15.6973 8.40674 15.5918 8.67481L15.4336 9.10547L15.8203 9.35156C16.4795 9.76904 16.875 10.4766 16.875 11.25C16.875 12.4893 15.8643 13.5 14.625 13.5H3.375C2.13574 13.5 1.125 12.4893 1.125 11.25C1.125 10.1821 1.88525 9.25488 2.92676 9.04395L3.38818 8.91211L3.375 8.4375C3.375 7.50586 4.13086 6.75 5.00537 6.74561L5.11963 6.75879H5.60742L5.67773 6.271C5.91064 4.61865 7.33887 3.375 9 3.375ZM7.3125 7.875C7.00049 7.875 6.75 8.12549 6.75 8.4375C6.75 8.74951 7.00049 9 7.3125 9C7.62451 9 7.875 8.74951 7.875 8.4375C7.875 8.12549 7.62451 7.875 7.3125 7.875ZM10.6875 7.875C10.3755 7.875 10.125 8.12549 10.125 8.4375C10.125 8.74951 10.3755 9 10.6875 9C10.9995 9 11.25 8.74951 11.25 8.4375C11.25 8.12549 10.9995 7.875 10.6875 7.875ZM11.8477 10.0942C11.6763 10.0942 11.5181 10.1689 11.4082 10.3008C11.4082 10.3008 10.4854 11.25 9 11.25C7.51465 11.25 6.5918 10.3008 6.5918 10.3008C6.48633 10.1865 6.3457 10.1206 6.19189 10.1162C5.96338 10.1162 5.75684 10.248 5.66455 10.459C5.57666 10.6699 5.62061 10.916 5.7832 11.0742C5.7832 11.0742 7.02686 12.375 9 12.375C10.9731 12.375 12.2168 11.0742 12.2168 11.0742C12.3882 10.9204 12.4497 10.6743 12.3706 10.459C12.2871 10.2393 12.0806 10.0986 11.8477 10.0942Z"
        fill={color}
      />
    </Svg>
  );
};

export default CloudIcon;
