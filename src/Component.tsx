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
                <Heading mb={8}>Find number "1531"</Heading>
                <Button onClick={firstOnClick} width={'100px'} bgColor='lightcoral' mb={3}>582</Button>
                <Button onClick={firstOnClick} width={'100px'} bgColor='lightcoral' mb={3}>952</Button>
                <Button onClick={firstOnClick} width={'100px'} bgColor='lightcoral' mb={3}>1402</Button>
                <Button onClick={firstOnClick} width={'100px'} bgColor='lightcoral' mb={3}>1531</Button>
                <Button onClick={firstOnClick} width={'100px'} bgColor='lightcoral' mb={3}>1929</Button>
            </Flex> : null }

            { showSecond ? <Flex flexDirection='column' alignItems='center'>
                <Heading mb={8}>Find number "5621"</Heading>
                <Button onClick={secondOnClick} width={'100px'} bgColor='lightcoral' mb={3}>1683</Button>
                <Button onClick={secondOnClick} width={'100px'} bgColor='lightcoral' mb={3}>1696</Button>
                <Button onClick={secondOnClick} width={'100px'} bgColor='lightcoral' mb={3}>2563</Button>
                <Button onClick={secondOnClick} width={'100px'} bgColor='lightcoral' mb={3}>4215</Button>
                <Button onClick={secondOnClick} width={'100px'} bgColor='lightcoral' mb={3}>5621</Button>
                <Button onClick={secondOnClick} width={'100px'} bgColor='lightcoral' mb={3}>5812</Button>
                <Button onClick={secondOnClick} width={'100px'} bgColor='lightcoral' mb={3}>6485</Button>
            </Flex> : null }

            { showThird ? <Flex flexDirection='column' alignItems='center'>
                <Heading mb={8}>Find number "8421"</Heading>
                <Button onClick={thirdOnClick} width={'100px'} bgColor='lightcoral' mb={3}>4832</Button>
                <Button onClick={thirdOnClick} width={'100px'} bgColor='lightcoral' mb={3}>5416</Button>
                <Button onClick={thirdOnClick} width={'100px'} bgColor='lightcoral' mb={3}>8421</Button>
            </Flex> : null }

            { showForth ? <Flex flexDirection='column' alignItems='center'>
                <Heading mb={8}>Find word "6421"</Heading>
                <Button onClick={forthOnClick} width={'100px'} bgColor='lightcoral' mb={3}>2631</Button>
                <Button onClick={forthOnClick} width={'100px'} bgColor='lightcoral' mb={3}>2853</Button>
                <Button onClick={forthOnClick} width={'100px'} bgColor='lightcoral' mb={3}>3742</Button>
                <Button onClick={forthOnClick} width={'100px'} bgColor='lightcoral' mb={3}>5842</Button>
                <Button onClick={forthOnClick} width={'100px'} bgColor='lightcoral' mb={3}>5974</Button>
                <Button onClick={forthOnClick} width={'100px'} bgColor='lightcoral' mb={3}>6269</Button>
                <Button onClick={forthOnClick} width={'100px'} bgColor='lightcoral' mb={3}>6421</Button>
                <Button onClick={forthOnClick} width={'100px'} bgColor='lightcoral' mb={3}>7532</Button>
                <Button onClick={forthOnClick} width={'100px'} bgColor='lightcoral' mb={3}>8421</Button>
                <Button onClick={forthOnClick} width={'100px'} bgColor='lightcoral' mb={3}>9785</Button>
            </Flex> : null }

            { showFifth ? <Flex flexDirection='column' alignItems='center'>
                <Heading mb={8}>Find word "2328"</Heading>
                <Button onClick={fifthOnClick} width={'100px'} bgColor='lightcoral' mb={3}>1743</Button>
                <Button onClick={fifthOnClick} width={'100px'} bgColor='lightcoral' mb={3}>2328</Button>
                <Button onClick={fifthOnClick} width={'100px'} bgColor='lightcoral' mb={3}>5732</Button>
                <Button onClick={fifthOnClick} width={'100px'} bgColor='lightcoral' mb={3}>6236</Button>
            </Flex> : null }
        </Flex>

    );
}