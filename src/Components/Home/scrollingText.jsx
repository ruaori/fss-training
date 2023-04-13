import { Text } from '@chakra-ui/react'

const data = [
    {
        symbol: 'HNX',
        properties: {
            TransVol: 10000,
            TransVal: 9000,
            PutthroughTransVol: 8000,
            PutthroughTransVal: 7000,
        }
    },
    {
        symbol: 'HOSE',
        properties: {
            TransVol: 10000,
            TransVal: 9000,
            PutthroughTransVol: 8000,
            PutthroughTransVal: 7000,
        }
    },
    {
        symbol: 'VN30',
        properties: {
            TransVol: 10000,
            TransVal: 9000,
            PutthroughTransVol: 8000,
            PutthroughTransVal: 7000,
        }
    }
]

const Content = () => {
    return (
        <span>
            {data.map((db, index) => (
                <span key={index}>
                    <span className="label-orange">{db.symbol}: </span>&nbsp;
                    <span className="text-yellow">KLGD: </span>
                    <span className="scroll-value">{db.properties.TransVol}</span>&nbsp;
                    <span className="text-yellow">GTGD: </span>
                    <span className="scroll-value">{db.properties.TransVal}</span>&nbsp;
                    <span className="text-yellow">KT thỏa thuận: </span>
                    <span className="scroll-value">{db.properties.PutthroughTransVol}</span>&nbsp;
                    <span className="text-yellow">GT thỏa thuận: </span>
                    <span className="scroll-value">{db.properties.PutthroughTransVal}</span>&nbsp;
                </span>
            ))}
        </span>
    );
}

// OddlotTransVol:,
// OddlotTransVal:,
const ScrollingText = () => {
    return (
        <div className='scrolling-container'>
            <Text className='scroll-text'>
                <Content />
            </Text>
        </div>
    );
}

export default ScrollingText;