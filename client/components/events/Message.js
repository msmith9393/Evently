import React from 'react';

const Message = (props) => (
  <li className="collection-item avatar">
    <i className="material-icons circle">perm_identity</i>
    <span className="author">{props.author}</span>
    <p>{props.message}</p>
    {/* <a href="#!" className="secondary-content"><i className="material-icons">grade</i></a> */}
  </li>
);

Message.propTypes = {
  author: React.PropTypes.string,
  message: React.PropTypes.string,
};

export default Message;
