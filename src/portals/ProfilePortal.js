import React from 'react';
import ReactDOM from 'react-dom';

export default function ProfilePortal(props) {
    return ReactDOM.createPortal(props.children, document.getElementById('result-portal'));
}
