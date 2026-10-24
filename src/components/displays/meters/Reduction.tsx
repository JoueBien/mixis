// Libs
import { type FC, Fragment } from "react";

import { Container } from "./Meter.styles";
import { LedSegment } from "./segments/LedSegment";
import { LedSegmentInverted } from "./segments/LedSegmentInverted";
import { type MeterProps } from "./types";

export const Reduction: FC<MeterProps> = (props) => {
  // Props
  const { arg, points, label, hidden } = props;
  const thePoints = points || [];

  // Dirty way of hiding this
  if (hidden) {
    return null;
  }

  // ..
  return (
    <Container className="Reduction">
      <LedSegment label="GR" color="red" isOn={true} />

      {thePoints.map((point, index) => {
        if (point.fs === -Infinity || point.fs === 0) {
          return <Fragment key={point.fs} />;
        }
        // Min is the next smallest segment.
        // Remember render order starts a the peak (0).
        const min = thePoints[index + 1].arg;
        const max = thePoints[index].arg;
        return (
          <LedSegmentInverted
            key={point.fs}
            label={`${point.fs}`}
            arg={arg}
            min={min}
            max={max}
            color={point.fs >= -12 ? "#FFBF00" : "red"}
          />
        );
      })}
      {label && (
        <>
          <div className="Reduction-label">{label}</div>
        </>
      )}
    </Container>
  );
};
