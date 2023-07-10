<!--
    Contact Page
-->
<template>
    <h1 class="titolo">CONTACTS</h1>
    <p class="descrPag">We would love to hear from you. Please submit your project filling out the form or use the other details below to get other information!</p>
    <p></p>
    <div class="container">
        <div class="element">
        <form class="form" action="">
            <h2>SUBMIT</h2>
            <p>Submit your idea to get in touch with one of our team members.</p>
            <div class="row">
                <input type="name" id="name" placeholder="Name and Surname">
                <input type="email" id="email" placeholder="E-mail">
            </div>
            <div class="row">
                <input type="company_name" id="company_name" placeholder="Company Name" >
                <select name="subject" id="subject" placeholder="Area name">
                    <option v-for="name of names" :value="`${name.name}`">{{ name.name }}</option>
                </select>
            </div>
            <div class="row">
            <textarea name="query" id="query" cols="30" rows="7" placeholder="Description" style="height: 150px;"></textarea>
            </div>
            <div class="row">
                <input type="file" id="" placeholder="CHOOSE FILE">
                <button type="submit">Send</button>
            </div>
        </form>
        </div>
        <div class="element">
        <h2>INFO</h2>
        <p>Visit our headquarter or contact us.</p>
        <p>Via Tommaso Marino, 5, 20121</p>
        <p>02862177</p>
        <p>info@nextfund.it</p>
        <p>(852) 3010 8530</p>
        </div>   
    </div>
    
        
    
    <p class="parEndPag"> You are on the Contact page.</p>
</template>



<script setup>
    const { data: names} = await useFetch('/api/areas/getName')
</script>


<style scoped>
    form{
    }
   .row{
    display: flex;
    flex-direction: row;
   }
   select{
   }
   .container{
    display:flex;
    flex-direction: row;
   }
   .element{
    margin:2.5%;
   }

</style>