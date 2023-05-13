import userOption from "./UserOptions";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logoutAction } from "../../Redux/actions/userAction";
import '../../App.css';
import { Radio, RadioGroup, Text, Menu, MenuButton, MenuList, MenuItem, Button, Stack, Flex, Card, ChakraProvider } from "@chakra-ui/react";
import { useContext, useState } from "react";
import { ThemeContext } from "../../Theme";
import { RadioButton } from "react-radio-buttons";
import zIndex from "@mui/material/styles/zIndex";
const UserOptions = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userData = JSON.parse(localStorage.getItem('userData'));


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
                                Actions
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
                                        <Text>
                                            Giao Diện
                                        </Text>
                                        <RadioGroup defaultValue={theme} onChange={toggleTheme} value={theme}>
                                            <Stack direction="row" justifyContent="space-around">
                                                <Radio value="light-theme">Sang</Radio>
                                                <Radio value="dark-theme">Toi</Radio>
                                            </Stack>
                                        </RadioGroup>
                                    </Card>

                                    <Card px={5} py={2}>
                                        <Text>
                                            Ngon ngu
                                        </Text>
                                        <RadioGroup defaultValue="vi">
                                            <Stack direction="row" justifyContent="space-around">
                                                <Radio value="vi">Việt</Radio>
                                                <Radio value="en">Anh</Radio>
                                            </Stack>
                                        </RadioGroup>
                                    </Card>
                                    <button className="btnLogOut" onClick={() => {
                                        dispatch(logoutAction());
                                        navigate("/login");
                                    }}>Đăng Xuất</button>
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

/*
 <Menu>
                    <MenuButton as={Button} className="btnDropdown">Actions</MenuButton>
                    <MenuList
                        sx={{
                            background: "#3a3a3a",
                            px: 2,
                            zIndex: 15,
                            position: "relative",
                        }}>
                        <MenuItem opacity={100}>
                            <div className="dropdown-content">

                                <div className="change-theme">
                                    <Card>
                                        <Text className="label-theme">Giao diện</Text>
                                        <RadioGroup display="flex">
                                            <RadioButton value='light'>Light</RadioButton>
                                            <RadioButton value='light'>Dark</RadioButton>

                                        </RadioGroup>

                                    </Card>

                                    <div className="change-language">
                                        <Card>
                                            <Stack>
                                                <Text className="label-theme">Ngon ngu</Text>
                                                <RadioGroup>
                                                    <Stack direction='row'>
                                                        <Radio value="vi">Việt</Radio>
                                                        <Radio value="en">Anh</Radio>
                                                    </Stack>
                                                </RadioGroup>
                                            </Stack>
                                        </Card>

                                    </div>

                                    <div className="btn-logout">
                                        <Stack>
                                            <button className="btnLogOut" onClick={() => {
                                                dispatch(logoutAction());
                                                navigate("/login");
                                            }}>Đăng Xuất</button>
                                        </Stack>

                                    </div>
                                </div>
                            </div>
                        </MenuItem>
                    </MenuList>
                </Menu>
*/