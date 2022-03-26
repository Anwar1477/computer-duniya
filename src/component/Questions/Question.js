import React from 'react';
import './Question.css'

const Question = () => {
    return (
        <div className='container'>
            <div>
                <h3 className='question'>Question1: How React Works?</h3>

                <p className='answer'>Answer:</p>
                <p>ReactJS is simply a JavaScript library for building user interfaces in a predictable and efficient way using declarative code. You can use it to help build single page applications and mobile apps, or to build complex apps if you utilise it with other libraries. In react how the data flow has clearly defined rules. React apps have a structure. Each piece of code that performs on its own is constrained inside a component. These components work in isolation but communicate with each other to make the web application work. React basically maintains a tree. This tree is able to do efficient diff computations on the nodes. I think of your HTML code as a tree. In fact, that is exactly how the browser treats your DOM (your rendered HTML on the browser). React allows you to effectively re-construct your DOM in JavaScript and push only those changes to the DOM which have actually occurred.</p>


            </div>
            <div>
                <h3 className='question'>Question2: Write a difference between State and Props</h3>

                <p className='answer'>Answer:</p>
                <h4>State </h4>
                <p>The state is an updatable structure that is used to contain data or information about the component and can change over time. The change in state can happen as a response to user action or system event. It is the heart of the react component which determines the behavior of the component and how it will render. A state must be kept as simple as possible.</p>

                <h4>Props</h4>
                <p>Props are read-only components. It is an object which stores the value of attributes of a tag and work similar to the HTML attributes. It allows passing data from one component to other components. It is similar to function arguments and can be passed to the component the same way as arguments passed in a function. Props are immutable so we cannot modify the props from inside the component.</p>


            </div>

        </div>
    );
};

export default Question;