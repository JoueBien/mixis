import { type FC } from "react";

import { injectCssVars } from "../../../utils/injectCssVars";
import { type LedSegmentProps } from "../types";
import { percentBetween } from "../utils/percentBetween";
import { Container } from "./LedSegment.styles";

export const LedSegmentInverted: FC<LedSegmentProps> = (props) => {
  // Props
  const { label, color, max, min, arg, isOn } = props;

  // Calc
  const opacity = (() => {
    // Show on and off if requested
    if (isOn === true) {
      return 1;
    } else if (isOn === false) {
      return 0;
    }

    // Make sure all our input are okay
    if (
      min === undefined &&
      max === undefined &&
      arg !== undefined &&
      (max || 0) > (min || 0)
    ) {
      console.warn("@MeterSegment->opacity: missing max, min, arg");
      return 0.5;
    }

    // If zero we are off and we don't need to calculate
    if (arg === 0 || arg === Infinity) {
      return 0;
    }

    // Figure out the linear % between each
    const percent = percentBetween(min as number, max as number);
    // from 100% go to 1
    const opacity = 1 - percent(arg as number) / 100;

    if (opacity > 1) {
      return 1;
    }

    return opacity;
  })();

  // ..
  return (
    <Container
      className="LedSegment"
      style={injectCssVars({
        "--background-color": color || "green",
        "--glow-opacity": opacity,
      })}
    >
      <div className="light">
        <div className="reflector" />
        <div className="glow" />
      </div>
      <div className="label">{label}</div>
    </Container>
  );
};
