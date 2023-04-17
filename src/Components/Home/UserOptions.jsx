import userOption from "./UserOptions";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logoutAction } from "../../Redux/actions/userAction";
import './home.css';
import { Radio, RadioGroup, Text, Menu, MenuButton, MenuList, MenuItem, Button, Stack } from "@chakra-ui/react";
import { useState } from "react";
import { useColorMode } from "@chakra-ui/react";


const UserOptions = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userData = JSON.parse(localStorage.getItem('userData'));
    const { colorMode, toggleColorMode } = useColorMode();
    const [valueTheme, setValueTheme] = useState('');
    return (
        <div className="user-option">
            <div className="txtUsername">
                <button className="btnUsername">{userData.username}</button>
            </div>
            <div className="dropdown-menu">
                <Stack>
                    <Menu>
                        <MenuButton as={Button} className="btnDropdown">Actions</MenuButton>
                        <MenuList>
                            <MenuItem>
                                <div className="dropdown-content">
                                    <div className="change-theme">
                                        <Stack>
                                            <Text className="label-theme">Giao diện</Text>
                                            {/* <RadioGroup typeof="radio" defaultValue="light" onChange={toggleColorMode} value={valueTheme}>
                                                <Stack direction='row' justifyContent='space-around'>
                                                    <Radio value="light">Sáng</Radio>
                                                    <Radio value="dark">Tối</Radio>
                                                </Stack>
                                            </RadioGroup> */}
                                            <button className="btnLogOut" onClick={toggleColorMode}>
                                                {colorMode === 'dark' ? 'dark' : 'light'}
                                            </button>
                                        </Stack>

                                        <div className="change-language">
                                            <Stack>
                                                <Text className="label-theme">Ngon ngu</Text>
                                                <RadioGroup>
                                                    <Stack direction='row'>
                                                        <Radio value="vi">Việt</Radio>
                                                        <Radio value="en">Anh</Radio>
                                                    </Stack>
                                                </RadioGroup>
                                            </Stack>
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
                </Stack>

            </div>





        </div>
    );
}

export default UserOptions;