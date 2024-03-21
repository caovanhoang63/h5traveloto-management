import "./searchbar.css";
import { useState, useEffect, useRef } from "react";
import imageSearch from "../../assets/iconSearch.png";
import imageHistory from "../../assets/iconHistory.png";
import imageDelete from "../../assets/iconDelete.png";

function SearchBar() {
    const [searchQuery, setSearchQuery] = useState("");
    const [searchHistory, setSearchHistory] = useState(() => {
        return JSON.parse(localStorage.getItem("searchHistory")) ?? [];
    });
    const [isVisibleHistory, setIsVisibleHistory] = useState(false);
    const containerRef = useRef(null);
    const inputRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                containerRef.current &&
                !containerRef.current.contains(event.target)
            ) {
                setIsVisibleHistory(false);
            }
        };

        document.addEventListener("click", handleClickOutside);

        return () => document.removeEventListener("click", handleClickOutside);
    }, []);

    const blurInput = () => {
        inputRef.current.blur();
        setIsVisibleHistory(false);
    };

    const setItemHistory = (value) => {
        setSearchHistory((prev) => {
            let newHistory;

            const index = prev.indexOf(value);

            if (index !== -1) {
                newHistory = [
                    value,
                    ...prev.slice(0, index),
                    ...prev.slice(index + 1),
                ];
            } else {
                newHistory = [value, ...prev];
            }

            localStorage.setItem("searchHistory", JSON.stringify(newHistory));

            return newHistory;
        });
    };

    const deleteItemHistory = (value) => {
        setSearchHistory((prev) => {
            let newHistory;

            const index = prev.indexOf(value);

            if (index !== -1) {
                newHistory = [
                    ...prev.slice(0, index),
                    ...prev.slice(index + 1),
                ];
            } else {
                newHistory = [value, ...prev];
            }

            localStorage.setItem("searchHistory", JSON.stringify(newHistory));

            return newHistory;
        });
    };

    const handleSearch = (value) => {
        setItemHistory(value);
        blurInput();
    };

    const handleClickItemHistory = (value) => {
        setSearchQuery(value);
        setItemHistory(value);
        blurInput();
    };

    const handleDeleteItemHistory = (value) => {
        deleteItemHistory(value);
    };

    return (
        <div className="containerSearchBar" ref={containerRef}>
            <div className="searchBar">
                <img src={imageSearch} alt="" className="searchBar__icon" />
                <input
                    type="text"
                    ref={inputRef}
                    value={searchQuery}
                    className="searchBar__input"
                    placeholder="Search for room or offers"
                    onChange={(event) => setSearchQuery(event.target.value)}
                    onFocus={() => setIsVisibleHistory(true)}
                    onKeyDown={(event) => {
                        if (event.key === "Enter") {
                            handleSearch(searchQuery);
                        }
                    }}
                />
            </div>
            {isVisibleHistory && (
                <div className="history">
                    <span className="history__title">Lịch sử tìm kiếm</span>
                    <ul className="history__list">
                        {searchHistory.map((value, index) => (
                            <li
                                key={index}
                                className="history__item"
                                onClick={() => handleClickItemHistory(value)}
                            >
                                <img
                                    src={imageHistory}
                                    alt=""
                                    className="history__icon"
                                />
                                <span className="history__item-text">
                                    {value}
                                </span>
                                <img
                                    src={imageDelete}
                                    alt=""
                                    className="history__icon-delete"
                                    onClick={(event) => {
                                        event.stopPropagation();
                                        handleDeleteItemHistory(value);
                                    }}
                                />
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default SearchBar;