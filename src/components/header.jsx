import React from 'react';
import { string } from 'prop-types';

export const Header = ({text}) => {
    return (
        <header>
            <h1>This is header!</h1>
        </header>
    );
}

Header.propTypes = {
    text: string.isRequired,
};