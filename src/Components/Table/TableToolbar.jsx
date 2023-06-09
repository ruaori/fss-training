import React, { useState } from "react";
import { Button, Box, HStack } from "@chakra-ui/react";
import i18n from "../../Internationalize/i18n";
import { useTranslation } from "react-i18next";

const TableToolbar = ({ selectMarket, setSelectMarket }) => {
    const { t, i18n } = useTranslation();

    [selectMarket, setSelectMarket] = useState('hose');

    const labelHOSE = () => {
        if (selectMarket === 'vn30')
            return 'VN30'
        else return 'HOSE'
    }

    const labelHNX = () => {
        if (selectMarket === 'hnx30')
            return 'HNX30'
        else return 'HNX'
    }

    const labelUPCOM = () => {
        if (selectMarket === 'upcom')
            return 'UPCOM'
        return 'UPCOM'
    }

    return (
        <div className="table-toolbar">
            <Box pt={2}>
                <span>
                    <input className="search-input" placeholder={t("Text search Stock ID")} />
                    <button className="btnSearch">+</button>
                </span>
                <span>
                    <div
                        className={
                            selectMarket === 'hose' || selectMarket === 'vn30'
                                ? 'sub-menu-active'
                                : 'sub-menu-market'
                        }>
                        <div onClick={() => {
                            setSelectMarket('hose')
                        }}>
                            {labelHOSE()}
                        </div>
                        <div className="dropdown-select">

                            <div
                                onClick={() => setSelectMarket('hose')}
                                className={
                                    setSelectMarket === 'hose'
                                        ? 'dropdowm-active'
                                        : 'dropdown-market'
                                }
                            >
                                HOSE
                            </div>
                            <div
                                onClick={() => { setSelectMarket('vn30') }}
                                className={
                                    setSelectMarket === 'vn30'
                                        ? 'dropdowm-active'
                                        : 'dropdown-market'
                                }
                            >
                                VN30
                            </div>
                        </div>
                    </div>
                    <div
                        className={
                            selectMarket === "hnx" || selectMarket === "hnx30"
                                ? 'sub-menu-active'
                                : 'sub-menu-market'
                        }
                    >
                        <div
                            onClick={() => { setSelectMarket('hnx') }}
                        >
                            {labelHNX()}
                        </div>
                        <div className="dropdown-select">
                            <div
                                onClick={() => setSelectMarket('hnx')}
                                className={
                                    setSelectMarket === 'hnx'
                                        ? 'dropdowm-active'
                                        : 'dropdown-market'
                                }
                            >
                                HNX
                            </div>
                            <div
                                onClick={() => setSelectMarket('hnx30')}
                                className={
                                    setSelectMarket === 'hnx30'
                                        ? 'dropdowm-active'
                                        : 'dropdown-market'
                                }
                            >
                                HNX30
                            </div>
                        </div>
                    </div>

                    <div
                        className={
                            selectMarket === 'upcom'
                                ? 'sub-menu-active'
                                : 'sub-menu-market'
                        }
                    >
                        <div
                            onClick={() => { setSelectMarket('upcom') }}
                        >
                            {labelUPCOM()}
                        </div>

                    </div>
                </span>
            </Box>
        </div>
    );
}

export default TableToolbar;