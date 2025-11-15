import { useNavigate } from "react-router-dom";
import "./Home.scss";
import { useEffect, useState } from "react";

const dashboards = [
  {
    name: "dashboard1",
    id: 123,
  },
  {
    name: "dashboard2",
    id: 456,
  },
];

async function fetchDashboard(id) {
  const newDash = dashboards.filter((dash) => dash.id === id);
  console.log(newDash);
  return newDash;
}

function Home() {
  const [dashboardDisplay, setDashboardDisplay] = useState({
    id: null,
  });

  const [dashboardData, setDashboardData] = useState({
    name: "",
    id: "",
  });
  const navigate = useNavigate();

  const handleNavigate = (id) => {
    navigate(`/dashboard/${id}`);
  };

  function handleActiveDashboard() {
    console.log("a");
  }

  useEffect(() => {
    if (dashboardDisplay.id) {
      fetchDashboard(dashboardDisplay.id).then((data) => {
        console.log(data);
        setDashboardData({ name: "a", id: "3" });
      });
    }
  }, [dashboardDisplay.id]);

  return (
    <div>
      <div className="container__page ">
        <div className="container__image w-[100vw] h-[400px] bg-slate-200">
          <h1 className="">Text</h1>
        </div>
        <div className="container__dashboard__infos">
          <ul className="dashboard__list w-[300px] h-[400px]">
            {dashboards.map((dashboard) => (
              <li
                key={dashboard.id}
                onClick={() =>
                  setDashboardDisplay((prev) => ({
                    ...prev,
                    id: dashboard.id,
                  }))
                }
              >
                {dashboard.name}
              </li>
            ))}
          </ul>

          <div className="content__dashboard">
            {dashboardData && <p>{dashboardData.name}</p>}
            <button onClick={() => setDashboardDisplay({ id: null })}></button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
