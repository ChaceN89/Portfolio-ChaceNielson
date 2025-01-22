/**
 * @file DisplayList.js
 * @module DisplayList
 * @desc Displays a list of items with a title. The list is shown only if it contains items.
 * 
 * @requires react
 * 
 * @example
 * // Example usage of DisplayList in a component
 * import DisplayList from './DisplayList';
 * 
 * function App() {
 *   const achievements = ['Achievement 1', 'Achievement 2', 'Achievement 3'];
 * 
 *   return <DisplayList title="Achievements" list={achievements} />;
 * }
 * 
 * @exports DisplayList
 * 
 * @author Chace Nielson
 * @created 2024-07-30
 * @updated 2024-07-30
 * @since 2.1
 */

import React from 'react';

function DisplayList({ title, list }) {
  return (
    <div>
      {list && list.length > 0 && (
        <div className='mt-4'>
          <h3 className='text-lg font-semibold text-primary'>{title}</h3>
          <ul className='text-base list-disc list-inside'>
            {list.map((listItem, index) => (
              <li key={index} className='text-primary font-darken'>{listItem}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default DisplayList;
