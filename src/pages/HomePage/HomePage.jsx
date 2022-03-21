import React, { useEffect } from 'react';
import { RECORDS_URL } from '../../constants/apiEndpoints';
import makeRequest from '../../utils/makeRequest/makeRequest';
import './HomePage.css';

function HomePage() {
  // const [recordsData, setRecordsData] = useState([]);

  useEffect(() => {
    makeRequest(RECORDS_URL).then((response) => {
      console.log(response);
    });
  }, []);
  return (
    <div>
      <p>My Record Shelf</p>
    </div>
  );
}

export default HomePage;
