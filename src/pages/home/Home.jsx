import React from 'react'
import './Home.css'
import Feacher from '../../components/feature/Feature.jsx'
import Chart from '../../components/Chart/Chart.jsx'
import WidgetSm from '../../components/widgetSm/WidgetSm.jsx'
import { xAxisData } from '../../datas.js'
import WidgetLg from '../../components/widgetLg/WidgetLg'
export default function Home() {
  return (
    <div className="home">
      <Feacher />
      <Chart grid title="Month Sale" data={xAxisData} dataKey="Sale" />
      <div className="homeWidgets">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  )
}
