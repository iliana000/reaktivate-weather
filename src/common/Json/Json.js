import React from 'react';

const Json = ({data} ) => {
  // console.log('data', data);
  return (
    <pre>{JSON.stringify(data, '', 2) }</pre>
  );
};


export default Json;