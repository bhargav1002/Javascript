function Type(props) {
  return (
    <>
      {props.type.map((st, i) => {
        if (st.LeaveTypeID === props.data.LeaveTypeID) {
          return (
            <td key={i} style={{ color: st.Color }}>
              {st.ObjectName}
            </td>
          );
        }
      })}
    </>
  );
}

export default Type;
