import React, {useCallback, useContext, useState} from 'react';
import {dbService} from 'myFirebase';
import styled from 'styled-components';
import {MdBookmarkBorder, MdBookmark} from 'react-icons/md';
import {UserContext} from 'Context';
import {useDecode} from 'hooks/useDecode';

const Li = styled.li`
  border: 1px solid #404040;
  border-radius: 0.5rem;
  padding: 0.5rem;
  margin-bottom: 0.8rem;
  background-color: #303030;
  @media screen and (min-width: 30rem) {
    transition: all 150ms ease-in-out;
    &:hover {
      border: 1px solid #eee;
    }
    &:hover AddButton {
      display: flex;
    }
  }
`;

const MainResultBlock = styled.div`
  position: relative;
  color: #eee;
`;

const Dl = styled.dl`
  width: 100%;
`;

const Dt = styled.dt`
  display: inline-block;
  margin-right: 0.5rem;
  font-size: 1.1rem;
  @media screen and (min-width: 30rem) {
    font-size: 1.3rem;
  }
`;

const Dd = styled.dd`
  display: inline-block;
  font-size: 0.8rem;
  @media screen and (min-width: 30rem) {
    font-size: 1.1rem;
  }
`;

const AddButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  color: #ffed97;
  @media screen and (min-width: 30rem) {
    display: none;
    font-size: 1.6rem;
    transition: all 150ms ease-in-out;
    color: #848484;
    transition: all 150ms ease-in-out;
    ${Li}:hover & {
      display: flex;
    }
    &:hover {
      color: #ffed97;
    }
  }
  }
`;

const SubResultBlock = styled.div`
  width: 100%;
  font-size: 0.6rem;
  line-height: 1.2rem;
  color: #a8a8a8;
  @media screen and (min-width: 30rem) {
    font-size: 0.8rem;
    line-height: 1.6rem;
  }
`;

const ArabicBlock = styled.span`
  font-size: 0.7rem;
  line-height: 1.5rem;
`;

function ResultDetail ({ result, collectionPath }) {
    const [open, setOpen] = useState(false);
    const [add, setAdd] = useState(false);
    const [dataId, setDataId] = useState('');
    const userObj = useContext(UserContext)[0];
    const [vocForm, root] = useDecode(result.solution.vocForm, result.solution.root);

    const saveResult = useCallback(async () => {
        const date = new Date();
        const { id } = await dbService.collection(collectionPath).add({
            creator: userObj.uid,
            vocForm: result.solution.vocForm,
            niceGloss: result.solution.niceGloss,
            posNice: result.solution.posNice,
            root: result.solution.root,
            date
        });
        if (id) setDataId(id);
    }, [userObj.uid, collectionPath, result]);

    const deleteResult = useCallback( async () => {
        await dbService.doc(`${collectionPath}/${dataId}`).delete();
    }, [dataId, collectionPath]);

    const onAddClick = useCallback(() => {
        add ? deleteResult() : saveResult();
        setAdd(prev => !prev);
    }, [add, deleteResult, saveResult]);

    return (
        <Li>
            <MainResultBlock>
                <Dl open={open} onClick={() => setOpen(prev => !prev)}>
                    <Dt>{vocForm}</Dt>
                    <Dd>{result.solution.niceGloss}</Dd>
                </Dl>
                <AddButton onClick={onAddClick}>
                    {add ? <MdBookmark /> : <MdBookmarkBorder />}
                </AddButton>
            </MainResultBlock>
            <div>
                <SubResultBlock>
                    <span>{result.solution.posNice}</span>
                    <span>, Root <ArabicBlock>{root}</ArabicBlock></span>
                </SubResultBlock>
            </div>
        </Li>
    );
}
export default ResultDetail;