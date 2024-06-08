import styled from "styled-components/native";

export const Container = styled.ImageBackground`
    display: flex;
    flex-direction: column;
    width: 335px;
    height: 328px;
    justify-content: space-around;

   /* aqui, eu tentei resolver o problema com borda ao invés de criar uma nova  View, quebpru mas da pra arrumar de boa */
`
export const ContainerTitle = styled.View`
    padding: 30px;
`

export const Title = styled.Text`
    font-size: 20px;
    font-weight: 700;
    color: white;
`
export const Description = styled.Text`
    font-size: 16px;
    font-weight: 400;
    color: white;
`
export const WeatherContainer = styled.View`
    display: flex;
    flex-direction: column;
    padding-left: 26px;
    padding-bottom: 26px;
`
    
export const WeatherTitle = styled.Text`
    font-size: 48px;
    font-weight: 800;
    color: white;
`

export const WeatherRange = styled.Text`
    font-size: 16px;
    font-weight: 700;
    color: white;
`

export const WeatherDescription = styled.Text`
    font-size: 14px;
    font-weight: 400;
    color: white;
`
export const WeatherWrapper = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`
export const WeatherImg = styled.Image`
    width: 160px;
    height: 160px;
`