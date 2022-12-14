import React, { useState } from "react";
import CheckboxTree from "react-checkbox-tree";
import "react-checkbox-tree/lib/react-checkbox-tree.css";
import DocuTypeTabs from "./DocuTypeTabs";

const nodes = [
  {
    value: "HR",
    label: "Admin",
    children: [
      {
        value: "201 Files",
        label: "Delivery Receipt",
      },
      { value: "P1 child 2", label: "Payment Request" },
      { value: "P1 child 3", label: "Purchase Request Form" },
      { value: "P1 chiddcxcld 2", label: "Payment Request" },
      { value: "P1 cshsdild 3", label: "Purchase Request Form" },
      { value: "P1 cadsdhild 2", label: "Payment Request" },
      { value: "P1 cdscxhxild 3", label: "Purchase Request Form" },
      { value: "P1 chdild 2", label: "Payment Request" },
      { value: "P1 scxhild 3", label: "Purchase Request Form" },
      { value: "P1 chsild 2", label: "Payment Request" },
      { value: "P1 chadild 3", label: "Purchase Request Form" },  { value: "P1 chxxxxxxild 2", label: "Payment Request" },
      { value: "P1 chisdsld 3", label: "Purchase Request Form" },  { value: "P1 childxxxzs 2", label: "Payment Request" },
      { value: "P1 dchild 3", label: "Purchase Request Form" },
    ],
  },
  {
    value: "Parent 2",
    label: "IT",
    children: [
      { value: "P2 child 1", label: "Service Report" },
      { value: "P2 child 2", label: "Maintenance Request Forms" },
    ],
  },
  {
    value: "Parent 3",
    label: "Sales",
    children: [
      { value: "P3 child 3.1", label: "Invoices" },
      { value: "P3 child 3.2", label: "Official Receipt" },
      {
        value: "P3 child 4",
        label: "Contract",
      },
    ],
  },
];

const data = {
  checked: [],
  expanded: [],
};

const DocumentType = () => {
  const [checked, setChecked] = useState([]);
  const [expanded, setExpanded] = useState([]);
  const [open, setOpen] = useState(true);

  return (
    <>
      <div className="flex flex-col gap-4 bg-white  w-full rounded-xl shadow-lg border p-4 overflow-hidden">
        <div className=" h-[27.5rem] xl:h-[27.5rem] lg:h-full md:h-full sm:h-full 2xl:flex 2xl:flex-row xl:flex xl:flex-row lg:flex lg:flex-row md:flex md:flex-col sm:flex sm:flex-col gap-4 justify-start">
          <div className="w-full xl:w-[40%] lg:w-full md:w-full sm:w-[35rem] border border-gray-300  rounded-xl shadow-xl overflow-auto pb-2">
            <h1 className="font-semibold text-sm pt-2 text-center sticky">
              Document Types
            </h1>
            <div className="text-[10px] w-full">
              <CheckboxTree
                nodes={nodes}
                checked={checked}
                expanded={expanded}
                onCheck={(checkedData) => {
                  setChecked(checkedData);
                }}
                onExpand={(expandedData) => {
                  setExpanded(expandedData);
                }}
              />
            </div>
          </div>
          <div className="flex flex-row gap-4 w-full">
            <div className="w-full pr-3">
              <DocuTypeTabs />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default DocumentType;
