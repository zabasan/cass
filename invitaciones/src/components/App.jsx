import React from 'react';
import Barra from './barra/barra';
import Home from './home/home';
import Casamiento from './casamiento/casamiento';
import Mapa from './mapa/mapa';
import Fotos from './fotos/fotos';
import Regalos from './regalos/regalos';
import RSVP from './rsvp/rsvp';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentWillMount () {

    }


    render () {
        return (
            <div>
                <Barra/>
                <Home/>
                <Casamiento/>
                <Mapa/>
                <div id="imagen"></div>
                <Fotos/>
                <Regalos/>
                <RSVP>
                </RSVP>
            </div>
        )
    }
}

