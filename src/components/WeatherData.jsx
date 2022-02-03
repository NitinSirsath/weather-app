import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const WeatherIcon = styled.div`
    display: flex;
    justify-content: space-around;
`
const TempBox = styled.div`
    margin-top: 30px;
`

const Temp = styled.h3`
    text-align: center;
    font-weight: 500;
`
const  CountryBox =styled.div`
    margin: 10px;
    margin-bottom: 30px;
`

const Country = styled.h3`
    text-align: center;
    font-weight: 400;
`

const WeatherInfo =styled.div`
    display: grid;
    margin-top: 20px;
    grid-gap: 15px;
    grid-template-columns: repeat(2, 1fr);
`
const FlexBox = styled.div`
    display: flex;
`
const Img = styled.img`
    margin: 0px 15px;
`
const ImgContainer = styled.div`
  display: flex;
  align-items: center;
`


const WeatherData = ({temp,country,humidity,pressure,name,sunset,wind,desc}) => {
    // const [weather, name , main ,{temp}] = weatherData;
    // console.log(props.weatherData,'weatherdata');
  return <Wrapper>
      <WeatherIcon>
          <img src="./img/weather.png" alt="weather" height={80} />
      </WeatherIcon>
      <TempBox>
          <Temp>{temp}&#8451;, {desc}</Temp>
      </TempBox>
      <CountryBox>
          <Country>{name}, {country} </Country>
      </CountryBox>
      <div>
      <p>Weather Info</p>
      </div>
      <WeatherInfo>
        <FlexBox>
            <ImgContainer>
                <Img src='./img/sun.png' alt="" height={20} />
            </ImgContainer>
            <div>
                <p>{sunset}</p>
                <p>sunset</p>
            </div>
        </FlexBox>
        <FlexBox>
        <ImgContainer>
                <Img src='./img/humidity.png' alt="" height={20} />
            </ImgContainer>
            <div>
                <p>{humidity}</p>
                <p>humdity</p>
            </div>
        </FlexBox>
        <FlexBox>
        <ImgContainer>
                <Img src='./img/pressure.png' alt="" height={20} />
            </ImgContainer>
            <div>
                <p>{pressure}</p>
                <p>pressure</p>
            </div>
        </FlexBox>
        <FlexBox>
        <ImgContainer>
                <Img src='./img/wind.png' alt="" height={20} />
            </ImgContainer>
            <div>
                <p>{wind}</p>
                <p>wind</p>
            </div>
        </FlexBox>
      </WeatherInfo>


  </Wrapper>;
};

export default WeatherData;
