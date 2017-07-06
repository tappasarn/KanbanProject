import React from 'react';

// leave the implementation of Note to the mother component
export default ({ children, ...props }) => (
    <div {...props}>
        {children}
    </div>
);


