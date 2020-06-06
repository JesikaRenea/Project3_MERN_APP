import React, { Component, useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { registerUser } from '../../actions/authActions';
import classnames from 'classnames';
import Toggle from 'react-radio-toggle';
import Select from 'react-select';

const data = ["chocolate", "strawberry", "vanilla"];

class Register extends Component {
    
    constructor() {
        super();

        this.state = {
            email: "",
            password: "",
            password2: "",
            firstName: "",
            lastName: "",
            address1: "",
            address2: "",
            city: "",
            st: "",
            zip: "",
            phone: "",
            phoneType: "",
            errors: {}
        };
    }


    componentDidMount() {
        if (this.props.auth.isAuthenticated) this.props.history.push("/dashboard");
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.auth.isAuthenticated) this.props.history.push("/dashboard");

        if (nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            });
        }
    }

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit = e => {
        e.preventDefault();

        const newUser = {
            email: this.state.email,
            password: this.state.password,
            password2: this.state.password2,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            address1: this.state.address1,
            address2: this.state.address2,
            city: this.state.city,
            st: this.state.st,
            zip: this.state.zip,
            phone: this.state.phone,
            phoneType: this.state.phoneType,
        };

        // console.log(newUser);
        this.props.registerUser(newUser, this.props.history);
    }
    

    render() {
        const { errors } = this.state;

        return (
            <div className="container">
                <div className="row">
                    <div className="col s8 offset-s2">
                        <Link to="/" className="btn-flat waves-effect">
                            <i className="material-icons left">keyboard_backspace</i> Back to home
                        </Link>
                        <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                            <h4>
                                <b>Register</b> below
                            </h4>
                            <p className="grey-text text-darken-1">
                                Already have an account? <Link to="/login">Login</Link>
                            </p>
                        </div>
                        <form noValidate onSubmit={this.onSubmit}>

                            <div className="input-field col s12">
                                <input onChange={this.onChange} value={this.state.firstName} error={errors.firstName} name="firstName" type="text" className={classnames("", { invalid: errors.firstName })} />
                                <label htmlFor="firstName">First Name</label>
                                <span className="red-text">{errors.firstName}</span>
                            </div>

                            <div className="input-field col s12">
                                <input onChange={this.onChange} value={this.state.lastName} error={errors.lastName} name="lastName" type="text" className={classnames("", { invalid: errors.lastName })} />
                                <label htmlFor="lastName">Last Name</label>
                                <span className="red-text">{errors.lastName}</span>
                            </div>

                            <div className="input-field col s12">
                                <input onChange={this.onChange} value={this.state.email} error={errors.email} name="email" type="email" className={classnames("", { invalid: errors.email })} />
                                <label htmlFor="email">Email</label>
                                <span className="red-text">{errors.email}</span>
                            </div>

                            <div className="input-field col s12">
                                <input onChange={this.onChange} value={this.state.password} error={errors.password} name="password" type="password" className={classnames("", { invalid: errors.password })} />
                                <label htmlFor="password">Password</label>
                                <span className="red-text">{errors.password}</span>
                            </div>

                            <div className="input-field col s12">
                                <input onChange={this.onChange} value={this.state.password2} error={errors.password2} name="password2" type="password" className={classnames("", { invalid: errors.password2 })} />
                                <label htmlFor="password2">Confirm Password</label>
                                <span className="red-text">{errors.password2}</span>
                            </div>

                            <div className="input-field col s12">
                                <input onChange={this.onChange} value={this.state.address1} error={errors.address1} name="address1" type="text" className={classnames("", { invalid: errors.address1 })} />
                                <label htmlFor="address1">Address 1</label>
                                <span className="red-text">{errors.address1}</span>
                            </div>

                            <div className="input-field col s12">
                                <input onChange={this.onChange} value={this.state.address2} error={errors.address2} name="address2" type="text" className={classnames("", { invalid: errors.address2 })} />
                                <label htmlFor="address2">Address 2</label>
                                <span className="red-text">{errors.address2}</span>
                            </div>

                            <div className="input-field col s12">
                                <input onChange={this.onChange} value={this.state.city} error={errors.city} name="city" type="text" className={classnames("", { invalid: errors.city })} />
                                <label htmlFor="city">City</label>
                                <span className="red-text">{errors.city}</span>
                            </div>

                            <div className="row">
                                <div className="input-field col s12 m3">
                                    <input placeholder="Washington, DC" id="city" type="text" className="validate" />
                                    <label htmlFor="city">City</label>
                                </div>
                                <div className="input-field col s12 m3">
                                    <Select id="state">
                                        <option value="">Select State</option>
                                        <option value="AL">AL</option>
                                        <option value="AR">AR</option>
                                        <option value="AS">AS</option>
                                        <option value="AZ">AZ</option>
                                        <option value="CA">CA</option>
                                        <option value="CO">CO</option>
                                        <option value="CT">CT</option>
                                        <option value="DC">DC</option>
                                        <option value="DE">DE</option>
                                        <option value="FL">FL</option>
                                        <option value="GA">GA</option>
                                        <option value="GU">GU</option>
                                        <option value="HI">HI</option>
                                        <option value="IA">IA</option>
                                        <option value="IL">IL</option>
                                        <option value="IN">IN</option>
                                        <option value="KS">KS</option>
                                        <option value="KY">LA</option>
                                        <option value="MA">MA</option>
                                        <option value="MD">MD</option>
                                        <option value="ME">ME</option>
                                        <option value="MI">MI</option>
                                        <option value="MN">MN</option>
                                        <option value="MO">MO</option>
                                        <option value="MS">MS</option>
                                        <option value="MT">MT</option>
                                        <option value="NC">NC</option>
                                        <option value="ND">ND</option>
                                        <option value="NE">NE</option>
                                        <option value="NH">NH</option>
                                        <option value="NJ">NJ</option>
                                        <option value="NM">NM</option>
                                        <option value="NV">NV</option>
                                        <option value="NY">NY</option>
                                        <option value="OH">OH</option>
                                        <option value="OK">OK</option>
                                        <option value="OR">OR</option>
                                        <option value="PA">PA</option>
                                        <option value="PR">PR</option>
                                        <option value="RI">RI</option>
                                        <option value="SC">SC</option>
                                        <option value="SD">SD</option>
                                        <option value="TN">TN</option>
                                        <option value="TX">TX</option>
                                        <option value="UT">UT</option>
                                        <option value="VA">VA</option>
                                        <option value="VI">VI</option>
                                        <option value="VT">VT</option>
                                        <option value="WA">WA</option>
                                        <option value="WI">WI</option>
                                        <option value="WV">WV</option>
                                        <option value="WY">WY</option>
                                    </Select>
                                    <label htmlFor="state">State</label>
                                </div>
                                <div className="input-field col s12 m3">
                                    <input placeholder="20500" id="zipCode" type="text" className="validate" />
                                    <label htmlFor="zipCode">Zip Code</label>
                                </div>
                            </div>



                            <div className="input-field col s12">
                                <select onChange={this.onChange}
                                    value={this.state.st} error={errors.st}
                                    name="st"
                                    type="text"
                                    className={classnames("", { invalid: errors.st })}

                                />
                                <label htmlFor="st">State</label>
                                <span className="red-text">{errors.st}</span>
                            </div>




                            <div className="input-field col s12">
                                <input onChange={this.onChange} value={this.state.zip} error={errors.zip} name="zip" type="text" className={classnames("", { invalid: errors.zip })} />
                                <label htmlFor="zip">Zip</label>
                                <span className="red-text">{errors.zip}</span>
                            </div>

                            <div className="input-field col s12">
                                <input onChange={this.onChange}
                                    value={this.state.phone}
                                    error={errors.phone}
                                    name="phone"
                                    type="text"
                                    className={classnames("", { invalid: errors.phone })} />
                                <label htmlFor="phone">Phone</label>
                                <span className="red-text">{errors.phone}</span>
                            </div>

                            <div className="input-field col s12">
                            <label htmlFor="phoneType">Phone Type</label>
                            <br />

                                <Toggle
                                    value={this.state.phoneType}
                                    items={["Mobile", "Landline", "None"]}
                                    checked="Mobile"
                                    name="phoneType"
                                    onToggle={this.handleCatChange}
                                    // placeholder="Phone Type"
                                /> 

                                {/* <Select onChange={this.onChange}
                                    value={this.state.phoneType}
                                    options={data}
                                    error={errors.phoneType}
                                    name="phoneType"
                                    type="text"
                                    className={classnames("", { invalid: errors.phoneType })}
                                    id="phoneType"
                                /> */}

                                {/* <label htmlFor="phoneType">Phone Type</label> */}
                                <span className="red-text">{errors.phoneType}</span>
                            </div>

                            <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                                <button className="btn btn-large waves-effect waves-light hoverable" style={{
                                    width: "150px",
                                    borderRadius: "3px",
                                    letterSpacing: "1.5px",
                                    marginTop: "1rem"
                                }} type="submit">
                                    Sign Up
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

Register.propTypes = {
    registerUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(mapStateToProps, { registerUser })(withRouter(Register));