import React from "react";

interface Option {
  value: string;
  label: string;
}

interface SearchComponentProps {
  options: Option[];
  name: string;
  handleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const SearchComponet: React.FC<SearchComponentProps> = ({
  options,
  name,
  handleChange,
}) => {
  return (
    <div className="bg-white w-44">
      <select
        name={name}
        onChange={handleChange}
        className="w-full border border-gray-300 rounded px-2 py-1 h-10"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};
