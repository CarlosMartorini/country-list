import styled from 'styled-components';

export const FilterContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    padding: 2rem;

    @media(max-width: 700px){
        flex-direction: column;
        align-items: center;

        input, select, button{
            margin: 1.5rem 0;
        }
    }
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
        align-items: center;

        img{
            width: 316px;
            height: 181px;

            @media(max-width: 700px) {
                width: 260px;
                height: 180px;
            }
        }

        @media(max-width: 700px) {
            padding: 1rem;
            align-items: center;
        }
    }
`