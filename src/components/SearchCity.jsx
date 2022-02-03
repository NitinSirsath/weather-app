// import React, { useState } from 'react'
import styled from 'styled-components'



const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column; 
    `
const SearchLabel = styled.div`
    margin-top: 50px;
`
const InputField = styled.div`
   margin: 20px 0px;
    @media (max-width: 800px) {
        display: flex;
        flex-direction: column;
    }
`
const Input = styled.input`
    width: 15vw;
    padding: 5px;
    border: none;   
    border-bottom: 1px solid gray;
    background-color: #D9D7F1;
        &:focus{
            border: none;
            outline: none;
            border-bottom: 1px solid gray;
        }
    @media (max-width: 800px) {
        width: 50vw;
        margin: 10px;
    }
`
const Button = styled.button`
    padding: 6px;
    border: none;
    border-radius: 3px;
    background-color: #968c96;
    color: white;
`

const SearchCity = ({Search , city, setCity}) => {

   
    return (
        <>
        <div>
            
            <Container>
                <div>
                    <img src="./img/weather.png" alt="weather.png"  height={180}/>
                </div>
                <SearchLabel>
                    <h3>Find weather of your city</h3>
                </SearchLabel>
                <InputField>
                    <Input type="search" placeholder='search city...' value={city} onChange={e => setCity(e.target.value)}  />
                    <Button onClick={Search}>Search</Button>
                </InputField>

            </Container>
        </div>
        </>
    )
}

export default SearchCity
