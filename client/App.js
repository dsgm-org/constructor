import {hot} from "react-hot-loader/root";
import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Index from "./pages/Index";
import {Provider} from "react-redux";

function App() {
    return (
        <Provider store={store}>
            <Router>
                <Route path="/" component={Index} exact/>
            </Router>
        </Provider>
    );
}

export default hot(App);
