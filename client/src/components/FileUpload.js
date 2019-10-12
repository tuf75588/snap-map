import React, {useRef, useState} from 'react';
import Button from 'react-bootstrap/Button';
import {useMutation} from 'figbird';
function FileUpload() {
  const inputRef = useRef(null);
  const [file, setFile] = useState(null);
  const {create, loading} = useMutation('upload');

  return (
    <React.Fragment>
      <Button
        variant="info"
        onClick={() => {
          inputRef.current.click();
        }}
        className="upload-button"
      >
        {loading ? '' : 'Upload Image'}
      </Button>
      <input
        ref={inputRef}
        name="file"
        type="file"
        onChange={async () => {
          const reader = new FileReader();
          reader.addEventListener(
            'load',
            async () => {
              const image = reader.result.slice(22);
              const result = await create({image});
              console.log(result);
            },
            false
          );
          reader.readAsDataURL(inputRef.current.files[0]);
        }}
        style={{display: 'none'}}
      />
    </React.Fragment>
  );
}

export default FileUpload;
