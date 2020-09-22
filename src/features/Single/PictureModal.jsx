import React from "react";
import { useDispatch } from "react-redux";
import { Button, Image, Modal } from "semantic-ui-react";
import { closeModal } from "../../app/common/modals/modalReducer";
import PhotoUploadWidgets from "../../app/common/photos/PhotoUploadWidgets";

export default function PictureModal({ image }) {
  const dispatch = useDispatch();
  return (
    <Modal open={true} onClose={() => dispatch(closeModal())}>
      <Modal.Header content='Upload Image' />
      <Modal.Content image>
        <Image src={image} size='medium' wrapped />
        <Modal.Description>
          <PhotoUploadWidgets />
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={() => dispatch(closeModal())}>Cancel</Button>
        <Button onClick={() => dispatch(closeModal())} positive>
          Submit
        </Button>
      </Modal.Actions>
    </Modal>
  );
}
