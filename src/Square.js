import React from 'react';

const Square = ({ colorvalue, hexvalue, isDarkText }) => {
    return (
        <section
            className="square"
            style={{
                backgroundColor: colorvalue,
                color: isDarkText ? '#000' : '#FFF'

            }}
        >
            <p>{colorvalue ? colorvalue : "Empty Value"}</p>
            <p>{hexvalue ? hexvalue : null}</p>
        </section>
    );
};

Square.defaultProps = {
    colorvalue: "Empty Color Value"
};

export default Square;