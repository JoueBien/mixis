import { type FC, Fragment } from "react";

import { Container } from "./Meter.styles";
import { LedSegment } from "./segments/LedSegment";
import { type MeterProps } from "./types";

export const Meter: FC<MeterProps> = (props) => {
  // Props
  const { arg, points, label, hidden } = props;
  const thePoints = points || [];

  // Dirty way of hiding this
  if (hidden) {
    return null;
  }

  // ..
  return (
    <Container className="Meter">
      <LedSegment label="Clip" color="red" isOn={(arg || 0) === 1} />
      {thePoints.map((point, index) => {
        if (point.fs === -Infinity || point.fs === 0) {
          return <Fragment key={point.fs} />;
        }
        // Min is the next smallest segment.
        // Remember render order starts a the peak (0).
        const min = thePoints[index + 1].arg;
        const max = thePoints[index].arg;
        return (
          <LedSegment
            key={point.fs}
            label={`${point.fs}`}
            arg={arg}
            min={min}
            max={max}
            color={point.fs <= -18 ? "green" : "#FFBF00"}
          />
        );
      })}
      {label && (
        <>
          <div className="Meter-label">{label}</div>
        </>
      )}
    </Container>
  );
};
