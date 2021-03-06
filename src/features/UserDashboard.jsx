import React, { useEffect } from "react";
import { Card, Grid, Image, Loader, Segment } from "semantic-ui-react";
import { useSelector, useDispatch } from "react-redux";
import LoadingComponent from "../app/layout/LoadingComponent";
import { fetchProfiles } from "./profileActions";
import { useState } from "react";
import InfiniteScroll from "react-infinite-scroller";
import { Link } from "react-router-dom";
import Filter from './Filter/Filter'

export default function UserDashboard() {
  const dispatch = useDispatch();
  const limit = 10;
  const { profiles, moreProfiles } = useSelector((state) => state.profile);
  const { loading } = useSelector((state) => state.async);
  const [lastDocSnapshot, setLastDocSnapshot] = useState(null);
  const [loadingInitial, setLoadingInitial] = useState(false);
  //  const {users} = useSelector(state => state.user);

  useEffect(() => {
    setLoadingInitial(true);
    dispatch(fetchProfiles(limit)).then((lastVisible) => {
      setLastDocSnapshot(lastVisible);
      setLoadingInitial(false);
    });
  }, [dispatch]);

  function handleFetchNextProfiles() {
    dispatch(fetchProfiles(limit, lastDocSnapshot)).then((lastVisible) => {
      setLastDocSnapshot(lastVisible);
    });
  }

  if (loadingInitial)
    return (
      <>
        <LoadingComponent />
      </>
    );

  return (
    <Grid>
      <Grid.Column width={12}>
        {profiles.length !== 0 && (
          <InfiniteScroll
            pageStart={0}
            loadMore={handleFetchNextProfiles}
            hasMore={!loading && moreProfiles}
            initialLoad={false}
          >
            <Card.Group itemsPerRow={5}>
              {profiles.map((profile) => (
                <Card
                  centered
                  link
                  raised
                  color='olive'
                  as={Link}
                  to={`/members/${profile.id}`}
                >
                  <Image
                    src={profile.image}
                    style={{ width: "960px", height: "auto" }}
                  />
                  <Card.Content content={profile.name}></Card.Content>
                </Card>
              ))}
            </Card.Group>
          </InfiniteScroll>
        )}
      </Grid.Column>
      <Grid.Column width={4}>
        <Segment compact>
          <Filter/>
        </Segment>
      </Grid.Column>
      <Grid.Column width={10}>
        <Loader active={loading} />
      </Grid.Column>
    </Grid>
  );
}
