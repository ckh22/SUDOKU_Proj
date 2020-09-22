import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  Button,
  Card,
  Divider,
  Grid,
  Header,
  Segment,
} from "semantic-ui-react";
import { deleteProject } from "../ProjectPage/projectActions";

export default function ProjectDetails({ match }) {
  const dispatch = useDispatch();
  const project = useSelector((state) =>
    state.project.projects.find((e) => e.id === match.params.id)
  );

  return (
    <Segment>
      <Button
        circular
        icon='x'
        basic
        color='black'
        floated='left'
        as={Link}
        to='/projects'
      />

      <Header
        content={project.project}
        color='blue'
        size='large'
        style={{ display: "inline-block", marginLeft: 400 }}
      />

      <Divider />
      <Grid>
        <Grid.Column width={5}>
          <Header
            content={
              project.leaders.length > 1 ? "Project Leaders" : "Project Leader"
            }
            color='blue'
            dividing
          />
          {project.leaders.map((leader) => (
            <Card link centered color='purple' fluid raised>
              <Card.Content>
                <Card.Header>{leader}</Card.Header>
              </Card.Content>
            </Card>
          ))}
        </Grid.Column>
        <Grid.Column width={11}>
          <Segment>{project.description}</Segment>
          <Button
            floated='right'
            content='Delete'
            color='red'
            onClick={() => dispatch(deleteProject(project.id))}
            as={Link}
            to='/projects'
          />
          <Button
            floated='right'
            content='Edit'
            color='vk'
            as={Link}
            to={`/manageproject/${project.id}`}
          />
        </Grid.Column>
      </Grid>
    </Segment>
  );
}
