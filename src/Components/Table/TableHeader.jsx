import { useEffect, useState } from 'react';
import '../../App.css';
import TableToolbar from './TableToolbar';
import { Box } from '@chakra-ui/react';
import { TableContainer, Table, Tbody, Thead, Th, Tr, Td, Text } from '@chakra-ui/react';
import TableRows from './TableRows';
import { getData } from '../../Assets/Data/data_HOSE';
import { getData_HNX } from '../../Assets/Data/data_HNX';
import { getData_HNX30 } from '../../Assets/Data/data_HNX30';
import getData_UPCOM from '../../Assets/Data/data_UPCOM';
import getData_VN30 from '../../Assets/Data/data_VN30';
import i18n from '../../Internationalize/i18n';
import { useTranslation } from 'react-i18next';

const TableHeader = () => {

    const [data, setData] = useState(getData);
    const [selectMarket, setSelectMarket] = useState('hose');
    const [stockId, setStockId] = useState([]);
    const [changedData, setChangedData] = useState([]);
    const { t, i18n } = useTranslation();
    let response = []

    const labelHOSE = () => {
        if (selectMarket === 'vn30')
            return 'VN30'
        else return 'HOSE'
    }

    const labelHNX = () => {
        if (selectMarket === 'hnx30')
            return 'HNX30'
        else return 'HNX'
    }

    const labelUPCOM = () => {
        if (selectMarket === 'upcom')
            return 'UPCOM'
        return 'UPCOM'
    }


    useEffect(() => {
        if (selectMarket === 'hose')
            response = getData
        if (selectMarket === 'hnx')
            response = getData_HNX
        if (selectMarket === 'hnx30')
            response = getData_HNX30
        if (selectMarket === 'upcom')
            response = getData_UPCOM
        if (selectMarket === 'vn30')
            response = getData_VN30
        setData(response)
    }, [selectMarket])

    const OptimizeValue = (value) => {
        return (value / 1000).toFixed(2);
    }

    const textColor = (refValue, MatchedValue) => {
        if (OptimizeValue(MatchedValue) < OptimizeValue(refValue))
            return "red";
        if (OptimizeValue(MatchedValue) > OptimizeValue(refValue))
            return "green";
        if (OptimizeValue(MatchedValue) === OptimizeValue(refValue))
            return "#d4b001";
        if (OptimizeValue(MatchedValue) === OptimizeValue(data.ceiling))
            return '#CC33FF';
        if (OptimizeValue(MatchedValue) === OptimizeValue(data.floor))
            return '#00c5c5';

    }



    const [keySearch, setKeySearch] = useState('');

    const handleKeySearchChange = (e) => {
        setKeySearch(e.target.value);
    }

    const KeySearchClick = () => {

    }

    //get first 15 stockId
    useEffect(() => {
        const array = data.slice(0, 15);
        const arr = array.map((i) => {
            return i.StockId;
        });
        setStockId(arr);
    }, [data]);
    //lay nhieu gia tri ngau nhien trong 1 arr
    const getMultipleRandom = (arr, num) => {
        const shuffled = [...arr].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, num);
    }
    //set random value in a range
    const randomInRange = (min, max) => {
        return Math.round(Math.random() * (max - min) + min);
    }
    // //get random 10 stock id and save in changedData every 5s
    useEffect(() => {
        const randomStock = setInterval(() => {
            const randomArr = getMultipleRandom(stockId, 10);
            setChangedData(randomArr);
        }, 5000);

        return () => {
            clearInterval(randomStock, 5000);
        }
    }, [stockId]);
    //change value
    useEffect(() => {
        const array = data.map((i) => {
            const isMatched = changedData.includes(i.StockId);
            const randomBoolean = Math.random() < 0.5;
            if (isMatched) {
                return {
                    ...i,
                    closePrice: randomInRange(i.floor, i.ceiling),
                    //set randomChange cho tung cell neu true thi change value va nguoc lai
                    //bid price
                    bidPrice3: randomBoolean
                        ? randomInRange(i.floor, i.bidPrice2)
                        : i.bidPrice3,
                    bidPrice2: randomBoolean
                        ? randomInRange(i.bidPrice3, i.bidPrice1)
                        : i.bidPrice2,
                    bidPrice1: randomBoolean
                        ? randomInRange(i.bidPrice2, i.ceiling)
                        : i.bidPrice1,
                    //offerPrice
                    offerPrice1: randomBoolean
                        ? randomInRange(i.floor, i.offerPrice2)
                        : i.offerPrice1,
                    offerPrice2: randomBoolean
                        ? randomInRange(i.offerPrice3, i.offerPrice1)
                        : i.offerPrice2,
                    offerPrice3: randomBoolean
                        ? randomInRange(i.offerPrice2, i.ceiling)
                        : i.offerPrice3,
                    //price
                    high: randomBoolean
                        ? randomInRange(i.low, i.ceiling)
                        : i.high,

                    averagePrice: randomBoolean
                        ? randomInRange(i.low, i.high)
                        : i.averagePrice,

                    low: randomBoolean
                        ? randomInRange(i.ceiling, i.averagePrice)
                        : i.low,
                };
            } else return i;
        });
        setData(array);
    }, [changedData]);

    return (
        <div className='table-header'>
            <div className="table-toolbar">
                <Box pt={2}>
                    <span>
                        <input className="search-input" onChange={handleKeySearchChange} placeholder="Tìm kiếm mã CK" />
                        <button className="btnSearch" onClick={KeySearchClick}>+</button>
                    </span>
                    <span>
                        <div
                            className={
                                selectMarket === 'hose' || selectMarket === 'vn30'
                                    ? 'sub-menu-active'
                                    : 'sub-menu-market'
                            }>
                            <div onClick={() => {
                                setSelectMarket('hose')
                            }}>
                                {labelHOSE()}
                            </div>
                            <div className="dropdown-select">

                                <div
                                    onClick={() => setSelectMarket('hose')}
                                    className={
                                        setSelectMarket === 'hose'
                                            ? 'dropdowm-active'
                                            : 'dropdown-market'
                                    }
                                >
                                    HOSE
                                </div>
                                <div
                                    onClick={() => { setSelectMarket('vn30') }}
                                    className={
                                        setSelectMarket === 'vn30'
                                            ? 'dropdowm-active'
                                            : 'dropdown-market'
                                    }
                                >
                                    VN30
                                </div>
                            </div>
                        </div>
                        <div
                            className={
                                selectMarket === "hnx" || selectMarket === "hnx30"
                                    ? 'sub-menu-active'
                                    : 'sub-menu-market'
                            }
                        >
                            <div
                                onClick={() => { setSelectMarket('hnx') }}
                            >
                                {labelHNX()}
                            </div>
                            <div className="dropdown-select">
                                <div
                                    onClick={() => setSelectMarket('hnx')}
                                    className={
                                        setSelectMarket === 'hnx'
                                            ? 'dropdowm-active'
                                            : 'dropdown-market'
                                    }
                                >
                                    HNX
                                </div>
                                <div
                                    onClick={() => setSelectMarket('hnx30')}
                                    className={
                                        setSelectMarket === 'hnx30'
                                            ? 'dropdowm-active'
                                            : 'dropdown-market'
                                    }
                                >
                                    HNX30
                                </div>
                            </div>
                        </div>

                        <div
                            className={
                                selectMarket === 'upcom'
                                    ? 'sub-menu-active'
                                    : 'sub-menu-market'
                            }
                        >
                            <div
                                onClick={() => { setSelectMarket('upcom') }}
                            >
                                {labelUPCOM()}
                            </div>

                        </div>
                    </span>
                </Box>
            </div>
            <div className="label">
                <Table className='table-sticky'>
                    <thead>
                        <Tr>
                            <th rowSpan={2}>{t('Symbol')}</th>
                            <th rowSpan={2}>{t('Ref')}</th>
                            <th rowSpan={2}>{t('Ceil')}</th>
                            <th rowSpan={2}>{t('Floor')}</th>
                            <th rowSpan={1} colSpan={6}>{t('Bid side')}</th>
                            <th rowSpan={1} colSpan={3}>{t('Matched')}</th>
                            <th rowSpan={1} colSpan={6}>{t('Ask side')}</th>
                            <th rowSpan={2}>{t('T.Vol')}</th>
                            <th rowSpan={1} colSpan={3}>{t('Prices')}</th>
                            <th rowSpan={1} colSpan={2}>{t('Remain')}</th>
                            <th rowSpan={1} colSpan={2}>{t('Foreign')}</th>
                        </Tr>
                        <Tr>
                            <th>{t('Prc 3')}</th>
                            <th>{t('Vol 3')}</th>
                            <th>{t('Prc 2')}</th>
                            <th>{t('Vol 2')}</th>
                            <th>{t('Prc 1')}</th>
                            <th>{t('Vol 1')}</th>
                            <th>{t('Price')}</th>
                            <th>{t('Vol')}</th>
                            <th>+/-</th>
                            <th>{t('Prc 1')}</th>
                            <th>{t('Vol 1')}</th>
                            <th>{t('Prc 2')}</th>
                            <th>{t('Vol 2')}</th>
                            <th>{t('Prc 3')}</th>
                            <th>{t('Vol 3')}</th>
                            <th>{t('High')}</th>
                            <th>{t('Avg')}</th>
                            <th>{t('Low')}</th>
                            <th>{t('Bid')}</th>
                            <th>{t('Ask')}</th>
                            <th>{t('Bought')}</th>
                            <th>{t('Sold')}</th>
                        </Tr>
                    </thead>
                    <Tbody>
                        {data.map((item, index) => {


                            return (
                                // <TableRows item={item} index={index} />
                                <Tr>
                                    <Td>
                                        <Text color={textColor(item.reference, item.closePrice)}>
                                            {item.symbol}
                                        </Text>

                                    </Td>
                                    <Td color="#d4b001" className='bg-closePrice' >{OptimizeValue(item.reference)}</Td>
                                    <Td color="#CC33FF" className='bg-closePrice'>{OptimizeValue(item.ceiling)}</Td>
                                    <Td color="#00c5c5" className='bg-closePrice'>{OptimizeValue(item.floor)}</Td>
                                    {/* Bid Price*/}
                                    <Td>
                                        <Text color={textColor(item.reference, item.bidPrice3)}>
                                            {OptimizeValue(item.bidPrice3)}
                                        </Text>
                                    </Td>
                                    <Td>
                                        <Text color={textColor(item.reference, item.bidPrice3)}>
                                            {OptimizeValue(item.bidVol3)}
                                        </Text>

                                    </Td>
                                    <Td>
                                        <Text color={textColor(item.reference, item.bidPrice2)}>
                                            {OptimizeValue(item.bidPrice2)}
                                        </Text>
                                    </Td>
                                    <Td>
                                        <Text color={textColor(item.reference, item.bidPrice2)}>
                                            {OptimizeValue(item.bidVol2)}
                                        </Text>

                                    </Td>
                                    <Td>
                                        <Text color={textColor(item.reference, item.bidPrice1)}>
                                            {OptimizeValue(item.bidPrice1)}
                                        </Text>
                                    </Td>
                                    <Td>
                                        <Text color={textColor(item.reference, item.bidPrice1)}>
                                            {OptimizeValue(item.bidVol1)}
                                        </Text>
                                    </Td>

                                    {/*Khop lenh */}
                                    <Td className='bg-closePrice'>
                                        <Text color={textColor(item.reference, item.closePrice)}>
                                            {OptimizeValue(item.closePrice)}
                                        </Text>
                                    </Td>
                                    <Td className='bg-closePrice'>
                                        <Text color={textColor(item.reference, item.closePrice)}>
                                            {OptimizeValue(item.closeVol)}
                                        </Text>
                                    </Td>
                                    <Td className='bg-closePrice'>
                                        <Text color={textColor(item.reference, item.closePrice)}>
                                            {OptimizeValue(item.change)}
                                        </Text>
                                    </Td>
                                    <Td>

                                        {/* Offer Price */}
                                        <Text color={textColor(item.reference, item.offerPrice1)}>
                                            {OptimizeValue(item.offerPrice1)}
                                        </Text>
                                    </Td>
                                    <Td>
                                        <Text color={textColor(item.reference, item.offerPrice1)}>
                                            {OptimizeValue(item.offerVol1)}
                                        </Text>
                                    </Td>
                                    <Td>
                                        <Text color={textColor(item.reference, item.offerPrice2)}>
                                            {OptimizeValue(item.offerPrice2)}
                                        </Text>
                                    </Td>
                                    <Td>
                                        <Text color={textColor(item.reference, item.offerPrice2)}>
                                            {OptimizeValue(item.offerVol2)}
                                        </Text>
                                    </Td>
                                    <Td>
                                        <Text color={textColor(item.reference, item.offerPrice3)}>
                                            {OptimizeValue(item.offerPrice3)}
                                        </Text>
                                    </Td>
                                    <Td>
                                        <Text color={textColor(item.reference, item.offerPrice3)}>
                                            {OptimizeValue(item.offerVol3)}
                                        </Text>
                                    </Td>

                                    <Td>
                                        {OptimizeValue(item.TOTAL_BID_QTTY)}</Td>
                                    <Td className='bg-closePrice'>
                                        <Text color={textColor(item.reference, item.high)}>
                                            {OptimizeValue(item.high)}
                                        </Text>

                                    </Td>
                                    <Td className='bg-closePrice'>
                                        <Text color={textColor(item.reference, item.averagePrice)}>
                                            {OptimizeValue(item.averagePrice)}
                                        </Text>
                                    </Td>
                                    <Td className='bg-closePrice'>
                                        <Text color={textColor(item.reference, item.low)}>
                                            {OptimizeValue(item.low)}
                                        </Text>
                                    </Td>
                                    <Td></Td>
                                    <Td></Td>
                                    <Td></Td>
                                    <Td></Td>
                                </Tr>
                            );
                        })}
                    </Tbody>
                </Table>
            </div>


        </div>

    )
}

export default TableHeader