import axios, { AxiosResponse } from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { urlTracks } from "../endpoints";
import BarChartItem from "../BarChartItem/BarChartItem";
import PanelItem from "../utils/PanelItem";
import { Col, Container, Row } from "rsuite";
import {
  dashboardDTO,
  dashboardSummaryDTO,
  monthlyDataDTO,
} from "./dashboard.models";
import Authorized from "../auth/Authorized";

export default function Home() {
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

  const [monthlyData, setMonthlyData] = useState<monthlyDataDTO[]>([]);

  useEffect(() => {
    loadDashboardData();
  }, []);

  function loadDashboardData() {
    axios
      .get(`${urlTracks}/getDashboardData`)
      .then(function (response: AxiosResponse<dashboardDTO>) {
        setDashboardSummary(response.data?.dashboardSummary);
        setMonthlyData(response.data.monthlyData);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }

  return (
    <>
      <Container>
        <Row gutter={16}>
          <Col xl={24}>
            <h1 className="pb-4 pt-4">נתוני קריאות</h1>
          </Col>
          <Col xl={6}>
            <PanelItem
              header="מונים שלא שנקראו החודש"
              text={dashboardSummary.monthlyUnCalled.toString()}
            />
          </Col>
          <Col xl={6}>
            <PanelItem
              header="מונים שנקראו החודש"
              text={dashboardSummary.monthlyCalled.toString()}
            />
          </Col>

          <Col xl={6}>
            <PanelItem
              header='סה"כ מונים שלא שנקראו'
              text={dashboardSummary.unCalled.toString()}
            />
          </Col>
          <Col xl={6}>
            <PanelItem
              header='סה"כ מונים שנקראו'
              text={dashboardSummary.called.toString()}
            />
          </Col>
        </Row>
        <Row>
          <Col xl={12}>
            <PanelItem
              header="אחוזי אי קריאה החודש"
              text={`${dashboardSummary.monthlyUncalledPercentage}%`}
            />
          </Col>
          <Col xl={12}>
            <PanelItem
              header='סה"כ אחוזי אי קריאה'
              text={`${dashboardSummary.totalUncalledPercentage}%`}
            />
          </Col>
        </Row>
        <Row>
          <Col className="pt-4" xl={24}>
            <BarChartItem data={monthlyData} />
          </Col>
        </Row>
      </Container>
    </>
  );
}
