import { Text } from '@chakra-ui/react';
import '../../App.css';
import i18n from '../../Internationalize/i18n';
import { useTranslation } from 'react-i18next';

const Footer = () => {
    const { t, i18n } = useTranslation();


    return (
        <div className="footer-content">
            <div className='Text-footer'>
                <p>{t('Stock Market')}: {t('Prices')}: <Text className='text-value-footer'>x1000</Text> {t('Volumn')}: <Text className='text-value-footer' >x10</Text> - {t('Derivative Market')}: {t('Prices')}: <Text className='text-value-footer' >x1</Text> {t('Volumn')}: <Text className='text-value-footer'>x1</Text> - {t('Odd lot market')}: {t('Stock Market')}: <Text className='text-value-footer' >x1</Text></p>
            </div>
            <div className='btn-footer'>
                <button className='btn-price-board'>{t('Price Board')}</button>
            </div>
            <div className='btn-footer'>
                <button className='btn-quick-order'>{t('Quick Order')}</button>
            </div>
        </div>
    )
}

export default Footer