export default function DeviceStats(props) {
  return (
    <div className="device-stats-container">
      Device Type
      <div className="device-stats">
        <div>Mobile: {props.registered}</div>
        <div>Tablet: {props.registered}</div>
        <div>Laptop : {props.active}</div>
      </div>
    </div>
  );
}
