import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Container = styled(motion.div)<{ active?: boolean }>`
     position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;

    z-index: 9999;
    inset: 0;
    width: 100%;
    min-height: 100%;
    background: rgba(18, 18, 20, 0.3);

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