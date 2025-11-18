let arrDashboards = [
  {
    id: 123,
    desc: 'Dashboard of mounth 1',
    labels: ['Seg', 'Ter', 'Qua', 'Qui'],
    datasets: [
      {
        label: 'WeekDays',
        data: [20, 30, 40, 20],
        backgroundColor: 'lightBlue',
      },
    ],
  },

  {
    id: 456,
    desc: 'Dashboard of mounth 2',
    labels: ['Seg', 'Ter', 'Qua', 'Qui'],
    datasets: [
      {
        label: 'WeekDays',
        data: [20, 70, 90, 20],
        backgroundColor: 'gray',
      },
    ],
  },
];
export async function fetchDashboard(id) {
  const data = arrDashboards.filter((dash) => dash.id === id);
  //   console.log(data[0].dashboard);
  const dashboard = data[0];
  return dashboard;
}

export async function getAllDashboards() {
  return arrDashboards;
}

export async function createDashboard(dataDash) {
  console.log(dataDash);
  arrDashboards.push(dataDash);
}
