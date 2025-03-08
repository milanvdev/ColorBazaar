import * as React from 'react';
import Svg, {
  G,
  Circle,
  Path,
  Defs,
  RadialGradient,
  Stop,
} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const BallOne = props => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Circle cx={12} cy={12} r={12} fill="url(#paint0_radial_2_295)" />
    <Circle
      cx={11.852}
      cy={11.8556}
      r={6}
      transform="rotate(-91.3961 11.852 11.8556)"
      fill="white"
    />
    <Path
      d="M11.632 15V10.696L10.512 11.32L10.136 10.376L11.792 9.48H12.76V15H11.632Z"
      fill="black"
    />
    <Defs>
      <RadialGradient
        id="paint0_radial_2_295"
        cx={0}
        cy={0}
        r={1}
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(12 12) rotate(44.3563) scale(31.4682)">
        <Stop stopColor="#FFD600" />
        <Stop offset={1} stopColor="#FFE660" />
      </RadialGradient>
    </Defs>
  </Svg>
);
export default BallOne;
