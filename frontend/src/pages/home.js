import { Header, HackerList, Top3Box } from "../components";
import API_DATA from '../data/MOCK_DATA.json'
export default function Home() {
  return (
    <div>
      <Header title="List of Hackers" type="header-1" />
      <div className="hacker-list-container">
        <HackerList data={API_DATA} />
        <Top3Box />
      </div>
    </div>
  );
}