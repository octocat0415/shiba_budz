import styled from "styled-components";
import { Chart } from "react-google-charts";

const YelloTitle = styled.h1`
  color: #FFA40B;
  font-weight: 900;
`;

export const data = [
  ["Task", "Hours per Day"],
  ["Work", 11],
  ["Eat", 2],
  ["Commute", 2],
  ["Watch TV", 2],
  ["Sleep", 7],
];

export const options = {
  pieHole: 0.4,
  is3D: false,
};

export default function TokenOmic () {
  return(
    <div className="my-5" id="tokenomic">
      <YelloTitle>SHIBA BUDZ ($BUDZ) TOKENOMICS</YelloTitle>
      <Chart
        chartType="PieChart"
        data={data}
        options={options}
        width={"100%"}
        height={"400px"}
      />
    </div>
  )
}