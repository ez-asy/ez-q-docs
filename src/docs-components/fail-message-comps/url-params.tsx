import React from "react";
import DataAccordion from "@site/src/components/DataAccordion";

export function FailMsgUrlParams(): JSX.Element {
  const title = "Url Path Parameters";
  const data = {
    msg_id: {
      type: "string",
      description: "The id of the message you wish to move to a failed state",
    },
  };

  return (
    <div style={{ padding: "0" }}>
      <DataAccordion title={title} data={data} />
    </div>
  );
}
