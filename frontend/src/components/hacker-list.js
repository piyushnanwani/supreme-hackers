export default function HackerList(props) {
  let data = props.data;
  let limit = props.data;
  let filter = props.data;

  // if (limit) data = data.length = limit;
  if (filter) {
    if (filter === "c++") {
    } else if (filter === "recent-updated") {
    } else if (filter === "top-10") {
    }
  }
  return (
    <div className="hackerlist">
      {data.map((user, index) => (
        <div>
          <div className="hackerlist-user">
            <a>{index+1}{` -  `} </a>
            <img className="hackerlist-user-icon"
             src={user.profile_link}>
            </img>
            <a>{user.name} </a>
          </div>
          <hr />
        </div>
      ))}
    </div>
  );
}
