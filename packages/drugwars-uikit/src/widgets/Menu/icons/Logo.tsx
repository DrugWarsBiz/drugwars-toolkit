import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";
//import drugsLogo from "./img/drugs_logo.png";

var drugsLogo = require('./img/drugs_logo.png');



interface LogoProps extends SvgProps {
  isDark: boolean;
}

const Logo: React.FC<LogoProps> = ({ isDark, ...props }) => {
  const textColor = isDark ? "#FFFFFF" : "#000000";
  return (

<Svg viewBox="0 0 90 90" {...props}>
      <image width={90} height={90} href="/images/drugs_logo.png"/>
    </Svg>



  );
};

export default React.memo(Logo, (prev, next) => prev.isDark === next.isDark);
