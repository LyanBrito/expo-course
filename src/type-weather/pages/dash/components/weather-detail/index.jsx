import { Container, DescriptionText, DetailContainer, DetailDescrioption, DetailImage, DetailText } from "./styles";
import Term from "../../../../assets/images/term.png"
import Rain from "../../../../assets/images/chuva.png"
import Wind from "../../../../assets/images/vento.png"
import Water from "../../../../assets/images/gota.png"
import Sun from "../../../../assets/images/sol.png"


export default function WeatherDetail() {
    return (
        <Container>
            <DetailContainer>
                <DetailDescrioption>
                    <DetailImage source={Term} />
                    <DetailText>Sensação Térmica</DetailText>
                </DetailDescrioption>
                <DescriptionText>26°c</DescriptionText>
            </DetailContainer>

            <DetailContainer>
                <DetailDescrioption>
                    <DetailImage source={Rain} />
                    <DetailText>Probabilidade de chuva</DetailText>
                </DetailDescrioption>
                <DescriptionText>0%</DescriptionText>
            </DetailContainer>

            <DetailContainer>
                <DetailDescrioption>
                    <DetailImage source={Wind} />
                    <DetailText>Velocidade do vento</DetailText>
                </DetailDescrioption>
                <DescriptionText>8 km/h</DescriptionText>
            </DetailContainer>

            <DetailContainer>
                <DetailDescrioption>
                    <DetailImage source={Water} />
                    <DetailText>Umidade do ar</DetailText>
                </DetailDescrioption>
                <DescriptionText>40%</DescriptionText>
            </DetailContainer>

            <DetailContainer  style={{borderBottomWidth: "0"}} >
                <DetailDescrioption>
                    <DetailImage source={Sun}/>
                    <DetailText>Índice UV</DetailText>
                </DetailDescrioption>
                <DescriptionText>5</DescriptionText>
            </DetailContainer>
        </Container>

    )

}