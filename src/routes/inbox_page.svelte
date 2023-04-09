<script lang="ts">
    import * as string_decoder from "string_decoder";

    let mail:object[] = [
        {
            "SENDER" : "gabberson",
            "TOPIC" : "Car's extended warranty",
            "CONTENT" : "Hello. We've been trying to reach you about your car's extended warranty. Hello. We've been trying to reach you about your car's extended warranty. Hello. We've been trying to reach you about your car's extended warranty. Hello. We've been trying to reach you about your car's extended warranty.",
            "DATE" : "2023.03.15"
        },{
            "SENDER" : "gabberson123",
            "TOPIC" : "Car",
            "CONTENT" : "Hello. We've been trying to reach you about your car's extended warranty. Hello. We've been trying to reach you about your car's extended warranty. Hello. We've been trying to reach you about your car's extended warranty. Hello. We've been trying to reach you about your car's extended warranty.",
            "DATE" : "2023.03.16"
        },{
            "SENDER" : "davdev",
            "TOPIC" : "extended warranty",
            "CONTENT" : "Hello. We've been trying to reach you about your car's extended warranty. Hello. We've been trying to reach you about your car's extended warranty. Hello. We've been trying to reach you about your car's extended warranty. Hello. We've been trying to reach you about your car's extended warranty.",
            "DATE" : "2023.03.17"
        },{
            "SENDER" : "Barni",
            "TOPIC" : "warranty",
            "CONTENT" : "Hello. We've been trying to reach you about your car's extended warranty. Hello. We've been trying to reach you about your car's extended warranty. Hello. We've been trying to reach you about your car's extended warranty. Hello. We've been trying to reach you about your car's extended warranty.",
            "DATE" : "2023.03.18"
        }
    ]

    let mailtitle: HTMLElement;
    let maildate: HTMLElement;
    let mailsender: HTMLElement;
    let mailcontent: HTMLElement;
    function openMail (data: object) {
        if (!writing) {
            mailtitle.innerText = data.TOPIC;
            maildate.innerText = data.DATE;
            mailsender.innerText = data.SENDER;
            mailcontent.innerText = data.CONTENT;
        }
    }
    let writing: boolean = false;
</script>

<div id="grid">
    <div id="inbox" class = "fancybox">
        <h1>Inbox</h1>
        {#each mail as {SENDER, TOPIC, CONTENT, DATE}}
            <div class = "fancybox" id = "letter" on:click={()=>openMail({SENDER, TOPIC, CONTENT, DATE})}>
                <h2>{DATE}</h2>
                <h2>{SENDER}</h2>
                <h2>{TOPIC}</h2>
            </div>
        {/each}
    </div>

    <div id="rightside" class = "fancybox">
        <button id = "change_panel" class = "fancybox" on:click={()=>writing=!writing}>
            <h2>{#if writing}Write{:else}Read{/if}</h2>
        </button>

        {#if writing}
            <div id="writing">

            </div>
        {:else}
            <div id="content">
                <h1 bind:this={mailtitle}></h1>
                <h2 bind:this={mailsender}></h2>
                <p bind:this={mailcontent} class="smallred"></p>
                <h3 bind:this={maildate}></h3>
            </div>
        {/if}
    </div>
</div>

<style lang="scss">
    @import url("../../src/styles/background.scss");
    @import url("../../src/styles/custombox.scss");
    @import url("../../src/styles/text.scss");
    @import url("../../src/styles/scrollbar.scss");
    div#grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      justify-content: stretch;
      align-content: stretch;
      height: 100%;
      h1 {
        font-size: 35px;
        text-align: center;
      }
      div#inbox, div#rightside {
        margin: 10px;
        min-width: 300px;
      }
      div#rightside {
        position: relative;
        padding: 10px;
        div#content {
          display: grid;
          width: 70%;
          overflow: auto;
        }
      }
      div#letter {
        display: grid;
        height: 50px;
        grid-template-columns: 20% 30% 60%;
        font-size: 12px;
        color: rgb(150,0,0);
        margin: 10px;
        align-content: center;
      }
      button#change_panel {
        position: absolute;
        top: 0;
        right: 0;
        width: 20%;
        height: 50px;
        margin: 10px;
      }
    }

</style>
