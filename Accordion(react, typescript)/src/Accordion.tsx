import { useState } from "react";
import data, { dataType } from "./data.ts";

const Accordion = () => {
  const [selected, setSelected] = useState<string | null>(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState<string[]>([]);

  function handleSingleSelection(getCurrentId: string) {
    setSelected(getCurrentId === selected ? null : getCurrentId);
  }

  function handleMultipleSelection(getCurrentId: string) {
    const copyMultiple = [...multiple];
    const findIndexOfCurrentId = copyMultiple.indexOf(getCurrentId);
    console.log(findIndexOfCurrentId);
    if (findIndexOfCurrentId === -1) {
      copyMultiple.push(getCurrentId);
    } else {
      copyMultiple.splice(findIndexOfCurrentId, 1);
    }
    setMultiple(copyMultiple);
  }

  function toggleSelectionMode() {
    setEnableMultiSelection(!enableMultiSelection);
    setMultiple([]); 
    setSelected(null); 
  }

  console.log(selected, multiple);

  return (
    <div className="wrapper">
      <button onClick={toggleSelectionMode}>
        {enableMultiSelection ? "Set Single Selection" : "Enable Multiple Selection"}
      </button>
      <div className="accordion">
        {data && data.length > 0 ? (
          data.map((dataItem: dataType) => (
            <div className="item" key={dataItem.id}>
              <div
                onClick={
                  enableMultiSelection
                    ? () => handleMultipleSelection(dataItem.id)
                    : () => handleSingleSelection(dataItem.id)
                }
                className="title"
              >
                <h3>{dataItem.question}</h3>
                <span>+</span>
              </div>
              {enableMultiSelection
                ? multiple.indexOf(dataItem.id) !== -1 && (
                    <div className="content">{dataItem.answer}</div>
                  )
                : selected === dataItem.id && (
                    <div className="content">{dataItem.answer}</div>
                  )}
            </div>
          ))
        ) : (
          <div>No Data Found</div>
        )}
      </div>
    </div>
  );
};

export default Accordion;
