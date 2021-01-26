import React from 'react';
import ReactDOM from 'react-dom';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import 'bootstrap/dist/css/bootstrap.min.css';
import './page_selection.css';
import PageScreen from './PageScreen';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

var rows = [];
var cols = [];
var total = [];
var count = 1;
for (var i = 1; i <= 50; i++) {
    rows.push(i);
}
for (var i = 0; i < 4; i++) {
    cols.push(i);
}
for (var i = 0; i < rows.length; i++) {
    total.push(i + 1);
}

class PageButton extends React.Component {
    render () {
        if (count == 1) { //this conditional is temporary. once we get all the icons loaded in, we can remove this if check and simply use the block of code below
            return (
                <Card className = "hoverable" bg = "light" text = "dark"> 
                    <Link to = {"/page" + count} style = {{textDecoration : "none", color : "black"}}>
                        <Card.Img src = {require("./resources/page" + count + ".jpg").default} alt = "Card Image"/>
                            {/* <Card.ImgOverlay> */}
                            <Card.Body>
                                <Card.Title>
                                    {"Page " + count++}
                                </Card.Title>
                            </Card.Body>
                            {/* </Card.ImgOverlay> */}
                        </Link>
                </Card>
            )
        }
        return (
            <Card className = "hoverable" bg = "light" text = "dark"> 
                    <Link to = {"/page" + count} style = {{textDecoration : "none", color : "black"}}>
                        {/* <Card.Img src = {require("./resources/page_" + count + "_icon.png").default} alt = "Card Image"/> */}
                        {/* <Card.ImgOverlay> */}
                        <Card.Body>
                            <Card.Title>
                                {"Page " + count++}
                            </Card.Title>
                        </Card.Body>
                        {/* </Card.ImgOverlay> */}
                    </Link>
            </Card>
        )
    }
}

class Pages extends React.Component {
    render () {
        return (
            <CardDeck>
                {cols.map((num) => (
                    <PageButton key = {num}/>
                ))}
            </CardDeck>
        )
    }
}

class Window extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                {rows.map((num) => (
                    <div key = {num} style = {{margin : "20px"}}> 
                        <Pages/>
                    </div>
                ))}
                {count = 1}
            </div>
        )
    }
}

function App() {
    return (
        <div className = "parent">
            <Switch>
                <Route path = "/:id" component = {PageScreen}/>
                <Route path = "/">
                    <Window/>
                </Route>
            </Switch>
        </div>
    )
}

ReactDOM.render(
    <Router>
        <App/>
    </Router>,
    document.getElementById('root')
);

