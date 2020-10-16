import React, { useEffect, useRef } from "react";
import * as d3 from "d3";


  // const BasicD3 = props => {
  //   const ref = useRef(null);
  //   const createPie = d3
  //     .pie()
  //     .value(d => d.budget)
  //     .sort(null);
  //   const createArc = d3
  //     .arc()
  //     .innerRadius(props.innerRadius)
  //     .outerRadius(props.outerRadius);
  //   const colors = d3.scaleOrdinal(d3.schemeCategory10);
  //   const format = d3.format(".2f");

  
  //    useEffect(
  //      () => {
  //       const data = createPie(props.data);
  //       console.log(data);
  //       const group = d3.select(ref.current);
  //       const groupWithData = group.selectAll("g.arc").data(data);  
  //       groupWithData.exit().remove();
  
  //       const groupWithUpdate = groupWithData
  //         .enter()
  //         .append("g")
  //         .attr("class", "arc");
  
  //       const path = groupWithUpdate
  //         .append("path")
  //         .merge(groupWithData.select("path.arc"));
  
  //       path
  //         .attr("class", "arc")
  //         .attr("d", createArc)
  //         .attr("fill", (d, i) => colors(i));
  
  //       const text = groupWithUpdate
  //         .append("text")
  //         .merge(groupWithData.select("text"));
  
  //       text
  //         .attr("text-anchor", "middle")
  //         .attr("alignment-baseline", "middle")
  //         .attr("transform", d => `translate(${createArc.centroid(d)})`)
  //         .style("fill", "white")
  //         .style("font-size", 10)
  //         .text(d => format(d.value));
  //     },
  //     [props.data]
      
  //   );

  //   return (
  //     <svg width={props.width} height={props.height}>
  //       <g
  //         ref={ref}
  //         transform={`translate(${props.outerRadius} ${props.outerRadius})`}
  //       />
  //     </svg>
  //   );
  // };

  // export default BasicD3;

  function BasicD3(props) {
    const {
      data,
      outerRadius,
      innerRadius,
    } = props;
  
    const margin = {
      top: 50, right: 50, bottom: 50, left: 50,
    };
  
    const width = 2 * outerRadius + margin.left + margin.right;
    const height = 2 * outerRadius + margin.top + margin.bottom;
  
    const colorScale = d3     
      .scaleSequential()      
      .interpolator(d3.interpolateCool)      
      .domain([0, data.length]);
  
    useEffect(() => {
      drawChart();
    }, [data]);
  
    function drawChart() {
      // Remove the old svg
      d3.select('#pie-container')
        .select('svg')
        .remove();
  
      // Create new svg
      const svg = d3
        .select('#pie-container')
        .append('svg')
        .attr('width', width)
        .attr('height', height)
        .append('g')
        .attr('transform', `translate(${width / 2}, ${height / 2})`);
  
      const arcGenerator = d3
        .arc()
        .innerRadius(innerRadius)
        .outerRadius(outerRadius);
  
      const pieGenerator = d3
        .pie()
        .padAngle(0)
        .value((d) => d.budget);
  
      const arc = svg
        .selectAll()
        .data(pieGenerator(data))
        .enter();
  
      // Append arcs
      arc
        .append('path')
        .attr('d', arcGenerator)
        .style('fill', (_, i) => colorScale(i))
        .style('stroke', '#ffffff')
        .style('stroke-width', 1);
  
      // Append text labels
      arc
        .append('text')
        .attr('text-anchor', 'middle')
        .attr('alignment-baseline', 'middle')
        .text((d) => d.data.title)
        .style('fill', (_, i) => colorScale(data.length - i))
        .attr('transform', (d) => {
          const [x, y] = arcGenerator.centroid(d);
          return `translate(${x}, ${y})`;
        });
    }    
  
    return <div id="pie-container" />;
  }
  
  export default BasicD3;