import { onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import {db} from './firebase';
import { collection, addDoc } from "firebase/firestore";
const GalleryFiles = ()=>{
const [images, setImages] = useState([])
useEffect(()=>{

    const data = onSnapshot(collection(db,'images'),(snapshot)=>{
        const imagesList = snapshot.docs.map((doc)=>({
        id: doc.id,
        ...doc.data(),
        }))
        setImages(imagesList)
    })
    return ()=>data()
})
return(


    <div>
        <h2>Gallery</h2>
<div>
    {images.map((image)=>(
<div key={image.id}>
   <img src={image.imageUrl} alt="" />
   <h3>{image.title}</h3>
   <p>{image.description}</p>
</div>
    ))}
</div>
    </div>
)

}

export default GalleryFiles;