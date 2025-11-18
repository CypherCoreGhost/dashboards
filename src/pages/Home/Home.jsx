import {
  createDashboard,
  fetchDashboard,
  getAllDashboards,
} from '../../api/fetchDashboard';
import {
  Chart as ChartJS,
  Legend,
  Tooltip,
  BarElement,
  CategoryScale,
  LinearScale,
} from 'chart.js';
import './Home.scss';
import Modal from '../../components/HomeComponents/Modal';
import ContainerDashboard from '../../components/HomeComponents/ContainerDashboard';
import { useEffect, useState } from 'react';
ChartJS.register(Legend, Tooltip, CategoryScale, LinearScale, BarElement);

const dashboards = await getAllDashboards();

function Home() {
  const [newDashboard, setNewDashboard] = useState({
    id: null,
    desc: null,
    labels: null, //definivel
    datasets: [
      {
        label: null, // definivel;
        data: null, //definivel
        backgroundColor: null, //definnivel
      },
    ],
  });

  const options = {};
  const [dashboardDisplay, setDashboardDisplay] = useState(null);

  function handleCreateDashboard(e) {
    e.preventDefault();
    createDasboard(newDashboard);
  }

  const [createDash, setCreateDash] = useState(false);
  function handleCreateDash() {
    setCreateDash((prev) => !prev);
  }

  const [dashboardData, setDashboardData] = useState({
    id: null,
    desc: '',
    data: null,
  });

  useEffect(() => {
    if (dashboardDisplay) {
      fetchDashboard(dashboardDisplay).then((data) => {
        if (!data) return;
        setDashboardData({
          id: data.id,
          desc: data.desc,
          data: {
            labels: data.labels, //definivel
            datasets: [
              {
                label: data.datasets[0].label, // definivel
                data: data.datasets[0].data, //definivel
                backgroundColor: data.datasets[0].backgroundColor, //definnivel
              },
            ],
          },
        });
      });
    }
  }, [dashboardDisplay]);

  return (
    <div>
      <div className="container__page ">
        {createDash && (
          <Modal
            setNewDashboard={setNewDashboard}
            setCreateDash={setCreateDash}
            createDash={createDash}
            handleCreateDashboard={handleCreateDashboard}
            newDashboard={newDashboard}
          />
        )}

        <div className="container__image w-[100%] min-h-[200px] bg-slate-200">
          <h1 className="">Welcome</h1>
        </div>

        <ContainerDashboard
          dashboards={dashboards}
          setDashboardDisplay={setDashboardDisplay}
          dashboardData={dashboardData}
          handleCreateDash={handleCreateDash}
          options={options}
        />
      </div>
    </div>
  );
}

export default Home;
