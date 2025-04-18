import React, { useEffect } from 'react';
import './App.css';
import { useDispatch } from 'react-redux';
import { fetchCompanies } from './api/api';
import { Company } from './react-app-env';
import { setCompanies } from './store';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const getDataFromServer = async () => {
      try {
        const response = await fetchCompanies();

        const data: Company[] = await response;
        dispatch(setCompanies(data));
      } catch (error) {
        alert('Error try again');
      }
    };

    getDataFromServer();
  }, [dispatch]);
  
  return (
    <div className="App">
    </div>
  );
}

export default App;
