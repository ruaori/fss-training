import { useEffect, useState } from 'react';
import './style.css';
import TableToolbar from './TableToolbar';

import { TableContainer, Table, Tbody } from '@chakra-ui/react';
import TableRows from './TableRows';
import { getData } from '../../Assets/data_HOSE';
import { getData_HNX } from '../../Assets/data_HNX';
import { getData_HNX30 } from '../../Assets/data_HNX30';

const TableHeader = () => {
    const [data, setData] = useState([]);
    setData(getData());
    return (
        <div className='table-header'>
            <TableToolbar />
            <TableContainer>
                <div className="label">
                    <Table>
                        <table border={1}>
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
                            <Tbody>
                                {data.map((t, index) => { <TableRows item={t} index={index} /> })}
                            </Tbody>

                        </table>
                    </Table>
                </div>
            </TableContainer>


        </div>

    )
}

export default TableHeader