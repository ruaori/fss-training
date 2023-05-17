import { Text } from '@chakra-ui/react'
import i18n from '../../Internationalize/i18n';
import { useTranslation } from 'react-i18next';

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
    const { t, i18n } = useTranslation();


    return (
        <span>
            {data.map((db, index) => (
                <span key={index}>
                    <span className="label-orange">{db.symbol}: </span>&nbsp;
                    <span className="text-yellow">{t('TransVol')}: </span>
                    <span className="scroll-value">{db.properties.TransVol}</span>&nbsp;
                    <span className="text-yellow">{t('TransVal')}: </span>
                    <span className="scroll-value">{db.properties.TransVal}</span>&nbsp;
                    <span className="text-yellow">{t('PutthroughTransVol')}: </span>
                    <span className="scroll-value">{db.properties.PutthroughTransVol}</span>&nbsp;
                    <span className="text-yellow">{t('PutthroughTransVal')}: </span>
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