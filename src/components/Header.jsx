import React from "react";
import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title, onAdd, showAdd }) => {


    return (
        <header className="header">
            {/* <h1 style={{ color: 'red', backgroundColor: 'black'}}>{title}</h1> */}
            {/* <h1 style={headingStyle}>{title}</h1> */}
            <h1>{title}</h1>
            <Button color={showAdd ? 'red' : 'green'} text={showAdd ? 'Close' : 'Add'} onClick={onAdd} ></Button>
        </header>
    )
};

Header.defaultProps = {
    title: 'Task Tracker'
};

Header.propTypes = {
    title: PropTypes.string,
}

// const headingStyle = {
//     color: 'red',
//     backgroundColor: 'black'
// }

export default Header;