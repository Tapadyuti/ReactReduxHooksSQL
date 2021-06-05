import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { buyCake, addCake } from '../redux';

function HooksCakeContainer() {
    const numbOfCakes = useSelector(state => state.numbOfCakes);
    const dispatch = useDispatch();


    return (
        <div>
            <h2>From Hooks: Number of cakes: {numbOfCakes}</h2>
            <button onClick={() => { dispatch(buyCake()) }} disabled={!numbOfCakes}>Buy Cake</button>
            <button onClick={() => { dispatch(addCake()) }} >Add Cake</button>
        </div>
    )
}

export default HooksCakeContainer
