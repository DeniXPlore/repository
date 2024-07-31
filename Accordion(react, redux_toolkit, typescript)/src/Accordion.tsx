import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "./features/store";
import {
  toggleSelectionMode,
  setSingleSelection,
  setMultipleSelection,
} from "./features/accordion/accordionSlice";
import data, { dataType } from "./data";

const Accordion: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { selected, enableMultiSelection, multiple } = useSelector(
    (state: RootState) => state.accordion
  );

  const handleSingleSelection = (id: string) => {
    dispatch(setSingleSelection(id === selected ? null : id));
  };

  const handleMultipleSelection = (id: string) => {
    dispatch(setMultipleSelection(id));
  };

  return (
    <div className="wrapper">
      <button onClick={() => dispatch(toggleSelectionMode())}>
        {enableMultiSelection
          ? "Set Single Selection"
          : "Enable Multiple Selection"}
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
                ? multiple.includes(dataItem.id) && (
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
