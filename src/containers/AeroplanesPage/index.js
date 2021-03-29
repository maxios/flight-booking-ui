import React from 'react';
import { useDispatch } from 'react-redux';
import CRUDTable from '@/containers/CRUDTable';
import { getAeroplanes } from '@/api';

const AeroplanesPage = () => {
  const dispatch = useDispatch();
  const [data, setData] = React.useState([]);
  const handleFetch = (payload) => {
    return getAeroplanes(payload)
      .then(res => res.data)
      .then(setData)
      .catch(console.log)
  }

  return (
    <div>
      <CRUDTable data={data} fetch={handleFetch}/>
    </div>
  )
}

export default AeroplanesPage;
