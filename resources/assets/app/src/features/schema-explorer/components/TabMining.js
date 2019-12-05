import React, {Component} from 'react';
import { connect }                from 'react-redux'

import {
    Card,
    CardHeader,
    CardBody,
    Table,
    Badge
  } from 'reactstrap';

import { doGetDatasource } from '../actions';

import { 
    Pagination, 
} from '../../../layout/components/Pagination';


type Props = {
    dispatch: Dispatch<*>,

    item : Object
}
  
/**
 * Language Picker Component
 * @prop {bool} showText : display including text or not
 * 
 */
class TabMining extends Component {

    constructor(props : Props) {
        super(props);
    }

    render() {

        if( this.props.item==null ){
          //  return null;
        }

        return (
            <div>
                <h3>Relationships</h3>
                <p>
                    Các datasource khác có liên hệ.
                </p>
                <div>
                    <ol>
                    <li><a href="#">topica.advisor</a> Topica Adsidor </li>
                    <li><a href="#">hoc_vien</a></li>
                    </ol>
                </div>
                <hr/>
                <h3>Datasource</h3>
                <p>
                    Các datasource.
                </p>
                <div>
                    <ol>
                    <li><a href="#">topicalms_new</a>  topica.lms</li>
                    <li><a href="#">topicalms_op</a>  Database cho OP</li>
                    </ol>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
    }
}

export default connect( mapStateToProps )(TabMining);
