import { type ReactNode } from "react";

import { type MeterPoints } from "./utils/MeterPoints";

export type MeterProps = {
  arg?: number;
  points?: MeterPoints;
  label?: string | ReactNode;
  hidden?: boolean;
};

export type MeterSegmentColor = "green" | "#FFBF00" | "red";

export type LedSegmentProps = {
  label?: number | string;
  color?: MeterSegmentColor;
  min?: number;
  max?: number;
  arg?: number;
  isOn?: boolean;
};
