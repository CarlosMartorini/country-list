import styled from 'styled-components';

export const CardCountry = styled.div`
    display: flex;
    flex-direction: row;

    img{
        padding: 2.5rem 3rem 5rem 10rem;
        width: 443px;
        height: 258px;
    }

    h5{
        font-family: 'Montserrat', sans-serif;
        color: #454545;
        font-size: 18px;
    }

    @media(max-width: 700px) {

        width: 100%;
        flex-direction: column;
        align-items: center;

        img{
            padding: 0;
            width: 260px;
            height: 180px;
        }

        h5{
            text-align: center;
            font-size: 16px;
        }
    }
`