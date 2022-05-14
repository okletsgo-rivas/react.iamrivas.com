import React, { Component } from "react";
import ProjectInfo from "./ProjectInfo";
import ProjectImage from "./ProjectImage";
import PropTypes from "prop-types";
import Bounce from "react-reveal/Bounce";

class Project extends Component {
  getThumb = () => {
    const img = "//d9.iamrivas.com" + this.props.project.field_image;
    return {
      backgroundImage: img.length ? `url(${img})` : "none",
    };
  };
  render() {
    const img = this.getThumb();
    const arr = [
      <ProjectInfo key="0" info={this.props.project} img={img} />,
      <ProjectImage
        key="1"
        bg={img}
        path={this.props.project.field_image}
        onClick={this.props.onImageClickHandler.bind(
          this,
          this.props.project.nid[0].value
        )}
      />,
    ];
    const isEven = this.props.i % 2 === 1;

    return (
      <Bounce right={!isEven} left={isEven} delay={500}>
        <div className="row project">
          {(!isEven ? arr : arr.reverse()).map((ele) => ele)}
        </div>
      </Bounce>
    );
  }
}

// PropTypes
Project.propTypes = {
  project: PropTypes.object.isRequired,
};

export default Project;
