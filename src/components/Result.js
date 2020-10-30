import React from 'react';
import ResultDetail from 'components/ResultDetail';

function Result( { results, collectionPath }) {
    return (
        <div>
            {results.map((result, index) => (
                <ul key={index}>
                    <ResultDetail result={result}  collectionPath={collectionPath} />
                </ul>
            ))}
        </div>
    );
}

export default Result;