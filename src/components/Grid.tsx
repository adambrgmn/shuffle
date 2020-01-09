import styled from 'styled-components';

export const Grid = styled.div<{ columns: string; rows: string }>`
  --gap: 0.75rem;

  display: grid;
  grid-template-columns: ${({ columns }) => columns};
  grid-template-rows: ${({ rows }) => rows};
  grid-gap: var(--gap);
  width: 100%;
  border: var(--gap) solid black;
  background: black;
`;

export const GridInner = styled.div`
  background-color: white;
  padding: 1rem;
`;
