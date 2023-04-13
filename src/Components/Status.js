function Status(props) {
  return (
    <>
      {props.status.map((st, id) => {
        if (st.LeaveStatusID === props.data.LeaveStatusID) {
          return (<td key={id}>{st.ObjectName}</td>);
        }
      })}
    </>
  );
}

export default Status;
