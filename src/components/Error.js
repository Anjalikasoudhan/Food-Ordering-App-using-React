import { useRouteError } from "react-router-dom";

export const Error=()=>{
    const err=useRouteError();
    console.log(err);
    return(
        <div>
            <h1>Oops!! Something went Wrong</h1>
            <h2>
                {err.status+":"+err.statusText}
            </h2>
        </div>
    )
};