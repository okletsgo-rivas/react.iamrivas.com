import React, { Component } from "react";
import PropTypes from "prop-types";

class ProjectImage extends Component {
  render() {
    return (
      <div
        style={this.props.bg}
        className="col-md-6 full child"
        onClick={this.props.onClick}
      />
    );
  }
}

// PropTypes
ProjectImage.propTypes = {
  bg: PropTypes.object.isRequired
};

export default ProjectImage;
