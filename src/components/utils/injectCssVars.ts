import { type CSSProperties } from "react";

export function injectCssVars(input: Record<`--${string}`, string | number>) {
  const style: CSSProperties = { ...input };

  return style;
}
