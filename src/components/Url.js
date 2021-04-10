import React from 'react';

function Url(props) {
  return (
    <button className="mb-2 flex flex-row items-center bg-sky p-2 rounded-lg text-bone hover:bg-sky-darker transition">
      <a className="h-4 w-4" href={props.url} target="_blank" rel="noreferrer">
        {props.children}
      </a>
    </button>
  );
}

export default Url;
