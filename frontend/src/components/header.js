export default function Header(props) {
  return (
    <div className={`${props.type}`} >
      <h2>{props.title}</h2>
    </div>
  )
}