function Handle(props)
{
    let a = new Date();
    let b = new Date(props.data.FromDate);
    return(
        <>
        {b.getTime() >= a.getTime() ? (<td><button type="button" class="btn btn-primary">Primary</button><button type="button" class="btn btn-danger">Danger</button></td>):(<td></td>)}
        </>
    );
}

export default Handle;