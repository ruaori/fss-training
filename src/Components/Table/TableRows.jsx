

const TableRows = (item, index) => {
    return (
        <>
            {!!item && (
                <tr key={index}>
                    <td>{item.symbol}</td>
                    <td>{item.reference}</td>
                    <td>{item.ceiling}</td>
                    <td>{item.floor}</td>
                    <td>{item.offerPrice3}</td>
                    <td>{item.offerVol3}</td>
                    <td>{item.offerPrice2}</td>
                    <td>{item.offerVol2}</td>
                    <td>{item.offerPrice1}</td>
                    <td>{item.offerVol1}</td>
                    <td>{item.closePrice}</td>
                    <td>{item.closeVol}</td>
                    <td>{item.change}</td>
                    <td>{item.bidPrice1}</td>
                    <td>{item.bidVol1}</td>
                    <td>{item.bidPrice2}</td>
                    <td>{item.bidVol2}</td>
                    <td>{item.bidPrice3}</td>
                    <td>{item.bidVol3}</td>
                    <td>{item.TOTAL_BID_QTTY}</td>
                    <td>{item.high}</td>
                    <td>{item.averagePrice}</td>
                    <td>{item.low}</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            )}

        </>
    );
}

export default TableRows