import React from "react";
import { useParams } from "react-router-dom";

function Dashboard() {
  const params = useParams();
  const { id } = params;

  console.log(id);

  return <div>{id}</div>;
}

export default Dashboard;
