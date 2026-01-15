<script setup>
    useHead({
        title: "Contacts - NextFund",
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
        <div class="leftElementContainerParent">
            <div class="leftElementContainerChild">
                <form class="formCont" action="">
                    <p class="contactPar11">SUBMIT</p>
                    <p class="contactPar22">Submit your idea to get in touch with one of our team members.</p>
                    <div class="rowCont">
                        <div class="field">
                            <label>Name and Surname</label>
                            <input type="name" id="name" v-model="name">
                        </div>
                        <div class="field">
                            <label>E-mail</label>
                            <input type="email" id="email" v-model="email">
                        </div>
                    </div>
                    <div class="rowCont">
                        <div class="field">
                            <label>Company Name</label>
                            <input type="text" id="company_name">
                        </div>
                        <div class="field select">
                            <label>Area</label>
                            <select name="subject" id="subject">
                            <option v-for="name of names" :value="`${name.name}`">{{ name.name }}</option>
                        </select>
                        </div>
                        
                    </div>
                <!-- <div class="rowCont">
                <textarea class="InputCont1" name="query" id="query" cols="30" rows="7" placeholder="Description" style="height: 150px;" v-model="message"></textarea>
                </div> -->
                    <div class="field full">
                        <label>Description</label>
                        <textarea rows="6" v-model="message"></textarea>
                    </div>
                    <div class="rowCont actions">
                        <label class="fileIn">
                            <input type="file">
                            <span>CHOOSE FILE</span>
                        </label>

                        <button type="submit" class="sendButton" @click="contactForm">
                            SEND <span>›</span>
                        </button>
                        <!-- <input class="InputCont2" value="SEND" type="button" @click="contactForm"> -->
                    </div>
                </form>
            </div>    
        </div>
        <div class="rightElementContainerParent">
            <div class="rightElementContainerChild">
                <p class="contactPar">INFO</p>
                <p class="contactPar2">Visit our headquarter or contact us.</p>
                <p class="contactPar1">  <img class="contactImg" src="../assets/img/general/indirizzo.png" alt="">Via Tommaso Marino, 5, 20121</p>
                <p class="contactPar1">  <img class="contactImg" src="../assets/img/general/telefono.png" alt=""> 02862177</p>
                <p class="contactPar1">  <img class="contactImg" src="../assets/img/general/mail.png" alt=""> info@nextfund.it</p>
                <p class="contactPar3">  <img class="contactImg" src="../assets/img/general/fax.png" alt=""> (852) 3010 8530</p>
            </div> 
        </div>  
    </div>
    
    <p class="parEndPag"> You are on the Contact page.</p>
</template>


<style scoped>
    .descrPag{
        text-align: center;
    }

    .contactPar11{
        font-size: 3vw;
        color: #BBFB1E;
        font-family: "stretch_pro", sans-serif;
        /*margin-left: 5vw;*/
        margin-top: 0.5vw;
    }

    .contactPar22{
        font-family: "nunito", sans-serif;
        font-size: 1.5vw;
        color: white;
        /*margin-left: 5vw;*/
        /*margin-top: 0.5vw;*/
        position: relative;
        top: -1.5vw;
    }

    .formCont{
        max-width: 900px;
        margin: 40px auto;
        color: #8b8bb0;
    }

    .rowCont {
        display: flex;
        gap: 60px;
        margin-bottom: 35px;
    }

    .containerCont {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .contactPar {
        font-size: 3vw;
        color: #BBFB1E;
        font-family: "stretch_pro", sans-serif;
        margin-left: 2.7vw;
        margin-top: 0.5vw;
    }
    
    .contactPar1 {
        font-family: "nunito", sans-serif;
        font-size: 1.5vw;
        margin-left: 2.7vw;
        margin-top: 0vw;
        line-height: 0.5vw;
        position: relative;
        top:1.1vw;
    }
    .contactPar2{
        font-family: "nunito", sans-serif;
        font-size: 1.5vw;
        margin-left: 2.7vw;
        margin-top: 0.5vw; 
        position: relative;
        top: -1.5vw;
    }

    .contactPar3 {
        font-family: "nunito", sans-serif;
        font-size: 1.5vw;
        margin-left: 2.7vw;
        margin-top: 0vw;
        margin-bottom: 1.5vw;
        line-height: 0.5vw;
        position: relative;
        top:1.1vw;
    }

    .contactImg{
        width: 1.5vw;
        position: relative;
        top: 0.2vw;
    }


    .field {
        flex: 1;
    }

    .field.full {
        margin-bottom: 50px;
    }

    label {
        display: block;
        margin-bottom: 8px;
        font-size: 20px;
    }

    input,
    textarea,
    select {
        width: 100%;
        background: transparent;
        border: none;
        border-bottom: 2px solid #b6ff00;
        color: #ddd;
        padding: 6px 2px;
        font-size: 16px;
        outline: none;
    }

    textarea {
        min-height: 90px;
        width: 100%;
        background-color: transparent;

        /* 6 vere righe */
        line-height: 32px;
        padding: 0 2px;

        /* linee verdi per OGNI riga */
        background-image:
            linear-gradient(#b6ff00 2px, transparent 2px);
        background-size: 100% 32px;
        background-repeat: repeat-y;
        background-position: left bottom;

        border: none;
        resize: none;
        color: #ddd;
        font-size: 16px;
        outline: none;
    }

    /* select freccia */
    .select {
        position: relative;
    }

    .select::after {
        content: "▾";
        position: absolute;
        right: 5px;
        bottom: 10px;
        color: #fff;
        pointer-events: none;
    }

    .actions {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 60px;
    }

    /* file input */
    .fileIn input {
        display: none;
    }

    .fileIn span {
        color: #b6ff00;
        font-weight: bold;
        cursor: pointer;
    }

    /* send button */
    .sendButton {
        background: none;
        border: none;
        color: #b6ff00;
        font-weight: bold;
        font-size: 16px;
        cursor: pointer;
        display: flex;
        align-items: center;
        gap: 8px;
    }

    .sendButton span {
        font-size: 20px;
    }

    /* hover */
    .sendButton:hover,
    .fileIn span:hover {
        color: #e5ff4d;
    }

    .leftElementContainerParent{
        width: 50vw;
        height: 48vw;
        position: relative;
        background: #BBFB1E;
        border: 1px solid #BBFB1E;
        box-sizing: border-box;
        -webkit-clip-path: polygon(
            0 0, 
            95% 0,
            100% 5%,
            100% 100%, 
            5% 100%, 
            0 95%
        );
        
        -moz-clip-path: polygon(
            0 0, 
            95% 0,
            100% 5%,
            100% 100%, 
            5% 100%, 
            0 95%
        );
        
        clip-path: polygon(
            0 0, 
            95% 0,
            100% 5%,
            100% 100%, 
            5% 100%, 
            0 95%
        );    
    }

    .leftElementContainerChild{
        width: calc(100% - 0.1vw);
        height: calc(100% - 0.1vw);
        margin: 0.05vw;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        padding-top: 0.5vw;
        position: relative;
        background: #020122;
        -webkit-clip-path: polygon(
            0 0, 
            95% 0,
            100% 5%,
            100% 100%, 
            5% 100%, 
            0 95%
        );
	
        -moz-clip-path: polygon(
            0 0, 
            95% 0,
            100% 5%,
            100% 100%, 
            5% 100%, 
            0 95%
        );
        
        clip-path: polygon(
            0 0, 
            95% 0,
            100% 5%,
            100% 100%, 
            5% 100%, 
            0 95%
        );
    }

    .rightElementContainerParent{
        width: 28vw;
        height: 25vw;
        position: relative;
        background: #BBFB1E;
        border: 1px solid #BBFB1E;
        box-sizing: border-box;
        -webkit-clip-path: polygon(
            0 0, 
            90% 0,
            100% 10%,
            100% 100%, 
            10% 100%, 
            0 90%
        );
        
        -moz-clip-path: polygon(
            0 0, 
            90% 0,
            100% 10%,
            100% 100%, 
            10% 100%, 
            0 90%
        );
        
        clip-path: polygon(
            0 0, 
            90% 0,
            100% 10%,
            100% 100%, 
            10% 100%, 
            0 90%
        );    
    }

    .rightElementContainerChild{
        width: calc(100% - 0.2vw);
        height: calc(100% - 0.2vw);
        margin: 0.1vw;
        display: flex;
        flex-direction: column;
        justify-content: center;
        position: relative;
        background: #020122;
        -webkit-clip-path: polygon(
            0 0, 
            90% 0,
            100% 10%,
            100% 100%, 
            10% 100%, 
            0 90%
        );
	
        -moz-clip-path: polygon(
            0 0, 
            90% 0,
            100% 10%,
            100% 100%, 
            10% 100%, 
            0 90%
        );
        
        clip-path: polygon(
            0 0, 
            90% 0,
            100% 10%,
            100% 100%, 
            10% 100%, 
            0 90%
        );
    }
</style>