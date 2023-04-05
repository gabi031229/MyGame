<script lang="ts">
    import MainPage from "./main_page.svelte";
    import {messengers} from "../lib/messaging/client/messengers";
    import {Status} from "../lib/messaging/status";

    let loggedIn:boolean = false;
    let usernameInput;
    let passwordInput;

    let username:string;

    function loginTry () {
        // communicate with server here
        messengers.auth.login(usernameInput.value, passwordInput.value)
            .on(Status.OK, (res) => {
                loggedIn=true;
                username=usernameInput.value;
            })
            .send()
    }
</script>

<main>
    {#if !loggedIn}
        <h1>Login page</h1>
        <label for="username">Username:</label>
        <input id = "username" type = "text" bind:this={usernameInput}/><br>
        <label for="password">Password:</label>
        <input id = "password" type = "password" bind:this={passwordInput}/><br>
        <input type="submit" on:click={loginTry}/>
    {:else}
        <MainPage {username}/>
    {/if}
</main>

<style>
    main {
        padding: 0;
        margin: 0;
        width: 100vw;
        height: 100vh;
    }
</style>