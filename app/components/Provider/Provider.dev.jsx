import React from 'react';
import AltContainer from 'alt-container'; 
import alt from '../../libs/alt';
import setup from './setup';
import chromeDebug from 'alt-utils/lib/chromeDebug';

setup(alt);

chromeDebug(alt);

React.Perf = require('react-addons-perf');

export default ({ children }) =>
    //set alt lib as app context
    <AltContainer flux={alt}>
        {children}
    </AltContainer>