import React, {Component} from 'react';
import {
    Row, Col,
    Card, CardHeader, CardBody, CardFooter,
    Dropdown, DropdownToggle, DropdownMenu, DropdownItem, UncontrolledDropdown
} from 'reactstrap';

class Dropdowns extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            dropdownOpen: new Array(6).fill(false)
        }
    }

    toggle(i) {
        const newArray = this.state.dropdownOpen.map((element, index) => {
            return (index === i ? !element : false);
        });
        this.setState({
            dropdownOpen: newArray
        });
    }

    render() {
        return (
            <div className="animated fadeIn">
                <Row>
                    <Col xs="12">
                        <Card>
                            <CardHeader>
                                <i className="fa fa-align-justify"></i><strong>Dropdowns</strong>
                                <div className="card-actions">
                                    <a href="https://reactstrap.github.io/components/dropdowns/" target="_blank">
                                        <small className="text-muted">docs</small>
                                    </a>
                                </div>
                            </CardHeader>
                            <CardBody>
                                <Row>
                                    <Col md='4' className={'mb-3'}>
                                        <Dropdown isOpen={this.state.dropdownOpen[0]} toggle={() => {
                                            this.toggle(0);
                                        }}>
                                            <DropdownToggle caret className='btn-topi-classy'>
                                                Dropdown
                                            </DropdownToggle>
                                            <DropdownMenu>
                                                <DropdownItem header>Header</DropdownItem>
                                                <DropdownItem disabled>Action</DropdownItem>
                                                <DropdownItem>Another Action</DropdownItem>
                                                <DropdownItem divider/>
                                                <DropdownItem>Another Action</DropdownItem>
                                            </DropdownMenu>
                                        </Dropdown>
                                    </Col>
                                    <Col md='4' className={'mb-3'}>
                                        <UncontrolledDropdown>
                                            <DropdownToggle caret className='btn-topi-classy'>
                                                Uncontrolled Dropdown
                                            </DropdownToggle>
                                            <DropdownMenu>
                                                <DropdownItem header>Header</DropdownItem>
                                                <DropdownItem disabled>Action</DropdownItem>
                                                <DropdownItem>Another Action</DropdownItem>
                                                <DropdownItem divider />
                                                <DropdownItem>Another Action</DropdownItem>
                                            </DropdownMenu>
                                        </UncontrolledDropdown>
                                    </Col>
                                    <Col md='4' className={'mb-3'}>
                                        <Dropdown isOpen={this.state.dropdownOpen[1]} toggle={() => {this.toggle(1);}}>
                                            <DropdownToggle caret className='btn-topi-classy'>
                                                This dropdown's menu is right-aligned
                                            </DropdownToggle>
                                            <DropdownMenu right>
                                                <DropdownItem header>Header</DropdownItem>
                                                <DropdownItem disabled>Action</DropdownItem>
                                                <DropdownItem>Another Action</DropdownItem>
                                                <DropdownItem divider/>
                                                <DropdownItem>Another Action</DropdownItem>
                                            </DropdownMenu>
                                        </Dropdown>
                                    </Col>
                                </Row>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Dropdowns;
