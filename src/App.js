import logo from './logo.svg';
import './App.css';
import Table from "./components/table/table";
import TableComponent from "./components/table/table";
import Tag, {CleanTag, DirtyTag, Inspected, InspectedTag, OngoingTag, PickUpTag, RedTag} from "./components/tag/tag";
import React from "react";

const TABLE_ROWS = [
    {
        reservationId: "123",
        name: "John Michael",
        roomNumber: "a123",
        totalAmount: "200",
        amountPaid: "100",
        date: "23/04/18",
        status: "Clean"
    },
    {
        reservationId: "124",
        name: "Alexa Liras",
        roomNumber: "a124",
        totalAmount: "200",
        amountPaid: "100",
        date: "23/04/18",
        status: "Pick up"
    },
    {
        reservationId: "125",
        name: "Laurent Perrier",
        roomNumber: "a125",
        totalAmount: "200",
        amountPaid: "100",
        date: "19/09/17",
        status: "Inspected"
    },
    {
        reservationId: "126",
        name: "Michael Levi",
        roomNumber: "a126",
        totalAmount: "200",
        amountPaid: "100",
        date: "24/12/08",
        status: "Dirty"
    },
    {
        reservationId: "126",
        name: "Richard Gran",
        roomNumber: "a126",
        totalAmount: "200",
        amountPaid: "100",
        date: "04/10/21",
        status: "Inspected"
    },
];
const columns = [
    {
        Header: "Reservation ID",
        accessor: "reservationId",
    },
    {
        Header: "Name",
        accessor: "name",
    },
    {
        Header: "Room Number",
        accessor: "roomNumber",
    },
    {
        Header: "Amount Paid",
        accessor: "amountPaid",
    },
    {
        Header: "Total Amount",
        accessor: "totalAmount",
    },
    {
        Header: "Status",
        accessor: "status",
    },

];

function App() {
    return (<div>
            <Table data={TABLE_ROWS} columns={columns}></Table>
            <RedTag>5 rooms</RedTag>
    </div>

    );
}

export default App;
