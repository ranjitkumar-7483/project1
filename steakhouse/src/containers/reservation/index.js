import React, { Component } from 'react';
import MasterPage from '../../components/masterpage';

export default class Reservation extends React.Component{
    render(){
        return (
            <MasterPage>
                <div class="content">
                <div class="body">
                    <h2>RESERVATION</h2>
                    <ul>
                        <li>
                        <h4> This website template has been designed by free website templates for you, for free. You can replace all this text with your own text. </h4>
                        <p> You can remove any link to our website from this website template, you're free to use this website template without linking back to us. If you're having problems editing this website template, then don't hesitate to ask for help on the Forum. </p>
                        </li>
                    </ul>
                    <ul class="news">
                        <li> <a href="#">Lorem ipsum dolor sit amet, consectetur adipiscing</a> </li>
                        <li> <a href="#">Nam sit amet dui gravida tellus lobortis ullamcorper.</a> </li>
                        <li> <a href="#">Sed sit amet interdum magna vulputate mollis lectus</a> </li>
                        <li> <a href="#">Vestibulum in feugiat dolor. Pellentesque in adipiscing orci.</a> </li>
                        <li> <a href="#">Maecenas eu ipsum a odio varius mollis vitae at ante</a> </li>
                        <li> <a href="#">Aenean faucibus suscipit velit at tincidunt.</a> </li>
                        <li> <a href="#">Mauris pharetra sem quis convallis gravida enim</a> </li>
                    </ul>
                    </div>
                </div>
            </MasterPage>
        );
    }
}