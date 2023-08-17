import styled from '@emotion/styled';
import mq from '../../constants/mq';

export const ViewContainer = styled.div`
    background-color: white;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    height: 100svh;
    width: 100%;
    flex-direction: column;
`;

export const ContentContainer = styled.div`
    height: 100%;
    padding-top: 0;
    justify-content: center;
    display: flex;
    box-content: content-box;
    align-items: center;
    flex-direction: row;
    object-fit: scale-down;
    @media (max-height: 570px ){
        padding: 60pt 0;
    }
    @media (max-width: ${mq.desktop}){
        flex-direction: column;
    }
`;