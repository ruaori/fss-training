import { Td } from "@chakra-ui/react";

const TableRows = (item) => {

    const OptimizeValue = (value) => {
        return (value / 1000).toFixed(2);
    }



    return (
        <>
            {!!item && (
                <tr>
                    <Td>{item.symbol}</Td>
                    <Td>{OptimizeValue(item.reference)}</Td>
                    <Td>{OptimizeValue(item.ceiling)}</Td>
                    <Td>{OptimizeValue(item.floor)}</Td>
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
                </tr>
            )}

        </>
    );

}

export default TableRows