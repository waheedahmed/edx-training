import React from 'react';
import { string, number, bool } from 'prop-types';
import './footer.css'

export class Footer extends React.Component {
    constructor () {
        super ();
        this.state = {
            isClicked: false
        }
    }

    // static propTypes = {
    //     text: string.isRequired,
    //     number: number
    // }

    handleClick = () => {
        this.setState({
            isClicked: true
        });
    }

    render() {
        const { text, number, bool } = this.props;

        return (
            <footer>
                <p className={`text ${this.state.isClicked ? 'isActive' : ''}`}>This is {text}</p>
                <p className={`text ${this.state.isClicked ? 'isActive' : ''}`}>This is {number}</p>
                <p className={`text ${this.state.isClicked ? 'isActive' : ''}`}>Bool is {`${this.state.isClicked}`}</p>
                <button onClick={() => this.handleClick()}>Click Me</button>
            </footer>
        )
    }
}

Footer.propTypes = {
    text: string.isRequired,
    number: number
}