import React ,{useState} from "react";
import S3FileUpload from 'react-s3';



export default function Upload() {
/*  Notice that if you don't provide a dirName, the file will be automatically uploaded to the root of your bucket */
const [accessKey, setAccessKey] = useState("");
const [secretKey, setSecretKey] = useState("");
const [bucketName, setBucketName] = useState("");
const [file, setFile] = useState('');
const [filename, setFilename] = useState('Choose File');
const [message, setMessage] = useState('');

const config = {
    bucketName:bucketName,
    dirName: '', /* optional */
    region: 'ca-central-1',
    accessKeyId: accessKey,
    secretAccessKey: secretKey

}

const onChange = e => {
    setFile(e.target.files[0])
    console.log(e.target.files[0])
    setFilename(e.target.files[0].name)
};
function validateForm() {
    return accessKey.length > 0 && secretKey.length > 0 && bucketName && file ;
}
const handleSubmit = async e => {
    e.preventDefault();

    try{
       const res=await  S3FileUpload.uploadFile(file, config)
        // console.log(res)
        setMessage('File Uploaded')
    }catch(error){
        setMessage('Please Check The Info You Input! ')
    }
}
const handleClick =()=>{
    setMessage('')
    setTimeout(() => {
        console.log('click closed',message) 
        console.log('filename',filename)
    }, 1000);
         
}  
    
const Message=(msg)=>{
    return (
        <div className='alert alert-info alert-dismissible fade show' role='alert'>
            {msg}
            <button type="button"  className="close" onClick={handleClick} ><span aria-hidden='true'>&times;</span></button>
        </div>
    )
}
   
  return (
    <div>
        
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Access Key</label>
                    <input type="text" value={accessKey} className="form-control" placeholder="Enter Access Key"  onChange={e => setAccessKey(e.target.value)}/>
                </div>

                <div className="form-group">
                    <label>Secret Key</label>
                    <input type="text" value={secretKey} className="form-control" placeholder="Enter Secret Key" onChange={e => setSecretKey(e.target.value)}/>
                </div>

                <div className="form-group">
                    <label>Bucket Name</label>
                    <input type="text" value={bucketName}  className="form-control" placeholder="Enter Bucket Name" onChange={e => setBucketName(e.target.value)}/>
                </div>
                {message ? Message(message):
                <div className="input-group mb-3"> 
                        <div> 
                            <input
                                type='file'
                                className='custom-file-input'
                                id='customFile'
                                onChange={onChange}
                            />
                        <label className='custom-file-label' htmlFor='customFile'>
                            {filename}
                        </label>
                    </div>
                </div>
                }

                <button type="submit"  className="btn btn-primary btn-block" disabled={!validateForm()}>Upload</button>
            </form>
    </div>
  
);}