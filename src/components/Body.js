import React from 'react';
import PT from 'prop-types';

const Body = ({ content, bodyClass = ''}) => {
  const bodyContent = content.map((row, index) => {
    let rowContent = [];
    for(const key in row) {
      rowContent.push({ key: key, value: row[key] });
    }
    return (
      <tr key={index} className={`_${rowContent[0].value}`}>
        {rowContent.map((data, index) => 
          <td key={index} className={data.key}>
            {data.value}
          </td>
        )}
      </tr> 
    )
  })

  return (
    <tbody className={bodyClass}>
      {bodyContent}
    </tbody>
  );
}

Body.propTypes = {
    content: PT.arrayOf(PT.object).isRequired,
    bodyClass: PT.string,
};

export default Body;