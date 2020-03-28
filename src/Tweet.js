import React from 'react';

function  Tweet({name,message,likes}) {
    return (
        <div className="tweet">
            <h1>{name}</h1>
            <p>{message}</p>
            <h1>{likes}</h1>
        </div>
    );
}

export default Tweet;