import React from 'react';

export default function LabeledValue(props) {
    const { label, testId, value } = props;

    return (
        <div className="labeled-value">
            <span className="label">{label}</span>
            <span className="value" data-testid={testId}>{value}</span>
        </div>
    );
}
