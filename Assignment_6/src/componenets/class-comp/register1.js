import React, { Component } from 'react'
import '../function-comp/register.css'

export class Register1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      company: ''
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { name, age, company } = this.state;
    console.log({ name, age, company });
  }

  render() {
    // return (
    //   <div>
    //     <h2>Registeration page</h2>
    //     <form>
    //     <div>
    //     <label for="name">Name:</label>
    //     <input type="text" id="name" name="name" required></input>
    // </div>
    // <div>
    //     <label for="age">Age:</label>
    //     <input type="number" id="age" name="age" required></input>
    // </div>
    // <div>
    //     <label for="company">Company:</label>
    //     <input type="text" id="company" name="company" required></input>
    // </div>
    // <button type="submit">Submit</button>
    //     </form>

    //   </div>
    // )
    const { name, age, company } = this.state;

    return (
      <div>
        <h2>Registeration page</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={name}
              onChange={this.handleInputChange}
            ></input>
          </div>
          <div>
            <label htmlFor="age">Age:</label>
            <input
              type="number"
              id="age"
              name="age"
              required
              value={age}
              onChange={this.handleInputChange}
            ></input>
          </div>
          <div>
            <label htmlFor="company">Company:</label>
            <input
              type="text"
              id="company"
              name="company"
              required
              value={company}
              onChange={this.handleInputChange}
            ></input>
          </div>
          <button type="submit">Submit</button>
        </form>
        <div>
          <h3>Data:</h3>
          <p>Name: {name}</p>
          <p>Age: {age}</p>
          <p>Company: {company}</p>
        </div>
      </div>
    );
  }
}

export default Register1
