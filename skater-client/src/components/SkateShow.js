import React from 'react';
import { connect } from "react-redux"
import "bootstrap/dist/css/bootstrap.min.css"
import Card from "react-bootstrap/Card"
import Container from "react-bootstrap/Container"

const Ska = ({id, name, level, url}) => {
    return(
        <Card key={id} className={level}>
            <Card.Body>
               <Card.Text><a href={url} target="_blank" rel="noopener noreferrer">{name}</a></Card.Text>
                <Card.Text>Skill: {level.charAt(0).toUpperCase() + level.slice(1)}</Card.Text>
             </Card.Body>
        </Card>
    )
}

const SkateShow = ({skates}) => {
    return(
        <div className="skate-list">
            <Container>
                {skates.map(Ska)}
            </Container>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        skates: state.skates
    }
}
export default connect(mapStateToProps)(SkateShow);