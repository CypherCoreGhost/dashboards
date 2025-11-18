import { Bar } from 'react-chartjs-2';

function ContainerDashboard({
  dashboards,
  setDashboardDisplay,
  dashboardData,
  handleCreateDash,
  options,
}) {
  return (
    <div>
      <div className="container__dashboard__infos">
        <ul className="dashboard__list w-[300px] h-[400px]">
          {dashboards.map((dashboard) => (
            <button
              className="dashboard"
              key={dashboard.id}
              onClick={() => setDashboardDisplay(dashboard.id)}
            >
              {dashboard.desc}
            </button>
          ))}

          <button className="btn__create__dash" onClick={handleCreateDash}>
            Create dashboard
          </button>
        </ul>
        <div className="content__dashbord">
          {dashboardData?.data && dashboardData.data.labels && (
            <div className="w-[600px] h-[400px] flex items-center flex-col gap-10 bg-[#222222] rounded-[10px] m-2">
              <h1 className="text-[25px] text-white">
                Title: {dashboardData.desc}
              </h1>
              <Bar options={options} data={dashboardData.data} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ContainerDashboard;
