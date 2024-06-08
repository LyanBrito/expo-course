import { Container, DayContainer, DayImage, DayText, MaxTempText, MinTempText, TempContainer } from "./styles";
import Stormy from "../../../../assets/images/Stormy.png"
import Cloundy from "../../../../assets/images/Cloundy.png"
import Raing from "../../../../assets/images/Raing.png"
import Sunset from "../../../../assets/images/Sunset.png"
import Sunny from "../../../../assets/images/Sunny.png"

export default function NextDays () {
    return (
        <Container>
            <DayContainer>
                <DayText>Ter</DayText>
                <DayImage source={Stormy}/>
            <TempContainer>
                <MaxTempText>32°c</MaxTempText>
                <MinTempText>24°c</MinTempText>
            </TempContainer>
            </DayContainer>
            <DayContainer>
                <DayText>Quar</DayText>
                <DayImage source={Cloundy}/>
            <TempContainer>
                <MaxTempText>32°c</MaxTempText>
                <MinTempText>24°c</MinTempText>
            </TempContainer>
            </DayContainer>
            <DayContainer>
                <DayText>Qui</DayText>
                <DayImage source={Raing}/>
            <TempContainer>
                <MaxTempText>32°c</MaxTempText>
                <MinTempText>24°c</MinTempText>
            </TempContainer>
            </DayContainer>
            <DayContainer>
                <DayText>Sex</DayText>
                <DayImage source={Sunset}/>
            <TempContainer>
                <MaxTempText>32°c</MaxTempText>
                <MinTempText>24°c</MinTempText>
            </TempContainer>
            </DayContainer>
            <DayContainer>
                <DayText>Sáb</DayText>
                <DayImage source={Sunny}/>
            <TempContainer>
                <MaxTempText>32°c</MaxTempText>
                <MinTempText>24°c</MinTempText>
            </TempContainer>
            </DayContainer>


        </Container>

    )

}