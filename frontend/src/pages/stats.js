import { Header, HackerList, Button } from "../components";
import {DeviceStats, UserStats} from "../components/stats";

import API_DATA from "../data/MOCK_DATA.json";
export default function Stats() {
  return (
    <div>
      <Header title="Interesting Stats" type="header-1" />
      <div className="stats-btn-container" >
        <Button name="C++ Percentile" type="mybutton-primary-2" />
        <Button name="Recently Updated" type="mybutton-primary-2" />
        <Button name="Top 10 Hackers" type="mybutton-primary-2" />
      </div>
      <div className="hacker-list-container">
        <HackerList data={API_DATA} />
        <UserStats />
        <DeviceStats />
      </div>
    </div>
  );
}
