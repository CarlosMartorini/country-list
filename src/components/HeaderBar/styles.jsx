import styled from 'styled-components';

export const ContainerBar = styled.div`
    background-color: #ffffff;
    width: 100%;
    padding: 0.7rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    img{
        margin-left: 3rem;
    }

    button{
        margin-right: 3rem;
        padding: 0.3rem 1rem;
        background-color: transparent;
        border: 1px solid #6D2080;
        color: #6D2080;
    }
`