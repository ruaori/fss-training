import userOption from "./UserOptions";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logoutAction } from "../../Redux/actions/userAction";
import '../../App.css';
import { Radio, RadioGroup, Text, Menu, MenuButton, MenuList, MenuItem, Button, Stack, Flex, Card, ChakraProvider } from "@chakra-ui/react";
import { useContext, useState } from "react";
import { ThemeContext } from "../../Theme";
import { RadioButton } from "react-radio-buttons";
const UserOptions = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userData = JSON.parse(localStorage.getItem('userData'));

    const [valueTheme, setValueTheme] = useState('');
    return (
        <div className="user-option">
            <div className="txtUsername">
                {/* <button className="btnUsername">{userData.username}</button> */}
                <button className="btnUsername" onClick={() => toggleTheme()}>{theme}</button>
            </div>
            <div className="dropdown-menu">
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
            </div>





        </div>
    );
}

export default UserOptions;