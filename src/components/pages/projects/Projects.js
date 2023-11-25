import React, { Component } from "react";
import Project from "./Project";
import { Col, Container } from "react-bootstrap";
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
      // { title: "Video", id: "video", value: 128 },
    ],
    openLB: false,
    mainSrc: null,
  };

  componentDidMount() {
    fetch("//d10.iamrivas.com/json/projects2")
      .then((res) => res.json())
      .then((data) => {
        this.setState({ data });
      })
      .catch(console.log);
  }

  filterArray = (val) =>
    val === -1
      ? [...new Set(this.state.data)]
      : this.state.data.filter((_) => _.field_type === val.toString());

  filterHandler = (val) => {
    if (this.props.match.params.projectType !== val.id)
      this.props.history.push(`/projects/${val.id}`);
  };

  onImageClickHandler = (projectID) => {
    let projectIdx = this.state.data.findIndex(
      (itm) => itm.nid[0].value === projectID
    );
    let project = this.state.data[projectIdx];
    this.setState({ openLB: true, mainSrc: project.field_image[0].url });
  };

  render() {
    let type = this.props.match.params.projectType || "all";
    let typeID = this.state.filters.filter((itm) => itm.id === type)[0].value;

    return this.state.data.length === 0 ? (
      <Container>
        <Row>
          <Col>
            <em>Loading...</em>
          </Col>
        </Row>
      </Container>
    ) : (
      <Container className="projects">
        <Row ref="filters" className="filters">
          <Col xs={12}>
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
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            {this.filterArray(typeID).map((project, i) => (
              <Project
                key={i}
                project={project}
                i={i}
                onImageClickHandler={this.onImageClickHandler}
              />
            ))}
          </Col>
        </Row>
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
