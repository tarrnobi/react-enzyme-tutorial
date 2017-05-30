import React, {PropTypes} from 'react';
//import PropTypes from 'prop-types';


class Avatar extends React.Component{
  render(){
    return (
      <section>
        <h1>{this.props.email}</h1>
        <img className="gravatar-img"
          src={this.props.src}/>
      </section>
    )
  }
}

Avatar.propTypes = {
  email: PropTypes.string,//.isRequired,
  src: PropTypes.string,//.isRequired,
};
export default Avatar;
