import Dragzone from "../Dragzone";
import {useCallback, useState} from "react";
import Results from "../Results";

export default function Home()
{
    const [data, setData] = useState(null);

    const GetOutputData = useCallback((file) => {
        fetch(file)
            .then((res) => res.json())
            .then((data) => {
                setData(data)
            })
    })

    return (
        <div>
            <h1>Item tracker</h1>
            { data ?
                (<Results data={data}/>) :
                (<Dragzone OnClick={GetOutputData}/>)
            }
        </div>
    );
}