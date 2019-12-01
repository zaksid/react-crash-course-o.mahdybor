import React, { useRef } from 'react';
import Button from './Button';

export default function Toolbar(props) {
    const { sendRequest, cancelRequest } = props;
    const cancelBtnRef = useRef();

    return (
        <div>
            <Button
                className="btn-ok"
                text="Send request"
                onClickHandler={sendRequest.bind({ cancelBtnRef: cancelBtnRef })} />

            <Button
                className="btn-cancel"
                text="Cancel request"
                rf={cancelBtnRef}
                onClickHandler={cancelRequest} />
        </div>
    );
}
