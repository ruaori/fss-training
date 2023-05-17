import userOption from "./UserOptions";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logoutAction } from "../../Redux/actions/userAction";
import '../../App.css';
import { Radio, RadioGroup, Text, Menu, MenuButton, MenuList, MenuItem, Button, Stack, Flex, Card, ChakraProvider } from "@chakra-ui/react";
import { useContext, useState } from "react";
import { ThemeContext } from "../../Theme";
import userIcon from '../../Assets/user-icon.svg';
import { useTranslation } from "react-i18next";
import '../../Internationalize/i18n';
import { useEffect } from "react";
import i18n from "../../Internationalize/i18n";
import ukIcon from '../../Assets/uk.svg';
import vnIcon from '../../Assets/vietnam.svg';

const UserOptions = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    const { t, i18n } = useTranslation();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userData = JSON.parse(localStorage.getItem('userData'));

    const [lang, setLang] = useState('vi');

    useEffect(() => {
        const refeshLang = () => {
            localStorage.setItem("changeLang", lang);
            i18n.changeLanguage(lang);
        }
        refeshLang();
    }, [lang]);


    return (
        <div className="user-option">
            <div className="txtUsername">
                <button className="btnUsername">{userData.username}</button>
            </div>
            <div className="dropdown-menu">
                <Flex ml="auto">
                    <ChakraProvider>
                        <Menu>
                            <MenuButton className="btnDropdown" sx={{ px: 5 }} _focus={{ border: "none" }}>
                                <img className="img-user-home" src={userIcon} height='40px' width='40px' />
                            </MenuButton>
                            <MenuList
                                sx={{
                                    px: 2,
                                    zIndex: 999,
                                    position: "relative",
                                }}
                            >
                                <Stack>
                                    <Card px={5} py={2}>
                                        <Text fontWeight='bold'>
                                            {t('Theme')}
                                        </Text>
                                        <RadioGroup defaultValue={theme} onChange={toggleTheme} value={theme}>
                                            <Stack direction="row" justifyContent="space-around">
                                                <Radio value="light-theme">{t('Light')}</Radio>
                                                <Radio value="dark-theme">{t('Dark')}</Radio>
                                            </Stack>
                                        </RadioGroup>
                                    </Card>

                                    <Card px={5} py={2}>
                                        <Text fontWeight='bold'>
                                            {t('Language')}
                                        </Text>
                                        <RadioGroup defaultValue={lang} onChange={setLang} value={lang}>
                                            <Stack direction="row" justifyContent="space-around">
                                                <Radio value="vi">
                                                    <img src={vnIcon} width='20px' height='20px' />
                                                </Radio>
                                                <Radio value="en">
                                                    <img src={ukIcon} width='20px' height='20px' />
                                                </Radio>
                                            </Stack>
                                        </RadioGroup>
                                    </Card>
                                    <button className="btnLogOut" onClick={() => {
                                        dispatch(logoutAction());
                                        navigate("/login");
                                    }}>{t('Log Out')}</button>
                                </Stack>
                            </MenuList>
                        </Menu>
                    </ChakraProvider>
                </Flex>
            </div>





        </div>
    );
}


export default UserOptions;
