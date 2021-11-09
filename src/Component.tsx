import React, { useEffect, useState } from 'react';
import { 
    Button,
    Flex,
    Heading,
} from "@chakra-ui/react";


export const Component: React.FC = () => {

    const [time, setTime] = useState(0);

    const [showStart, setShowStart] = useState(true);
    const [showFirst, setShowFirst] = useState(false);
    const [showSecond, setShowSecond] = useState(false);
    const [showThird, setShowThird] = useState(false);
    const [showForth, setShowForth] = useState(false);
    const [showFifth, setShowFifth] = useState(false);

    const startOnClick = () => {
        setTime(performance.now());
        setShowStart(false);
        setShowFirst(true);
    }

    const firstOnClick = () => {
        console.log('5: ', performance.now() - time);
        setTime(performance.now());
        setShowFirst(false);
        setShowSecond(true);
    }

    const secondOnClick = () => {
        console.log('7: ', performance.now() - time);
        setTime(performance.now());
        setShowSecond(false);
        setShowThird(true);
    }

    const thirdOnClick = () => {
        console.log('3: ', performance.now() - time);
        setTime(performance.now());
        setShowThird(false);
        setShowForth(true);
    }

    const forthOnClick = () => {
        console.log('10: ', performance.now() - time);
        setTime(performance.now());
        setShowForth(false);
        setShowFifth(true);
    }

    const fifthOnClick = () => {
        console.log('4: ', performance.now() - time);
        setTime(performance.now());
        setShowFifth(false);
    }

    return (
        <Flex flexDirection='column' alignItems='center'>
            { showStart ? <Button onClick={startOnClick} width={'100px'} bgColor='lightcoral' mt={4}>Start</Button> : null }
            { showFirst ? <Flex flexDirection='column' alignItems='center'>
                <Heading mb={8}>Find word "Milk"</Heading>
                <Button onClick={firstOnClick} width={'100px'} bgColor='lightcoral' mb={3}>Apple</Button>
                <Button onClick={firstOnClick} width={'100px'} bgColor='lightcoral' mb={3}>Bread</Button>
                <Button onClick={firstOnClick} width={'100px'} bgColor='lightcoral' mb={3}>Grape</Button>
                <Button onClick={firstOnClick} width={'100px'} bgColor='lightcoral' mb={3}>Milk</Button>
                <Button onClick={firstOnClick} width={'100px'} bgColor='lightcoral' mb={3}>Pine</Button>
            </Flex> : null }

            { showSecond ? <Flex flexDirection='column' alignItems='center'>
                <Heading mb={8}>Find word "Hungary"</Heading>
                <Button onClick={secondOnClick} width={'100px'} bgColor='lightcoral' mb={3}>Brasil</Button>
                <Button onClick={secondOnClick} width={'100px'} bgColor='lightcoral' mb={3}>France</Button>
                <Button onClick={secondOnClick} width={'100px'} bgColor='lightcoral' mb={3}>Germany</Button>
                <Button onClick={secondOnClick} width={'100px'} bgColor='lightcoral' mb={3}>Hungary</Button>
                <Button onClick={secondOnClick} width={'100px'} bgColor='lightcoral' mb={3}>Italy</Button>
                <Button onClick={secondOnClick} width={'100px'} bgColor='lightcoral' mb={3}>Norway</Button>
                <Button onClick={secondOnClick} width={'100px'} bgColor='lightcoral' mb={3}>Spain</Button>
            </Flex> : null }

            { showThird ? <Flex flexDirection='column' alignItems='center'>
                <Heading mb={8}>Find word "Spaghetti"</Heading>
                <Button onClick={thirdOnClick} width={'100px'} bgColor='lightcoral' mb={3}>Pancakes</Button>
                <Button onClick={thirdOnClick} width={'100px'} bgColor='lightcoral' mb={3}>Spaghetti</Button>
                <Button onClick={thirdOnClick} width={'100px'} bgColor='lightcoral' mb={3}>Sushi</Button>
            </Flex> : null }

            { showForth ? <Flex flexDirection='column' alignItems='center'>
                <Heading mb={8}>Find word "Pink"</Heading>
                <Button onClick={forthOnClick} width={'100px'} bgColor='lightcoral' mb={3}>Blue</Button>
                <Button onClick={forthOnClick} width={'100px'} bgColor='lightcoral' mb={3}>Brown</Button>
                <Button onClick={forthOnClick} width={'100px'} bgColor='lightcoral' mb={3}>Gray</Button>
                <Button onClick={forthOnClick} width={'100px'} bgColor='lightcoral' mb={3}>Green</Button>
                <Button onClick={forthOnClick} width={'100px'} bgColor='lightcoral' mb={3}>Orange</Button>
                <Button onClick={forthOnClick} width={'100px'} bgColor='lightcoral' mb={3}>Pink</Button>
                <Button onClick={forthOnClick} width={'100px'} bgColor='lightcoral' mb={3}>Purple</Button>
                <Button onClick={forthOnClick} width={'100px'} bgColor='lightcoral' mb={3}>Red</Button>
                <Button onClick={forthOnClick} width={'100px'} bgColor='lightcoral' mb={3}>White</Button>
                <Button onClick={forthOnClick} width={'100px'} bgColor='lightcoral' mb={3}>Yellow</Button>
            </Flex> : null }

            { showFifth ? <Flex flexDirection='column' alignItems='center'>
                <Heading mb={8}>Find word "Towel"</Heading>
                <Button onClick={fifthOnClick} width={'100px'} bgColor='lightcoral' mb={3}>Ball</Button>
                <Button onClick={fifthOnClick} width={'100px'} bgColor='lightcoral' mb={3}>Suncream</Button>
                <Button onClick={fifthOnClick} width={'100px'} bgColor='lightcoral' mb={3}>Towel</Button>
                <Button onClick={fifthOnClick} width={'100px'} bgColor='lightcoral' mb={3}>Water</Button>
            </Flex> : null }
        </Flex>

    );
}