import { useEffect, useState } from 'react';
import '../../App.css';
import TableToolbar from './TableToolbar';
import { Box } from '@chakra-ui/react';
import { TableContainer, Table, Tbody, Thead, Th, Tr, Td } from '@chakra-ui/react';
import TableRows from './TableRows';
import { getData } from '../../Assets/Data/data_HOSE';
import { getData_HNX } from '../../Assets/Data/data_HNX';
import { getData_HNX30 } from '../../Assets/Data/data_HNX30';
import getData_UPCOM from '../../Assets/Data/data_UPCOM';
import getData_VN30 from '../../Assets/Data/data_VN30';


const TableHeader = () => {

    const [data, setData] = useState(getData);
    const [selectMarket, setSelectMarket] = useState('hose');


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

    return (
        <div className='table-header'>
            <div className="table-toolbar">
                <Box pt={2}>
                    <span>
                        <input className="search-input" placeholder="Tìm kiếm mã CK" />
                        <button className="btnSearch">+</button>
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
                            <th rowSpan={2}>Symbol</th>
                            <th rowSpan={2}>Ref</th>
                            <th rowSpan={2}>Ceil</th>
                            <th rowSpan={2}>Floor</th>
                            <th rowSpan={1} colSpan={6}>Bid</th>
                            <th rowSpan={1} colSpan={3}>Matched</th>
                            <th rowSpan={1} colSpan={6}>Ask</th>
                            <th rowSpan={2}>T.Vol</th>
                            <th rowSpan={1} colSpan={3}>Prices</th>
                            <th rowSpan={1} colSpan={2}>Remain</th>
                            <th rowSpan={1} colSpan={2}>Foreign</th>
                        </Tr>
                        <Tr>
                            <th>Prc 3</th>
                            <th>Vol 3</th>
                            <th>Prc 2</th>
                            <th>Vol 2</th>
                            <th>Prc 1</th>
                            <th>Vol 1</th>
                            <th>Price</th>
                            <th>Vol</th>
                            <th>+/-</th>
                            <th>Prc 1</th>
                            <th>Vol 1</th>
                            <th>Prc 2</th>
                            <th>Vol 2</th>
                            <th>Prc 3</th>
                            <th>Vol 3</th>
                            <th>High</th>
                            <th>Avg</th>
                            <th>Low</th>
                            <th>Bid</th>
                            <th>Ask</th>
                            <th>Bought</th>
                            <th>Sold</th>
                        </Tr>
                    </thead>
                    <Tbody>
                        {data.map((item, index) => {


                            return (
                                // <TableRows item={item} index={index} />
                                <Tr>
                                    <Td className='valueSymbol'>{item.symbol}</Td>
                                    <Td className='valueRef' >{OptimizeValue(item.reference)}</Td>
                                    <Td className='valueCeil' >{OptimizeValue(item.ceiling)}</Td>
                                    <Td className='valueFloor'>{OptimizeValue(item.floor)}</Td>
                                    <Td>{OptimizeValue(item.offerPrice3)}</Td>
                                    <Td>{OptimizeValue(item.offerVol3)}</Td>
                                    <Td>{OptimizeValue(item.offerPrice2)}</Td>
                                    <Td>{OptimizeValue(item.offerVol2)}</Td>
                                    <Td>{OptimizeValue(item.offerPrice1)}</Td>
                                    <Td>{OptimizeValue(item.offerVol1)}</Td>
                                    <Td>{OptimizeValue(item.closePrice)}</Td>
                                    <Td>{OptimizeValue(item.closeVol)}</Td>
                                    <Td>{OptimizeValue(item.change)}</Td>
                                    <Td>{OptimizeValue(item.bidPrice1)}</Td>
                                    <Td>{OptimizeValue(item.bidVol1)}</Td>
                                    <Td>{OptimizeValue(item.bidPrice2)}</Td>
                                    <Td>{OptimizeValue(item.bidVol2)}</Td>
                                    <Td>{OptimizeValue(item.bidPrice3)}</Td>
                                    <Td>{OptimizeValue(item.bidVol3)}</Td>
                                    <Td>{OptimizeValue(item.TOTAL_BID_QTTY)}</Td>
                                    <Td>{OptimizeValue(item.high)}</Td>
                                    <Td>{OptimizeValue(item.averagePrice)}</Td>
                                    <Td>{OptimizeValue(item.low)}</Td>
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