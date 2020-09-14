import React, { Component } from 'react'
import { withRouter } from "react-router-dom";
import "./Alert.css"

class Alert extends Component {
    render() {
        let { title,isShow} = this.props;
        return (
            <div>
                {isShow ? <div className='alert' onClick={() => { this.goBack() }} >{title}</div> : null}
                {/* <div className="header-title">
                    {title}
                </div> */}
            </div>
        )
    }
}

export default withRouter(Alert)
