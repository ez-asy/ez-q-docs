import React from "react";
import DataAccordion from "@site/src/components/DataAccordion";

export function GetQueues200Accordion(): JSX.Element {
  const title = "Response Body";
  const data = {
    queues: {
      type: "primitive-array",
      shape: {
        type: "string",
        description: "A string array of queue names",
      },
    },
  };

  return (
    <div style={{ padding: "16px 0" }}>
      <DataAccordion title={title} data={data} />
    </div>
  );
}
