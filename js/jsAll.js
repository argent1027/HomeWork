const usernameinput = document.querySelector('#username');
const passwordinput = document.querySelector('#password');
const url = 'https://vue3-course-api.hexschool.io';
const path = 'patrickapi';
const loginButton = document.querySelector('#loginButton');
loginButton.addEventListener('click',login); 

function login(){    
    const user = usernameinput.value;
    const password = passwordinput.value;
    const data = {  user, password  };
    console.log(data);

    axios.post(`${url}/admin/signin`, data)
    .then((res) => {
    console.log(res);
    if(res.data.success){
        const {token,expired} = res.data;
        console.log(token,expired);
        document.cookie = `hexToken=${token}; expires=${new Date(expired)}`;
    //    window.location = 'week2.html';
      }
      else{
          alert('帳號或密碼錯誤');
      }    
     })
    .catch(()=>{
    alert('連線失敗');
     })  
} 

