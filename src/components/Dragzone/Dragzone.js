import React, {useCallback} from 'react'
import {useDropzone} from 'react-dropzone'

export default function Dragzone(props)
{
    const { OnClick } = props;

    const onDrop = useCallback(acceptedFiles => {
        const file = acceptedFiles[0];
        OnClick(URL.createObjectURL(file))
    }, [])

    const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

    return (
        <div {...getRootProps()}>
            <h2>Drag 'output.json' file</h2>
            <input {...getInputProps()} />
            {
                isDragActive ?
                    <p>Drop the files here ...</p> :
                    <p>Drag 'n' drop some files here, or click to select files</p>
            }
        </div>
    );
}