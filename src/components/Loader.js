import React from 'react';
import { ReactComponent as CatLoader } from '../svg/catLoader.svg';

export default function Loader() {
    return (
        <div className="loader">
            <CatLoader />
        </div>
    );
}
