/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import React from 'react';
import { NavLink, useNavigation } from 'react-router-dom';


const Categories = ({category}) => {
    
    return (
        <div>

<div role="tablist" className="tabs tabs-lifted flex flex-col gap-5">
    <NavLink to={``} className={({ isActive }) =>
            `tab text-2xl font-thin ${isActive ? 'tab-active' : ''}`
          }>All</NavLink>
{category.map(category => (
        <NavLink
          key={category.category}
          to={`/category/${category.category}`}
          role='tab'
          className={({ isActive }) =>
            `tab text-2xl font-thin ${isActive ? 'tab-active' : ''}`
          }
        >
          {category.category}
        </NavLink>
      ))}


  {/* <a role="tab" className="tab">Tab 1</a>
  <a role="tab" className="tab tab-active">Tab 2</a>
  <a role="tab" className="tab">Tab 3</a> */}
</div>
            
        </div>
    );
};

export default Categories;