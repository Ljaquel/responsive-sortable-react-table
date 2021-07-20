import React from 'react';
import PT from 'prop-types';

const Mobile = (props) => {
  const { content, headers, bodyClass = ''} = props
  return ( 
    content.map((row, index) => {
      let rowContent = [];
      for(const key in row) {
        rowContent.push({ key: key, value: row[key] });
      }
      return (
        <tbody className={bodyClass} key={index}>
          {rowContent.map((data, i) => 
            <tr key={i} className={`_${rowContent[0].value}`}>
              {headers && (
                <th className={data.key}>
                  {headers[data.key]}
                </th>
              )}
              <td className={data.key}>
                {data.value}
              </td>
            </tr>
          )}
        </tbody>
      )
    })
  )
}

Mobile.propTypes = {
  content: PT.arrayOf(PT.object).isRequired,
  headers: PT.object,
  bodyClass: PT.string,
};

export default Mobile;