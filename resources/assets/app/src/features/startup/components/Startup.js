import {Component} from 'react';
import { connect }                from 'react-redux';
  
/**
 * Language Picker Component
 * @prop {bool} showText : display including text or not
 * 
 */
class Startup extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount(){
        const { dispatch } = this.props;
        // dispatch event to get start up data
    }

    /**
     * No view
     */
    render = () => null
}

const mapStateToProps = state => {
    return {
    }
}

export default connect( mapStateToProps )(Startup);
