import React from "react";
import DataAccordion from "@site/src/components/DataAccordion";

export function GetMessage200Res(): JSX.Element {
  const title = "Response Body";
  const data = {
    id: {
      type: "string",
      description: "The ID of the message that has been popped",
    },
    content: {
      type: "any json",
      description:
        "JSON content of the message pulled - the same content defined when the message was published",
    },
  };

  return (
    <div style={{ padding: "16px 0" }}>
      <DataAccordion title={title} data={data} />
    </div>
  );
}
