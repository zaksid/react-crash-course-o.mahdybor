import React, { useEffect, useRef } from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import Button from './Button';

export default function Toolbar(props) {
    const { sendRequest, cancelRequest } = props;
    const cancelBtnRef = useRef(null);
    const isLoading = useSelector(state => state.users.isLoading, shallowEqual());

    useEffect(() => {
        isLoading && cancelBtnRef.current.focus();
    }, [isLoading]);

    return (
        <div>
            <Button
                className="btn-ok"
                text="Send request"
                onClickHandler={sendRequest} />

            <Button
                className="btn-cancel"
                text="Cancel request"
                ref={cancelBtnRef}
                onClickHandler={cancelRequest} />
        </div>
    );
}
