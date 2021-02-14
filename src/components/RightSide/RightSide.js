import React from 'react';
import './RightSide.css';
import RightSideTop from './RightSideTop/RightSideTop';
import RightSideBottom from './RightSideBottom/RightSideBottom';
import RightSideContent from './RightSideContent/RightSideContent';

function RightSide() {
    return (
        <div className='rightSide'>
           <RightSideTop />
           <RightSideContent />
           <RightSideBottom />
        </div>
    )
}

export default RightSide
