import React from 'react';
import './LeftSide.css';
import LeftSideTop from './LeftSideTop/LeftSideTop';
import LeftSideSearch from './LeftSideSearch/LeftSideSearch';
import LeftSideBody from './LeftSideBody/LeftSideBody';
import { useParams } from 'react-router-dom';

function LeftSide() {
    const { roomId } = useParams();
    return (
        <div className='leftSide'>
            <LeftSideTop />
            <LeftSideSearch />
            <LeftSideBody />
        </div>
    )
}

export default LeftSide
