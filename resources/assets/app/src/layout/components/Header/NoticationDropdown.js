import React, {Component} from 'react';
import { connect }                from 'react-redux'

import {
    DropdownToggle,
    Dropdown, DropdownMenu, DropdownItem,
} from 'reactstrap';


/**
 * Language Picker Component
 * @prop {bool} showText : display including text or not
 *
 */
class NotificationDropdown extends Component {

    constructor(props) {
        super(props);

        this.state = {
            languagePos : 0,
            showDropdown : false,
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
       this.setState({showDropdown: !this.state.showDropdown})
    }

    render() {
        const {...attributes} = this.props;
        return (
            <Dropdown nav isOpen={this.state.showDropdown} toggle={this.toggle}>
                <DropdownToggle nav>
                    <i style={{fontSize: '1.3rem'}} className='fa fa-bell-o text-classy'></i>
                    <span className="badge badge-danger badge-pill">5</span>
                </DropdownToggle>
                <DropdownMenu right>
                    <DropdownItem header className='text-center'> { 'You have 5 notifications' } </DropdownItem>
                    <DropdownItem><i className="fa fa-user"></i>{ 'New user register' }</DropdownItem>
                    <DropdownItem><i className="fa fa-download"></i>{ 'New user downloaded' }</DropdownItem>
                    <DropdownItem header className='text-center'> <a href="#" className={' text-blue'}>{ 'See All' }</a> </DropdownItem>
                </DropdownMenu>
            </Dropdown>
        );
    }
}

const mapStateToProps = state => {
    return {
    }
}

export default connect( mapStateToProps )(NotificationDropdown);
