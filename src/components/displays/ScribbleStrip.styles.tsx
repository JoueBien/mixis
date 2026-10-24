import styled from "@emotion/styled";

export const Container = styled.div`
  width: 120px;
  height: 70px;

  display: flex;
  box-sizing: border-box;

  background: var(--background-color);
  border-radius: 0.5rem;
  font-weight: 500;
  font-size: 0.9rem;
  color: var(--text-color);
  line-height: 1.5rem;
  border: 0.2rem solid var(--border-color-outer);

  .inner-border-box {
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    box-sizing: border-box;
    padding: 0.3rem;

    border-radius: 0.5rem;
    border: 0.2rem solid var(--border-color-inner);

    .ch-name {
      font-weight: 700;
      font-size: 0.8rem;
    }
  }
`;
