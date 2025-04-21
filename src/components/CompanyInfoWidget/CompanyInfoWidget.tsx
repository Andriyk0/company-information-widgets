import React from 'react';
import { useSelector } from 'react-redux';
import { getCompanies } from '../../store/selectors';

interface CompanyInfoWidgetProps {
  selectedTicker: string;
}

export const CompanyInfoWidget: React.FC<CompanyInfoWidgetProps> = ({
  selectedTicker,
}) => {
  const companies = useSelector(getCompanies);
  const selectedCompany = companies.find((c) => c.ticker === selectedTicker);

  return (
    <div className="p-4 bg-white rounded-lg shadow-md h-full overflow-auto">
      {selectedCompany ? (
        <>
          <div className="flex mb-3 space-x-2">
            <b>ticker</b>
            <p className="text-gray-700">{selectedCompany.ticker}</p>
          </div>
          <div className="flex mb-3 space-x-2">
            <b>Name:</b>
            <p className="text-gray-700">{selectedCompany.name}</p>
          </div>
          <div className="flex mb-3 space-x-2">
            <b>Legal name:</b>
            <p className="text-gray-700">{selectedCompany.legal_name}</p>
          </div>
          <div className="flex mb-3 space-x-2">
            <b>Stock exchange:</b>
            <p className="text-gray-700">{selectedCompany.stock_exchange}</p>
          </div>
          <div className="flex mb-3 space-x-2">
            <b>Short description:</b>
            <p className="text-gray-700">{selectedCompany.short_description}</p>
          </div>
          <div className="flex mb-3 space-x-2">
            <b>Long description:</b>
            <p className="text-gray-700">{selectedCompany.long_description}</p>
          </div>
          <div className="flex mb-3 space-x-2">
            <b>Web:</b>
            <p className="text-gray-700">{selectedCompany.company_url}</p>
          </div>
          <div className="flex mb-3 space-x-2">
            <b>Business address:</b>
            <p className="text-gray-700">{selectedCompany.business_address}</p>
          </div>
          <div className="flex mb-3 space-x-2">
            <b>Business phone:</b>
            <p className="text-gray-700">{selectedCompany.business_phone_no}</p>
          </div>
          { selectedCompany.entity_legal_form ? (
            <div className="flex mb-3 space-x-2">
              <b>Entity legal form:</b>
              <p className="text-gray-700">{selectedCompany.entity_legal_form}</p>
            </div>
          ) : ('')}
          <div className="flex mb-3 space-x-2">
            <b>Latest filling date:</b>
            <p className="text-gray-700">{selectedCompany.latest_filing_date}</p>
          </div>
          <div className="flex mb-3 space-x-2">
            <b>Inc country:</b>
            <p className="text-gray-700">{selectedCompany.inc_country}</p>
          </div>
          <div className="flex mb-3 space-x-2">
            <b>Employees:</b>
            <p className="text-gray-700">{selectedCompany.employees}</p>
          </div>
          <div className="flex mb-3 space-x-2">
            <b>Sector:</b>
            <p className="text-gray-700">{selectedCompany.sector}</p>
          </div>
          <div className="flex mb-3 space-x-2">
            <b>Industry category:</b>
            <p className="text-gray-700">{selectedCompany.industry_category}</p>
          </div>
          <div className="flex mb-3 space-x-2">
            <b>Industry group:</b>
            <p className="text-gray-700">{selectedCompany.industry_group}</p>
          </div>
          <div className="flex mb-3 space-x-2">
            <b>Thea enabled true legacy sector:</b>
            <p className="text-gray-700">{selectedCompany.legacy_sector}</p>
          </div>
          <div className="flex mb-3 space-x-2">
            <b>Legacy industry category:</b>
            <p className="text-gray-700">{selectedCompany.legacy_industry_category}</p>
          </div>
          <div className="flex mb-3 space-x-2">
            <b>Legacy industry group:</b>
            <p className="text-gray-700">{selectedCompany.legacy_industry_group}</p>
          </div>
        </>
      ) : (
        <p>No company selected</p>
      )}
    </div>
  );
};