import { auth, db } from "../utils/firebase"
import {useAuthState} from "react-firebase-hooks/auth";
import { useRouter } from "next/router";
import {useEffect,useState} from "react";
import { toast } from "react-toastify";
import { collection, 
         deleteDoc, 
         doc, 
         onSnapshot, 
         query, 
         where } from "firebase/firestore";
import Message from "../components/Message";
import {BsTrash2Fill} from 'react-icons/bs';
import {AiFillEdit} from 'react-icons/ai';
import Link from "next/link";
export default function Dashboard(){
    const route = useRouter();
    const [user,loading] = useAuthState(auth);
    const [posts, setPosts] = useState([]);

    // See is user is logged
    const getData = async () => {
        if(loading) return;
        if(!user) return route.push('/auth/login');
        const collectionRef = collection(db,'posts');
        const q  = query(collectionRef, where("user", '==', user.uid));
        const unsubscribe = onSnapshot(q, (snapShot) => {
            setPosts(snapShot.docs.map((doc) => ({...doc.data(),id : doc.id})));
          });
          return unsubscribe;
    };

    // Delete post
    const deletePost = async (id) =>{
        const docRef = doc(db,'posts',id,)
        await deleteDoc(docRef);
        toast.success('Post deleted succesfully',{
            position : toast.POSITION.TOP_CENTER,
            autoClose: 1500,
        });
    }

    useEffect(() => {
        getData();
    },[user,loading]);

    return (
        <div>
            <h1>Your posts</h1>
            <div>
                {posts.map((post) => {
                 return <Message {...post} key={post.id} >
                            <div className="flex gap-4">
                                <button 
                                    onClick={() => deletePost(post.id)} 
                                    className="text-pink-600 flex items-center justify-center gap-2 y-2 text-sm"
                                >
                                    <BsTrash2Fill className="text-2xl"/> 
                                    Delete
                                </button>
                                <Link href={{pathname : "/post", query : post}}>
                                    <button 
                                        className="text-teal-600 flex items-center justify-center gap-2 y-2 text-sm"
                                    >
                                        <AiFillEdit className="text-2xl"/> 
                                        Edit
                                    </button>
                                </Link>
                            </div>
                    </Message>
                })}
            </div>
            <button 
                onClick={()=> auth.signOut()} 
                className="my-8 mx-2 bg-gray-900 p-3 text-white text-md"
                >
                Sign out
            </button>
        </div>
    )
}