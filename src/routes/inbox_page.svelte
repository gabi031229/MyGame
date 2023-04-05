<script lang="ts">
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
</script>

<div id="grid">
    <nav>
        <h1>Tabs</h1>
        <button>Inbox</button>
        <button>Write</button>
    </nav>

    <div id="inbox">
        <h1>Inbox</h1>
        {#each mail as {SENDER, TOPIC, CONTENT, DATE}}
            <div id = "letter">
                <h2>{DATE}</h2>
                <h2>{SENDER}</h2>
                <h2>{TOPIC}</h2>
            </div>
        {/each}
    </div>

    <div id="content">

    </div>
</div>

<style lang="scss">

    div#grid {
      display: grid;
      grid-template-columns: 200px 1fr 1fr;
      justify-content: stretch;
      align-content: stretch;
      height: 100%;
      h1 {
        font-size: 35px;
        text-align: center;

      }
      nav, div#inbox, div#content {
        margin: 10px;
        border: 2px solid black;
        box-shadow: 0 0 5px 5px rgba(0,0,0,.5);
      }
      nav button {
        width: 80%;
        border: 2px solid black;
        box-shadow: 0 0 5px 5px rgba(0,0,0,.5);
        background: none;
        height: 50px;
        font-size: 20px;
        font-weight: bolder;
        font-variant: small-caps;
        margin: 10px;
      }
      div#letter {
        display: grid;
        height: 50px;
        grid-template-columns: 20% 30% 60%;
        font-size: 12px;
        color: rgb(150,0,0);
        box-shadow: 0 0 5px 5px rgba(0,0,0,.5);
        margin: 10px;
      }
    }

</style>
