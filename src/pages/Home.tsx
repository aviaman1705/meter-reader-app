import { Link as RouterLink } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";
import { urlHome } from "../endpoints";
import { homeDTO } from "../components/home/home.model";
import BarChartComponent from "../utils/BarChartComponent";

const Home = () => {
  const [dashboardData, setDashboardData] = useState<homeDTO[]>([]);

  useEffect(() => {
    axios.get(`${urlHome}`).then((response: AxiosResponse<homeDTO[]>) => {
      setDashboardData(response.data);
    });
  }, []);

  return (
    <>
      <div className="container-fluid">
        {/* {dashboardData.map((item, index) => (
        <div key={index}>
          {item.called} {item.month}
        </div>
      ))} */}
        <h1 className="mb-4 mt-4">עמוד הבית</h1>
        <BarChartComponent
          data={dashboardData}
          dataKeys={[
            { dataKey: "uncalled", fill: "#ffc107", name: "uncalled" },
            { dataKey: "called", fill: "#007bff", name: "called" },
          ]}
        />
        {/* <h1 id="asdf"> Welcome Home </h1>{" "}
      <RouterLink to="/level1/level2">Go to Level2</RouterLink> */}
      </div>
    </>
  );
};

export default Home;
