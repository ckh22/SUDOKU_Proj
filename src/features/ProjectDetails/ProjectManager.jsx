import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Button, Form, Header, Segment, TextArea } from "semantic-ui-react";
import { createProject, updateProject } from "../ProjectPage/projectActions";

export default function ProjectManager({ match }) {
  const dispatch = useDispatch();
  const selectedProject = useSelector((state) =>
    state.project.projects.find((e) => e.id === match.params.id)
  );

  const initialValues = selectedProject ?? {
    id: "",
    project: "",
    description: "",
    leaders: [],
  };

  const [values, setValues] = useState(initialValues);
  function handleFormSubmit() {
    selectedProject
      ? dispatch(updateProject({ ...selectedProject, ...values }))
      : dispatch(createProject({ ...values }));
  }

  function handleInputChange(e) {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  }

  return (
    <Segment clearing>
      <Header content='Edit the project' />
      <Form onSubmit={handleFormSubmit}>
        <Form.Field>
          <input
            type='text'
            placeholder='Project'
            name='project'
            value={values.project}
            onChange={(e) => handleInputChange(e)}
          />
        </Form.Field>
        <Form.Field>
          <TextArea
            type='text'
            placeholder='Description'
            name='description'
            value={values.description}
            onChange={(e) => handleInputChange(e)}
            rows={7}
          />
        </Form.Field>
        <Form.Field>
          <Button
            floated='right'
            content='Submit'
            type='submit'
            as={Link}
            color='purple'
            to='/projects'
          />
          <Button
            as={Link}
            to='/projects'
            floated='right'
            content='Cancel'
            type='submit'
          />
        </Form.Field>
      </Form>
    </Segment>
  );
}
