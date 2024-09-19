import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "./features/store";
import {
  updateCell,
  sortData,
  setEditField,
  fetchData,
  setError,
} from "./features/tableSlice";
import { TbFileImport } from "react-icons/tb";
import { AiFillFolderAdd } from "react-icons/ai";
import "./table.css";

const App: React.FC = () => {
  const dispatch = useDispatch();
  const data = useSelector((state: RootState) => state.table.data);
  const sortKey = useSelector((state: RootState) => state.table.sortKey);
  const sortDirection = useSelector(
    (state: RootState) => state.table.sortDirection
  );
  const editField = useSelector((state: RootState) => state.table.editField);
  const error = useSelector((state: RootState) => state.table.error);

  const handleSort = (key: keyof (typeof data)[0]) => {
    const newDirection =
      sortKey === key && sortDirection === "asc" ? "desc" : "asc";
    dispatch(sortData({ key, direction: newDirection }));
  };

  const handleExport = () => {
    const exportData = JSON.stringify(data);
    const blob = new Blob([exportData], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "export.json");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleEdit = (id: number, field: string) => {
    dispatch(setEditField({ id, field }));
  };

  const handleInputChange = (
    id: number,
    field: keyof (typeof data)[0],
    value: string
  ) => {
    if (
      (field === "price" || field === "product_quantity") &&
      isNaN(Number(value))
    ) {
      dispatch(
        setError("Вводить можно только числа в столбцах Количество и Цена")
      );
      return;
    }
    dispatch(updateCell({ id, field, value }));
    dispatch(setEditField(null));
    dispatch(setError(null));
  };

  const handleKeyDown = (
    id: number,
    field: keyof (typeof data)[0],
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === "Enter") {
      handleInputChange(id, field, (e.target as HTMLInputElement).value);
    }
  };

  return (
    <div className="table-wrapper">
      <div className="table-button-container">
        <button>Сформировать</button>
        <button onClick={handleExport}>Экспорт</button>
      </div>
      <div className="load-container">
        <div className="button-group">
          <button onClick={() => dispatch(fetchData())}>
            <TbFileImport />
            Загрузить данные
          </button>
          <button>
            <AiFillFolderAdd />
            Изменить данные
          </button>
        </div>
        <div className="clear-button-container">
          <button className="clear-button">
            Очистить{" "}
            <span style={{ color: "black", fontWeight: "bold" }}>x</span>
          </button>
        </div>
      </div>

      {error && <div className="error-alert">{error}</div>}
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th onClick={() => handleSort("barcode")}>
                Баркод{" "}
                {sortKey === "barcode" && (sortDirection === "asc" ? "▲" : "▼")}
              </th>
              <th onClick={() => handleSort("product_brand")}>
                Бренд{" "}
                {sortKey === "product_brand" &&
                  (sortDirection === "asc" ? "▲" : "▼")}
              </th>
              <th onClick={() => handleSort("product_name")}>
                Имя{" "}
                {sortKey === "product_name" &&
                  (sortDirection === "asc" ? "▲" : "▼")}
              </th>
              <th onClick={() => handleSort("product_quantity")}>
                Количество{" "}
                {sortKey === "product_quantity" &&
                  (sortDirection === "asc" ? "▲" : "▼")}
              </th>
              <th onClick={() => handleSort("price")}>
                Цена{" "}
                {sortKey === "price" && (sortDirection === "asc" ? "▲" : "▼")}
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td>{item.barcode}</td>
                <td>{item.product_brand}</td>
                <td>{item.product_name}</td>
                <td
                  onDoubleClick={() => handleEdit(item.id, "product_quantity")}
                >
                  {editField?.id === item.id &&
                  editField.field === "product_quantity" ? (
                    <input
                      type="text"
                      defaultValue={item.product_quantity}
                      onBlur={(e) =>
                        handleInputChange(
                          item.id,
                          "product_quantity",
                          e.target.value
                        )
                      }
                      onKeyDown={(e) =>
                        handleKeyDown(item.id, "product_quantity", e)
                      }
                    />
                  ) : (
                    item.product_quantity
                  )}
                </td>
                <td onDoubleClick={() => handleEdit(item.id, "price")}>
                  {editField?.id === item.id && editField.field === "price" ? (
                    <input
                      type="text"
                      defaultValue={item.price}
                      onBlur={(e) =>
                        handleInputChange(item.id, "price", e.target.value)
                      }
                      onKeyDown={(e) => handleKeyDown(item.id, "price", e)}
                    />
                  ) : (
                    item.price
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="totals">
        <div style={{ marginLeft: "4rem" }}>ИТОГО:</div>
        <div style={{ marginRight: "4rem" }}>
          <span style={{ marginRight: "7rem" }}>
            {data.reduce((acc, item) => acc + Number(item.product_quantity), 0)}
          </span>
          <span>
            {data
              .reduce(
                (acc, item) =>
                  acc + Number(item.product_quantity) * Number(item.price),
                0
              )
              .toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default App;
