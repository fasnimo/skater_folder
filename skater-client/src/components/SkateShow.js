import React from 'react';
import { connect } from "react-redux"

const Ska = ({id, name, level, url}) => {
    return(
        <div key={id} className={level}>
            <header>
                <p><a href={url} target="_blank" rel="noopener noreferrer">{name}</a></p>
                <p>Skill: {level.charAt(0).toUpperCase() + level.slice(1)}</p>
             </header>
        </div>
    )
}

const SkateShow = ({skates}) => {
// make card
// add imgs
    return(
        <div className="skate-list">
            {skates.map(Ska)}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        skates: state.skates
    }
}
export default connect(mapStateToProps)(SkateShow);