import styled from 'styled-components';

export const PageUl = styled.ul`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;

    li{
        list-style: none;
        width: 34px;
        height: 34px;
        text-align: center;
        margin: 0.5rem;
        background: #FFFFFF;
        box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.25);
        border-radius: 2px;

        a{
            text-decoration: none;
            text-decoration-line: none;
            color: #8D8D8D;
        }
    }
`