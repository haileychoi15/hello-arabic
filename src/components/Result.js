import React, {useState} from 'react';
import styled from 'styled-components';

const ResultBlock = styled.div`
  width: 100%;
  margin-bottom: 0.5rem;
`;

const Dt = styled.dt`
  display: inline-block;
  margin-right: 1rem;
  font-weight: 600;
`;

const Dd = styled.dd`
  display: inline-block;
`;

function Result( { results }) {
    const [open, setOpen] = useState(false);
    const decodeHtml = (html) => {
        const element = document.createElement('textarea');
        element.innerHTML = html;
        return element.value;
    }
    return (
        <div>
            {results.map((result, index) => (
                <div key={index} onClick={() => setOpen(prev => !prev)}>
                    <ResultBlock>
                        <dl>
                            <Dt>{decodeHtml(result.solution.vocForm)}</Dt>
                            <Dd>{result.solution.niceGloss}</Dd>
                        </dl>
                    </ResultBlock>
                    {/*<ResultBlock>
                        <span>{result.solution.posNice}</span>
                    </ResultBlock>
                    <ResultBlock>
                        <span>{decodeHtml(result.solution.root)}</span>
                    </ResultBlock>*/}
                </div>
            ))}
        </div>
    );
}

export default Result;