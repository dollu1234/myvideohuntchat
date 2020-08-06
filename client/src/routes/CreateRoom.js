import React from "react";
import { v1 as uuid } from "uuid";

const CreateRoom = (props) => {
    function create() {
        const id = uuid();
        props.history.push(`/room/${id}`);
    }

    return (
    	<h1>Created by Daulat Bulchandani</h1>
        <button onClick={create}>Create room</button>
    );
};

export default CreateRoom;