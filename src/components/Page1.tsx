import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Data } from "../models";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

const Page1 = () => {
  const UserData = localStorage.getItem("userData");
  const [adata, setAdata] = useState<Data[]>([]);
  const navigate = useNavigate();

  const handleClick = ( e:React.MouseEvent<HTMLInputElement>) =>{
       navigate('/page2')
  }

  useEffect(() => {
    if (!UserData) {
      navigate("/");
    }
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data: Data[]) => setAdata(data));
  }, []);
  console.log(adata);

  const columns: GridColDef[] = [
    { field: "userId", headerName: "User ID", width: 100 },
    { field: "id", headerName: "ID", width: 100 },
    { field: "title", headerName: "Title", width: 300 },
    { field: "body", headerName: "Body", width: 600 },
  ];

  return (
    <div>
      <div style={{ height: 700, width: "100%" }}>
        <DataGrid rows={adata} columns={columns} />
      </div>
      <button className="btn" style={{ width: "10rem", marginTop: "5rem" }} onClick={(e)=>handleClick(e)}>
        Next Page
      </button>
    </div>
  );
};

export default Page1;
