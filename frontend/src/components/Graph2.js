import React from 'react'
import Chart from 'react-apexcharts'

function Graph2() {
    return (
        <div>
            <Chart
                height= {200}
                type="radialBar"


                series= {[90]}
               //colors= {["#20E647"]}
                options={{
                    labels: ["Calories"],
                    plotOptions: {
                        radialBar: {
                            hollow: {
                                margin: 0,
                                size: "70%",
                                background: "#293450"
                            },
                            track: {
                                dropShadow: {
                                    enabled: true,
                                    top: 2,
                                    left: 0,
                                    blur: 4,
                                    opacity: 0.15
                                }
                            },
                            dataLabels: {
                                name: {
                                    offsetY: -10,
                                    color: "#fff",
                                    fontSize: "13px"
                                },
                                value: {
                                    color: "#fff",
                                    fontSize: "30px",
                                    show: true
                                }
                            }
                        }
                    },
                    fill: {
                        type: "gradient",
                        gradient: {
                            shade: "dark",
                            type: "vertical",
                            gradientToColors: ["#20E647"],
                            stops: [0, 100]
                        }
                    },
                    stroke: {
                        lineCap: "round"
                    },
                
                }}
            ></Chart>

        </div>
    )
}

export default Graph2