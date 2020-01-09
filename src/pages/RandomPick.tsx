import React, { useState } from 'react';
import { difference, includes } from 'lodash-es';
import { pickRandom } from '../utils/array';
import { AddForm } from '../components/AddForm';
import { useList } from '../hooks/use-list';

export const RandomPick: React.FC = () => {
  const [people, { add, remove, clear, handlePaste }] = useList();
  const [picked, setPicked] = useState(people);

  const handlePick = () => {
    const pick = pickRandom(difference(people, picked));
    if (pick) setPicked([pick, ...picked]);
  };

  return (
    <React.Fragment>
      <div>
        <h2>People</h2>
        <AddForm onSubmit={add} label="Name" onPaste={handlePaste} />
        <ul>
          {people.map(person => (
            <li key={person.id}>
              <span
                style={{ color: includes(picked, person) ? 'gray' : 'black' }}
              >
                {person.value}
              </span>
              <button type="button" onClick={() => remove(person.id)}>
                Remove
              </button>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={() => {
            clear();
            setPicked([]);
          }}
        >
          Clear all
        </button>
      </div>

      <div>
        <h2>Picked</h2>

        <div>
          <button
            type="button"
            onClick={handlePick}
            disabled={people.length < 1 || picked.length === people.length}
          >
            Pick
          </button>
          <button type="button" onClick={() => setPicked([])}>
            Reset
          </button>
        </div>

        <ul>
          {picked.map(({ id, value }) => (
            <li key={id}>
              <span>{value}</span>
            </li>
          ))}
        </ul>
      </div>
    </React.Fragment>
  );
};
