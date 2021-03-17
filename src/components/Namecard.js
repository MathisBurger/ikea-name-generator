import React from 'react';
import './Namecard.css';
import {GenerateName} from "../Generate";

export class Namecard extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        let list = [];
        for (let i=0; i<10; i++) {
            list.push(<div className={"name-card-element"}>{GenerateName()}</div>);
        }

        if (this.props.render) {
            return (
                <div className={"name-card"}>
                    <div className={"name-card-head"}>
                        new produkt names
                    </div>
                    {list}
                </div>
            );
        } else {
            return null;
        }
    }
}
