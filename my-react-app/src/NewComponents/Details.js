
import Notification  from './Notification';




function Details(props) {
  return (
    <div className="Details">

       <Notification firstname= {props.firstname} Lastname= {props.Lastname} email= {props.email}  dateofbirth= {props.dateofbirth} mobile= {props.mobile} />
    </div>
  );
}

export default Details;