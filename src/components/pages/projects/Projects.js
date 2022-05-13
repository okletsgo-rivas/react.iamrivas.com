import React, { Component } from "react";
import Project from "./Project";
import { Container } from "react-bootstrap";
import { Row, ToggleButtonGroup, ToggleButton, Badge } from "react-bootstrap";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

class Projects extends Component {
  state = {
    data: [],
    filters: [
      { title: "ALL", id: "all", value: -1 },
      { title: "Programming", id: "programming", value: 127 },
      { title: "E-learning", id: "elearning", value: 129 },
      { title: "Design", id: "design", value: 126 },
      { title: "Video", id: "video", value: 128 }
    ],
    openLB: false,
    mainSrc: null
  };

  componentDidMount() {
    fetch("http://d8.iamrivas.com/json/projects")
      .then(res => res.json())
      .then(data => {
        this.setState({ data });
      })
      .catch(console.log);
  }

  filterArray = val => {
    if (val === -1) {
      return this.state.data;
    } else {
      return this.state.data.filter(project => {
        return project.field_type.filter(tag => tag.target_id === val).length;
      });
    }
  };

  filterHandler = val => {
    if (this.props.match.params.projectType !== val.id)
      this.props.history.push(`/projects/${val.id}`);
  };

  onImageClickHandler = projectID => {
    let projectIdx = this.state.data.findIndex(
      itm => itm.nid[0].value === projectID
    );
    let project = this.state.data[projectIdx];
    this.setState({ openLB: true, mainSrc: project.field_image[0].url });
  };

  render() {
    let type = this.props.match.params.projectType || "all";
    let typeID = this.state.filters.filter(itm => itm.id === type)[0].value;

    return (
      <Container className="projects">
        <Row ref="filters" className="filters">
          <ToggleButtonGroup
            name="filters"
            className="w-100"
            onChange={this.filterHandler}
            aria-label="Filter Group"
          >
            {this.state.filters.map((btn, i) => (
              <ToggleButton
                key={i}
                value={{ value: btn.value, id: btn.id }}
                variant={typeID === btn.value ? "primary" : "secondary"}
              >
                {btn.title}
                <Badge variant="light" className="ml-2">
                  {this.filterArray(btn.value).length}
                </Badge>
              </ToggleButton>
            ))}
          </ToggleButtonGroup>
        </Row>
        {this.filterArray(typeID).map((project, i) => (
          <Project
            key={project.nid[0].value}
            project={project}
            i={i}
            onImageClickHandler={this.onImageClickHandler}
          />
        ))}
        {this.state.openLB && (
          <Lightbox
            mainSrc={this.state.mainSrc}
            onCloseRequest={() => this.setState({ openLB: false })}
            reactModalStyle={{ overlay: { zIndex: 2000 } }}
          />
        )}
      </Container>
    );
  }
}

export default Projects;
