export default function Button(props) {
  return (
    <button className={`mybutton ${props.type}`}  onClick={props.onClick} >{props.name}</button>
  )
}