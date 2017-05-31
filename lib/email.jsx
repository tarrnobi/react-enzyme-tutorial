import React, {PropTypes} from 'react';

class Email extends React.Component{
  render(){
    return(
      <div className="form-group">
        <input
          className="form-control"
          onChange={this.props.handleEmailChange}
          type="text" />
        <button
          className="btn btn-success"
          onClick={this.props.fetchGravatar}>
            Fetch
          </button>
      </div>
    );
  }
}

Email.propTypes = {
  handleChange: PropTypes.func,
  fetchGravatar: PropTypes.func,
}
export default Email;
