import React, { useState } from "react";
import { Grid, Header } from "semantic-ui-react";
import PhotoWidgetDropzone from './PhotosWidgetsDropzone';

export default function PhotoUploadWidgets() {
    const [files, setFiles] = useState([]);
    const [image, setImage] = useState(null);
  return (
    <Grid>
      <Grid.Column width={4}>
        <Header color='teal' sub content='Add Photo' />
        <PhotoWidgetDropzone setFiles={setFiles}/>
      </Grid.Column>
      <Grid.Column width={1} />
      <Grid.Column width={4}>
        <Header color='teal' sub content='Add Resize' />
      </Grid.Column>
      <Grid.Column width={1} />
      <Grid.Column width={4}>
        <Header color='teal' sub content='Preview & upload' />
        {/* {files.length > 0 && 
            <>
                <div className='img-preview' style={{minHeight: 200, minWidth: 200, overflow: 'hidden'}} />
                <Button style={{width: 100}} positive icon='check' />
                <Button style={{width: 100}} positive icon='close' />
            </>
        } */}
      </Grid.Column>
      <Grid.Column width={1} />
    </Grid>
  );
}
