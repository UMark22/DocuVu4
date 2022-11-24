import { useState } from "react";
import TableRows from "./TableRows";
import { AiOutlineFolderAdd } from "react-icons/ai";

function Index() {
  const [rowsData, setRowsData] = useState([]);

  const addTableRows = () => {
    const rowsInput = {
      columnName: "",
      dataType: "",
      length: "",
      sequence: "",
    };
    setRowsData([...rowsData, rowsInput]);
  };
  const deleteTableRows = (index) => {
    const rows = [...rowsData];
    rows.splice(index, 1);
    setRowsData(rows);
  };

  const handleChange = (index, evnt) => {
    const { name, value } = evnt.target;
    const rowsInput = [...rowsData];
    rowsInput[index][name] = value;
    setRowsData(rowsInput);
  };
  return (
    <div className="">
      <div className="">
        <div className="flex justify-center">
          <table class="border-separate border-spacing-2 border-0">
            <thead className="uppercase text-[13px] ">
              <tr>
                <th class="">ID</th>
                <th class="">Column Name</th>
                <th class="">DataType</th>
                <th class="">Length</th>
                <th class=".">Sequence</th>
                <th class="">Display</th>
                <th className="w-5">
                  <button
                    className="btn btn-outline-success"
                    onClick={addTableRows}
                  >
                    <AiOutlineFolderAdd size={25} className="text-[#0972B8]" />
                  </button>
                </th>
              </tr>
            </thead>
            <tbody>
              <TableRows
                rowsData={rowsData}
                deleteTableRows={deleteTableRows}
                handleChange={handleChange}
              />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
export default Index;
