import React, { Component } from 'react';

export default class Header extends React.Component{
    render(){
        return (
            <div id="header">
            <ul class="navigation">
                <li><a href="food.html">OUR FOOD</a></li>
                <li><a href="beer.html">OUR BEER</a></li>
            </ul>
            <a id="logo" href="/"><img src="images/logo.jpg" width="276" height="203" alt="" /></a>
            <ul id="navigation">
                <li><a href="reservation">RESERVATION</a></li>
                <li><a href="contactus">CONTACT US</a></li>
            </ul>
            </div>
        );
    }
}