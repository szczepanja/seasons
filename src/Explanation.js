import * as React from "react";
import * as Icon from "react-bootstrap-icons";
import Tooltip from './Tooltip';


export const Explanation = ({ text, direction }) => {

    return (
        <Tooltip text={text} direction={direction}>
            <Icon.QuestionCircle />
        </Tooltip>
    )
}

export default React.memo(Explanation);