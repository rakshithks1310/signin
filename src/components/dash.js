import React from "react";
import './dash.css';
import PersonIcon from "@mui/icons-material/Person";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import usePagination from '@mui/material/usePagination';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useNavigate } from 'react-router-dom';



const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: '#a8bce0',
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

function createData(name, calories, fat, carbs, protein, Store_Details, Till_No, Cash_Memo, Memo_Date, Discounte, Total, Balance) {
    return { name, calories, fat, carbs, protein, Store_Details, Till_No, Cash_Memo, Memo_Date, Discounte, Total, Balance };
}

const rows = [
    createData("16-08-2019", "Easyday Yearly Membership", "62300496866657", "Primary", "Enrollment", "3451 ED-HO Store", "00065", 4558, "03-03-20180", 999, 0, 50000),

];

export default function Dash() {


    const List = styled('ul')({
        listStyle: 'none',
        padding: 0,
        margin: 0,
        display: 'flex',
    });

    const Accordion = styled((props) => (
        <MuiAccordion disableGutters elevation={0} square {...props} />
    ))(({ theme }) => ({
        border: `1px solid ${theme.palette.divider}`,
        "&:not(:last-child)": {
            borderBottom: 0
        },
        "&:before": {
            display: "none"
        }
    }));

    const AccordionSummary = styled((props) => (
        <MuiAccordionSummary
            expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
            {...props}
        />
    ))(({ theme }) => ({
        backgroundColor:
            theme.palette.mode === "dark"
                ? "black"
                : "#9bd6e8",
        flexDirection: "row-reverse",
        "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
            transform: "rotate(90deg)"
        },
        "& .MuiAccordionSummary-content": {
            marginLeft: theme.spacing(1)
        }
    }));

    const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
        padding: theme.spacing(2),
        borderTop: "1px solid rgba(0, 0, 0, .125)"
    }));


    const [expanded, setExpanded] = React.useState("panel1");

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
        setAge(event.target.value);
    };

    const { items } = usePagination({
        count: 1,
    });

    const [age, setAge] = React.useState('');

    const [value, setValue] = React.useState(null);

    let navigate = useNavigate();
    const goBack=()=>{
        navigate(-1);
    }


    return (
        <div className="drop">

            <div className="top">
                <div onClick={goBack}>Go Back</div>
                <div className="top_div_2">::: Customer Dashboard:::</div>
            </div>
            <div className="main">
                <div className="inner">
                    <div>Customer Name</div>
                    <PersonIcon />
                    <div><b>Mahesh J</b></div>
                </div>

                <div className="inner">
                    <div>Membership Validity</div>
                    <AccountBalanceWalletIcon />
                    <div><b>16-08-2020</b></div>
                </div>

                <div className="inner">
                    <div>Available Purchase Limit</div>
                    <CurrencyRupeeIcon />
                    <div><b>50000.00</b></div>
                </div>

                <div className="inner">
                    <div>Status</div>
                    <CheckCircleOutlineIcon />
                    <div><b>ACTIVE</b></div>
                </div>

            </div>

            <div className="accord">
                <Accordion
                    expanded={expanded === "panel1"}
                    onChange={handleChange("panel1")}
                >
                    <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                        <Typography>Personal Details</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            <div className="type">
                                Membership Type: Primary
                            </div>
                            <div className="personal">
                                <div>
                                    <p><b>Name</b> </p>
                                    <p><b>Email</b> </p>
                                    <p><b>Old Mobile</b> </p>
                                    <p><b>City</b> </p>
                                    <p><b>State</b></p>
                                </div>
                                <div className="member_div">
                                    <p>: Mahesh J</p>
                                    <p>: maheshj@gamil.com</p>
                                    <p>: </p>
                                    <p>: Bangalore</p>
                                    <p>: Karnataka</p>
                                </div>
                                <div className="personal1">
                                    <p><b>DOB</b>  </p>
                                    <p><b>Mobile</b> </p>
                                    <p><b>Address</b> </p>
                                    <p><b>Pincoded</b> </p>
                                </div>
                                <div className="member_div">
                                    <p>: 05-06-1867</p>
                                    <p>: 9999999999</p>
                                    <p>: Bsk 3rd stage bangalore </p>
                                    <p>: 560085</p>
                                </div>
                            </div>
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion
                    expanded={expanded === "panel2"}
                    onChange={handleChange("panel2")}
                >
                    <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                        <Typography>Membership Details</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            <div className="member">

                                <div>
                                    <p><b>Program </b> </p>
                                    <p><b>Membership ID </b> </p>
                                    <p><b>Register on</b> </p>
                                    <p><b>Card Status</b> </p>
                                    <p><b>Referred By</b>  </p>
                                </div>
                                <div className="member_div">
                                    <p>: Easyday Club</p>
                                    <p>: 2100113296</p>
                                    <p>: 16-08-2019</p>
                                    <p>: ACTIVE</p>
                                    <p>: </p>
                                </div>

                                <div className="member1">
                                    <p><b>Scheme</b>  </p>
                                    <p><b>Purchase Limit</b> </p>
                                    <p><b>Card no</b>  </p>
                                    <p><b>Registered Store</b> </p>
                                </div>
                                <div className="member_div">
                                    <p>: Easyday Club</p>
                                    <p>: 50000.00</p>
                                    <p>: 62300496866657 </p>
                                    <p>: 3451-ED-HO Store</p>
                                </div>

                            </div>
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion
                    expanded={expanded === "panel3"}
                    onChange={handleChange("panel3")}
                >
                    <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                        <Typography>Trasaction History</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            <div className="from">
                                <div className="invoice">
                                    <div className="f1">From</div>
                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                        <DatePicker

                                            value={value}
                                            onChange={(newValue) => {
                                                setValue(newValue);
                                            }}
                                            renderInput={(params) => <TextField {...params} />}
                                        />
                                    </LocalizationProvider>
                                    <div className="f2">To</div>

                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                        <DatePicker

                                            value={value}
                                            onChange={(newValue) => {
                                                setValue(newValue);
                                            }}
                                            renderInput={(params) => <TextField {...params} />}
                                        />
                                    </LocalizationProvider>
                                    <div className="f3">
                                        <button className="clear_button">Clear</button>
                                    </div>
                                    <div className="f4">
                                        <b>Invoice amount: </b>
                                    </div>
                                    <div >
                                        <Box className="f5">
                                            <FormControl sx={{ m: 1, minWidth: 220 }}>
                                                <InputLabel id="demo-simple-select-label">All</InputLabel>
                                                <Select
                                                    labelId="demo-simple-select-label"
                                                    id="demo-simple-select"
                                                    value={age}
                                                    label="Age"
                                                    onChange={handleChange}
                                                >
                                                    <MenuItem value={10}>Enter value</MenuItem>
                                                    <MenuItem value={20}>Twenty</MenuItem>
                                                    <MenuItem value={30}>Thirty</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </Box>

                                    </div>

                                </div>




                            </div>

                            <TableContainer component={Paper}>
                                <Table sx={{ minWidth: 500 }} aria-label="customized table">
                                    <TableHead>
                                        <TableRow>
                                            <StyledTableCell align="center">Tax Date</StyledTableCell>
                                            <StyledTableCell align="center">Scheme</StyledTableCell>
                                            <StyledTableCell align="center">Instrument</StyledTableCell>
                                            <StyledTableCell align="center">Member Type</StyledTableCell>
                                            <StyledTableCell align="center">Type</StyledTableCell>
                                            <StyledTableCell align="center">Store Details</StyledTableCell>
                                            <StyledTableCell align="center">Till No</StyledTableCell>
                                            <StyledTableCell align="center">Cash Memo</StyledTableCell>
                                            <StyledTableCell align="center">Cash Memo Date</StyledTableCell>
                                            <StyledTableCell align="center">Discounted Invoice Amount</StyledTableCell>
                                            <StyledTableCell align="center">Total Invoice Amount</StyledTableCell>
                                            <StyledTableCell align="center">Balance Available</StyledTableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {rows.map((row) => (
                                            <StyledTableRow key={row.name}>
                                                <StyledTableCell width={100} align="center" component="th" scope="row">
                                                    {row.name}
                                                </StyledTableCell>
                                                <StyledTableCell align="center">{row.calories}</StyledTableCell>
                                                <StyledTableCell align="center">{row.fat}</StyledTableCell>
                                                <StyledTableCell align="center">{row.carbs}</StyledTableCell>
                                                <StyledTableCell align="center">{row.protein}</StyledTableCell>
                                                <StyledTableCell width={150} align="center">{row.Store_Details}</StyledTableCell>
                                                <StyledTableCell align="center">{row.Till_No}</StyledTableCell>
                                                <StyledTableCell align="center">{row.Cash_Memo}</StyledTableCell>
                                                <StyledTableCell width={150} align="center">{row.Memo_Date}</StyledTableCell>
                                                <StyledTableCell align="center">{row.Discounte}</StyledTableCell>
                                                <StyledTableCell align="center">{row.Total}</StyledTableCell>
                                                <StyledTableCell align="center">{row.Balance}</StyledTableCell>
                                            </StyledTableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>

                            <nav className="pagina">
                                <List>
                                    {items.map(({ page, type, selected, ...item }, index) => {
                                        let children = null;

                                        if (type === 'start-ellipsis' || type === 'end-ellipsis') {
                                            children = '…';
                                        } else if (type === 'page') {
                                            children = (
                                                <button
                                                    type="button"
                                                    style={{
                                                        fontWeight: selected ? 'bold' : undefined,
                                                    }}
                                                    {...item}
                                                >
                                                    {page}
                                                </button>
                                            );
                                        } else {
                                            children = (
                                                <button type="button" {...item}>
                                                    {type}
                                                </button>
                                            );
                                        }

                                        return <li key={index}>{children}</li>;
                                    })}
                                </List>
                            </nav>
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </div>

        </div>



    );
}
