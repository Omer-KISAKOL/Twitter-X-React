import {createElement} from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

export default function Button({as, size, variant, className, children, ...props}) {
    return createElement(as, {
        type: 'button',
        className: classNames("bg-[#1d9bf0] hover:bg-[#8CC3E7] rounded-full flex items-center justify-center font-bold transition-all",{
            "px-4 h-8 text-sm": size === 'small',
            "px-4 h-9": size === 'normal',
            "px-4 text-[1.063rem] h-[3.25rem] w-full": size === 'large',
            [className]: true
        }),
        ...props
    },children)
}

Button.propTypes = {
    as: PropTypes.any,
    size: PropTypes.oneOf(['small', 'normal', 'large']),
    props: PropTypes.object,
    className: PropTypes.string
}

Button.defaultProps = {
    as: 'button',
    size: 'normal',
}