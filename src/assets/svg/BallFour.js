import * as React from 'react';
import Svg, {Circle, Path, Defs, RadialGradient, Stop} from 'react-native-svg';
const BallFour = props => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Circle cx={12} cy={12} r={12} fill="url(#paint0_radial_2_305)" />
    <Circle cx={12} cy={12} r={6} fill="white" />
    <Path
      d="M12.276 14.5V13.364H9.772V12.452L12.124 8.98H13.372V12.404H13.988V13.364H13.372V14.5H12.276ZM10.852 12.404H12.276V10.324L10.852 12.404Z"
      fill="black"
    />
    <Defs>
      <RadialGradient
        id="paint0_radial_2_305"
        cx={0}
        cy={0}
        r={1}
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(12 12) rotate(44.3563) scale(31.4682)">
        <Stop stopColor="#A431FF" />
        <Stop offset={1} stopColor="#7000FF" />
      </RadialGradient>
    </Defs>
  </Svg>
);
export default BallFour;
