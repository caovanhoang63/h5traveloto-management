import React, { useMemo, useState } from "react";
import { useTable } from "react-table";
import "./deal-table.css";
import Tag, { BlueTag, GreenTag, RedTag, YellowTag } from "../tag/tag";

const DealTable = ({ data, columns, getData = () => {} }) => {
    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
        useTable({ columns, data });

    const TagType = (props) => {
        const { text } = props;
        if (
            text === "Clean" ||
            text === "Ongoing" ||
            text === "Available" ||
            text === "Pending" ||
            text === "Confirmed"
        ) {
            return <BlueTag>{text}</BlueTag>;
        } else if (
            text === "Dirty" ||
            text === "Full" ||
            text === "Inactive" ||
            text === "Expired" ||
            text === "Booked" ||
            text === "Canceled" ||
            text === "Check-In"
        ) {
            return <RedTag>{text}</RedTag>;
        } else if (
            text === "Inspected" ||
            text === "New" ||
            text === "Reserved" ||
            text === "Paid" ||
            text === "Checked-Out" ||
            text === "Pay-In-Hotel"
        ) {
            return <GreenTag>{text}</GreenTag>;
        } else if (
            text === "Pick up" ||
            text === "Waitlist" ||
            text === "Blocked"
        ) {
            return <Tag>{text}</Tag>;
        }
        // Xử lý trường hợp khác nếu cần
        return <span>{text}</span>;
    };

    const handleOnClickRow = (index) => {
        console.log(data[index]);
        getData(data[index]);
    };

    return (
        <div className="deal-table-container">
            <table {...getTableProps()}>
                <thead>
                    {headerGroups.map((headerGroup) => (
                        <tr
                            className={"deal-table-header"}
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
                                className="deal-table-content"
                                {...row.getRowProps()}
                                onClick={() => handleOnClickRow(index0)}
                            >
                                {row.cells.map((cell, index) => {
                                    if (index === row.cells.length - 1) {
                                        // Nếu là phần tử cuối cùng, chỉ hiển thị RedTag
                                        return (
                                            <td {...cell.getCellProps()}>
                                                {/*<RedTag>{cell.value}</RedTag>*/}
                                                <TagType
                                                    text={cell.value}
                                                ></TagType>
                                            </td>
                                        );
                                    } else {
                                        // Ngược lại, hiển thị dữ liệu bình thường
                                        return (
                                            <td
                                                {...cell.getCellProps()}
                                                style={{
                                                    color:
                                                        index == 0
                                                            ? "var(--Grey900)"
                                                            : "var(Grey--600)",
                                                }}
                                            >
                                                {cell.render("Cell")}
                                            </td>
                                        );
                                    }
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

export default DealTable;
