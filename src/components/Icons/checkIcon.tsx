import React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

const CheckIcon: React.FC = (props: SvgProps) => (
  <Svg width={11} height={9} {...props}>
    <Path fill="none" stroke="#FFF" strokeWidth={2} d="M1 4.304 3.696 7l6-6" />
  </Svg>
);

export default CheckIcon
