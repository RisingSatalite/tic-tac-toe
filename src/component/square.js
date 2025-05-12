'use client'

export default function Square({ prop, onClickFunction, number = 0, selected = 64, row=0 }) {    
    return (
        <button onClick={onClickFunction} className="square">
            {prop}
        </button>
    );
}