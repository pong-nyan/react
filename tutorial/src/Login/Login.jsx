import React, { useState } from 'react';
import './Login.css';

export default function Login() {
	function submit() {
		// api 호출
		fetch('http://10.19.209.118:8080/login', {
			method: "POST",
			body: JSON.stringify({
				userId,
				password,
			}),
			headers: {
				"Content-Type": "application/json"
			}
		}).then((res) => {
			if(res.status === 200) {
				return alert("로그인 성공");
			} else {
				throw new Error("로그인 실패");
			}
		}).catch((err) => {
			alert("로그인 실패");
			console.log(err);
		})
	}
	const [userId, setUserId] = useState("");
	const [password, setPassword] = useState("");
	return ( 
		<div className="login-container">
			<div>
				<img src= "https://www.google.co.kr/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"></img>
				<h2>로그인</h2>
				<input placeholder='아이디임' className='input-login' type="text" onChange={(e)=>{setUserId(e.target.value)}}/>
				<br/>
				<input placeholder='비밀이지롱' className='input-password' type="password" onChange={(e)=>{setPassword(e.target.value)}}/>
				<br></br>
				<button onClick={submit} className="login">Login</button>
			</div>
		</div>
	);
}
