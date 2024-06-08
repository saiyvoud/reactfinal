import React, { useState } from 'react'
import FileUploadIcon from '@mui/icons-material/FileUpload';

const UploadFile = ({onUpload = (file) => {}, onRemove = (file) => {}, ...props}) => {
    const [file, setFile] = useState(null);
    const [preview, setPreview] = useState(null);
    const reader = new FileReader();

    const handleUpload = (e) => {
        const fileData = e.target.files[0];
        setFile(fileData);
        if(fileData) {
            reader.readAsDataURL(fileData);
            reader.onloadend = () => {
                setPreview(reader.result);
            };
        }
        onUpload(fileData);

    }

    const handleRemove = () => {
        onRemove(file);
        setFile(null);
        setPreview(null);
        const inputFileElement = document.getElementById('file');
        inputFileElement.value = null;
    }

  return (
    <div className='w-full mb-4'>
        <label htmlFor="file" className={`relative inline-block w-full min-h-48 bg-gray-100 rounded-lg hover:bg-gray-200 hover:shadow-sm hover:cursor-pointer ${file ? '' : 'border-gray-400 border-dashed border-2'}`}>
            <div className='w-full min-h-48 flex justify-center items-center gap-2 object-cover'>
                <button type="button" className={`z-20 absolute top-5 right-5 px-3 py-1 bg-gray-700 text-white rounded-full hover:opacity-80 ${file ? '' : 'hidden'}`} onClick={handleRemove} >X</button>
                <FileUploadIcon className='text-5xl' />
                ອັບໂຫຼດຮູບພາບ
            </div>
            {preview && (
                <img src={preview} className='w-full h-48 object-cover absolute top-0 left-0 rounded-lg hover:opacity-80 transition-all ease-in-out  duration-200'/>    
            )}
            <input {...props} onChange={handleUpload} type="file" className='hidden'  id="file" />
        </label>
        {file && (
            <p className='mt-2'>{file.name}</p>
        )}
    </div>
  )
}

export default UploadFile