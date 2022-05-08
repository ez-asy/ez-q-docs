import React from "react";
import DataAccordion from "@site/src/components/DataAccordion";

export function PublishMessageUrlParams(): JSX.Element {
  const title = "Url Path Parameters";
  const data = {
    queue_name: {
      type: "string",
      description: "The name of the queue you wish to publish to.",
    },
  };

  return (
    <div style={{ padding: "0" }}>
      <DataAccordion title={title} data={data} />
    </div>
  );
}
