import React, {Component} from 'react';
import {
    Row,
    Col,
    Button,
    ButtonDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Card,
    CardHeader,
    CardFooter,
    CardBody,
    Collapse,
    Form,
    FormGroup,
    FormText,
    Label,
    Input,
    InputGroup,
    InputGroupAddon,
    InputGroupButton
} from 'reactstrap';

class Forms extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = { collapse: true };
    }

    toggle() {
        this.setState({ collapse: !this.state.collapse });
    }

    render() {
        return (
            <div className="animated fadeIn">
                <Row>
                    <Col xs="12" md="6">
                        <Card>
                            <CardHeader>
                                <strong>Basic Form</strong> Elements
                            </CardHeader>
                            <CardBody>
                                <Form action="" method="post" encType="multipart/form-data" className="form-horizontal">
                                    <FormGroup row>
                                        <Col md="3">
                                            <Label>Static</Label>
                                        </Col>
                                        <Col xs="12" md="9">
                                            <p className="form-control-static">Username</p>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Col md="3">
                                            <Label htmlFor="text-input">Text Input</Label>
                                        </Col>
                                        <Col xs="12" md="9">
                                            <Input type="text" id="text-input" name="text-input" placeholder="Text"/>
                                            <FormText color="muted">This is a help text</FormText>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Col md="3">
                                            <Label htmlFor="email-input">Email Input</Label>
                                        </Col>
                                        <Col xs="12" md="9">
                                            <Input type="email" id="email-input" name="email-input" placeholder="Enter Email"/>
                                            <FormText className="help-block">Please enter your email</FormText>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Col md="3">
                                            <Label htmlFor="password-input">Password</Label>
                                        </Col>
                                        <Col xs="12" md="9">
                                            <Input type="password" id="password-input" name="password-input" placeholder="Password"/>
                                            <FormText className="help-block">Please enter a complex password</FormText>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Col md="3">
                                            <Label htmlFor="disabled-input">Disabled Input</Label>
                                        </Col>
                                        <Col xs="12" md="9">
                                            <Input type="text" id="disabled-input" name="disabled-input" placeholder="Disabled" disabled/>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Col md="3">
                                            <Label htmlFor="textarea-input">Textarea</Label>
                                        </Col>
                                        <Col xs="12" md="9">
                                            <Input type="textarea" name="textarea-input" id="textarea-input" rows="9"
                                                   placeholder="Content..."/>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Col md="3">
                                            <Label htmlFor="select">Select</Label>
                                        </Col>
                                        <Col xs="12" md="9">
                                            <Input type="select" name="select" id="select">
                                                <option value="0">Please select</option>
                                                <option value="1">Option #1</option>
                                                <option value="2">Option #2</option>
                                                <option value="3">Option #3</option>
                                            </Input>
                                        </Col>
                                    </FormGroup>
                                    {/*<FormGroup row>*/}
                                    {/*<Col md="3">*/}
                                    {/*<Label htmlFor="selectLg">Select Large</Label>*/}
                                    {/*</Col>*/}
                                    {/*<Col xs="12" md="9" size="lg">*/}
                                    {/*<Input type="select" name="selectLg" id="selectLg" bsSize="lg">*/}
                                    {/*<option value="0">Please select</option>*/}
                                    {/*<option value="1">Option #1</option>*/}
                                    {/*<option value="2">Option #2</option>*/}
                                    {/*<option value="3">Option #3</option>*/}
                                    {/*</Input>*/}
                                    {/*</Col>*/}
                                    {/*</FormGroup>*/}
                                    <FormGroup row>
                                        <Col md="3">
                                            <Label htmlFor="selectSm">Select Small</Label>
                                        </Col>
                                        <Col xs="12" md="9">
                                            <Input type="select" name="selectSm" id="SelectLm" bsSize="sm">
                                                <option value="0">Please select</option>
                                                <option value="1">Option #1</option>
                                                <option value="2">Option #2</option>
                                                <option value="3">Option #3</option>
                                                <option value="4">Option #4</option>
                                                <option value="5">Option #5</option>
                                            </Input>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Col md="3">
                                            <Label htmlFor="disabledSelect">Disabled Select</Label>
                                        </Col>
                                        <Col xs="12" md="9">
                                            <Input type="select" name="disabledSelect" id="disabledSelect" disabled>
                                                <option value="0">Please select</option>
                                                <option value="1">Option #1</option>
                                                <option value="2">Option #2</option>
                                                <option value="3">Option #3</option>
                                            </Input>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Col md="3">
                                            <Label htmlFor="multiple-select">Multiple select</Label>
                                        </Col>
                                        <Col md="9">
                                            <Input type="select" name="multiple-select" id="multiple-select" multiple>
                                                <option value="1">Option #1</option>
                                                <option value="2">Option #2</option>
                                                <option value="3">Option #3</option>
                                                <option value="4">Option #4</option>
                                                <option value="5">Option #5</option>
                                                <option value="6">Option #6</option>
                                                <option value="7">Option #7</option>
                                                <option value="8">Option #8</option>
                                                <option value="9">Option #9</option>
                                                <option value="10">Option #10</option>
                                            </Input>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Col md="3">
                                            <Label>Radios</Label>
                                        </Col>
                                        <Col md="9">
                                            <FormGroup check className="radio">
                                                <Input className="form-check-input" type="radio" id="radio1" name="radios" value="option1"/>
                                                <Label check className="form-check-label" htmlFor="radio1">Option 1</Label>
                                            </FormGroup>
                                            <FormGroup check className="radio">
                                                <Input className="form-check-input" type="radio" id="radio2" name="radios" value="option2"/>
                                                <Label check className="form-check-label" htmlFor="radio2">Option 2</Label>
                                            </FormGroup>
                                            <FormGroup check className="radio">
                                                <Input className="form-check-input" type="radio" id="radio3" name="radios" value="option3"/>
                                                <Label check className="form-check-label" htmlFor="radio3">Option 3</Label>
                                            </FormGroup>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Col md="3">
                                            <Label>Inline Radios</Label>
                                        </Col>
                                        <Col md="9">
                                            <FormGroup check inline>
                                                <Input className="form-check-input" type="radio" id="inline-radio1" name="inline-radios" value="option1"/>
                                                <Label className="form-check-label" check htmlFor="inline-radio1">One</Label>
                                            </FormGroup>
                                            <FormGroup check inline>
                                                <Input className="form-check-input" type="radio" id="inline-radio2" name="inline-radios" value="option2"/>
                                                <Label className="form-check-label" check htmlFor="inline-radio2">Two</Label>
                                            </FormGroup>
                                            <FormGroup check inline>
                                                <Input className="form-check-input" type="radio" id="inline-radio3" name="inline-radios" value="option3"/>
                                                <Label className="form-check-label" check htmlFor="inline-radio3">Three</Label>
                                            </FormGroup>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Col md="3"><Label>Checkboxes</Label></Col>
                                        <Col md="9">
                                            <FormGroup check className="checkbox">
                                                <Input className="form-check-input" type="checkbox" id="checkbox1" name="checkbox1" value="option1"/>
                                                <Label check className="form-check-label" htmlFor="checkbox1">Option 1</Label>
                                            </FormGroup>
                                            <FormGroup check className="checkbox">
                                                <Input className="form-check-input" type="checkbox" id="checkbox2" name="checkbox2" value="option2"/>
                                                <Label check className="form-check-label" htmlFor="checkbox2">Option 2</Label>
                                            </FormGroup>
                                            <FormGroup check className="checkbox">
                                                <Input className="form-check-input" type="checkbox" id="checkbox3" name="checkbox3" value="option3"/>
                                                <Label check className="form-check-label" htmlFor="checkbox3">Option 3</Label>
                                            </FormGroup>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Col md="3">
                                            <Label>Inline Checkboxes</Label>
                                        </Col>
                                        <Col md="9">
                                            <FormGroup check inline>
                                                <Input className="form-check-input" type="checkbox" id="inline-checkbox1" name="inline-checkbox1" value="option1"/>
                                                <Label className="form-check-label" check htmlFor="inline-checkbox1">One</Label>
                                            </FormGroup>
                                            <FormGroup check inline>
                                                <Input className="form-check-input" type="checkbox" id="inline-checkbox2" name="inline-checkbox2" value="option2"/>
                                                <Label className="form-check-label" check htmlFor="inline-checkbox2">Two</Label>
                                            </FormGroup>
                                            <FormGroup check inline>
                                                <Input className="form-check-input" type="checkbox" id="inline-checkbox3" name="inline-checkbox3" value="option3"/>
                                                <Label className="form-check-label" check htmlFor="inline-checkbox3">Three</Label>
                                            </FormGroup>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Col md="3">
                                            <Label htmlFor="file-input">File input</Label>
                                        </Col>
                                        <Col xs="12" md="9">
                                            <Input type="file" id="file-input" name="file-input"/>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Col md="3">
                                            <Label htmlFor="file-multiple-input">Multiple File input</Label>
                                        </Col>
                                        <Col xs="12" md="9">
                                            <Input type="file" id="file-multiple-input" name="file-multiple-input" multiple/>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row hidden>
                                        <Col md="3">
                                            <Label className="custom-file" htmlFor="custom-file-input">Custom file input</Label>
                                        </Col>
                                        <Col xs="12" md="9">
                                            <Label className="custom-file">
                                                <Input className="custom-file" type="file" id="custom-file-input" name="file-input"/>
                                                <span className="custom-file-control"></span>
                                            </Label>
                                        </Col>
                                    </FormGroup>
                                </Form>
                            </CardBody>
                            <CardFooter className="text-right">
                                <Button type="submit" size="sm" className="btn-topi-classy"><i className="fa fa-paper-plane"></i> Submit</Button>{' '}
                                <Button type="reset" size="sm" className="btn-topi-red"><i className="fa fa-redo"></i> Reset</Button>
                            </CardFooter>
                        </Card>
                    </Col>
                    <Col xs="12" sm="6">
                        <Card>
                            <CardHeader>
                                <strong>Credit Card</strong>
                                <small> Form</small>
                            </CardHeader>
                            <CardBody>
                                <Row>
                                    <Col xs="12">
                                        <FormGroup>
                                            <Label htmlFor="name">Name</Label>
                                            <Input type="text" id="name" placeholder="Enter your name" required/>
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs="12">
                                        <FormGroup>
                                            <Label htmlFor="ccnumber">Credit Card Number</Label>
                                            <Input type="text" id="ccnumber" placeholder="0000 0000 0000 0000" required/>
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs="4">
                                        <FormGroup>
                                            <Label htmlFor="ccmonth">Month</Label>
                                            <Input type="select" name="ccmonth" id="ccmonth">
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                                <option value="6">6</option>
                                                <option value="7">7</option>
                                                <option value="8">8</option>
                                                <option value="9">9</option>
                                                <option value="10">10</option>
                                                <option value="11">11</option>
                                                <option value="12">12</option>
                                            </Input>
                                        </FormGroup>
                                    </Col>
                                    <Col xs="4">
                                        <FormGroup>
                                            <Label htmlFor="ccyear">Year</Label>
                                            <Input type="select" name="ccyear" id="ccyear">
                                                <option>2017</option>
                                                <option>2018</option>
                                                <option>2019</option>
                                                <option>2020</option>
                                                <option>2021</option>
                                                <option>2022</option>
                                                <option>2023</option>
                                                <option>2024</option>
                                                <option>2025</option>
                                                <option>2026</option>
                                            </Input>
                                        </FormGroup>
                                    </Col>
                                    <Col xs="4">
                                        <FormGroup>
                                            <Label htmlFor="cvv">CVV/CVC</Label>
                                            <Input type="text" id="cvv" placeholder="123" required/>
                                        </FormGroup>
                                    </Col>
                                </Row>
                            </CardBody>
                        </Card>
                        <Card>
                            <CardHeader>
                                <strong>Horizontal</strong> Form
                            </CardHeader>
                            <CardBody>
                                <Form action="" method="post" className="form-horizontal">
                                    <FormGroup row>
                                        <Col md="3">
                                            <Label htmlFor="hf-email">Email</Label>
                                        </Col>
                                        <Col xs="12" md="9">
                                            <Input type="email" id="hf-email" name="hf-email" placeholder="Enter Email..."/>
                                            <FormText className="help-block">Please enter your email</FormText>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Col md="3">
                                            <Label htmlFor="hf-password">Password</Label>
                                        </Col>
                                        <Col xs="12" md="9">
                                            <Input type="password" id="hf-password" name="hf-password" placeholder="Enter Password..."/>
                                            <FormText className="help-block">Please enter your password</FormText>
                                        </Col>
                                    </FormGroup>
                                </Form>
                            </CardBody>
                            <CardFooter className="text-right">
                                <Button type="submit" size="sm" className="btn-topi-classy"><i className="fa fa-paper-plane"></i> Submit</Button>{' '}
                                <Button type="reset" size="sm" className="btn-topi-red"><i className="fa fa-redo"></i> Reset</Button>
                            </CardFooter>
                        </Card>
                        <Card>
                            <CardHeader>
                                <strong>Normal</strong> Form
                            </CardHeader>
                            <CardBody>
                                <Form action="" method="post">
                                    <FormGroup>
                                        <Label htmlFor="nf-email">Email</Label>
                                        <Input type="email" id="nf-email" name="nf-email" placeholder="Enter Email.."/>
                                        <FormText className="help-block">Please enter your email</FormText>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label htmlFor="nf-password">Password</Label>
                                        <Input type="password" id="nf-password" name="nf-password" placeholder="Enter Password.."/>
                                        <FormText className="help-block">Please enter your password</FormText>
                                    </FormGroup>
                                </Form>
                            </CardBody>
                            <CardFooter className="text-right">
                                <Button type="submit" size="sm" className="btn-topi-classy"><i className="fa fa-paper-plane"></i> Submit</Button>{' '}
                                <Button type="reset" size="sm" className="btn-topi-red"><i className="fa fa-redo"></i> Reset</Button>
                            </CardFooter>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col xs='12' md='6'>
                        <Card>
                            <CardHeader>
                                <strong>Validation feedback</strong> Form
                            </CardHeader>
                            <CardBody>
                                <Form className="was-validated">
                                    <FormGroup>
                                        <Label htmlFor="inputSuccess2i">Non-required input</Label>
                                        <Input type="text" className="form-control-success" id="inputSuccess2i"/>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label htmlFor="inputWarning2i">Required input</Label>
                                        <Input type="text" className="form-control-warning" id="inputWarning2i" required/>
                                    </FormGroup>
                                </Form>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col xs='12' md='6'>
                        <Card>
                            <CardHeader>
                                <strong>Validation feedback</strong> Form
                            </CardHeader>
                            <CardBody>
                                <FormGroup>
                                    <Label htmlFor="inputIsValid">Input is valid</Label>
                                    <Input type="text" className="is-valid" id="inputIsValid"/>
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor="inputIsInvalid">Input is invalid</Label>
                                    <Input type="text" className="is-invalid" id="inputIsInvalid"/>
                                </FormGroup>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col xs="12" md="4">
                        <Card>
                            <CardHeader>
                                <strong>Icon/Text</strong> Groups
                            </CardHeader>
                            <CardBody>
                                <Form action="" method="post" className="form-horizontal">
                                    <FormGroup row>
                                        <Col md="12">
                                            <InputGroup>
                                                <div className="input-group-prepend">
                          <span className="input-group-text">
                            <i className="fa fa-user"></i>
                          </span>
                                                </div>
                                                <Input type="text" id="input1-group1" name="input1-group1" placeholder="Username"/>
                                            </InputGroup>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Col md="12">
                                            <InputGroup>
                                                <Input type="email" id="input2-group1" name="input2-group1" placeholder="Email"/>
                                                <div className="input-group-append">
                          <span className="input-group-text">
                            <i className="fa fa-envelope-o"></i>
                          </span>
                                                </div>
                                            </InputGroup>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Col md="12">
                                            <InputGroup>
                                                <div className="input-group-prepend">
                          <span className="input-group-text">
                            <i className="fa fa-euro"></i>
                          </span>
                                                </div>
                                                <Input type="text" id="input3-group1" name="input3-group1" placeholder=".."/>
                                                <div className="input-group-append">
                                                    <span className="input-group-text">.00</span>
                                                </div>
                                            </InputGroup>
                                        </Col>
                                    </FormGroup>
                                </Form>
                            </CardBody>
                            <CardFooter className="text-right">
                                <Button type="submit" size="sm" className="btn-topi-classy"><i className="fa fa-paper-plane"></i> Submit</Button>{' '}
                                <Button type="reset" size="sm" className="btn-topi-red"><i className="fa fa-redo"></i> Reset</Button>
                            </CardFooter>
                        </Card>
                    </Col>
                    <Col xs="12" md="4">
                        <Card>
                            <CardHeader>
                                <strong>Button</strong> Groups
                            </CardHeader>
                            <CardBody>
                                <Form action="" method="post" className="form-horizontal">
                                    <FormGroup row>
                                        <Col md="12">
                                            <InputGroup>
                                                <div className="input-group-prepend">
                                                    <Button type="button" className="btn-topi-classy"><i className="fa fa-search"></i> Search</Button>
                                                </div>
                                                <Input type="text" id="input1-group2" name="input1-group2" placeholder="Username"/>
                                            </InputGroup>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Col md="12">
                                            <InputGroup>
                                                <Input type="email" id="input2-group2" name="input2-group2" placeholder="Email"/>
                                                <div className="input-group-append">
                                                    <Button type="button" className="btn-topi-classy">Submit</Button>{' '}
                                                </div>
                                            </InputGroup>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Col md="12">
                                            <InputGroup>
                                                <div className="input-group-prepend">
                                                    <Button type="button" className="btn-topi-classy"><i className="fa fa-facebook"></i></Button>
                                                </div>
                                                <Input type="text" id="input3-group2" name="input3-group2" placeholder="Search"/>
                                                <div className="input-group-append">
                                                    <Button type="button" className="btn-topi-classy"><i className="fa fa-twitter"></i></Button>
                                                </div>
                                            </InputGroup>
                                        </Col>
                                    </FormGroup>
                                </Form>
                            </CardBody>
                            <CardFooter className="text-right">
                                <Button type="submit" size="sm" className="btn-topi-classy"><i className="fa fa-paper-plane"></i> Submit</Button>{' '}
                                <Button type="reset" size="sm" className="btn-topi-red"><i className="fa fa-redo"></i> Reset</Button>
                            </CardFooter>
                        </Card>
                    </Col>
                    <Col xs="12" md="4">
                        <Card>
                            <CardHeader>
                                <strong>Dropdowns</strong> Groups
                            </CardHeader>
                            <CardBody>
                                <Form className="form-horizontal">
                                    <FormGroup row>
                                        <Col md="12">
                                            <InputGroup>
                                                <div className="input-group-prepend">
                                                    <ButtonDropdown isOpen={this.state.first}
                                                                    toggle={() => { this.setState({ first: !this.state.first }); }}>
                                                        <DropdownToggle caret className="btn-topi-classy">
                                                            Dropdown
                                                        </DropdownToggle>
                                                        <DropdownMenu className={this.state.first ? "show" : ""}>
                                                            <DropdownItem>Action</DropdownItem>
                                                            <DropdownItem>Another Action</DropdownItem>
                                                            <DropdownItem>Something else here</DropdownItem>
                                                            <DropdownItem divider/>
                                                            <DropdownItem>Separated link</DropdownItem>
                                                        </DropdownMenu>
                                                    </ButtonDropdown>
                                                </div>
                                                <Input type="text" id="input1-group3" name="input1-group3" placeholder="Username"/>
                                            </InputGroup>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Col md="12">
                                            <InputGroup>
                                                <Input type="email" id="input2-group3" name="input2-group3" placeholder="Email"/>
                                                <div className="input-group-append">
                                                    <ButtonDropdown isOpen={this.state.second}
                                                                    toggle={() => { this.setState({ second: !this.state.second }); }}>
                                                        <DropdownToggle caret className="btn-topi-classy">
                                                            Dropdown
                                                        </DropdownToggle>
                                                        <DropdownMenu className={this.state.second ? "show" : ""}>
                                                            <DropdownItem>Action</DropdownItem>
                                                            <DropdownItem>Another Action</DropdownItem>
                                                            <DropdownItem>Something else here</DropdownItem>
                                                            <DropdownItem divider/>
                                                            <DropdownItem>Separated link</DropdownItem>
                                                        </DropdownMenu>
                                                    </ButtonDropdown>
                                                </div>
                                            </InputGroup>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Col md="12">
                                            <InputGroup>
                                                <div className="input-group-prepend">
                                                    <ButtonDropdown isOpen={this.state.third}
                                                                    toggle={() => { this.setState({ third: !this.state.third }); }}>
                                                        {/*<Button id="caret" className="btn-topi-classy">Action</Button>*/}
                                                        <DropdownToggle caret className="btn-topi-classy">Action</DropdownToggle>
                                                        <DropdownMenu className={this.state.third ? "show" : ""}>
                                                            <DropdownItem>Action</DropdownItem>
                                                            <DropdownItem>Another Action</DropdownItem>
                                                            <DropdownItem>Something else here</DropdownItem>
                                                            <DropdownItem divider/>
                                                            <DropdownItem>Separated link</DropdownItem>
                                                        </DropdownMenu>
                                                    </ButtonDropdown>
                                                </div>
                                                <Input type="text" id="input3-group3" name="input3-group3" placeholder=".."/>
                                                <div className="input-group-append">
                                                    <ButtonDropdown isOpen={this.state.fourth}
                                                                    toggle={() => { this.setState({ fourth: !this.state.fourth }); }}>
                                                        <DropdownToggle caret className="btn-topi-classy">
                                                            Dropdown
                                                        </DropdownToggle>
                                                        <DropdownMenu className={this.state.fourth ? "show" : ""}>
                                                            <DropdownItem>Action</DropdownItem>
                                                            <DropdownItem>Another Action</DropdownItem>
                                                            <DropdownItem>Something else here</DropdownItem>
                                                            <DropdownItem divider/>
                                                            <DropdownItem>Separated link</DropdownItem>
                                                        </DropdownMenu>
                                                    </ButtonDropdown>
                                                </div>
                                            </InputGroup>
                                        </Col>
                                    </FormGroup>
                                </Form>
                            </CardBody>
                            <CardFooter className="text-right">
                                <Button type="submit" size="sm" className="btn-topi-classy"><i className="fa fa-paper-plane"></i> Submit</Button>{' '}
                                <Button type="reset" size="sm" className="btn-topi-red"><i className="fa fa-redo"></i> Reset</Button>
                            </CardFooter>
                        </Card>
                    </Col>
                </Row>

            </div>
        )
    }
}

export default Forms;
