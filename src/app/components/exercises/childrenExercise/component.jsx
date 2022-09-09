import React from "react";
import PropTypes from "prop-types";

const Component = ({ orderNumber }) => {
    return <div>{orderNumber} Компонент списка</div>;
};

Component.propTypes = {
    orderNumber: PropTypes.number
};

export default Component;
