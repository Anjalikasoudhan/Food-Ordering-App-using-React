import React from "react";
import ReactDOM from "react-dom/client"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { Body} from "./components/Body";
import { Header } from "./components/Header";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";


//const heading=React.createElement("div",{id:"parent"},React.createElement("div",{id:"child"},React.createElement("h1",{id:"heading"},"this is a heading")));

const heading=React.createElement("div",{id:"header"},[
    React.createElement("h1",{id:"head1"},"Food Sathi"),
    React.createElement("ul",{id:"navBar"},[
        React.createElement("li",{id:"home"},"Home"),
        React.createElement("li",{id:"About"},"About"),
        React.createElement("li",{id:"Contact"},"Contact")
    ]),
]);
const SaleBanner=React.createElement("div",{id:"banner",style: { backgroundColor: "red", color: "white"}},"There is a 50 % discount");

const UserCard1=(props)=>{
    return React.createElement("div",{className:"card"},[
        React.createElement("h2",{},props.name),
        React.createElement("p",{},props.college)
    ]);
};

const container=React.createElement("div",{},[
    UserCard1({name:"Anjali",college:"CUTM"}),
    UserCard1({name:"Akshat",college:"NSEC"})
]);


const Title=()=>{
    return(
        <div className="title">
            <h1>Good Morning!!</h1>
        </div>
    )
}
/*
const App1=()=>{
    return(
        <div id="container">
            <h1>Welcome to food app</h1>
            <UserCard name="Anjali" college ="NSEC"/>
            <UserCard name="Rahul" college="CUTM"/>
        </div>
    );
};*/



const App=()=>{
     return(
        <div className="app">
        <Header />
        <Body />
        </div>
     )
}

const root=ReactDOM.createRoot(document.getElementById("root"));
//console.log(SaleBanner);
root.render(<App />);