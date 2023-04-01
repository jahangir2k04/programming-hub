import React from 'react';
import './ReadTime.css';

const ReadTime = ({times}) => {
    console.log(times);

    let totalTime = 0;
    for(const time of times){
        totalTime = totalTime + time;
    }


    return (
        <div className='read-time'>
            <h2>Time on read : {totalTime} min</h2>
        </div>
    );
};

export default ReadTime;