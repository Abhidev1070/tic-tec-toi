import React, { useState } from 'react'
import './tic-tac-toi.css'

let array = ["", "", "", "", "", "", "", "", ""];
const Tictactoi = () => {
    const [count, setCount] = useState(0);
    const [lock, setLock] = useState(false);

    const myfunction = (e, num) => {
        if (lock || array[num] !== "") {
            return;
        }

        if (count % 2 === 0) {
            e.target.innerHTML = 'X';
            array[num] = "X";
        } else {
            e.target.innerHTML = 'O';
            array[num] = "O";
        }

        setCount(prev => prev + 1);
        checkwin();
    };

    const won = (winner) => {
        setLock(true);
        setTimeout(() => {
            alert(`${winner} has won!`);
        }, 100);
    };

    const checkwin = () => {
        const winConditions = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8],
            [0, 3, 6], [1, 4, 7], [2, 5, 8],
            [0, 4, 8], [2, 4, 6],
        ];

        for (let condition of winConditions) {
            const [a, b, c] = condition;
            if (array[a] && array[a] === array[b] && array[b] === array[c]) {
                won(array[a]);
                return;
            }
        }

        if (array.every(cell => cell !== "")) {
            setLock(true);
            setTimeout(() => {
                alert("It's a draw!");
            }, 100);
        }
    };

    return (
        <>
            <div className='game'>
                <div className="main_box">
                    <div>
                        <div className="box" onClick={(e) => myfunction(e, 0)}></div>
                        <div className="box" onClick={(e) => myfunction(e, 1)}></div>
                        <div className="box" onClick={(e) => myfunction(e, 2)}></div>
                    </div>
                    <div>
                        <div className="box" onClick={(e) => myfunction(e, 3)}></div>
                        <div className="box" onClick={(e) => myfunction(e, 4)}></div>
                        <div className="box" onClick={(e) => myfunction(e, 5)}></div>
                    </div>
                    <div>
                        <div className="box" onClick={(e) => myfunction(e, 6)}></div>
                        <div className="box" onClick={(e) => myfunction(e, 7)}></div>
                        <div className="box" onClick={(e) => myfunction(e, 8)}></div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Tictactoi;

