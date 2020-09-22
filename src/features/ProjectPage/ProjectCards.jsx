import React from "react";
import { Link } from "react-router-dom";
import { Button, Card, Header, Label } from "semantic-ui-react";

export default function ProjectCards({ project }) {
  return (
    <Card centered raised color='olive'>
      <Card.Content>
        <Card.Header>
          <Label as='a' color='violet' ribbon='left'>
            PROJECT #: {project.id}
          </Label>
          {project.project}
          <Button
            floated='right'
            content='View'
            color='vk'
            as={Link}
            to={`/projects/${project.id}`}
          />
        </Card.Header>
        {project.leaders.map((leader) => (
          <Card.Description>{leader}</Card.Description>
        ))}
        <Header dividing color='violet' size='small' content='Description' />
        <Card.Meta>{project.description}</Card.Meta>
      </Card.Content>
    </Card>
  );
}
