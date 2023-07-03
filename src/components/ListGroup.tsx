import { useState } from "react";

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ heading, items, onSelectItem }: Props) {
  // const handleClick = (event: MouseEvent) => console.log(event);

  // state
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>Items not found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <a
            href="#"
            className="link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
          >
            <li
              className={
                selectedIndex === index
                  ? "list-group-item active"
                  : "list-group-item"
              }
              key={index}
              onClick={() => {
                setSelectedIndex(index);
                onSelectItem(item);
              }}
            >
              {item}
            </li>
          </a>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
