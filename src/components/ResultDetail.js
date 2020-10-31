import React, {useContext, useState} from 'react';
import {dbService} from "myFirebase";
import styled from 'styled-components';
import {MdBookmarkBorder, MdBookmark} from 'react-icons/md';
import {UserContext} from 'Context';

const Li = styled.li`
  border: 1px solid #404040;
  border-radius: 0.5rem;
  padding: 0.5rem;
  margin-bottom: 0.8rem;
  background-color: #303030;
`;

const MainResultBlock = styled.div`
  position: relative;
  color: #eee;
`;

const Dl = styled.dl`
  width: 100%;
`;

const Dt = styled.dt`
  //font-family: 'Tajawal', sans-serif;
  display: inline-block;
  margin-right: 0.5rem;
  font-size: 1.1rem;
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
  color: #ffed97;
`;

const SubResultBlock = styled.div`
  width: 100%;
  font-size: 0.6rem;
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

    console.log('result.id : ',result.id);

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
            <div>
                <SubResultBlock>
                    <span>{result.solution.posNice}</span>
                    <span>, Root {decodeHtml(result.solution.root)}</span>
                </SubResultBlock>
            </div>
        </Li>
    );
}
export default ResultDetail;