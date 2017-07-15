import React from 'react';
import Scrollchor from "react-scrollchor";

export default class Barra extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mail: sessionStorage.getItem('mail'),
            isLogged: sessionStorage.getItem('isLogged'),
            name: sessionStorage.getItem('name'),
            loggedIn: null,
            plusOne: sessionStorage.getItem('plusOne'),
            id: sessionStorage.getItem('plusOne')
        };
        this.getDataForm = this.getDataForm.bind(this);
    }

    getDataForm(e) {
        this.setState({mail: e.target.value});
    };

    /*shouldComponentUpdate(nextProps, nextState) {
        if (this.state.isLogged) {
            return false;
        } else {
            return true;
        }
    }*/

    login = () => {
        let url = 'http://localhost:4000/login/';
        let data = { username: this.state.mail};
        fetch(url, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(data)
        })
            .then(res => {
                return res.json();

            })
            .then(user => {
                if (user.message != 'Credenciales Incorrectas') {
                    console.log(user);
                    sessionStorage.setItem('isLogged', true);
                    sessionStorage.setItem('name', user.name);
                    sessionStorage.setItem('plusOne', user.plusOne);
                    sessionStorage.setItem('mail', user.mail);
                    sessionStorage.setItem('id', user._id);
                    console.log(sessionStorage.setItem('id', user._id));
                    window.location.reload();
                }

                return user
            }
            )
    };

    componentWillMount () {

    }

    render () {
        console.log(this.state.id);
        if (this.state.isLogged) {
            return (
                <div>
                    <div className="barra">
                        <div className="cuadrado"></div>
                    </div>
                    <nav className="navbar navbar-default navbar-fixed-top">
                        <div className="container-fluid">
                            <div className="navbar-header">
                                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse"
                                        data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                                    <span className="sr-only">Toggle navigation</span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                </button>
                            </div>

                            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                                <div className="row">
                                    <div className="col-md-10">
                                        <ul className="nav navbar-nav">
                                            <li><Scrollchor to="#home"
                                                            animate={{offset: -40, duration: 2000}}>Home</Scrollchor>
                                            </li>
                                            <li><Scrollchor to="#casamiento"
                                                            animate={{duration: 1500}}>Ubicación</Scrollchor></li>
                                            <li><Scrollchor to="#fotos" animate={{duration: 2500}}>Fotos</Scrollchor>
                                            </li>
                                            <li><Scrollchor to="#regalos"
                                                            animate={{duration: 2000}}>Regalos</Scrollchor></li>
                                            <li><Scrollchor to="#rsvp" animate={{duration: 2000}}>RSVP</Scrollchor></li>
                                        </ul>
                                    </div>
                                    <div className="col-md-2">
                                        <div style={{color: 'white', paddingTop: '13px'}}><p>{this.state.name}</p></div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </nav>
                </div>
            )
        } else {
            return (
                <div>
                    <div className="barra">
                        <div className="cuadrado"></div>
                    </div>
                    <nav className="navbar navbar-default navbar-fixed-top">
                        <div className="container-fluid">
                            <div className="navbar-header">
                                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse"
                                        data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                                    <span className="sr-only">Toggle navigation</span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                </button>
                            </div>

                            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                                <div className="row">
                                    <div className="col-md-10">
                                        <ul className="nav navbar-nav">
                                            <li><Scrollchor to="#home"
                                                            animate={{offset: -40, duration: 2000}}>Home</Scrollchor>
                                            </li>
                                            <li><Scrollchor to="#casamiento"
                                                            animate={{duration: 1500}}>Ubicación</Scrollchor></li>
                                            <li><Scrollchor to="#fotos" animate={{duration: 2500}}>Fotos</Scrollchor>
                                            </li>
                                            <li><Scrollchor to="#regalos"
                                                            animate={{duration: 2000}}>Regalos</Scrollchor></li>
                                            <li><Scrollchor to="#rsvp" animate={{duration: 2000}}>RSVP</Scrollchor></li>
                                        </ul>
                                    </div>
                                    <div className="col-md-2">
                                        <form className="navbar-form navbar-right" style={{display: 'flex'}}>
                                            <div className="form-group">
                                                <input type="text" className="form-control" placeholder="ingrese su mail"
                                                       value={this.state.mail} style={{borderRadius: '0px'}}
                                                       onChange={this.getDataForm}/>
                                            </div>
                                            <button type="submit" className="btn btn-info" style={{borderRadius: '0px'}}
                                                    onClick={this.login}>Login
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </nav>
                </div>
            )
        }
    }
}




