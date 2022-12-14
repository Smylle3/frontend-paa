import styled from "styled-components";

export const ContainerGeneral = styled.div`
    min-height: 100vh;
    width: 100%;

    background-color: var(--main-background-color);

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 2em;
    box-sizing: border-box;
    padding: 6em 0 2em 0;

    @media (max-width: 930px){
        padding: 7em 0 2em 0;
    }
`

export const HeaderNews = styled.header`
    display: flex;
    gap: .5em;
`

export const HeaderButtons = styled.button`
    display: flex;
    align-items: center;
    justify-content: space-around;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    border: 1px solid transparent;
    box-shadow: 0 0 15px -5px black;
    box-sizing: border-box;
    padding: .5em;
    margin: 0;
    gap: 1em;
    font-size: 2.5em;
    font-weight: 900;
    font-family: 'Times New Roman', Times, serif;
    cursor: pointer;
    transition: .5s all;
    z-index: 999;
    
    @media (max-width: 930px){
        flex-direction: column;
        gap: .5em;
        padding: .2em 0;
        font-size: 2em;
    }
`

export const SearchInput = styled.input`
    border: 1px solid black;
    border-radius: 5px;
    outline: 0 none;
    box-sizing: border-box;
    padding: .5em;
    font-size: .4em;
`