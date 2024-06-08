import styled from "styled-components/native";

export const Container = styled.View`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 359px;
    height: 292px;
    background-color: #16161F;
    border-radius: 8px;
    
`

export const DetailContainer = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-style: solid;
    border-bottom-color: #1C1C27;
    border-bottom-width: 1px;
    width: 327px;
    height: 56px;

`
export const DetailDescrioption = styled.View`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    gap: 12px;


`
export const DetailImage = styled.Image`
    width: 24px;
    height: 24px;

`
export const DetailText = styled.Text`
    color: #BFBFD4;
    font-size: 14px;
    font-weight: 700;
`
export const DescriptionText = styled.Text`
    color: #BFBFD4;
    font-size: 16px;
    font-weight: 700;
`