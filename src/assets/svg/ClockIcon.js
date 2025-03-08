import * as React from 'react';
import Svg, {Rect, Defs, Pattern, Use, Image} from 'react-native-svg';
const ClockIcon = props => (
  <Svg
    width={60}
    height={60}
    viewBox="0 0 60 60"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}>
    <Rect width={60} height={60} fill="url(#pattern0_2021_2)" />
    <Defs>
      <Pattern
        id="pattern0_2021_2"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}>
        <Use
          xlinkHref="#image0_2021_2"
          transform="translate(0 -0.00446429) scale(0.00892857)"
        />
      </Pattern>
      <Image
        id="image0_2021_2"
        width={112}
        height={113}
        preserveAspectRatio="none"
        xlinkHref="data:image/png;base64,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"
      />
    </Defs>
  </Svg>
);
export default ClockIcon;
