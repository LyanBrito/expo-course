import styled from "styled-components/native";

export const Container = styled.View`
    display: flex;  
    flex-direction: row;
    width: 359px;
    height: 176px;
    background-color: #16161F;
    border-radius: 8px;

`
export const DayContainer = styled.View`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 4px;
    height: 152px;
    width: 67px;

`
export const DayText = styled.Text`
    font-size: 14px;
    font-weight: 700;
    color: #BFBFD4;
`
export const DayImage = styled.Image`
    width:56px;
    height: 56px;
`


export const TempContainer = styled.View`
    display: flex;
    flex-direction: column;

`
export const MaxTempText = styled.Text`
    font-size: 14px;
    font-weight: 700;
    color: #FAFAFA;
`
export const MinTempText = styled.Text`
    font-size: 14px;
    font-weight: 700;
    color: #7F7F98;
`
