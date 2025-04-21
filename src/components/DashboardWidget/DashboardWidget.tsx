import React from 'react';
import { MosaicBranch, MosaicWindow } from 'react-mosaic-component';
import { CompanySelectDropdown } from '../CompanySelectDropdown/CompanySelectDropdown';
import { CompanyInfoWidget } from '../CompanyInfoWidget/CompanyInfoWidget';

interface Company {
  ticker: string;
  name: string;
}

interface DashboardWidgetProps {
  id: string;
  path: MosaicBranch[];
  ticker: string;
  companies: Company[];
  onSelectChange: (widgetId: string, newTicker: string) => void;
}

export const DashboardWidget: React.FC<DashboardWidgetProps> = ({
  id,
  path,
  ticker,
  companies,
  onSelectChange,
}) => (
  <MosaicWindow<string>
    title="Company info"
    path={path}
    className="mosaic-window-controls"
    toolbarControls={[
      <CompanySelectDropdown
        key="company-select"
        value={ticker}
        companies={companies}
        onChange={(newValue) => onSelectChange(id, newValue)}
      />,
    ]}
  >
    <CompanyInfoWidget selectedTicker={ticker} />
  </MosaicWindow>
);
