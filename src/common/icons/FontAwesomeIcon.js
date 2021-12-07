import classes from "./styles.module.css";

const FontAwesomeIcon = ({
    title,
    size,
    color,
    paddingLeft,
    paddingRight,
    onMouseEnter,
    onMouseOut,
    onClick,
    tooltip
}) => {

    const styles = {
        fontSize: size || "25",
        color: color,
        paddingLeft: paddingLeft,
        paddingRight: paddingRight,
        zIndex: 99
    }

    return <i
        onClick={onClick}
        onMouseEnter={onMouseEnter}
        onMouseOut={onMouseOut}
        className={`fa fa-${title} ${classes.faIcon}`}
        style={{ ...styles }}
        title={tooltip}
        aria-hidden="true">
    </i>
}

export default FontAwesomeIcon