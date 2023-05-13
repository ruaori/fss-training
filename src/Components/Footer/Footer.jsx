import { Text } from '@chakra-ui/react';
import '../../App.css';


const Footer = () => {



    return (
        <div className="footer-content">
            <div className='Text-footer'>
                <p>Đơn vị TT cơ sở: Giá: <Text className='text-value-footer'>x1000</Text> Khối lượng: <Text className='text-value-footer' >x10</Text> - Đơn vị TT phát sinh: Giá: <Text className='text-value-footer' >x1</Text> Khối lượng: <Text className='text-value-footer'>x1</Text> - Đơn vị TT lô lẻ: Khối lượng: <Text className='text-value-footer' >x1</Text></p>
            </div>
            <div className='btn-footer'>
                <button className='btn-price-board'>Bảng giá</button>
            </div>
            <div className='btn-footer'>
                <button className='btn-quick-order'>Đặt Lệnh</button>
            </div>
        </div>
    )
}

export default Footer