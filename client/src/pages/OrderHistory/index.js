import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Moment from "react-moment";
import {
  withStyles,
  makeStyles,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@material-ui/core";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import { GlobalState } from "../../GlobalState";

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
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function OrderHistory() {
  const state = useContext(GlobalState);
  const [orderHistory] = state.userAPI.orderHistory;
  console.log(orderHistory, "history");

  function createData(PaymentID, PurchasedAt, View) {
    return { PaymentID, PurchasedAt, View };
  }

  const rows = orderHistory.map((order) => {
    return createData(order.paymentID, order.createdAt, order._id);
  });

  const useStyles = makeStyles({
    table: {
      minWidth: 700,
    },
  });

  const classes = useStyles();
  if (!orderHistory) return <div>No Orders</div>;

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>PaymentID</StyledTableCell>
            <StyledTableCell>Date Of Purchased</StyledTableCell>
            <StyledTableCell>View</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.PaymentID}>
              <StyledTableCell>{row.PaymentID}</StyledTableCell>
              <StyledTableCell>
                <Moment format="DD/MM/YYYY" date={row.PurchasedAt} />
              </StyledTableCell>
              <StyledTableCell>
                <Link to={`/history/${row.View}`}>
                  <ArrowForwardIcon />
                </Link>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default OrderHistory;
