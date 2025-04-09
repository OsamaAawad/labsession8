import { useState,useRef } from "react";
import supbase from "./supabaseConfig";
import {db} from './firebase';
import { collection, addDoc } from "firebase/firestore";

const UploadImage = ()=>{
const[image,setImage] = useState(null)
const[title,setTitle] = useState("")
const[description, setDescription] = useState("");
const[uploading,setUpload] = useState(false);
const handleFileChange=(event)=>{
    setImage(event.target.files[0])
}

const FileInput = useRef(null);

const uploadImage =async()=>{
   if(!image || !title || !description) return;
   setUpload(true);
   const FileExt = image.name.split(".").pop();
   const FileName = `${title.replace(/\s+/g, "-").toLowerCase()}-${Date.now()}.${FileExt}`

   const{data,error} = await supbase.storage.from("labsession8").upload(FileName,image);
   if(error){
    console.log("Error to supa");
    setUpload(false);
    return;
   }
   const imageUrl = supbase.storage.from("labsession8").getPublicUrl(FileName).data.publicUrl
   await addDoc(collection(db,"images"),{
    title,
    description,
    imageUrl
   })

   setTitle("");
   setDescription("");
   setImage("");
   setUpload(false)
}



    return(
        <div>
            <h2>Upload Your Image</h2>
            <input type="text" placeholder="Title" value={title} 
            onChange={(e)=>setTitle(e.target.value)} />
            <input type="text" placeholder="Description" value={description} 
            onChange={(e)=>setDescription(e.target.value)}  />
            <input type="file" ref={FileInput} onChange={handleFileChange}/>
            <button onClick={uploadImage}>{uploading? "Uploading": "Upload"}</button>
        </div>
    )
}

export default UploadImage;