import React, { useState } from 'react';
import './contact.css'
import emailjs from '@emailjs/browser';
import { useRef } from 'react'; 
import { themeContext } from '../Context';
import { useContext } from 'react';

export default function Contact() {

	const theme = useContext(themeContext);
	const darkMode= theme.state.darkMode;

	const form =useRef();

	const [done, setDone]=useState(false);
	

	const sendEmail = (e) => {
	  e.preventDefault();
  
	  emailjs.sendForm('service_tpm0fbd', 'template_d8eiz3o', form.current, 'hd1aJpfiD-FjKMWvF')
		.then((result) => {
			console.log(result.text);
			setDone(true);
		}, (error) => {
			console.log(error.text);
		});
	};

  return (
    <div className="contact" id="BTN">
        <div className="left l">
            <div className="name">

            <span>Get in touch</span>
            <span>Contact me</span>
            </div>
           

        </div>
      <div className="cR">
      <form ref={form} onSubmit={sendEmail} style={{background:darkMode? '#ffffffa3':'',}}>
		<div class="field" tabIndex="1">
			<label for="user_name">
				<i class="far fa-user"></i>Your Name
			</label>
			<input name="user_name" type="text" placeholder="e.g. john doe" required/>
		</div>
		<div class="field" tabIndex="2">
			<label for="user_email">
				<i class="far fa-envelope"></i>Your Email
			</label>
			<input name="user_email" type="text"  placeholder="email@domain.com" required/>
		</div>
		<div class="field" tabIndex="3">
			<label for="message">
				<i class="far fa-edit"></i>Your Message
			</label>
			<textarea name="message"   placeholder="type here" required></textarea>
		</div>
		<button type="submit" value="Send"  class="btn b">Send Me Message</button>
		<span>{done&& "submited"}</span>
	</form>
    <div className="blur1"></div>
    <div className="c-blur2"></div>
      </div>
    </div>
  )
}
