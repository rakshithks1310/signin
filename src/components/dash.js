import React from "react";
import './dash.css';
import PersonIcon from "@mui/icons-material/Person";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";

export default function Dash() {


    return (
        <div className="main">
            <div className="inner">
                <div>Customer Name</div>
                <PersonIcon />
                <div>Mahesh J</div>
            </div>

            <div className="inner">
                <div>Membership Validity</div>
                <AccountBalanceWalletIcon />
                <div>16-08-2020</div>
            </div>

            <div className="inner">
                <div>Available Purchase Limit</div>
                <CurrencyRupeeIcon />
                <div>50000.00</div>
            </div>

            <div className="inner">
                <div>Status</div>
                <CheckCircleOutlineIcon />
                <div>ACTIVE</div>
            </div>


        </div>
    );
}
