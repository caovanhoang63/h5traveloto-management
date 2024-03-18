// TableComponent.js
import React from 'react';
import './table.css';

const TableComponent = ({ data }) => {
    return (
        <table>
            <thead>
            <tr>
                <th>Reservation ID</th>
                <th>Name</th>
                <th>Room Number</th>
                <th>Total amount</th>
                <th>Amount paid</th>
                <th></th>
            </tr>
            </thead>
            <tbody>
            {data.map((reservation) => (
                <tr key={reservation.reservationId}>
                    <td>{reservation.reservationId}</td>
                    <td>{reservation.name}</td>
                    <td>{reservation.roomNumber}</td>
                    <td>${reservation.totalAmount}</td>
                    <td>${reservation.amountPaid}</td>
                    <td className={reservation.status.toLowerCase()}>{reservation.status}</td>

                    <td>
                        {/* Add any actions or buttons here */}
                        <button>View</button>
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
    );
};

export default TableComponent;