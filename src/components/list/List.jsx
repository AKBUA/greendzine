import Card from "../card/Card";
import './List.css'
export default function List(props) {
  return (
    <>
    <div className="list-wrapper">
     {props?.list.map((e)=>{
   return   <Card  data={e}/>
     })}
    
    </div>
    </>
  )
}
