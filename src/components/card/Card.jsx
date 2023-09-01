//make a card component that will display the pokemon name and image using the chakra ui card component

import React from "react";
import { useState, useEffect } from "react";
import { Box, Image, Text, Flex, Button as CButton } from "@chakra-ui/react";

const Card = () => {

    const [pokemon, setPokemon] = useState(0)
    const [index, setIndex] = useState(0)

    useEffect(() => {
        fetch('https://dev-api-teste.mandarin.com.br/pokemons')
          .then(response => response.json())
          .then(data => setPokemon(data))
          .catch(error => console.error('Error fetching data:', error));
      }, []);

    function nextPokemon() {
        //se o index for menor que o tamanho do array, ele soma 1 no index, se não, ele volta pro primeiro pokemon
        console.log(pokemon)
        if (index < pokemon.length - 1) {
            setIndex(index + 1)
        } else {
            setIndex(0)
        }
    }
    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#3b6eac",
            height: "100vh",
            flexDirection: "column",
        }}>
            <Box
                maxW="sm"
                w={380}
                h={450}
                placeItems={"center"}
                borderWidth="1px"
                borderRadius="10"
                overflow="hidden"
                boxShadow="10px 10px 75px 0px rgba(0,0,0,0.75)"
                bg="white"
                m="1rem"
                backgroundColor={"#0a203b"}
            >
                <Flex justify="center" align="center" direction="column">
                    {pokemon && pokemon.length > 0 && pokemon[index] && (
                        <Text fontSize="xl" fontWeight="bold" color={"white"} p="1rem">
                            {pokemon[index].name}
                        </Text>
                    )}
                    {pokemon && pokemon.length > 0 && pokemon[index] && (
                        <Text fontSize="md" fontWeight="bold" color={"white"} p="1rem">
                            {pokemon[index].category}
                        </Text>
                    )}
                    {pokemon && pokemon.length > 0 && pokemon[index] && (
                        <Image
                            fit={"contain"}
                            src={pokemon[index].background_image_url}
                            alt='coisas'
                            boxSize="250px"
                            borderRadius={'1rem'}
                        />
                    )}
                    {pokemon && pokemon.length > 0 && pokemon[index] && (
                        <Image
                            fit={"contain"}
                            src={pokemon[index].image_url}
                            alt='coisas'
                            boxSize="100px"
                            position='absolute'
                            top={230}
                        />                     
                        )}
                </Flex>
            </Box>
            <CButton onClick={nextPokemon} bg='#c3c3c3' variant='outline'>Next Pokemon</CButton>
        </div>
    );
}

export default Card;