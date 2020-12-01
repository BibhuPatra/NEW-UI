import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import DeleteIcon from '@material-ui/icons/Delete';
import PersonAddRoundedIcon from '@material-ui/icons/PersonAddRounded';
import axios from 'axios'
import './st.css'


const StyledTableCell = withStyles((theme) => ({
	head: {
		backgroundColor: theme.palette.common.black,
		color: theme.palette.common.white,
	},
	body: {
		fontSize: 14,
	},
}))(TableCell);
const StyledTableRow = withStyles((theme) => ({
	root: {
		'&:nth-of-type(odd)': {
			backgroundColor: theme.palette.action.hover,
		},
	},
}))(TableRow);
let temp=[];
const useStyles = makeStyles({
	table: {
		minWidth: 700,
	},
});

export default function CustomizedTables() {
	const [open, setOpen] = React.useState(false);
	const classes = useStyles();
const handleDrawerClose = () => {
	setOpen(true);
	};
		const URL = 'http://localhost:52511/api/Dashboard';
		axios
			.get(URL, {
				headers: {
					'Content-Type': 'application/json',
				},
			})
			.then((response) => {
				console.log(response.data);
				temp = response.data;
			})
			.catch((response) => {
				console.log(response);
			});
	return (
		<>
			<div className="bulk">
				<button className="btn1" onClick={handleDrawerClose}>Show DATA</button>
			</div>
		<TableContainer component={Paper}>
			<Table className={classes.table} aria-label='customized table'>
				<TableHead>
					<TableRow>
						<StyledTableCell>UserID</StyledTableCell>
						<StyledTableCell align='center'>UserName</StyledTableCell>
						<StyledTableCell align='center'>Type</StyledTableCell>
						<StyledTableCell align='center'>Modified/Unmodified</StyledTableCell>
						<StyledTableCell align='center'>Edit</StyledTableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{temp.map((temp2) => {
						return (
							<StyledTableRow key={temp2.userID}>
								<StyledTableCell component='th' scope='s'>
									{temp2.userID}
								</StyledTableCell>
								<StyledTableCell align='center'>{temp2.userName}</StyledTableCell>
								<StyledTableCell align='center'>{temp2.userType}</StyledTableCell>
								<StyledTableCell align='center'>False</StyledTableCell>
								<StyledTableCell align='center'>{<div><DeleteIcon /> &nbsp;
							<PersonAddRoundedIcon /></div>}</StyledTableCell>
							</StyledTableRow>
						);
					})}
				</TableBody>
			</Table>
			</TableContainer>
		</>
		);
}