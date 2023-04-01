import React from 'react';
import './Question.css';

const Question = () => {
    return (
        <div className='question'>
            <div>
                <h3>1. Difference between Props and state ?</h3>
                <p>Answer : 1. 'props' is a special keyword in react, which stands for properties and used to passing data and functionality between react components. Props are immutable.<br />
                2. The state is a build-in react object that is used to contain data or information about the components and that can be changed over time as a result of user interaction or other event.
                </p>
            </div>

             <div>
                <h3>2. How does useState work ?</h3>
                <p>Answer : useState is a react Hook that allows you to add a state variable to your components. It returns an array with two values : one is the current state and another is a function to update it.</p>
             </div>

             <div>
                <h3>3. Purpose of useEffect other than fetching data.</h3>
                <p>Answer : Updating the  document title, Managing event listeners , Managing timers and intervals, Managing state outside of the react components. Overall that can be used for variety purposes. </p>
             </div>

             <div>
                <h3>4. How Does React work ?</h3>
                <p>Answer : During the initial rendering of a React component, react creates a virtual DOM tree. When a components state or props changed , react re-render the components and creates a new virtual DOM tree . By using 'diffs' algorithm, react compares the previous and the new virtual DOM tree and identify the difference . Then updates the actual DOM only where necessary. </p>
             </div>
        </div>
    );
};

export default Question;