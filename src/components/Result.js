import React from 'react';

function Result( { results }) {
    const decodeHtml = (html) => {
        const element = document.createElement('textarea');
        element.innerHTML = html;
        return element.value;
    }
    return (
        <div>
            {results.map((result, index) => (
                <div key={index}>
                    <span>{decodeHtml(result.solution.form)}</span>&nbsp;
                    <span>{decodeHtml(result.solution.vocForm)}</span>&nbsp;
                    <span>{decodeHtml(result.solution.root)}</span>&nbsp;
                    <span>{result.solution.niceGloss}</span>&nbsp;
                    <span>{result.solution.posNice}</span>&nbsp;
                </div>
            ))}
        </div>
    );
}

export default Result;