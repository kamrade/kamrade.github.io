import React, {useState, useEffect} from 'react';
const axios = require('axios').default;

export default function Wheelson() {

  const [rowData, setRowData] = useState<any>([]);

  interface getDataParams {
    sortField: 'string'
  }



  useEffect(() => {
    const getData = (params?: getDataParams) => {
      let requestUrl = 'http://localhost:4001/api/wheelson?';
      if (params) {
        requestUrl += params.sortField ? `sort=${params.sortField}` : '';
      }
      return axios.get(requestUrl)
    }

    getData()
      .then((result: any) => setRowData(result.data));
  }, []);

  return (
    <div className="page">

      <header className="pt-5 pb-3" />

      <div className="container">
        <h1 className='mb-3 page-title'>Wheelson Datagrid</h1>

        {rowData && rowData.map((item: any, i: number) => {
          return (
              <div key={i}>
                {item && item.company}
              </div>
          )
        })}

      </div>
    </div>
  )
}
