import React from "react";
import PropTypes from "prop-types";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";

const PrivateNavHeader = ({ collapsed }) => (
    <>
        <div style={{ padding: collapsed ? 8 : 16, transition: "0.3s", backgroundColor: "#17A2B8" }}>
            <Avatar
                style={{
                    width: collapsed ? 48 : 60,
                    height: collapsed ? 48 : 60,
                    transition: "0.3s",
                }}
            />
            <div style={{ paddingBottom: 16 }} />
            <Typography variant={"h6"} noWrap>
                Vehicle Inspection
            </Typography>
            <Typography color={"textSecondary"} noWrap gutterBottom>
                inspection@gmail.com
            </Typography>
        </div>
        <Divider />
    </>
);

PrivateNavHeader.propTypes = {
    collapsed: PropTypes.bool
};
PrivateNavHeader.defaultProps = {
    collapsed: false
};

export default PrivateNavHeader;
