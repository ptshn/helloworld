import styled from 'styled-components';

export const SetListParent = styled.div`
    display: flex;
    flex-direction: row;
    align-items: stretch;
    width: 60%;
    margin-top: 10px;
    /* border: 1px solid; */
`;

export const SetList = styled.div`
    /* width: 500px;
    height: 90vh;
    display: flex;
    flex-direction: column;
    border: 1px solid #E4E4E4;
    border-radius: 10px;
    margin-top: 10px;
    flex-wrap: wrap;
    margin-bottom: 5px; */
    flex: 1;
    font-size: 12px;
`;

export const PTag = styled.p`
    cursor: pointer;
    margin: 0;
    border: 1px solid red;
`;

export const ResultPill = styled.div`
    background-color: #ddd;
    border: none;
    color: black;
    padding: 5px 5px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    margin: 4px 2px;
    cursor: pointer;
    border-radius: 16px;
`;