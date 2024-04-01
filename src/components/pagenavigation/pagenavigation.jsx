import { useEffect, useState } from "react";
import Button, { TransparentButton } from "../button/button";
import "./pagenavigation.css";

function PageNavigation({
    page,
    onNextPage,
    onPreviousPage,
    onClickPage,
    type,
}) {
    const [pageSelected, setPageSelected] = useState(1);
    useEffect(() => {
        setPageSelected(1);
    }, [type]);

    const pageNumbers = Array.from({ length: page }, (_, index) => index + 1);

    const handleClickPage = (page) => {
        if (page == pageSelected) return;
        setPageSelected(page);
        onClickPage(page);
    };

    const handleNextPage = () => {
        if (pageSelected < page) {
            setPageSelected(pageSelected + 1);
            onNextPage(pageSelected + 1);
        }
    };

    const handlePreviousPage = () => {
        if (pageSelected > 1) {
            setPageSelected(pageSelected - 1);
            onPreviousPage(pageSelected - 1);
        }
    };

    return (
        <div className="page-navigate-container">
            <Button
                className={
                    "page-navigation__button " +
                    (pageSelected == 1 ? "page-navigate__button--disable" : "")
                }
                disabled={pageSelected == 1}
                onClick={handlePreviousPage}
            >
                Previous
            </Button>

            <div className="page-navigation__container-page">
                {pageNumbers.map((value, index) => (
                    <Button
                        key={index}
                        className={
                            "page-navigation__button-page " +
                            (pageSelected == value
                                ? "page-navigation__button-page--selected"
                                : "")
                        }
                        onClick={() => handleClickPage(value)}
                    >
                        {value}
                    </Button>
                ))}
            </div>

            <Button
                className={
                    "page-navigation__button " +
                    (pageSelected == page
                        ? "page-navigate__button--disable"
                        : "")
                }
                disabled={pageSelected == page}
                onClick={handleNextPage}
            >
                Next
            </Button>
        </div>
    );
}

export default PageNavigation;
