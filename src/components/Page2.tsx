import React, { useState } from "react";
import "./Page2.css";

interface SubDepartment {
  [subDep: string]: boolean;
}

interface Department {
  [dep: string]: {
    all: boolean;
    sub_departments: SubDepartment;
  };
}

const jsonData = [
  {
    department: "customer_service",
    sub_departments: ["support", "customer_success"],
  },
  {
    department: "design",
    sub_departments: ["graphic_design", "product_design", "web_design"],
  },
];

const Page2: React.FC = () => {
  const [selectedItems, setSelectedItems] = useState<Department>(
    jsonData.reduce((acc, item) => {
      acc[item.department] = {
        all: false,
        sub_departments: item.sub_departments.reduce((subAcc, subItem) => {
          subAcc[subItem] = false;
          return subAcc;
        }, {} as SubDepartment),
      };
      return acc;
    }, {} as Department)
  );

  const toggleSelection = (department: string, subDepartment: string) => {
    const newSelectedItems: Department = { ...selectedItems };

    if (subDepartment === "all") {
      newSelectedItems[department].all = !newSelectedItems[department].all;
      Object.keys(newSelectedItems[department].sub_departments).forEach(
        (subDep) => {
          newSelectedItems[department].sub_departments[subDep] =
            newSelectedItems[department].all;
        }
      );
    } else {
      newSelectedItems[department].sub_departments[subDepartment] =
        !newSelectedItems[department].sub_departments[subDepartment];
      const allSelected = Object.keys(
        newSelectedItems[department].sub_departments
      ).every(
        (subDep) =>
          subDep !== "all" &&
          newSelectedItems[department].sub_departments[subDep]
      );
      newSelectedItems[department].all = allSelected;
    }

    setSelectedItems(newSelectedItems);
  };

  return (
    <div className="departments-container">
      <h2>Departments and Sub-departments</h2>
      {jsonData.map((item) => (
        <div key={item.department} className="department">
          <label>
            <input
              type="checkbox"
              checked={selectedItems[item.department]?.all}
              onChange={() => toggleSelection(item.department, "all")}
            />
            {item.department}
          </label>
          <ul className="sub-departments">
            {item.sub_departments.map((subDepartment) => (
              <li key={subDepartment}>
                <label>
                  <input
                    type="checkbox"
                    checked={
                      selectedItems[item.department]?.sub_departments[
                        subDepartment
                      ]
                    }
                    onChange={() =>
                      toggleSelection(item.department, subDepartment)
                    }
                  />
                  {subDepartment}
                </label>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Page2;
