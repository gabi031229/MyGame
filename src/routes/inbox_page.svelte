<script lang="ts">
    import {messengers} from "../lib/messaging/client/messengers";
    import {Status} from "../lib/messaging/status";

    export let username:string = "";
    let writing: boolean = false;

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

    let read_mailtitle: HTMLHeadingElement;
    let read_maildate: HTMLHeadingElement;
    let read_mailsender: HTMLHeadingElement;
    let read_mailcontent: HTMLParagraphElement;

    let write_mailtitle: HTMLInputElement;
    let write_mailrecipient: HTMLInputElement;
    let write_mailcontent: HTMLTextAreaElement;
    function openMail (data: object) {
        if (!writing) {
            read_mailtitle.innerText = data.TOPIC;
            read_maildate.innerText = data.DATE;
            read_mailsender.innerText = data.SENDER;
            read_mailcontent.innerText = data.CONTENT;
        }
    }
    function sendMail () {
        console.log("Mail sent");
        console.log(write_mailtitle.value);
        console.log(write_mailrecipient.value);
        console.log(write_mailcontent.value);
        messengers.mail.send(
            username,
            write_mailtitle.value,
            write_mailrecipient.value,
            write_mailcontent.value
        )
            .on(Status.NOT_FOUND, () => {alert("No user with given name.")})
            .on(Status.OK, () => {alert("Message sent!")})
            .send();
    }

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
        <div id="content">
            {#if writing}
                <input bind:this={write_mailtitle} class="fancybox" type="text" placeholder="Title"/>
                <input bind:this={write_mailrecipient} class="fancybox" type="text" placeholder="Recipient"/>
                <textarea bind:this={write_mailcontent} class="fancybox smallred" type="text" placeholder="Write your message here"></textarea>
                <button on:click={sendMail} class="fancybox">
                    <h2>Send message</h2>
                </button>
            {:else}
                <h1 bind:this={read_mailtitle}></h1>
                <h2 bind:this={read_mailsender}></h2>
                <p bind:this={read_mailcontent} class="smallred"></p>
                <h3 bind:this={read_maildate}></h3>
            {/if}
        </div>
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
          width: 70%;
          display:grid;
          justify-content: stretch;
          grid-template-columns: 100%;
          input {
            margin: 10px 0;
            padding: 5px;
            font-size: 20px;
            font-weight: bolder;
          }
          textarea {
            resize: none;
            margin: 10px 0;
            padding: 5px;
            height: 200px;
          }
          button {
            width: 100%;
            margin: 10px 0;
            padding: 0;
          }
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
