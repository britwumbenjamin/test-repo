

import Details  from './Details';






function Dashboard(props) {
  return (
    <div className="Dashboard">
    <Details firstname= {props.firstname} Lastname= {props.Lastname} email= {props.email}  dateofbirth= {props.dateofbirth} mobile= {props.mobile} />
    </div>
  );
}

export default Dashboard;