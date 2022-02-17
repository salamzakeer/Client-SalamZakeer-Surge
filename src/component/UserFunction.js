import axios from 'axios';

export const register = newUser=>{
    return axios.post('http://localhost:5000/users/registerUser', {
        first_name: newUser.first_name,
        last_name: newUser.last_name,
        email: newUser.email,
        password: newUser.password
    })
    .then(res=>{
        window.alert("Registered Successfully");
        return res.data;
    })
}

export const update = newUser=>{
    return axios.put('http://localhost:5000/users/UpdateProfile', {
        _id: newUser.id,
        first_name: newUser.first_name,
        last_name: newUser.last_name,
        email: newUser.email
        //password: newUser.password
    })
    .then(res=>{
        window.alert("Update Successfully");
        return res.data;
    })
}

export const getprofile = id=>{
    return axios.get(`http://localhost:5000/users/getprofile/${id}`)
    .then(res=>{
        
        return res.data;
    })
}



export const login = user=>{
    return axios.post('http://localhost:5000/users/loginUser', {
        email:user.email,
        password: user.password
    })
    .then(res=>{
        localStorage.setItem('usertoken',res.data)
        return res.data
    })
    .catch(err=>{
        console.log(err)
    })
}