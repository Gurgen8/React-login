import React from "react";
import RoutingReact from "./Components/Routing/Routing";
import { UserContext } from './context/userContext'

function App() {


    return (
        <UserContext><RoutingReact /></UserContext>

    );
}
export default App;