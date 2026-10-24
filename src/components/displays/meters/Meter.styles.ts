import styled from "@emotion/styled";

// Styles
export const Container = styled.div`
  --horizontal-padding: 4;
  --label-padding: 9;
  --font-size: 15;

  display: flex;
  flex-direction: column;
  align-items: center;
  align-items: self-start;

  padding-left: --px(4);
  padding-right: --px(4);

  .Meter-label,
  .Reduction-label {
    width: 100%;
    display: block;
    padding-top: --px(var(--label-padding));
    font-size: --px(var(--font-size));
    letter-spacing: 0.05rem;
    text-transform: uppercase;
    color: white;
  }
`;
