import React from 'react'
import propTypes from 'prop-types';

import { Link } from 'react-router-dom';

export default function Breadcrumb({List}) {
  return (
    <section class="bg-gray-100 py-8 px-4">
      <div class="container mx-auto">
        <ul class="breadcrumb">
            {List?.map?.((item, index) => {
                const arias = index === List?.length ? { "aria-label": "current-page" } : {};
                return (
                    <li key={item.url}>
                        <Link to={item.url} {...arias}>{item.name}</Link>
                    </li>
                );
            })}
        </ul>
      </div>
    </section>
  )
}
Breadcrumb.propTypes = {
    list: propTypes.array.isRequired,
};
