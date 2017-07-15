import React from 'react';

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentWillMount () {

    }

    render () {
        return (
            <div id="home">
                <div id="center">
                    <img className="img-responsive" src="images/fotoHome.png" alt=""/>
                </div>
            </div>
        )
    }
}