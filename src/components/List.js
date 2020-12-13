import React from 'react'

function List()
{
    const names = ["Brice", "Clark", "Diana"]
    return (
        <div>
            <h1>{names[0]}</h1>
            <h1>{names[1]}</h1>
            <h1>{names[2]}</h1>
        </div>
    )
}


export default List
