import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DataTable from "react-data-table-component";
import axios from "axios";
import { AiOutlineSearch, AiFillEdit } from "react-icons/ai";

import { IoMdArrowRoundDown } from "react-icons/io";
import { VscNewFile, VscNewFolder } from "react-icons/vsc";
import { BsUpcScan } from "react-icons/bs";
import { HiTrash } from "react-icons/hi";

const MyInboxTable = () => {
  const navigate = useNavigate();
  const [posts, setPost] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredDocumentType, setFilteredDocumentType] = useState([]);

  const columns = [
    {
      name: <h1 className="font-bold text-black">Document Name</h1>,
      selector: (row) => row.name,
      sortable: true,
      maxWidth: "300px",
    },
    {
      name: <h1 className="font-bold text-black">Document Type</h1>,
      selector: (row) => row.username,
      sortable: true,
      maxWidth: "300px",
    },
    {
      name: <h1 className="font-bold text-black">Uploaded By</h1>,
      selector: (row) => row.name,
      sortable: true,
      maxWidth: "300px",
    },
    {
      name: <h1 className="font-bold text-black">Uploaded Date and Time</h1>,
      selector: (row) => <div className="">10-20-2002 02:13:08 PM</div>,
      sortable: true,
      maxWidth: "350px",
    },
    {
      name: <h1 className="font-bold text-black">File Size</h1>,
      selector: (row) => <div className="">151KB</div>,
      sortable: true,
      maxWidth: "100px",
    },
    {
      name: <h1 className="font-bold text-black">File Action</h1>,
      selector: (row) => (
        <>
          <div className="">
            <button
              type="submit"
              id="docuEdit"
              className="ml-2 mr-3 outline-0 rounded-sm h-8 w-8 "
              onClick={() => alert(row.name)}
            >
              <AiFillEdit
                size={20}
                className="text-green-700 ml-1 text-[13px]"
              />
            </button>
            <button
              type="submit"
              id="docuDlt"
              className="outline-0 rounded-sm h-8 w-8"
              onClick={() => alert(row.name)}
            >
              <HiTrash size={20} className="text-red-700 ml-1 text-[13px]" />
            </button>
          </div>
        </>
      ),
      sortable: true,
      maxWidth: "150px",
    },
  ];
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        setPost(res.data);
        setFilteredDocumentType(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchPosts();
  }, []);

  useEffect(() => {
    const result = posts.filter((users) => {
      return users.name.toLocaleLowerCase().indexOf(search) !== -1;
    });
    setFilteredDocumentType(result);
  }, [search, posts]);

  return (
    <>
      <div>
        <DataTable
          title="Documents"
          columns={columns}
          data={filteredDocumentType}
          pagination
          paginationDefaultPage
          selectableRows
          selectableRowsHighlight
          fixedHeader
          fixedHeaderScrollHeight="300px"
          highlightOnHover
          subHeader
          subHeaderAlign="left"
          subHeaderComponent={
            <>
              <div className="flex flex-col">
                <div className="relative pb-5">
                  <AiOutlineSearch
                    size={15}
                    className="focus:bg-white text-black sm:absolute sm:top-[50%] sm:left-[85%] -translate-y-1/2"
                  />
                  <input
                    type="text"
                    placeholder="Search..."
                    id="searchDocuments"
                    className="form-control bg-white text-sm text-black w-[200px] h-8 px-3 border-gray-200 border-[1px] focus:outline-0"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                  />
                </div>
                <div className="dropdown inline-block relative">
                  <div className=" justify-between w-[70%] h-[40px] bg-transparent text-black border-2 border-gray-700 cursor-pointer font-semibold py-2 px-4 rounded inline-flex items-center mr-6">
                    <div>
                      <span className="mr-1 text-[13px] ">New File</span>
                    </div>
                    <div>
                      <IoMdArrowRoundDown className="text-[18px]" />
                    </div>
                  </div>
                  <div className="dropdown-menu origin-top-right z-10 absolute hidden text-gray-700 pt-1 w-[180px] h-auto ml-[90px] -mt-[10px] rounded-md">
                    <div className="bg-transparent w-full h-full ">
                      <div className="flex w-full">
                        <div className="w-full">
                          <div className="relative pt-3 ">
                            <div>
                              {" "}
                              <button
                                type="submit"
                                id="singleUpload"
                                className="pl-2 rounded-lg h-10 w-full border-[1px]  bg-[#0972B8] text-white text-sm"
                                onClick={() =>
                                  navigate("/documents/singleupload")
                                }
                              >
                                File Upload
                              </button>
                            </div>
                            <div>
                              {" "}
                              <VscNewFile className="text-white text-[20px] sm:absolute sm:top-[65%] sm:left-[7%] -translate-y-1/2" />
                            </div>
                          </div>
                          <div className="relative pt-3">
                            <div>
                              <button
                                type="submit"
                                id="MultiUpload"
                                className="text-center pl-3 rounded-lg h-10 w-full  border-[#17203F] bg-[#0972B8] text-white text-sm"
                                onClick={() =>
                                  navigate("/documents/multipleupload")
                                }
                              >
                                Multiple Upload
                              </button>
                            </div>
                            <div>
                              {" "}
                              <VscNewFolder className="text-white text-[20px] sm:absolute sm:top-[60%] sm:left-[7%] -translate-y-1/2" />
                            </div>
                          </div>
                          <div className="relative pt-3 pb-5">
                            <button
                              type="submit"
                              id="machineConnectivity"
                              className="pr-2 rounded-lg h-10 w-full border-[1px]  bg-[#0972B8] text-white text-sm"
                              onClick={() => navigate("/documents/viewscan")}
                            >
                              <BsUpcScan
                                size={25}
                                className="text-white text-sm sm:absolute sm:top-[45%] sm:left-[7%] -translate-y-1/2"
                              />
                              Scan
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          }
        />
      </div>
    </>
  );
};
export default MyInboxTable;
