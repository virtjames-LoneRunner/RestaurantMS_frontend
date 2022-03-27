import { Button } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import AdminInventoryTable from "./AdminInventoryTable";
import AdminAddInventory from "./AdminAddInventory";

export default function AdminInventory() {
  const [inventory, setInventory] = useState([]);
  const [display, setDisplay] = useState(0);
  useEffect(() => {
    axios.get("/api/inventory-items").then((res) => {
      if (res.status === 200) {
        setInventory(res.data);
      }
    });
  }, []);
  return (
    <div className="pr-5">
      {/* <div>Summary</div> */}
      {display === 0 ? (
        <div className="flex justify-end mb-2 space-x-1">
          <Button
            variant="contained"
            color="primary"
            onClick={() => setDisplay(1)}
          >
            Add Item
          </Button>
          <Button variant="contained" color="secondary">
            Filter
          </Button>
        </div>
      ) : null}
      {display === 1 ? (
        <div className="flex justify-end mb-2 space-x-1">
          <Button
            variant="contained"
            color="primary"
            onClick={() => setDisplay(0)}
          >
            Back
          </Button>
        </div>
      ) : null}
      {display === 0 ? <AdminInventoryTable inventory={inventory} /> : null}
      {display === 1 ? <AdminAddInventory /> : null}
    </div>
  );
}
