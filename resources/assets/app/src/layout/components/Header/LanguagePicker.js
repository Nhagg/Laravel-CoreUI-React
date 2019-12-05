import React, {Component} from 'react';
import { connect }                from 'react-redux'

import {
    DropdownToggle,
    Dropdown, DropdownMenu, DropdownItem
} from 'reactstrap';

const SUPPORT_LANGS = [
    { code: 'vn', title : "Tiếng Việt", icon : "flag-icon-vn" },
    { code: 'en', title : "English", icon : "flag-icon-us" },
    { code: 'th', title : "ไทย", icon : "flag-icon-th" },
]

/**
 * Language Picker Component
 * @prop {bool} showText : display including text or not
 *
 */
class LanguagePicker extends Component {

    constructor(props) {
        super(props);

        this.state = {
            languagePos : 0,
            showDropdown : false,
            activeLang: SUPPORT_LANGS[0]
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
       this.setState({showDropdown: !this.state.showDropdown})
    }

    render() {
        const {...attributes} = this.props;
        let { activeLang } = this.state;
        return (
            <Dropdown nav isOpen={this.state.showDropdown} toggle={this.toggle}>
                <DropdownToggle nav>
                    <i className={'flag-icon h4 mb-0 ' + activeLang.icon}></i>
                </DropdownToggle>
                <DropdownMenu right>
                    {
                        SUPPORT_LANGS.map(
                            lang => {
                                return(
                                    <DropdownItem key={lang.code} onClick={ () => { this.setState({ activeLang: lang }); } }>
                                        <i className={'flag-icon ' + lang.icon}></i>{lang.title}
                                    </DropdownItem>)
                            }
                        )
                    }
                </DropdownMenu>
            </Dropdown>
        );
    }
}

const mapStateToProps = state => {
    return {
    }
}

export default connect( mapStateToProps )(LanguagePicker);
