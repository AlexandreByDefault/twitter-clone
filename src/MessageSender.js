import {useState} from 'react'
import Form from './Form';
import './MessageSender.css'
import PostsDetails from './PostsDetails';


const MessageSender = () => {

const [Input, setInput] = useState('');
 const [Posts,setPosts] = useState([])
// this is the post i want export / voici la variable post que je veux exporter dans le Middle component afin de la mapper 


console.log(Input)
const handleSubmit = (event) => {
    event.preventDefault()
    setInput('')
    setPosts([...Posts, Input ])
}
const HandleInputValue = (event) => {
    setInput(event.target.value)
    console.log(event.target.value)
}
    return (<>
        <Form value={Input} onChange={HandleInputValue} onClick={handleSubmit} />
        {Posts.map((post,index)=> <PostsDetails key={index} message={post} num='33.10K' name='Jules' id='Chargement__' profileimg='https://pbs.twimg.com/profile_images/1386567638277578753/L372SvuA_400x400.jpg'></PostsDetails>)}
        </>
      )
}


export default MessageSender
 