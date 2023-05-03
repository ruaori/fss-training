

const TableRows = (data) => {

    const OptimizeValue = (value) => {
        return (value / 1000).toFixed(2);
    }
    return (
        <>

            {
                data.map((item, index) => {


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
                })
            }
        </>
    );
}

export default TableRows