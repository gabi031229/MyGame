<script lang="ts">
    let username:string;

    import MainPage from "./main_page.svelte";
    import {messengers} from "../lib/messaging/client/messengers";
    import {Status} from "../lib/messaging/status";

    let loggedIn:boolean = false;
    let usernameInput;
    let passwordInput;

    function loginTry () {
        // communicate with server here
        messengers.auth.login(usernameInput.value, passwordInput.value)
            .on(Status.OK, () => {
                username=usernameInput.value;
                loggedIn=true;
            })
            .on(Status.UNAUTHORIZED, () => alert("Invalid entry."))
            .send()
    }
</script>

<main>
    <div id="backg"></div>
    {#if !loggedIn}
        <div id="loginform">
            <h1>Login page</h1>
            <label for="username">Username:</label>
            <input class="fancybox" id = "username" type = "text" bind:this={usernameInput}/><br>
            <label for="password">Password:</label>
            <input class="fancybox" id = "password" type = "password" bind:this={passwordInput}/><br>
            <input class="fancybox" id="submit" value="Enter" on:click={loginTry}/>
        </div>
    {:else}
        <MainPage {username}/>
    {/if}
</main>

<style>
    @import url("../../src/styles/background.scss");
    @import url("../../src/styles/custombox.scss");
    @import url("../../src/styles/text.scss");
    main {
        padding: 0;
        margin: 0;
        width: 100vw;
        height: 100vh;
        text-align: center;
    }
    div#loginform {
        margin: 100px;
    }
    label {
        display: block;
        font-size: 30px;
        margin-top: 20px;
        font-weight: bolder;
    }
    input#username, input#password {
        font-size: 25px;
    }
    input#submit {
        margin: 30px;
        width: 100px;
        height: 40px;
        font-size: 25px;
        font-weight: bolder;
        text-align: center;
        font-style: italic;
    }
</style>