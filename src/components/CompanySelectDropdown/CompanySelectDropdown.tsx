import React from 'react';

interface Company {
  ticker: string;
  name: string;
}

interface CompanySelectDropdownProps {
  value: string;
  companies: Company[];
  onChange: (value: string) => void;
}

export const CompanySelectDropdown: React.FC<CompanySelectDropdownProps> = ({
  value,
  companies,
  onChange,
}) => (
  <select
    className="ml-2 p-1 border rounded text-sm"
    value={value}
    onChange={(e) => onChange(e.target.value)}
  >
    {companies.map((c) => (
      <option key={c.ticker} value={c.ticker}>
        {c.name}
      </option>
    ))}
  </select>
);
