import React from 'react';
import AltContainer from 'alt-container'; 
import alt from '../../libs/alt';
import setup from './setup';
setup(alt);
export default ({ children }) =>
    //set alt lib as app context
    <AltContainer flux={alt}>
        {children}
    </AltContainer>