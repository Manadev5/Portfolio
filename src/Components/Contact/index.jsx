import { useState } from 'react';
import github from '../../Assets/git-hub.png';
import linkedin from '../../Assets/linkedin.png';
import email from '../../Assets/logo-email.png';
import telephone from '../../Assets/logo-telephone.png'

function Contact(){

  const[name, setName] = useState('');
  const[email, setEmail] = useState('');
  const[message, setMessage] = useState('');

  const service_Id ='';
  const tempalte_Id ='';

  const emailContent = {

  };

  const handleSubmit = () =>{

  }


 return(

    <div id ="contacts">
      
    <div className='telephone'>
      <img src={telephone} alt='telephone'/>
      <p>+33 06 95 62 96 48</p>
    </div>

    <div  className='email'>
      <img src = {email} alt= 'email'/>
      <p>manakabamba@gmail.com</p>
    </div>

    <div  className='github'>
      <a href ='https://github.com/Manadev5/' target="_blank" rel="noopener noreferrer">
      <img src = {github} alt= 'github'/>
      <p>Github</p>
      </a>
    </div>

    <div className='linkedin'>
      <a href ='https://www.linkedin.com/in/manass%C3%A8-mukenge-29b5a6235?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B6PGtiCbdTUyhIYzi33SWjg%3D%3D' target="_blank" rel="noopener noreferrer">
      <img src = {linkedin} alt= 'linkedin'/>
      <p>Linkedin</p>
      </a>
    </div>

    <form onSubmit={handleSubmit} id="contact-form" >
        <input type="hidden" name="contact_number" value={name} onChange={(e) => setName(e.target.value)}/>
        <label>Name</label>
        <input type="text" name="user_name" value={email} onChange={(e) => setEmail(e.target.value)}/>
        <label>Email</label>
        <input type="email" name="user_email" value={message} onChange={(e) => setMessage(e.target.value)}/>
        <label>Message</label>
        <textarea name="message"></textarea>
        <input type="submit" value="Send" />
    </form>


  </div>

 )

}

export default Contact;