import styled from 'styled-components';

export const Grid = styled.div`
  --grid-gap: 0.75rem;

  display: grid;
  grid-template-columns: 10rem 1fr;
  grid-template-rows: 100%;
  grid-gap: var(--grid-gap);
  width: 100vw;
  height: 100vh;
  border: var(--grid-gap) solid black;
  background: black;
`;

export const SubGrid = styled.div<{ columns: number }>`
  display: grid;
  grid-template-columns: repeat(${({ columns }) => columns}, 1fr);
  grid-template-rows: 100%;
  grid-gap: var(--grid-gap);
  width: 100%;
  height: 100%;
  background: black;
`;

export const GridInner = styled.div`
  background-color: white;
  width: 100%;
  height: 100%;
  overflow: scroll;
`;
