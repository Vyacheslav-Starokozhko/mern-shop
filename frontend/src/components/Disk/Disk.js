import React, {useEffect, useState} from 'react';
import {useDispatch} from "react-redux";
import {getFiles} from "../../actions/file";

const Disk = () => {
    const dispatch = useDispatch();
    const currentDir = useState(state => state.files.currentDir);
    ;
    useEffect(() => {
        dispatch(getFiles(currentDir))
    }, [currentDir])
    return (

        < div>
            DISK
        < /div>
    );
};

export default Disk;