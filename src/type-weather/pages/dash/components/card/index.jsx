import { Container, ContainerTitle, Description, Title, WeatherContainer, WeatherDescription, WeatherImg, WeatherRange, WeatherTitle, WeatherWrapper } from "./styles";
import CardBackground from "../../../../assets/images/card-background.png";
import Moon from "../../../../assets/images/moon.png";

export default function Card() {
    return (

        <Container source={CardBackground} imageStyle={{borderColor: "#16161F", borderWidth: "12", borderRadius: "8", }}>
            <ContainerTitle>
                <Title>Porto Alegre, RS</Title>
                <Description>Segunda-feira, 15 de maio de 2023</Description>
            </ContainerTitle>
            <WeatherWrapper>
                <WeatherContainer>
                    <WeatherTitle>28°C</WeatherTitle>
                    <WeatherRange>26°C/35°C</WeatherRange>
                    <WeatherDescription>Poucas Nuvens</WeatherDescription>
                </WeatherContainer>
                <WeatherImg source={Moon}></WeatherImg>
            </WeatherWrapper>
        </Container>

    )

}