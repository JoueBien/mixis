import { type FC } from "react";

import { injectCssVars } from "../utils/injectCssVars";
import { Container } from "./ScribbleStrip.styles";

export type ScribbleStripProps = {
  channelName: string;
  channelId: string;
  bgColor: string;
  textColor: string;
  invertColors?: boolean;
};

export const ScribbleStrip: FC<ScribbleStripProps> = ({
  channelName,
  channelId,
  bgColor,
  textColor,
  invertColors,
}) => {
  return (
    <Container
      style={{
        ...injectCssVars({
          "--background-color": invertColors ? bgColor : textColor,
          "--text-color": invertColors ? textColor : bgColor,
          "--border-color-outer": bgColor,
          "--border-color-inner": textColor,
        }),
      }}
    >
      <div className="inner-border-box">
        <span className="ch-name">[{channelId}]</span>
        <span>{channelName}</span>
      </div>
    </Container>
  );
};
