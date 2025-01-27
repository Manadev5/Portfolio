import { useState } from 'react';
import github from '../../Assets/git-hub.png';
import linkedin from '../../Assets/linkedin.png';
import mail from '../../Assets/logo-email.png';
import telephone from '../../Assets/logo-telephone.png';
import  emailjs  from '@emailjs/browser';

function Contact(){

  const[name, setName] = useState('');
  const[email, setEmail] = useState('');
  const[message, setMessage] = useState('');

  const service_Id ='service_1eybwj1';
  const tempalte_Id ='template_bcbuvyo';
  const publicKey = '2LSEe2csSav24Y0w2';

  const emailParam = {
    from_name: name,
    from_email:email,
    to_name:'Manassé',
    message:message
  };

  const handleSubmit = (e) =>{
    e.preventDefault();

    emailjs.send(service_Id, tempalte_Id, emailParam, publicKey)
          .then((response) =>{
              console.log("email sent succefuly", response);
              setEmail('');
              setName('');
              setMessage('');
          })
          .catch((error) =>{
              console.error("erreur pendant l'envoi du mail", error)
          })

  }


 return(

    <div id ="contacts">


      <form onSubmit={handleSubmit} id="contact-form" >
        <input type="text" name="user_name" value={name} onChange={(e) => setName(e.target.value)} placeholder='Nom'required/>
        <input type="email" name="user_email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='E-mail' required/>
        <textarea name="message" value={message}  onChange={(e) => setMessage(e.target.value)} placeholder='Message' required></textarea>
        <input type="submit" className='submit' />
      </form>

      <div className='contact-icons'>
      
        <div  className='github'>
          <a href ='https://github.com/Manadev5/' target="_blank" rel="noopener noreferrer">
            <img src = {github} alt= 'github'/>
          </a>
        </div>

        <div className='linkedin'>
          <a href ='https://www.linkedin.com/in/manass%C3%A8-mukenge-29b5a6235?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B6PGtiCbdTUyhIYzi33SWjg%3D%3D' target="_blank" rel="noopener noreferrer">
            <img src = {linkedin} alt= 'linkedin'/>
          </a>
        </div>

        <div className='telephone'>
          <img src={telephone} alt='telephone'/>
          <p>+33 06 95 62 96 48</p>
        </div>


      </div>

  </div>

 )

}

export default Contact;