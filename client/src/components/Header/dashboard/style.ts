import styled from 'styled-components';

export const HeaderContainer = styled.header`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 62px;
    position: fixed;
    z-index: 1;
    inset: 9999;
    background-color: rgb(117 222 255);
    background-color:${(props) => props.theme.header.backgroundColor};
    box-shadow: ${(props) => props.theme.header.boxShadow};  
    color: ${(props) => props.theme.header.textColor};

    display: flex;
    justify-content: center;
    align-items: center;
    padding:21px;

    .container{
        width: 100%;
        padding: 2%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
        
    .box_logout{
        display: flex;
        align-items: center;
        gap: 5px;
        .logout{
            font-size: 15px;
        }
    }
    span{
        color: #868E96;
    }

    .box_bnt{
        display: flex;
        align-items: center;
        gap: 10px;
    }

    border: none;
    
    font-size: 70%;

        h2{
            font-size: 22px;
            width: fit-content;
            color: ${(props) => props.theme.header.textColor};
        }
        .svg{
            color: ${(props) => props.theme.header.textColor};

        }

        span{
            width: fit-content;
        }
    margin:  0 auto;



    @media(min-width: 1000px) {
        
        align-items: center;
        .container{
            /* width: 1000px; */

        }
        
    }

`