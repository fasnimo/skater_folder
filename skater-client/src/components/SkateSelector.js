import React from 'react';
import { fetchSkates } from "../actions/skateAction"
import { connect } from "react-redux"

class SkateSelector extends React.Component{
    state={
        level: ""
    }

    handleChange = (e) => {
        this.setState({
            level: e.target.value
        })
    }
    
    componentDidUpdate(){
        this.props.fetchSkates(this.state.level)
    }

    render(){
        return ( 
            <>  
                <label>Select Style: </label><br/>
                <select name="skate-selector" id="skate-selector" onChange={this.handleChange}>
                    <option value="placeholder"> Select </option>
                    <option value="urban"> Urban </option>
                    <option value="recreational"> Recreational</option>
                    <option value="speed"> Speed </option>
                    <option value="aggressive"> Aggressive </option>
                </select>
            </>    
        );
    }  
};

export default connect(null, {fetchSkates})(SkateSelector);