import React from 'react';
import '../body.scss';

function PrevArrow(props)
{
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block" }}
            onClick={onClick}
        />
    );
}

export default PrevArrow;