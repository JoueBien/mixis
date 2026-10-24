import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import { createRoot } from "react-dom/client";

import { SCRIBBLE_STRIP_COLORS } from "../../components/constraints/ScribbleStripColors";
import { Meter } from "../../components/displays/meters/Meter";
import { Reduction } from "../../components/displays/meters/Reduction";
import {
  CUSTOM_POINTS,
  POINT_42,
} from "../../components/displays/meters/utils/MeterPoints";
import { ScribbleStrip } from "../../components/displays/ScribbleStrip";

export const pageCache = createCache({
  key: "main",
  nonce: "csp-nonce-placeholder",
});

const root = createRoot(document.body);
root.render(
  <CacheProvider value={pageCache}>
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-between",
      }}
    >
      <ScribbleStrip
        channelName="KICK DRUM"
        channelId="CH 1"
        bgColor={SCRIBBLE_STRIP_COLORS.OFF}
        textColor={SCRIBBLE_STRIP_COLORS.OFFi}
      />
      <ScribbleStrip
        channelName="SNARE"
        channelId="CH 2"
        bgColor={SCRIBBLE_STRIP_COLORS.RD}
        textColor={SCRIBBLE_STRIP_COLORS.OFFi}
      />
      <ScribbleStrip
        channelName="HIGH HAT"
        channelId="CH 2"
        bgColor={SCRIBBLE_STRIP_COLORS.GN}
        textColor={SCRIBBLE_STRIP_COLORS.OFFi}
      />
      <ScribbleStrip
        channelName="TOM 1"
        channelId="CH 2"
        bgColor={SCRIBBLE_STRIP_COLORS.YE}
        textColor={SCRIBBLE_STRIP_COLORS.OFFi}
      />
      <ScribbleStrip
        channelName="TOM 2"
        channelId="CH 2"
        bgColor={SCRIBBLE_STRIP_COLORS.BL}
        textColor={SCRIBBLE_STRIP_COLORS.OFFi}
      />
      <ScribbleStrip
        channelName="FLOOR TOM"
        channelId="CH 2"
        bgColor={SCRIBBLE_STRIP_COLORS.MG}
        textColor={SCRIBBLE_STRIP_COLORS.OFFi}
      />
      <ScribbleStrip
        channelName="OVER HEAD L1"
        channelId="CH 3"
        bgColor={SCRIBBLE_STRIP_COLORS.CY}
        textColor={SCRIBBLE_STRIP_COLORS.OFFi}
      />
      <ScribbleStrip
        channelName="OVER HEAD R1"
        channelId="CH 2"
        bgColor={SCRIBBLE_STRIP_COLORS.WH}
        textColor={SCRIBBLE_STRIP_COLORS.OFFi}
      />
    </div>
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-between",
      }}
    >
      <ScribbleStrip
        channelName="BASS"
        channelId="CH 1"
        bgColor={SCRIBBLE_STRIP_COLORS.OFF}
        textColor={SCRIBBLE_STRIP_COLORS.OFFi}
        invertColors
      />
      <ScribbleStrip
        channelName="ACOUSTIC"
        channelId="CH 2"
        bgColor={SCRIBBLE_STRIP_COLORS.RD}
        textColor={SCRIBBLE_STRIP_COLORS.OFFi}
        invertColors
      />
      <ScribbleStrip
        channelName="ELEC GT"
        channelId="CH 2"
        bgColor={SCRIBBLE_STRIP_COLORS.GN}
        textColor={SCRIBBLE_STRIP_COLORS.OFFi}
        invertColors
      />
      <ScribbleStrip
        channelName="KEYS L"
        channelId="CH 2"
        bgColor={SCRIBBLE_STRIP_COLORS.YE}
        textColor={SCRIBBLE_STRIP_COLORS.OFFi}
        invertColors
      />
      <ScribbleStrip
        channelName="KEYS R"
        channelId="CH 2"
        bgColor={SCRIBBLE_STRIP_COLORS.BL}
        textColor={SCRIBBLE_STRIP_COLORS.OFFi}
        invertColors
      />
      <ScribbleStrip
        channelName="VOX 1"
        channelId="CH 2"
        bgColor={SCRIBBLE_STRIP_COLORS.MG}
        textColor={SCRIBBLE_STRIP_COLORS.OFFi}
        invertColors
      />
      <ScribbleStrip
        channelName="VOX 2"
        channelId="CH 2"
        bgColor={SCRIBBLE_STRIP_COLORS.CY}
        textColor={SCRIBBLE_STRIP_COLORS.OFFi}
        invertColors
      />
      <ScribbleStrip
        channelName="VOX 3"
        channelId="CH 2"
        bgColor={SCRIBBLE_STRIP_COLORS.WH}
        textColor={SCRIBBLE_STRIP_COLORS.OFFi}
        invertColors
      />
    </div>
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-between",
      }}
    >
      <Meter points={CUSTOM_POINTS} arg={POINT_42.arg} label={"Kick DRUM"} />
      <Meter points={CUSTOM_POINTS} arg={1} label={"LRC"} />
      <Reduction points={CUSTOM_POINTS} arg={POINT_42.arg} label={"CH1"} />
    </div>
  </CacheProvider>,
);
