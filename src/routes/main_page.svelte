<script lang="ts">
    export let username = "";
    import CharacterPage from "./character_page.svelte";
    import MapPage from "./map_page.svelte";
    import InboxPage from "./inbox_page.svelte"
    let active_page:string = "Character";
    let pages:string[] = [
        "Character",
        "Map",
        "Inbox",
        "Inventory",
        "Achievements",
        "Clans",
        "Shop",
        "Research",
        "Crafting",
        "Leaderboard"
    ]
</script>
<div id="backg"></div>
<div id="grid">
    <header>
        <h1>Allies of the Forgotten Shadowfell</h1>
        <p>Logged in as <span><i>{username}</i></span></p>
    </header>
    <nav>
        {#each pages as page}
            <button class="fancybox" on:click={()=>{active_page=page;console.log(active_page)}}>{page}</button>
        {/each}
    </nav>

    <main>
        <div id="gamearea" class="fancybox" >
            {#if active_page === "Character"}
                <CharacterPage {username}/>
            {:else if active_page === "Map"}
                <MapPage/>
            {:else if active_page === "Inbox"}
                <InboxPage/>
            {/if}
        </div>
    </main>

    <footer>
    </footer>
</div>
<style lang="scss">
    @import url("../../src/styles/scrollbar.scss");
    @import url("../../src/styles/custombox.scss");
    @import url("../../src/styles/text.scss");
    div#grid {
        overflow: auto;
        display: grid;
        height: 100vh;
        min-height: 500px;
        grid-template-areas:
            "head head"
            "nav main"
            "foot foot";
        grid-template-columns: 300px 1fr;
        grid-template-rows: 10% 85% 5%;
        nav {
          grid-area: nav;
          display: grid;
          grid-template-columns: 100%;
          overflow: auto;
          button {
            font-size: 25px;
            font-variant: small-caps;
            margin: 15px;
            font-weight: bolder;
          }
          button:hover {
            box-shadow: 0 0 8px 8px rgba(0,0,0,.5);
            transition: .05s;
            font-size: 30px;
          }
        }
        header {
          grid-area: head;
          color: white;
          text-align: center;
          overflow: hidden;
          h1,p {
            margin: 10px;
          }
          h1 {
            font-size: 40px;
            letter-spacing: 10px;
            font-variant: small-caps;
          }
          p {
            font-size: 10px;
            span {
              color: rgb(150,0,0);
              font-size: 30px;
            }
          }
        }
        main {
          grid-area: main;
          padding: 20px;
          div#gamearea {
            width: 100%;
            height: 100%;
          }
        }
        footer {
          grid-area: foot;
        }
      header, footer {
        background-color: rgba(0,0,0,.5);
      }
    }
</style>