import styled from 'styled-components';

export const FilterContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    padding: 2rem;
`

export const StyledButton = styled.button`
    background-color: #6D2080;
    color: #ffffff;
    border: none;
    outline: none;
    text-transform: uppercase;
    border-radius: 10px;
    width: 156px;
    height: 36px;
    text-align: center;
`

export const List = styled.ul`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;

    li{
        padding: 3rem;
        list-style: none;

        img{
            width: 316px;
            height: 181px;
        }
    }
`