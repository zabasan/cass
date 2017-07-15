import React from 'react';

export default class RSVP extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: sessionStorage.getItem('name'),
            isDone: false,
            plusOne: sessionStorage.getItem('plusOne'),
            mail: sessionStorage.getItem('mail'),
            id: sessionStorage.getItem('id')
        };
    }

    _handleChange = (e) =>{

        let id = e.target.value;
        console.log(id);
    };

    componentWillMount () {

    }

    save =  () => {
        let data = {
            user: this.state.mail,
            comments: 'test4564',
        };
        console.log(data);

        fetch('http://localhost:4000/users/' + this.state.id,  {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'PUT',
            body: JSON.stringify(data)
        }).then(res => {
            console.log(res.status);
        })

    };

    getList = () => {
        console.log(this.state.mail);
        fetch('http://localhost:4000/login',  {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: { username: this.state.mail,
            }
        })
            .then(res => res.json())
            .then(user => {
                console.log(user);
                return user
            }
        )
    };

    render () {
        let plusOne;
        console.log('plusOne--->', this.state.plusOne);
        if (this.state.plusOne == 'true') {
            plusOne = (<div className="form-check"  style={{marginLeft: '10px'}}>
                <p>2</p>
                <label className="form-check-label">
                    <input type="radio" className="form-check-input" name="optionsRadios" id="optionsRadios2" value="2" onClick={this._handleChange}/>
                </label>
            </div>);

        }
        else {

        }
        console.log(this.state.name);
        return (
            <div id="rsvp">
                <h3>rsvp</h3>
                <div className="form-check">
                    <fieldset className="form-group">
                        <div style={{display: 'flex', justifyContent: 'center'}}>
                            <div className="form-check" style={{marginRight: '10px'}}>
                                <p>No voy</p>
                                <label className="form-check-label">
                                    <input type="radio" className="form-check-input" name="optionsRadios" id="optionsRadios1" value="0" onClick={this._handleChange}/>
                                </label>
                            </div>
                            <div className="form-check" style={{marginRight: '20px', marginLeft: '5px'}}>
                                <p>1</p>
                                <label className="form-check-label">
                                    <input type="radio" className="form-check-input" name="optionsRadios" id="optionsRadios1" value="1" onClick={this._handleChange}/>
                                </label>
                            </div>
                            {plusOne}
                        </div>
                    </fieldset>
                </div>
                <button onClick={this.save}>Update</button>
            </div>
        )
    }
}
