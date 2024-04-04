import React, { Children, Fragment } from "react";
import "./button.css";

const Button = function ({
    type,
    className,
    onClick,
    disabled,
    icon,
    src,
    alt,
    size = "sm",
    children,
}) {
    let content = IconNone;
    switch (icon) {
        case "only":
            content = IconOnly(src, alt);
            break;
        case "trailing":
            content = IconTrailing(src, alt, children);
            break;
        case "leading":
            content = IconLeading(src, alt, children);
            break;
        default:
            content = IconNone(children);
    }
    return (
        <Fragment>
            <button
                type={type || "button"}
                className={`button-container ${
                    size === "sm" ? "button-sm" : "button-md"
                }  ${className}`}
                onClick={onClick}
                disabled={disabled}
            >
                <div
                    className={`button-content ${
                        icon === "only" ? "margin-0" : "margin-6"
                    }`}
                >
                    {content}
                </div>
            </button>
        </Fragment>
    );
};

const IconOnly = (src, alt) => {
    return (
        <Fragment>
            <img className={"button-img"} src={src} alt={alt} />
        </Fragment>
    );
};

const IconTrailing = (src, alt, children) => {
    return (
        <Fragment>
            <span className={"button-text"}>{children}</span>
            <img className={"button-img margin-left-8"} src={src} alt={alt} />
        </Fragment>
    );
};

const IconLeading = (src, alt, children) => {
    return (
        <Fragment>
            <img className={"button-img"} src={src} alt={alt} />
            <span className={"button-text margin-left-8"}>{children}</span>
        </Fragment>
    );
};

const IconNone = (children) => {
    return (
        <Fragment>
            <span className={"button-text"}>{children}</span>
        </Fragment>
    );
};

export const PrimaryButton = function ({
    type,
    className,
    onClick,
    disabled,
    icon,
    src,
    alt,
    size,
    children,
}) {
    className = className + " button-primary";
    return (
        <Button
            type={type}
            className={className}
            onClick={onClick}
            disabled={disabled}
            icon={icon}
            src={src}
            alt={alt}
            size={size}
        >
            {children}
        </Button>
    );
};

export const SecondaryButton = function ({
    type,
    className,
    onClick,
    disabled,
    icon,
    src,
    alt,
    size,
    children,
}) {
    className = className + " secondary";

    return (
        <Button
            type={type}
            className={className}
            onClick={onClick}
            disabled={disabled}
            icon={icon}
            src={src}
            alt={alt}
            size={size}
        >
            {children}
        </Button>
    );
};

export const TransparentButton = function ({
    border,
    type,
    className,
    onClick,
    disabled,
    icon,
    src,
    alt,
    size,
    children,
}) {
    if (border === true) {
        className += " button-border";
    }
    className = className + " button-transparent";

    return (
        <Button
            type={type}
            className={className}
            onClick={onClick}
            disabled={disabled}
            icon={icon}
            src={src}
            alt={alt}
            size={size}
        >
            {children}
        </Button>
    );
};

export default Button;
