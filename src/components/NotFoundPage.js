import React from 'react';
import {Helmet} from 'react-helmet'

function NotFoundPage(){
  return (
    <div>
      <Helmet>
        <title>Page not fount</title>
      </Helmet>
      <h1>Page not found</h1>
    </div>
  );
}

export default NotFoundPage;
