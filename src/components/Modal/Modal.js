import React from 'react';

import './Modal.css';

const modal = (props) => {
    const cssClass = ['Modal', props.show ? 'ModalOpen' : 'ModalClosed'];

  return (
    <div className={cssClass}>
      <h1>A Modal</h1>
      <button className='Button' onClick={props.closed}>
        Dismiss
      </button>
    </div>
  );
};

export default modal;
