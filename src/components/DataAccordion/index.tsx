import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

type AccordionItemData = {
  type:
    | "string"
    | "boolean"
    | "any json"
    | "object"
    | "primitive-array"
    | "object-array";
  description?: string;
  shape?: Record<string, AccordionItemData>;
};

type AccordionItemDataWithName = { name: string } & AccordionItemData;

const OpenIndicator = ({ open }: { open: boolean }) => {
  return (
    <>
      {open ? (
        <div className={styles["chevron-down"]} />
      ) : (
        <div className={styles["chevron-right"]} />
      )}
    </>
  );
};

const AccordionItemPrimitive = ({ name, type, description }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        borderBottom: "1px solid",
        padding: "4px",
      }}
    >
      <div style={{ display: "flex", gap: "12px" }}>
        <div style={{ fontWeight: "bold" }}>{name}</div>
        <div style={{ fontStyle: "italic" }}>{type}</div>
      </div>
      <div>{description}</div>
    </div>
  );
};
const AccordionItemPrimitiveArray = ({ name, type, description, shape }) => {
  const displayType = `array of ${shape.type}s`;

  return (
    <>
      <AccordionItemPrimitive
        name={name}
        type={displayType}
        description={shape.description}
      />
    </>
  );
};
const AccordionItemObjectArray = ({
  name,
  type,
  description,
  shape,
}: AccordionItemDataWithName) => {
  return <>Object Array</>;
};

const AccordionContainer = ({
  data,
}: {
  data: Record<string, AccordionItemData>;
}) => {
  const items = Object.entries(data).map(([key, value]) => {
    const { type, description, shape } = value;
    switch (type) {
      case "boolean":
      case "string":
      case "any json":
        return (
          <AccordionItemPrimitive
            name={key}
            type={type}
            description={description}
          />
        );
      case "primitive-array":
        return (
          <AccordionItemPrimitiveArray
            name={key}
            type={type}
            description={description}
            shape={shape}
          />
        );

      case "object-array":
        return (
          <AccordionItemObjectArray
            name={key}
            type={type}
            description={description}
            shape={shape}
          />
        );

      default:
        break;
    }
  });
  return <div style={{ marginLeft: "16px" }}>{items}</div>;
};

export default function DataAccordion({ title, data }): JSX.Element {
  const [accordionOpen, setAccordionOpen] = React.useState(true);

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          cursor: "pointer",
          paddingBottom: "8px",
        }}
        onClick={() => {
          setAccordionOpen(!accordionOpen);
        }}
      >
        <OpenIndicator open={accordionOpen} />
        <h4 style={{ margin: "0" }}>{title}</h4>
      </div>
      {accordionOpen && <AccordionContainer data={data} />}
    </div>
  );
}
