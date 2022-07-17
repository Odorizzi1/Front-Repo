
import { Button } from "@react-md/button";

import React from "react";
export class O_Button extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Button id="text-button-1"
                theme="clear">
                {this.props.label}
            </Button>
        )
    }
}
