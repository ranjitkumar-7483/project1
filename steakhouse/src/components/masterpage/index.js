import React, { Component } from 'react';

import Header from '../header';
import Footer from '../footer';

export default class MasterPage extends React.Component{
    render(){
        return (
            <div id="background">
                <div id="page">
                    <Header/>
                    <div id="body">
                        {this.props.children}
                    </div>
                    <Footer />
                </div>
            </div>
        );
    }
}