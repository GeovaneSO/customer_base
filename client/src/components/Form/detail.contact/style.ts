import styled from 'styled-components';

export const ContainerModal = styled.div`
         position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;

    z-index: 1;
    inset: 0;
    width: 100%;
    min-height: 100%;
    background: rgba(18, 18, 20, 0.5);

    .box_title{
        display: flex;

        justify-content: space-between;

        width: 100%;
        position: relative;
        top: -20px;

    }

    .form{
        height: 50%;
        padding: 20px;
    }
`

export const BoxButtons = styled.div`
    display: flex;

    width: 100%;

    .button_update{
        width: 100%;
        height: 70%;
    }
    .delete_btn{
        background-color: red;
        height: 70%;
    }
`