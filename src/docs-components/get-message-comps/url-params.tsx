import React from "react";
import DataAccordion from "@site/src/components/DataAccordion";

export function GetMessageUrlParams(): JSX.Element {
  const title = "Url Path Parameters";
  const data = {
    queue_name: {
      type: "string",
      description: "The name of the queue you wish to pull a message from.",
    },
  };

  return (
    <div style={{ padding: "0" }}>
      <DataAccordion title={title} data={data} />
    </div>
  );
}
