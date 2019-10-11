import React, {useRef, useState} from 'react';
import Button from 'react-bootstrap/Button';
const url = 'https://cors-anywhere.herokuapp.com/';
function FileUpload() {
  const fileRef = useRef(null);
  const [file, setFile] = useState(null);
  const handleChange = async () => {
    const name = fileRef.current.files[0];
    const reader = new FileReader();
    reader.addEventListener(
      'load',
      async () => {
        console.log(reader.result);
      },
      false
    );
    reader.readAsDataURL(name);
  };

  return (
    <React.Fragment>
      <Button
        variant="info"
        onClick={() => {
          fileRef.current.click();
        }}
        className="upload-button"
      >
        Upload Image
      </Button>
      <input
        ref={fileRef}
        name="file"
        type="file"
        onChange={() => handleChange()}
        style={{display: 'none'}}
      />
    </React.Fragment>
  );
}

export default FileUpload;
