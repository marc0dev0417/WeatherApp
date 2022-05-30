import React from "react";

//Components => 
import NavBar from './NavBar'

interface Props{
    content?:JSX.Element
}

const Skeleton = (props: Props) => {
    return(
        <>
            <NavBar/>
            {
                props.content
            }
        </>
    )
}

export default Skeleton