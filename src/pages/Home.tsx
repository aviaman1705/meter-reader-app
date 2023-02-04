import { Link as RouterLink } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";
import { urlHome } from "../endpoints";
import { homeDTO } from "../components/home/home.model";
import BarChartComponent from "../utils/BarChart/BarChartComponent";
import Loading from "../utils/Loading/Loading";

const Home = () => {
  const [dashboardData, setDashboardData] = useState<homeDTO[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    setTimeout(() => {
      axios.get(`${urlHome}`).then((response: AxiosResponse<homeDTO[]>) => {
        setDashboardData(response.data);
        setIsLoading(false);
      });
    }, 3000);
  }, []);

  return (
    <>
      <div className="container-fluid">
        <h1 className="mb-4 mt-4">עמוד הבית</h1>
        {isLoading ? (
          <Loading />
        ) : (
          <BarChartComponent
            data={dashboardData}
            dataKeys={[
              { dataKey: "uncalled", fill: "#7b809a", name: "לא נקרא" },
              { dataKey: "called", fill: "#007bff", name: "נקרא" },
            ]}
          />
        )}
      </div>
    </>
  );
};

export default Home;
