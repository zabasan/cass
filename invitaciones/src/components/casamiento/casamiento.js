import React from 'react';

export default class Casamiento extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentWillMount () {

    }

    render () {
        return (
            <div id="casamiento" className="text-center">
                <h3>Ubicación</h3>
                <h4>Alpasuma Hall</h4>
                <p style={{paddingBottom: 20}}>Av. Gaspar Campos 1582, Bella Vista.</p>
            </div>
        )
    }
}
