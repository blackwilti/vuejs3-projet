<template>
  <div>
    <h1>Connexion</h1>

    <form @submit.prevent="login">
        <div class="formGroup">
            <label for="user_email">Email</label>
            <input type="text" id="user_email" v-model="user.email"/>
        </div>
           <div class="formGroup">
            <label for="user_username">Username</label>
            <input type="text" id="user_username" v-model="user.username"/>
        </div>
        <div class="formGroup">
            <label for="user_password">Mot de passe</label>
            <input type="text" id="user_password" v-model="user.password"/>
        </div>
         <div class="formGroup">
            <label for="user_bio">Bio</label>
            <input type="text" id="user_bio" v-model="user.bio"/>
        </div>
        <div class="formGroup">
           <button type="submit" class="button">Enregister</button>
        </div>
    </form>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'login',
    data(){
        return{
            user: {
                email: '',
                username: '',
                password: '',
                bio: '',
            }
        }
    },
   methods: {
       async login(){
            console.log('------------front-end---', this.user);
            const headers = {
                'Accept' : 'apllication/json',
                'Content-Type' : 'application/json',
                "Access-Control-Allow-Origin": "*" ,
                "Access-Control-Allow-Methods": "DELETE, POST, GET, OPTIONS",
                "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Requested-With"
            };
            const response = await axios.post("http://localhost:8085/api/users/register/", this.user);
            console.log(response);     
        }
    }
}

</script>

<style>

</style>