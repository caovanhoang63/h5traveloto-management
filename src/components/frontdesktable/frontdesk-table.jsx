import React, { useMemo } from "react";
import { useTable } from "react-table";
import "./frontdesk-table.css";
import Tag, { BlueTag, GreenTag, RedTag, YellowTag } from "../tag/tag";

const FrontdeskTable = ({ data, columns }) => {
    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
        useTable({ columns, data });

    const handleOnClickRow = (index) => {
        console.log(data[index]);
    };

    return (
        <div className="frontdesk-table-container">
            <table {...getTableProps()}>
                <thead>
                    {headerGroups.map((headerGroup) => (
                        <tr
                            className={"frontdesk-table-header"}
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
                    {rows.map((row, index0) => {
                        prepareRow(row);
                        return (
                            <tr
                                className="frontdesk-table-body"
                                {...row.getRowProps()}
                                onClick={() => handleOnClickRow(index0)}
                            >
                                {row.cells.map((cell, index) => {
                                    return (
                                        <td
                                            {...cell.getCellProps()}
                                            style={{
                                                color:
                                                    index == 0 ||
                                                    index == 3 ||
                                                    index == 4
                                                        ? "var(--Grey900)"
                                                        : "var(Grey--600)",
                                            }}
                                        >
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

export default FrontdeskTable;
