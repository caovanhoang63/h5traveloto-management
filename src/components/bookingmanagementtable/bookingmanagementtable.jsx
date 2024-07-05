import React, { useMemo } from "react";
import { useTable } from "react-table";
import "./bookingmanagementtable.css";

const BookingManagementTable = ({ data, columns }) => {
    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({ columns, data });

    return (
        <div className="booking-management-table-container">
            <table {...getTableProps()}>
                <thead>
                    {headerGroups.map((headerGroup) => (
                        <tr
                            className={"booking-management-table-header"}
                            {...headerGroup.getHeaderGroupProps()}
                        >
                            {headerGroup.headers.map((column) => (
                                <th {...column.getHeaderProps()}>
                                    {column.render("Header")}
                                </th>
                            ))}
                            <th></th>
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {rows.map((row) => {
                        prepareRow(row);
                        return (
                            <tr className="booking-management-table-body" {...row.getRowProps()}>
                                {row.cells.map((cell, index) => {
                                    return (
                                            <td {...cell.getCellProps()}
                                                style={{color: (index == 0) ? 'var(--Grey900)' : 'var(Grey--600)'}}>
                                                {cell.render("Cell")}
                                            </td>
                                        );
                                })}
                                <td></td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default BookingManagementTable;
