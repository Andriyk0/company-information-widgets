import { Company } from "../react-app-env";

export const fetchCompanies = async (): Promise<Company[]> => {
    const response = await fetch('/fake_api_json/companies-lookup.json');
    if (!response.ok) {
      throw new Error('Failed to fetch companies');
    }
    return response.json();
};