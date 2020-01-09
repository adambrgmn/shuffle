import React, { useState } from 'react';
import { shuffle } from 'lodash-es';
import { AddForm } from '../components/AddForm';
import { useList } from '../hooks/use-list';
import { GridInner, SubGrid } from '../components/Grid';

export const RandomSort: React.FC = () => {
  const [people, { add, remove, clear, handlePaste }] = useList();
  const [shuffled, setShuffled] = useState(people);

  return (
    <GridInner as="main">
      <SubGrid columns={2}>
        <GridInner>
          <h2>People</h2>
          <AddForm onSubmit={add} label="Name" onPaste={handlePaste} />
          <ul>
            {people.map(({ id, value }) => (
              <li key={id}>
                <span>{value}</span>
                <button type="button" onClick={() => remove(id)}>
                  Remove
                </button>
              </li>
            ))}
          </ul>

          <button
            type="button"
            onClick={() => {
              clear();
              setShuffled([]);
            }}
          >
            Clear all
          </button>
        </GridInner>

        <GridInner>
          <h2>Sorted</h2>

          <div>
            <button type="button" onClick={() => setShuffled(shuffle(people))}>
              Shuffle
            </button>
          </div>

          <ul>
            {shuffled.map(({ id, value }) => (
              <li key={id}>
                <span>{value}</span>
              </li>
            ))}
          </ul>
        </GridInner>
      </SubGrid>
    </GridInner>
  );
};

export default RandomSort;
