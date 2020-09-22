import React from "react";
import { useDispatch } from "react-redux";
import { Card, Image, Button } from "semantic-ui-react";
import { openModal } from "../../app/common/modals/modalReducer";
// import { format } from "date-fns";

export default function UserInfo({ profile }) {
  const dispatch = useDispatch();
  const image = profile.image

  return (
    <Card>
      <Image fluid src={profile.image} />
      <Card.Content>
        <Card.Header>
          {profile.name}
          <Button
            floated='right'
            content="Edit Photo"
            color='vk'
            onClick={() =>
              dispatch(
                openModal({ modalType: "PictureModal", modalProps: { image } })
              )
            }
          />
        </Card.Header>
        {/* <Card.Meta>Since:{format(profile.since, "MMMM d, yyyy")}</Card.Meta> */}
      </Card.Content>
    </Card>
  );
}
