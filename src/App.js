import logo from './logo.svg';
import './App.css';
import Table from "./components/table/table";
import TableComponent from "./components/table/table";
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
    status: "pick-up"
  },
  {
    reservationId: "125",
    name: "Laurent Perrier",
    roomNumber: "a125",
    totalAmount: "200",
    amountPaid: "100",
    date: "19/09/17",
    status: "inspected"
  },
  {
    reservationId: "126",
    name: "Michael Levi",
    roomNumber: "a126",
    totalAmount: "200",
    amountPaid: "100",
    date: "24/12/08",
    status: "dirty"
  },
  {
    reservationId: "126",
    name: "Richard Gran",
    roomNumber: "a126",
    totalAmount: "200",
    amountPaid: "100",
    date: "04/10/21",
    status: "inspected"
  },
];
function App() {
  return (
      <TableComponent data={TABLE_ROWS}></TableComponent>
  );
}

export default App;
