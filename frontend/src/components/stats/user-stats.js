export default function UserStats(props) {
  return (
    <div className="user-stats-container" >
      Users
      <div className="user-stats" >

        <div>Registered : {props.registered}</div>
        <div>Active : {props.active}</div>
      </div>
    </div>
  )
}