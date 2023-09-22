import React, { useState, useEffect } from 'react';
import '../components/Timer.css'; // Import the CSS file
import handleUpdateWrong from './guess'

function Timer() {
    const [count, setCount] = useState(10); // Set the initial count
    const [isEnded, setIsEnded] = useState(false); // Add a state to track when the 

    useEffect(() => {
        // Update the count every second
        const intervalId = setInterval(() => {
            setCount((prevCount) => prevCount - 1);
        }, 1000);

        // Clear the interval when the component unmounts or the count reaches 0
        return () => clearInterval(intervalId);
    }, []);

    useEffect(() => {
        if (count === 2) {
            // Perform your function here when the countdown ends
            console.log('Countdown ended');
            ;
            
            
        }
        if(count <0){
            ;
            setIsEnded(true);
        }
    }, [count]); // This effect runs whenever the count changes

    return (
        <div style={{ backgroundColor: isEnded ? 'red' : 'white' }}>
        
            <p className="timer-text" style={{ fontSize: '225px' }}>{count}</p> {/* Add the class to the text */}
        </div>
    );
}

export default Timer;