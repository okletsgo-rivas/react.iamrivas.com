import React, { Component } from "react";
import { Button } from "react-bootstrap";
import PropTypes from "prop-types";

class ProjectInfo extends Component {
  render() {
    const { title, body, field_link } = this.props.info;
    return (
      <div className=" col-md-6 text-center d-flex align-items-center info child">
        <div>
          <h5>
            {this.props.i} {title[0].value}
          </h5>
          <div className="text-muted">
            <p>{body[0].value}</p>
            {!field_link.length ? null : (
              <p>
                <a
                  href={field_link[0].uri}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="dark">Launch</Button>
                </a>
              </p>
            )}
          </div>
          <div style={this.props.img} className="thumb" />
        </div>
      </div>
    );
  }
}

// PropTypes
ProjectInfo.propTypes = {
  info: PropTypes.object.isRequired
};

export default ProjectInfo;
