
import styled from 'styled-components';
import {BiX} from 'react-icons/bi';

export const Container = styled.div`
    height: 200px;
    margin: auto;
`;

export const InputWrapper = styled.section`
    border: 1px solid black;
    border-radius: 15px;
    width: 70%;
    padding: 10px;
    display: flex;
    margin:10px auto;
    flex-wrap: wrap;
`;

export const StyledInput = styled.input`
    border: 1px solid black;
    height: 24px;
    border-radius: 15px;
    padding: 5px;
`;

export const ResultListWrapper = styled.div`
    width: 70%;
    border-radius: 15px;
    margin: 0px auto;
    padding: 10px;
    border: 1px solid black;
`;

export const StyledList = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
`;

export const StyledListItem = styled.li`
    padding: 5px;
    &:hover {
        background: #808080a6;
        border: 1px solid #808080a6;
        border-radius: 15px;
    }
`;

export const StyledLabel = styled.label`
    background: #6fa7e1;
    border: 1px solid black;
    border-radius: 20px;
    margin: 3px;
    padding: 5px;
    display: flex;
`;

export const PillWrapper = styled.span`
    display:flex;
`;

export const StyledClose = styled(BiX)`
    width: 19px;
    height: 19px;
    margin: auto 2px
`;