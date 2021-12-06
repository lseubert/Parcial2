import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

const PieChart = ({ data }) => {
  const pieChart = useRef();

  useEffect(() => {
    const pieData = d3.pie().value((d) => d.value)(data);

    const arc = d3.arc().innerRadius(0).outerRadius(200);

    const colors = d3.scaleOrdinal([
      "#ffa822",
      "#134e6f",
      "#ff6150",
      "#1ac0c6",
      "#dee0e6",
    ]);

    const svg = d3
      .select(pieChart.current)
      .attr("width", 400)
      .attr("height", 400)
      .append("g")
      .attr("transform", "translate(200,200)");

    svg
      .append("text") // text label for the x axis
      .attr("x", 400)
      .attr("y", 0)
      .style("text-anchor", "middle")
      .text("Races and count of patients");

    const tooldiv = d3
      .select("#chartArea")
      .append("div")
      .style("visibility", "hidden")
      .style("position", "absolute")
      .style("background-color", "#f5f5f5");

    svg
      .append("g")
      .selectAll("path")
      .data(pieData)
      .join("path")
      .attr("d", arc)
      .attr("fill", (d, i) => colors(i))
      .attr("stroke", "white")
      .on("mouseover", (e, d) => {
        tooldiv
          .style("visibility", "visible")
          .text(`${d.data.name}: ${d.data.value} KwH`);
      })
      .on("mousemove", (e, d) => {
        tooldiv
          .style("top", e.pageY - 50 + "px")
          .style("left", e.pageX - 50 + "px");
      })
      .on("mouseout", () => {
        tooldiv.style("visibility", "hidden");
      });
  });

  return (
    <div id="chartArea">
      <svg ref={pieChart}></svg>
    </div>
  );
};
export default PieChart;
