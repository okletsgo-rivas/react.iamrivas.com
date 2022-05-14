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
            {this.props.i} {title}
          </h5>
          <div className="text-muted">
            <p dangerouslySetInnerHTML={{ __html: body }} />
            {!field_link.length ? null : (
              <p>
                <a href={field_link} target="_blank" rel="noopener noreferrer">
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
  info: PropTypes.object.isRequired,
};

export default ProjectInfo;
