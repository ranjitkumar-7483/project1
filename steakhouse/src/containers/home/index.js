import React, { Component } from 'react';

import MasterPage from '../../components/masterpage';

export default class Home extends React.Component{
    render(){
        return (
            <MasterPage>
                <div class="slider">
                    <ul>
                    <li class="first">
                        <h2>FUSCE SIT AMET EGET UTRU</h2>
                        <img src="images/nine-dollars.gif" alt="" width="213" height="64" />
                        <p> Curabitur omare dolor arcu. Sed gravida eu risus dapibus eu posuere quam pulvinar </p>
                        <a href="reservation">BOOK A TABLE</a> </li>
                    <li> <a href="#"> <img src="images/barbeque.jpg" width="640" height="331" alt="" /></a> </li>
                    </ul>
                </div>
                <ul id="featured">
                    <li class="first"><a href="food.html"><img src="images/food-menu.jpg" width="470" height="237" alt=""/></a> </li>
                    <li><a href="beer.html"><img src="images/beer.jpg" width="460" height="237" alt="" /></a> </li>
                </ul>
                <div class="section">
                    <h3>$7 LUNCH &amp; DINNER BUFFET </h3>
                    <p> Nulla a tellus in erat ullamcorper trisque. Suspendisse at mauris. Sed ut eros. <a href="#" class="more">&nbsp;</a> </p>
                </div>
                <div id="content">
                    <div class="article">
                    <ul>
                        <li>
                        <h2><a href="#">Duis a quam sem Vivamus elit felis</a></h2>
                        <p> <a href="#"><img src="images/waiter.jpg" width="162" height="101" alt="" /></a> This website template has been designed by Free website templates for you, for free. You can replace all this text with your own text. You can remove any link to our website from this website template, you're free to use this website template without linking back to us. </p>
                        </li>
                        <li>
                        <h2><a href="#">Vestibulum at neque nibh condimentum</a></h2>
                        <p> <a href="#"><img src="images/food.jpg" width="162" height="122" alt="" /></a> If you're having problems editing this website template, then don't hesitate to ask for help on the forum. </p>
                        <p> Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec nec tellus quis enim pharetra molestie. </p>
                        </li>
                    </ul>
                    </div>
                    <div class="aside">
                    <h3>Duis a quam sem Vivamus elit felis</h3>
                    <ul>
                        <li>
                        <h2>Cum sociis natoque penatibusmagnis</h2>
                        <p> parturient montes, nascetur ridiculus mus. Aliquam odio neque, elementum nec laoreet </p>
                        </li>
                        <li>
                        <h2>Looking for more templates?</h2>
                        <p> Just browse through all our Free Website Templates and find what you're looking for. </p>
                        </li>
                        <li class="last">
                        <h2>Nulla vitae quam in sapien lobortis </h2>
                        <p> sed vitae magna. Nulla risus felis, dapibus vitae porta eu, pulvinar vitae tellus.Pellen tesque habitant morbi tristique sapien </p>
                        </li>
                    </ul>
                    </div>
                </div>
            </MasterPage>
        );
    }
}