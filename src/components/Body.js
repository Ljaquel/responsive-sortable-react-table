import React from 'react';
import PT from 'prop-types';
import { Tr, Td } from './index';

const Body = ({ content, bodyClass = ''}) => {
  const bodyContent = content.map((row, index) => {
    let rowContent = [];
    for(const key in row) {
      rowContent.push({ key: key, value: row[key] });
    }
    return (
      <Tr key={index} className={`_${rowContent[0].value}`}>
        {rowContent.map((data, index) => 
          <Td key={index} className={data.key}>
            {data.value}
          </Td>
        )}
      </Tr> 
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