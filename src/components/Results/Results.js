import { map } from "lodash";
import { Grid } from "semantic-ui-react";
import QueryItem from "../QueryItem";
import "./Results.css";

export default function Results(props)
{
    const { data } = props;

    return (
        <div>
            <h2>Results</h2>
            {map(data, (query) => (
                <div className="engine" key={query.engine}>
                    <h3>{query.query} - {query.engine}</h3>
                    <Grid>
                        {map(query.results, (item) => <QueryItem key={item.id} item={item}/>)}
                    </Grid>
                </div>
                ))}
        </div>
    );
}