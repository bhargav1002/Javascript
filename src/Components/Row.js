import Status from "./Status";
import Type from "./Type";
import Handle from "./Handle";
import Days from './Days';
import Dat from './Dat';
import Appliedon from "./Appliedon";
import Appliedname from "./Appliedname";
import Da from "./Da";

function Row(props)
{
    return (
        <tr>
            <Status data={props.data} status={props.status}></Status>
            <Type data={props.data} type={props.type}></Type>
            <Days data={props.data}></Days>
            <Dat data={props.data}></Dat>
            <Da data={props.data}></Da>
            <Appliedon data={props.data}></Appliedon>
            <Appliedname data={props.data}></Appliedname>
            <Handle data={props.data}></Handle>
        </tr>
    );
}

export default Row;