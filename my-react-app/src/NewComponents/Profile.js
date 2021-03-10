




function Profile(props) {
  return (
    <div className="profile">
    <h3>Firstname: {props.firstname} </h3> 
   <h3> Lastname: {props.Lastname} </h3>
   <h3> email: {props.email} </h3>
   <h3> Date of birth: {props.dateofbirth}</h3>
   <h3> Mobile: {props.mobile}</h3>
    </div>
  );
}

export default Profile;