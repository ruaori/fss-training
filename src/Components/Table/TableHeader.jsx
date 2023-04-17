import { useEffect, useState } from 'react';
import './style.css';
import TableToolbar from './TableToolbar';

import { TableContainer, Table, Tbody } from '@chakra-ui/react';
import TableRows from './TableRows';
import { getData } from '../../Assets/data_HOSE';
import { getData_HNX } from '../../Assets/data_HNX';
import { getData_HNX30 } from '../../Assets/data_HNX30';

const TableHeader = () => {

    const [data, setData] = useState(getData);


    const OptimizeValue = (value) => {
        return (value / 1000).toFixed(2);
    }

    return (
        <div className='table-header'>
            <TableToolbar />
            <TableContainer>
                <div className="label">
                    <Table>
                        <table border={1}>
                            <thead>
                                <tr>
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
                                </tr>
                                <tr>
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
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((item, index) => {


                                    return (
                                        // <TableRows item={item} index={index} />
                                        <tr>
                                            <td>{item.symbol}</td>
                                            <td>{OptimizeValue(item.reference)}</td>
                                            <td>{OptimizeValue(item.ceiling)}</td>
                                            <td>{OptimizeValue(item.floor)}</td>
                                            <td>{OptimizeValue(item.offerPrice3)}</td>
                                            <td>{OptimizeValue(item.offerVol3)}</td>
                                            <td>{OptimizeValue(item.offerPrice2)}</td>
                                            <td>{OptimizeValue(item.offerVol2)}</td>
                                            <td>{OptimizeValue(item.offerPrice1)}</td>
                                            <td>{OptimizeValue(item.offerVol1)}</td>
                                            <td>{OptimizeValue(item.closePrice)}</td>
                                            <td>{OptimizeValue(item.closeVol)}</td>
                                            <td>{OptimizeValue(item.change)}</td>
                                            <td>{OptimizeValue(item.bidPrice1)}</td>
                                            <td>{OptimizeValue(item.bidVol1)}</td>
                                            <td>{OptimizeValue(item.bidPrice2)}</td>
                                            <td>{OptimizeValue(item.bidVol2)}</td>
                                            <td>{OptimizeValue(item.bidPrice3)}</td>
                                            <td>{OptimizeValue(item.bidVol3)}</td>
                                            <td>{OptimizeValue(item.TOTAL_BID_QTTY)}</td>
                                            <td>{OptimizeValue(item.high)}</td>
                                            <td>{OptimizeValue(item.averagePrice)}</td>
                                            <td>{OptimizeValue(item.low)}</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </Table>
                </div>
            </TableContainer>


        </div>

    )
}

export default TableHeader