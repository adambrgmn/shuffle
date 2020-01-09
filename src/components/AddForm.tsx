import React, { useState } from 'react';

export const AddForm: React.FC<Props> = ({
  label,
  onSubmit,
  ...attributes
}) => {
  const [value, setValue] = useState('');

  return (
    <form
      onSubmit={event => {
        event.preventDefault();
        onSubmit(value);
        setValue('');
      }}
    >
      <label>
        <span>{label}</span>
        <input
          type="text"
          {...attributes}
          value={value}
          onChange={event => {
            setValue(event.currentTarget.value);
            if (attributes.onChange) attributes.onChange(event);
          }}
        />
      </label>
      <button type="submit">Add</button>
      <p>
        <em>Tip:</em> You can paste in a list of values as well, maybe copied
        from an Excel sheet or Word document.
      </p>
    </form>
  );
};

interface Props
  extends Omit<React.HTMLAttributes<HTMLInputElement>, 'onSubmit'> {
  label: React.ReactNode;
  onSubmit(value: string): void;
}
