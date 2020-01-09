import React, { useState } from 'react';
import { AddForm } from '../components/AddForm';
import { useList, Item } from '../hooks/use-list';
import { shuffle } from 'lodash-es';

export const RandomGroup: React.FC = () => {
  const [
    people,
    {
      add: addPerson,
      remove: removePerson,
      clear: clearPeople,
      handlePaste: handlePeoplePaste,
    },
  ] = useList();

  const [
    groups,
    {
      add: addGroup,
      remove: removeGroup,
      clear: clearGroups,
      handlePaste: handleGroupPaste,
    },
  ] = useList();

  const [sorted, setSorted] = useState<Item[][]>([]);

  const handleSort = () => {
    const peopleCopy = shuffle(people);
    const sorted: Item[][] = groups.map(() => []);

    let groupIdx = 0;

    for (const person of peopleCopy) {
      sorted[groupIdx % groups.length].push(person);
      groupIdx++;
    }

    setSorted(sorted);
  };

  return (
    <React.Fragment>
      <div>
        <div>
          <h2>Groups</h2>
          <AddForm
            onSubmit={addGroup}
            label="Group"
            onPaste={handleGroupPaste}
          />
          <ul>
            {groups.map(({ id, value }) => (
              <li key={id}>
                <span>{value}</span>
                <button type="button" onClick={() => removeGroup(id)}>
                  Remove
                </button>
              </li>
            ))}
          </ul>

          <button type="button" onClick={clearGroups}>
            Clear all
          </button>
        </div>

        <div>
          <h2>People</h2>
          <AddForm
            onSubmit={addPerson}
            label="Name"
            onPaste={handlePeoplePaste}
          />
          <ul>
            {people.map(({ id, value }) => (
              <li key={id}>
                <span>{value}</span>
                <button type="button" onClick={() => removePerson(id)}>
                  Remove
                </button>
              </li>
            ))}
          </ul>

          <button type="button" onClick={clearPeople}>
            Clear all
          </button>
        </div>
      </div>

      <div>
        <h2>Sorted</h2>

        <div>
          <button type="button" onClick={handleSort}>
            Sort
          </button>
        </div>

        <ul>
          {groups.map((group, idx) => (
            <li key={group.id}>
              <h3>{group.value}</h3>
              {sorted[idx] && (
                <ol>
                  {sorted[idx].map(person => (
                    <li key={person.id}>{person.value}</li>
                  ))}
                </ol>
              )}
            </li>
          ))}
        </ul>
      </div>
    </React.Fragment>
  );
};
