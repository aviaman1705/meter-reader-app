import { useState, useEffect } from "react";
import axios, { AxiosResponse } from "axios";
import { Col, Container, Row } from "react-bootstrap";
import { urlTracks } from "../../endpoints";
import { dashboardDTO, dashboardSummaryDTO } from "./dashboard.models";
import PanelItem from "../../utils/Panel/PanelItem";
import Chart from "../../utils/Chart/Chart";
import Panel from "../../utils/Panel/Panel";

export default function Home() {
  const [chartData, setChartData] = useState([]);
  const [dashboardSummary, setDashboardSummary] = useState<dashboardSummaryDTO>(
    {
      called: 0,
      unCalled: 0,
      monthlyCalled: 0,
      monthlyUnCalled: 0,
      monthlyUncalledPercentage: 0,
      totalUncalledPercentage: 0,
    }
  );

  useEffect(() => {
    loadDashboardData();
  }, []);

  function loadDashboardData() {
    axios
      .get(`${urlTracks}/getDashboardData`)
      .then(function (response: AxiosResponse<dashboardDTO>) {
        const { dashboardSummary: dashboardData } = response.data;
        const { monthlyData } = response.data;

        setDashboardSummary(dashboardData);
        setChartData(monthlyData);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {});
  }

  return (
    <>
      <section>
        <Panel data={dashboardSummary} />
      </section>
      <section>
        <Chart data={chartData} />
      </section>
    </>
  );
}
