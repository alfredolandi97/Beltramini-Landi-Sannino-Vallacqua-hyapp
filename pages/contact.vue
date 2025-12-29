<script setup>
    useHead({
        title: "Contact us - NextFund",
        meta: [
            {
                name: "description",
                content: "Contact page to send a message to NextFund secretary office"
            },
            {
                name: "author",
                content: "Alfredo Landi"
            },
            {
                name: "keywords",
                content: "Contact, NextFund, email, office phone, contacts"
            }
        ]
    })
    const { data: names} = await useFetch('/api/areas/getName');

    const name = ref("");
    const email = ref("");
    const message = ref("");

    async function contactForm() {
        if(name.value!="" && email.value!="" && message.value!=""){
            try{
                //const res = await $fetch(useRuntimeConfig().public.baseURL + '/server/contact', {
                const res = await $fetch('/api/contact', {
                    method: "POST",
                    body: {
                        name: name.value,
                        email: email.value,
                        message: message.value
                    },
                })
                if(res.status == 'OK'){
                    alert('We received your message. We will glad to answer you as soon as possible.')
                }
                name.value = ""
                email.value = ""
                message.value = ""
            }catch{
                alert("Ops, something went wrong!")
            }
        } else{
            alert("All the fields should be filled!")
        }
    }
    
</script>

<template>
    <h1 class="titolo">CONTACTS</h1>
    <p class="descrPag">We would love to hear from you. Please submit your project filling out the form or use the other details below to get other information!</p>
    <p></p>
    <div class="containerCont">
        <div class="elementCont">
        <form class="formCont" action="">
            <p class="contactPar11">SUBMIT</p>
            <p class="contactPar22">Submit your idea to get in touch with one of our team members.</p>
            <div class="rowCont">
                <input class="InputCont1" type="name" id="name" placeholder="Name and Surname" v-model="name">
                <input class="InputCont1" type="email" id="email" placeholder="E-mail" v-model="email">
            </div>
            <div class="rowCont">
                <input  class="InputCont1" type="company_name" id="company_name" placeholder="Company Name" >
                <select class="InputCont1" name="subject" id="subject" placeholder="Area name">
                    <option v-for="name of names" :value="`${name.name}`">{{ name.name }}</option>
                </select>
            </div>
            <div class="rowCont">
            <textarea class="InputCont1" name="query" id="query" cols="30" rows="7" placeholder="Description" style="height: 150px;" v-model="message"></textarea>
            </div>
            <div class="rowCont">
                <input class="InputCont1" type="file" id="" placeholder="CHOOSE FILE">
                <input class="InputCont2" value="SEND" type="button" @click="contactForm">
            </div>
        </form>
        </div>
        <div class="elementCont1">
        <p class="contactPar">INFO</p>
        <p class="contactPar2">Visit our headquarter or contact us.</p>
        <p class="contactPar1">  <img class="contactImg" src="../assets/img/general/indirizzo.png" alt="">
Via Tommaso Marino, 5, 20121</p>
        <p class="contactPar1">  <img class="contactImg" src="../assets/img/general/telefono.png" alt=""> 02862177</p>
        <p class="contactPar1">  <img class="contactImg" src="../assets/img/general/mail.png" alt=""> info@nextfund.it</p>
        <p class="contactPar1">  <img class="contactImg" src="../assets/img/general/fax.png" alt=""> (852) 3010 8530</p>
        </div>   
    </div>
    
        
    
    <p class="parEndPag"> You are on the Contact page.</p>
</template>


<style scoped>
    .rowCont {
        display: flex;
        flex-direction: row;
    }

    .containerCont {
        display: flex;
        flex-direction: row;
    }

    .elementCont1 {
        width: 33vw;
        height: 25vw;
        display: flex;
        flex-direction: column;
        justify-content: center;
        border: 1px solid #BBFB1E;
        position: relative;
        left: 5vw;
        top: 0vw;
    }

    .contactPar {
        font-size: 3vw;
        color: #BBFB1E;
        font-family: "stretch_pro", sans-serif;
        margin-left: 5vw;
        margin-top: 0.5vw;
    }
    .contactPar11{
        font-size: 3vw;
        color: #BBFB1E;
        font-family: "stretch_pro", sans-serif;
        margin-left: 5vw;
        margin-top: 0vw;

    }
    .contactPar1 {
        font-family: "nunito", sans-serif;
        font-size: 1.5vw;
        margin-left: 5vw;
        margin-top: 0vw;
        line-height: 0.5vw;
        position: relative;
        top:1.1vw;
    }
    .contactPar2{
        font-family: "nunito", sans-serif;
        font-size: 1.5vw;
        margin-left: 5vw;
        margin-top: 0.5vw; 
        position: relative;
        top: -1.5vw;
    }

    .contactPar22{
        font-family: "nunito", sans-serif;
        font-size: 1.5vw;
        margin-left: 5vw;
        margin-top: 0.5vw; 
        position: relative;
        top: -1.5vw;
    }

    .contactImg{
        width: 1.5vw;
        position: relative;
        top: 0.2vw;
    }

    .elementCont {
        width: 53vw;
        height: 35vw;
        display: flex;
        flex-direction: column;
        justify-content: center;
        border: 1px solid #BBFB1E;

        
        /*clip-path: polygon(
            0 0, 
            90% 0,
            100% 10%,
            100% 100%, 
            10% 100%, 
            0 90%
        );*/
    
    }


    .InputCont1{
        background-color: transparent;
        color:  #BBFB1E;
        width: 20vw;
        margin-left: 4vw;
        margin-top: 2vw;
        position: relative;
        top: -1vw;
        font-family:  "nunito",sans-serif;
    }

    .InputCont2{
        background-color: transparent;
        color:  #BBFB1E;
        width: 10vw;
        margin-left: 15vw;
        margin-top: 2vw;
        position: relative;
        top: -1vw;
        font-family: "stretch_pro", sans-serif;

    }

    .InputCont1::placeholder {
    color:#BBFB1E;

    }
</style>