import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact =()=>{

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_wnth62l', 
      'template_35ja41n', 
        form.current, {
        publicKey: 'KdbZdHD7Vr3dvlXsg',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          console.log('message sent')
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return(
    
      <div name='contact' className='w-full h-screen-[800px] pt-20 bg-[#0a192f] flex justify-center items-center p-4'>
        <form ref={form} onSubmit={sendEmail} className='flex flex-col max-h-full max-w-[600px] w-full pb-44'>
            <div className='pb-8'>
              <p className='text-4xl font-bold inline border-b-4 border-yellow-400 text-gray-300'>Contact Me!</p>
              <p className='text-gray-500 py-4 '>Submit the form below or shoot me an email or WhatsApp - <span className='text-yellow-400'>muhammadwajahat992@gmail.com +923244929258</span></p>
            </div>

            <input className='p-2 bg-[#ccd6f6]' type="text" placeholder="Name" name="user_name" />
            <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder="Email" name="user_email" />
            <textarea className=' bg-[#ccd6f6] p-2' name="message" rows="5" placeholder="Message | WhatsApp +92 309 4872801" ></textarea>
            <button className='text-white border-2 hover:bg-yellow-400 hover:border-yellow-400 hover:text-black px-4 py-3 my-8 mx-auto flex items-center'>Lets Connect</button>
        </form>
    </div>
  );
}

export default Contact;