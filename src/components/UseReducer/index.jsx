import React, { useReducer, useRef } from 'react';

UseReducer.propTypes = {

};
//initState
//Action
// Reducer
// dispatch

/*example basic  */
const initState = 0

// //action
const ACTION_UP = 'up'
const ACTION_DOWN = 'down'

// // reducer
const reducer = (state, action) => {

    switch (action) {
        case ACTION_UP:
            return state + 1;

        case ACTION_DOWN:
            return state - 1;
        default:
            throw new Error("loi")
    }
}

//initstate
// const initState = {
//     job: "",
//     jobs: []
// }
// //action
// const SET_JOB = 'setJob'
// const ADD_JOB = 'addJob'
// const DELETE_JOB = 'deleteJob'

// const setJob = (payload) => {

//     return {
//         type: SET_JOB,
//         payload
//     }
// }
// const addJob = (payload) => {

//     return {
//         type: ADD_JOB,
//         payload
//     }
// }
// const deleteJob = (payload) => {

//     return {
//         type: DELETE_JOB,
//         payload
//     }
// }
// //reducer
// const reducer = (state, action) => {
//     console.log(action);
//     switch (action.type) {
//         case SET_JOB:
//             return {
//                 ...state,
//                 job: action.payload
//             }
//         case ADD_JOB:
//             return {
//                 ...state,
//                 jobs: [...state.jobs, action.payload]
//             }
//         case DELETE_JOB:
//             let newJob = [...state.jobs]
//             newJob.splice(action.payload, 1)
//             return {
//                 ...state,
//                 jobs: newJob
//             }
//         default:
//             break;
//     }

//     return state
// }
//dispatch

function UseReducer(props) {

    const [count, dispatch] = useReducer(reducer, initState)
    // const inputRef = useRef()

    // const [state, dispatch] = useReducer(reducer, initState)
    // const { job, jobs } = state
    // const handleSubmit = () => {
    //     dispatch(addJob(job))
    //     dispatch(setJob(""))
    //     inputRef.current.focus()
    // }

    // const handleDelete = (index) => {
    //     dispatch(deleteJob(index))
    // }
    // console.log(jobs);
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => dispatch(ACTION_UP)}>up</button>
            <button onClick={() => dispatch(ACTION_DOWN)}>down</button>
            {/* <input ref={inputRef} type="text" value={job} onChange={e => { dispatch(setJob(e.target.value)) }} />
            <button onClick={handleSubmit}>add</button>
            <ul>
                {jobs && jobs.map((item, index) => {
                    return <li key={index}>{item} <span onClick={() => handleDelete(index)}>x</span></li>
                })}
            </ul> */}
        </div>
    );
}

export default UseReducer;