import React from 'react';

function About() {
    return (
        <React.Fragment>
            <div style={aboutStyle}>
                <h1>About</h1>
                <p>This is the TodoList app v1.0.1. It is part of a <a href="https://www.youtube.com/watch?v=sBws8MSXN7A&t=3362s">React Crash Course</a></p>
                <p>The app has the capability of http request but they have been disabled.</p>
                <br/>
            </div>
        </React.Fragment>
    )
}

const aboutStyle = {
    textAlign: 'center',
    margin: ' 10px'
}

export default About;
