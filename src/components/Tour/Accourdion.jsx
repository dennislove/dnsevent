import React, { useState } from 'react';

const Accourdion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? -1 : index);
  };

  return (
    <div className="w-full flex flex-col">
      {items.map((item, index) => (
        <div key={index} className="mb-4">
          <button
            className={`w-full p-4 text-left text-xl font-medium rounded-t-lg transition duration-500 ease-out ${
              activeIndex === index ? 'bg-gray-200' : 'bg-gray-100'
            }`}
            onClick={() => handleClick(index)}
          >
            {item.title}
            <span className="float-right">
              {activeIndex === index ? '-' : '+'}
            </span>
          </button>
          {activeIndex === index && (
            <div className="p-4 rounded-b-lg bg-white shadow-md ">
             <img src={item.content} alt="" /> 
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accourdion;
