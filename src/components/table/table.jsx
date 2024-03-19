import React, {useMemo} from "react";
import {useTable} from "react-table";
import "./table.css";
import {RedTag} from "../tag/tag";

const Table = ({data, columns}) => {
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow
    } = useTable({columns, data});

    ;

    return (
        <div className="table-container">
            <table {...getTableProps()}>
                <thead>
                {headerGroups.map((headerGroup) => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map((column) => (
                            <th {...column.getHeaderProps()}>{column.render("Header")}</th>
                        ))}
                        <th></th>
                    </tr>
                ))}

                </thead>
                <tbody {...getTableBodyProps()}>
                {rows.map((row) => {
                    prepareRow(row);
                    return (
                        <tr {...row.getRowProps()}>
                            {row.cells.map((cell, index) => {
                                if (index === row.cells.length - 1) {
                                    // Nếu là phần tử cuối cùng, chỉ hiển thị RedTag
                                    return (
                                        <td {...cell.getCellProps()}>
                                            <RedTag>{cell.value}</RedTag>
                                        </td>
                                    );
                                } else {
                                    // Ngược lại, hiển thị dữ liệu bình thường
                                    return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
                                }
                            })}
                            <td>
                                <button>View</button>
                            </td>
                        </tr>
                    );
                })}
                </tbody>
            </table>
        </div>
    );
};

export default Table;