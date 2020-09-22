import React from "react";
import MaterialTable from "material-table";

// NOT FINISHED, STILL NEED TO IMPLEMENT COLLECTION & FIX BUTTONS

export default function MaterialTableDemo() {
  const [state, setState] = React.useState({
    columns: [
      { title: "", field: "name" },
      { title: "", field: "surname" },
      { title: "", field: "birthYear", type: "numeric" },
      {
        title: "",
        field: "birthCity",
        lookup: { 34: "İstanbul", 63: "Şanlıurfa" },
      },
    ],
    data: [],
  });

  return (
    <MaterialTable
      title='Editable Example'
      columns={state.columns}
      data={state.data}
      editable={{
        onRowAdd: (newData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              setState((prevState) => {
                const data = [...prevState.data];
                data.push(newData);
                return { ...prevState, data };
              });
            }, 600);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              if (oldData) {
                setState((prevState) => {
                  const data = [...prevState.data];
                  data[data.indexOf(oldData)] = newData;
                  return { ...prevState, data };
                });
              }
            }, 600);
          }),
        onRowDelete: (oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              setState((prevState) => {
                const data = [...prevState.data];
                data.splice(data.indexOf(oldData), 1);
                return { ...prevState, data };
              });
            }, 600);
          }),
      }}
    />
  );
}
