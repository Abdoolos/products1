import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Logo = ({ classOption, variant = "default" }) => {
    return (
        <Link
            className={`logo-wrapper ${classOption}`}
            to={process.env.PUBLIC_URL + "/"}
        >
            <div className={`prohuset-logo ${variant}`}>
                <div className="logo-icon">
                    <div className="icon-square"></div>
                </div>
                <div className="logo-text">
                    <span className="brand-name">ProHuset</span>
                </div>
            </div>
        </Link>
    );
};

Logo.propTypes = {
    classOption: PropTypes.string,
    variant: PropTypes.oneOf(["default", "footer", "mobile"]),
};

Logo.defaultProps = {
    classOption: "text-center",
    variant: "default",
};

export default Logo;
