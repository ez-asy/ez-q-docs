import React from "react";
import DataAccordion from "@site/src/components/DataAccordion";

export function FailMessage200Res(): JSX.Element {
  const title = "Response Body";
  const data = {
    id: {
      type: "string",
      description: "The ID of the message that has been failed",
    },
  };

  return (
    <div style={{ padding: "16px 0" }}>
      <DataAccordion title={title} data={data} />
    </div>
  );
}
