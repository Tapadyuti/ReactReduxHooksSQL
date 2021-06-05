import React from 'react'
import { connect } from 'react-redux';
import { buyCake, addCake } from '../redux';

function CakeContainer(props) {
    console.dir(props)
    return (
        <div>
            <h2>Number of Cakes - {props.numbOfCakes}</h2>
            <button onClick={props.buyCake} disabled={!props.numbOfCakes}>Buy Cake</button>
            <button onClick={props.addCake}>Add Cake</button>
        </div>
    )
}


const mapStateToProps = state => {
    return {
        numbOfCakes: state.numbOfCakes
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyCake: () => dispatch(buyCake()),
        addCake: () => dispatch(addCake())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer)
