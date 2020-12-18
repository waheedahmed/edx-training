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
                <p>This is footer!</p>
            </footer>
        )
    }
}

Footer.propTypes = {
    text: string.isRequired,
    number: number
}