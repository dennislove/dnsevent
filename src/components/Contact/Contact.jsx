import React, { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import emailjs, { send } from '@emailjs/browser';
import EmailSentNotification from './EmailSentNotification';
import Footer from '../Footer/Footer';

function Contact() {

  const [isSent, setIsSent] = useState(false);
  const handleSendEmail = () => {
    // Gửi email...
    setIsSent(true);
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_gogc3he', 
      'template_mam00r3',
       form.current, {
        publicKey: 'CvbjwskOPXvbtYvm4',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
 
  return (
    <div className=" bg-[#000022] pt-10 ">
    <div className=' max-w-[1300px] m-auto relative'>
        <div className='relative text-center '>
            <div className='mb-5 text-center font-oxa'>
                <h2 className='  font-normal text-[40px] text-white capitalize'>Liên Hệ</h2>
            </div>
            
        </div>
       
       <div className='grid grid-cols-2 gap-10'>
        <div className='border p-5'>
          <form ref={form} onSubmit={sendEmail}>
            <div className='grid grid-cols-2 gap-5'>
              <div className='w-full border border-[#cbd5e1] rounded-xl focus:text-white focus:border-yellow-600'>
                <input className='w-full bg-transparent py-4 px-6 text-yellow-50 focus:outline-none' type='text' placeholder='Họ Và Tên' name='user_name'/></div>
              
              <div className='w-full border border-[#cbd5e1] rounded-xl focus:text-white focus:border-yellow-600'> 
                <input className='w-full bg-transparent py-4 px-6 text-yellow-50 focus:outline-none' type='tel'
                         placeholder='Số điện thoại'
                         maxLength = '10'
                         name='user_tel'/>
              </div>
              <div className='w-full border border-[#cbd5e1] rounded-xl focus:text-white focus:border-yellow-600'><input className='w-full bg-transparent py-4 px-6 text-yellow-50 focus:outline-none' type='text' placeholder='Địa chỉ'/></div>
              <div className='w-full border border-[#cbd5e1] rounded-xl focus:text-white focus:border-yellow-600'><input className='w-full bg-transparent py-4 px-6 text-yellow-50 focus:outline-none' type='email' name="user_email"  placeholder='Email'/></div>
            </div>
              <div className='w-full border mt-5 border-[#cbd5e1] rounded-xl focus:text-white focus:border-yellow-600'><input className='w-full bg-transparent py-4 px-6 text-yellow-50 focus:outline-none' name='title' type='text' placeholder='Chủ đề'/></div>
              <div className='w-full border mt-5 border-[#cbd5e1] rounded-xl focus:text-white focus:border-yellow-600'>
                <textarea className='w-full bg-transparent border-none border-0 text-yellow-50 py-4 px-6  rounded-xl focus:text-white focus:outline-none' placeholder='Nội dung' name="message">
                </textarea>
              </div>
          <div className='w-full border mt-5 border-[#cbd5e1] rounded-xl focus:text-white focus:border-yellow-600'>
            <input className='w-full bg-transparent py-4 px-6 text-yellow-50 focus:outline-none' type='file' accept='.jpg, .jpeg, .png, .pdf, .docs, .doc' />
          </div>
          <div className='mt-5'>
            <button onClick={handleSendEmail} value="Send"  className="px-8 py-4 border-2 border-yellow-600 font-semibold text-yellow-600 rounded-lg transition-all 
                duration-1000 ease-in-out inline-block overflow-hidden relative capitalize shadow-md hover:bg-yellow-600 hover:text-white
                before:absolute before:-left-[100%] hover:before:left-full before:top-0 before:w-full before:h-full
            before:bg-gradient-to-r before:from-transparent  before:via-white before:to-transparent before:transition-all before:duration-500 before:ease-linear">
            GỬI ĐI
            </button>
        </div>
        {isSent && <EmailSentNotification />}
          </form>

          
        </div>
        <div className='border p-5 '>
         <div className='flex flex-col gap-6 mt-6'>
            <div className='text-yellow-600 text-center'>
              <h3 className='font-oxa font-bold text-3xl'>ĐÔNG SƠN EVENT</h3>
              <h3 className='font-pop font-normal text-xl'>Limit is sky</h3>
            </div>
            
              <div className='flex text-white gap-2'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path fillRule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clipRule="evenodd" />
          </svg>
            <h3 className='font-pop font-semibold text-xl'>Địa chỉ:</h3>
            <h3 className='font-pop font-normal text-xl'>Thanh Hóa, Thanh Hóa, Việt Nam</h3>
              </div>
              <div className='flex text-white gap-2'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
      <path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clipRule="evenodd" />
    </svg>
    
            <h3 className='font-pop font-semibold text-xl'>Số điện thoại:</h3>
            <h3 className='font-pop font-normal text-xl'>0123456789</h3>
              </div>
              <div className='flex text-white gap-2'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
      <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
      <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
    </svg>
    
            <h3 className='font-pop font-semibold text-xl'>Email:</h3>
            <h3 className='font-pop font-normal text-xl'>google@gmail.com</h3>
              </div>
            
            <div className='w-full'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d35715.72921516877!2d105.77664784370948!3d19.79108454198489!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3136f805cb927957%3A0x6bf72517d06defcd!2zVHLGsOG7nW5nIFRIUFQgQ2h1ecOqbiBMYW0gU8ahbg!5e0!3m2!1svi!2s!4v1708786269429!5m2!1svi!2s" 
           height="300" 
            className='w-full' loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
         </div>
        </div>
       </div>
    </div>
   
</div>
    )
  }


export default Contact
