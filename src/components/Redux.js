import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import Users from "./User";

export default function Redux1(){
    return(
        <Provider store={store}>
            <Users/>
        </Provider>
    )
}