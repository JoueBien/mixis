import styled from "@emotion/styled";

export const Container = styled.div`
  --width: 35;
  --height: 20;
  --font-size: 15;
  --border-radius: 6;
  --center-spacing: 5;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  height: --px(20);

  & + .LedSegment {
    margin-top: 5px;
  }

  .light {
    position: relative;
    flex-shrink: 0;
    width: --px(var(--width));
    height: --px(var(--height));

    border-radius: --px(var(--border-radius));
    overflow: hidden;

    .reflector {
      background: var(--background-color);
      content: " ";
      position: absolute;
      width: --px(var(--width));
      height: --px(var(--height));
      top: 0px;
      left: 0px;
      opacity: 0.3;
    }

    .glow {
      background: var(--background-color);
      content: " ";
      position: absolute;
      width: --px(var(--width));
      height: --px(var(--height));
      top: 0px;
      left: 0px;
      opacity: var(--glow-opacity);
    }
  }

  .label {
    display: inline-block;
    margin-left: --px(var(--center-spacing));
    width: --px(var(--width));
    line-height: --px(var(--font-size));
    font-size: --px(var(--font-size));
    color: white;
  }
`;
