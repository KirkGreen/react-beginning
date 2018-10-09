import React,{ Component } from 'react';
import '../css/styles.css'

class Header extends Component{

    inputChangeHandler(){
        console.log('I was clicked')
    }

    render(){
        return (
            <header>
                <div
                    className="logo"
                    onClick={this.inputChangeHandler}
                    >Logo</div>
                <input type="text"/>
            </header>
        )
    }
}

export default Header;