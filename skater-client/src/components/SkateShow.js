import React from 'react';
import { connect } from "react-redux"

import "bootstrap/dist/css/bootstrap.min.css"
import { Card } from "react-bootstrap"

const Ska = ({id, name, level, url}) => {
    return(
        <Card key={id} className={level}>
            <header>
                <Card.Text><a href={url} target="_blank" rel="noopener noreferrer">{name}</a></Card.Text>
                <Card.Text>Skill: {level.charAt(0).toUpperCase() + level.slice(1)}</Card.Text>
             </header>
        </Card>
    )
}

const SkateShow = ({skates}) => {
// make card **
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