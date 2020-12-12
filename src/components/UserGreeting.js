import React, { Component } from 'react'

class UserGreeting extends Component
{
    constructor(props)
    {
        super(props)
        this.state = {
            isLoggedIn: true
        }
    }
    render()
    {
        let message
        if (this.state.isLoggedIn)
        {
            message = <div>Welcome Ruby</div>
        } else
        {
            message = <div>welcome Sunday</div>
        }

        return <div>{message}</div>
    }
}
export default UserGreeting
