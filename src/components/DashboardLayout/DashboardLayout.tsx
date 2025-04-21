import React, { useEffect, useState } from 'react';
import { Mosaic } from 'react-mosaic-component';
import { useSelector } from 'react-redux';
import { getCompanies } from '../../store/selectors';
import { DashboardWidget } from '../DashboardWidget/DashboardWidget';

const DEFAULT_WIDGET_IDS = ['widget-1', 'widget-2', 'widget-3'];

const generateInitialLayout = (ids: string[]) => ({
  direction: 'row' as const,
  first: ids[0],
  second: {
    direction: 'column' as const,
    first: ids[1],
    second: ids[2],
  },
});

export const DashboardLayout: React.FC = () => {
  const companies = useSelector(getCompanies);
  const [selectedCompanies, setSelectedCompanies] = useState<Record<string, string> | null>(null);

  useEffect(() => {
    if (companies.length >= 3) {
      setSelectedCompanies({
        'widget-1': companies[0].ticker,
        'widget-2': companies[1].ticker,
        'widget-3': companies[2].ticker,
      });
    }
  }, [companies]);

  const handleSelectChange = (widgetId: string, newTicker: string) => {
    setSelectedCompanies((prev) => ({ ...(prev || {}), [widgetId]: newTicker }));
  };

  if (!selectedCompanies) {
    return <div className="p-4">Loading companies...</div>;
  }

  return (
    <div className="h-screen p-2 bg-gray-100">
      <Mosaic<string>
        renderTile={(id, path) => {
          const ticker = selectedCompanies[id];
          return (
            <DashboardWidget
              id={id}
              path={path}
              ticker={ticker}
              companies={companies}
              onSelectChange={handleSelectChange}
            />
          );
        }}
        initialValue={generateInitialLayout(DEFAULT_WIDGET_IDS)}
      />
    </div>
  );
};
