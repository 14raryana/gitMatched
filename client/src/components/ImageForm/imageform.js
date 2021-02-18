import React, { useState } from 'react';
import axios from 'axios';
function ImageForm() {
  const [formData, setFormData] = useState('')
  const [info, setInfo] = useState({
    name: '',
    image: ''
  })
  const [progressPercent, setProgressPercent] = useState(0)
  const [error, setError] = useState({
    found: false,
    message: ''
  })
  //end states
  const upload = ({ target: { files } }) => {
    let data = new FormData();
    data.append('categoryImage', files[0]);
    data.append('name', files.name);
    setFormData(data);
  }
  //send request
  const handleSubmit = (e) => {
    e.preventDefault()
    setInfo({
      image: '',
      name: ''
    })
    setProgressPercent(0)
    const options = {
      onUploadProgress: (progressEvent) => {
        const { loaded, total } = progressEvent
        let percent = Math.floor((loaded * 100) / total)
        console.log(`${loaded}kb of ${total}kb | ${percent}%`);
        setProgressPercent(percent)
      }
    }
    axios.post(`http://localhost:8000/api/category`, formData, options)
    .then(res => {
      setTimeout(() => {
        setInfo(res.data.category)
        setProgressPercent(0)
      }, 1000)
    }).catch(err => {
      console.log(err.response)
      setError({
        found: true,
        message: err.response.data.errors,
      });
      setTimeout(() => {
        setError({
          found: false,
          message: '',
        });
        setProgressPercent(0);
      }, 3000)
    })
  }
  return (
    <div
    className='image-form-container'
    >
      <div className="image-form-div">
        {error.found && (
          <div className='alert alert-danger' role='alert'>
            {error.message}
          </div>
        )}
        <div
          className="progress mb-2 w-100"
          role='progressbar'
          aria-valuenow={progressPercent}
          aria-valuemin={0}
          aria-valuemax={100}
          >
            {progressPercent}
          </div>
        <form onSubmit={handleSubmit}>
          <div className='custom-file mb-3'>
            <input
            type='file'
            className='custom-file-input'
            id='inputGroupFile04'
            aria-describedby='inputFroupFileAddon04'
            onChange={upload}
            />
            <label className='custom-file-label' htmlFor='inputGroupFile04'>
              Choose File
            </label>
          </div>
          <button type='submit' className='btn btn-primary w-100'>
            Submit
          </button>
        </form>
        <img
        className='mt-3'
        src={`http://localhost:8000/${info.image}`}
        alt={`${info.name}`}
        style={{ width: '360px'}}
        />
      </div>
    </div>
  );
}
export default ImageForm;