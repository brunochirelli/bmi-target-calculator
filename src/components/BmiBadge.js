import React from 'react';
import PropTypes from 'prop-types';
import { Chip, Avatar } from '@material-ui/core';

const BmiBadge = ({ label, color }) => (
    <>
        <Chip variant="outlined" avatar={<Avatar style={{ background: color }}> </Avatar>} label={label} />
    </>
);

export default BmiBadge;

BmiBadge.propTypes = {
    label: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
};
