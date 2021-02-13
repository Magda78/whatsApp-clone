import React from 'react';
import LeftSideTop from './LeftSideTop/LeftSideTop';
import LeftSideSearch from './LeftSideSearch/LeftSideSearch';
import LeftSideBody from './LeftSideBody/LeftSideBody';

function LeftSide() {
    return (
        <div className='leftSide'>
            <LeftSideTop />
            <LeftSideSearch />
            <LeftSideBody />
        </div>
    )
}

export default LeftSide
