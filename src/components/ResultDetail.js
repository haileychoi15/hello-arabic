import React, {useContext, useState} from 'react';
import {dbService} from "myFirebase";
import styled, { css } from 'styled-components';
import {MdBookmarkBorder, MdBookmark} from 'react-icons/md';
import {UserContext} from "../Context";

const Li = styled.li`
  margin-bottom: 1rem;
`;

const MainResultBlock = styled.div`
  position: relative;
`;

const Dl = styled.dl`
  width: 100%;
  ${props => props.open && css`
     margin-bottom: 0.5rem;
  `}
`;

const Dt = styled.dt`
  display: inline-block;
  margin-right: 1rem;
  font-size: 0.8rem;
  font-weight: 600;
`;

const Dd = styled.dd`
  display: inline-block;
  font-size: 0.8rem;
`;

const AddButton = styled.button`
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
`;

const SubResultBlock = styled.div`
  width: 100%;
  font-size: 0.8rem;
  line-height: 1.2rem;
  color: #a8a8a8;
`;

function ResultDetail ({ result, collectionPath }) {
    const [open, setOpen] = useState(false);
    const [add, setAdd] = useState(false);
    const userObj = useContext(UserContext)[0];

    const decodeHtml = (html) => {
        const element = document.createElement('textarea');
        element.innerHTML = html;
        return element.value;
    }

    const saveResult = async () => {
        const date = new Date();
        await dbService.collection(collectionPath).add({
            creator: userObj.uid,
            vocForm: result.solution.vocForm,
            niceGloss: result.solution.niceGloss,
            posNice: result.solution.posNice,
            root: result.solution.root,
            date
        });
    }

    const deleteResult = async () => {
        await dbService.doc(`${collectionPath}/${result.id}`).delete();
    }

    const onAddClick = () => {

        if (add) deleteResult();
        else saveResult();

        setAdd(prev => !prev);
    }
    return (
        <Li>
            <MainResultBlock>
                <Dl open={open} onClick={() => setOpen(prev => !prev)}>
                    <Dt>{decodeHtml(result.solution.vocForm)}</Dt>
                    <Dd>{result.solution.niceGloss}</Dd>
                </Dl>
                <AddButton onClick={onAddClick}>
                    {add ? <MdBookmark /> : <MdBookmarkBorder />}
                </AddButton>
            </MainResultBlock>
            {open &&
            <div>
                <SubResultBlock>
                    <span>Feature : </span>
                    <span>{result.solution.posNice}</span>
                </SubResultBlock>
                <SubResultBlock>
                    <span>Root : </span>
                    <span>{decodeHtml(result.solution.root)}</span>
                </SubResultBlock>
            </div>
            }
        </Li>
    );
}
export default ResultDetail;