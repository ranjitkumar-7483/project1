import React, { Component } from 'react';
import MasterPage from '../../components/masterpage';

export default class Reservation extends React.Component{
    render(){
        return (
            <MasterPage>
                <div class="content">
                    <div class="body">
                    <h2>CONTACT US</h2>
                    <ul>
                        <li>
                        <h4> This website template has been designed by free website templates for you, for free. You can replace all this text with your own text. </h4>
                        <p> You can remove any link to our website from this website template, you're free to use this website template without linking back to us. If you're having problems editing this website template, then don't hesitate to ask for help on the Forum. </p>
                        </li>
                    </ul>
                    <table>
                        <tr>
                        <td><span>Store Location</span></td>
                        <td>:32 Morbi Suscipit Semquis Aliquet Consequat, 1234</td>
                        </tr>
                        <tr>
                        <td><span>Store hours</span></td>
                        <td>:Monday to Sunday : 10:30am - 9:30pm</td>
                        </tr>
                        <tr>
                        <td><span>Reservation Number</span></td>
                        <td>:(864) 232-3706</td>
                        </tr>
                        <tr>
                        <td><span>Office Phone Number</span></td>
                        <td>:(864) 232-3553</td>
                        </tr>
                        <tr>
                        <td><span>Fax Number</span></td>
                        <td>:(864) 232-4160</td>
                        </tr>
                        <tr>
                        <td><span>Email</span></td>
                        <td>:emailus@companyname.com</td>
                        </tr>
                    </table>
                    </div>
                </div>
            </MasterPage>
        );
    }
}