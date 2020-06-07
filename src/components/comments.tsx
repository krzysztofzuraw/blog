import * as React from 'react';

export const Comments: React.FunctionComponent = () => {
  return (
    <>
      <script defer src="https://cdn.commento.io/js/commento.js" data-auto-init="true" />
      <div id="commento" />
    </>
  );
};
