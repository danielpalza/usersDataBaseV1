import React from "react"
import createUser from "./createUser"
import searchUser from "./searchUser"

export default function Header(){
    return(<header>
        <h1>User Database</h1>
        <div id="component-nav">
            <createUser/>
            <searchUser/>
        </div>
    </header>)
}