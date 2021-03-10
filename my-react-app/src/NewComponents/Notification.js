
import Profile  from './Profile';









function Notification(props) {
  return (
    <div>
       <Profile firstname= {props.firstname} Lastname= {props.Lastname} email= {props.email}  dateofbirth= {props.dateofbirth} mobile= {props.mobile} />
    </div>
  );
}

export default Notification;