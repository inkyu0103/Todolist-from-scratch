import styled from "@emotion/styled";
import { Chart as ChartJS } from "react-chartjs-2";
import { useEffect, useState } from "react";
import { Bar, Line } from "react-chartjs-2";
import CustomAxios from "../utils/api";
import { useParams } from "react-router";

export const Statistics = () => {
  const [term, setTerm] = useState<number>(1);
  // any 수정하기
  const [chartData, setChartData] = useState<any>(null);
  const { id } = useParams<{ id: string }>();

  const handleTermChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTerm(parseInt(e.currentTarget.value));
  };

  useEffect(() => {
    const getChartData = async () => {
      const result = await CustomAxios.get(`/todo/${id}/chart?term=${term}`);
      setChartData(result);
    };
    getChartData();
  }, [term, id]);

  return (
    <StatisticsContainer>
      <StatisticsPeriodContainer>
        <StatisticsPeriod onChange={handleTermChange}>
          <option value={1}>하루</option>
          <option value={7}>7일</option>
        </StatisticsPeriod>
      </StatisticsPeriodContainer>
      <StatisticsContentContainer>
        {term === 1 ? (
          // chart js type 설정
          <Bar data={chartData || DoughnutDummyData} />
        ) : (
          <Line data={chartData || LineDummydata} />
        )}
      </StatisticsContentContainer>
    </StatisticsContainer>
  );
};

const StatisticsContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const StatisticsPeriodContainer = styled.div`
  text-align: right;
  margin-right: 10px;
`;

const StatisticsPeriod = styled.select``;

const StatisticsContentContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const DoughnutDummyData = {
  labels: ["오늘의 결과"],
  datasets: [
    {
      label: "완료",
      data: 1,
      backgroundColor: "rgba(54, 162, 235, 0.2)",
    },
    {
      label: "미완료",
      data: 2,
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
  ],
};

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Chart.js Bar Chart",
    },
  },
};
const LineDummydata = {
  labels: [1500, 1600, 1700, 1750, 1800, 1850, 1900, 1950, 1999, 2050],
  datasets: [
    {
      data: [86, 114, 106, 106, 107, 111, 133, 221, 783, 2478],
      label: "Africa",
      borderColor: "#3e95cd",
      fill: false,
    },
    {
      data: [282, 350, 411, 502, 635, 809, 947, 1402, 3700, 5267],
      label: "Asia",
      borderColor: "#8e5ea2",
      fill: false,
    },
    {
      data: [168, 170, 178, 190, 203, 276, 408, 547, 675, 734],
      label: "Europe",
      borderColor: "#3cba9f",
      fill: false,
    },
    {
      data: [40, 20, 10, 16, 24, 38, 74, 167, 508, 784],
      label: "Latin America",
      borderColor: "#e8c3b9",
      fill: false,
    },
    {
      data: [6, 3, 2, 2, 7, 26, 82, 172, 312, 433],
      label: "North America",
      borderColor: "#c45850",
      fill: false,
    },
  ],
};
