<script lang="ts">
    import {get_data} from "../lib/messaging/client/database_connect";
    export let username:string = "";

    let skills;
    let skillpoints;
    get_data(username, "SKILLS").then((res)=>{skills=res; console.log(res)});
    get_data(username, "SKILL_POINTS").then((res)=>{skillpoints=res; console.log(res)});

    let hotbar_slot_count: number = 8;
    let hotbar_slots: object[] = [];
    for (let i = 0; i < hotbar_slot_count; i++) hotbar_slots.push({"component": undefined});
    function change_value(name:string, amount:number) {
        if (skills[name]+amount >= 0 || amount > 0) {
            if (skillpoints >= amount) {
                skills[name] += amount;
                skillpoints -= amount;
            } else alert("You have not enough skillpoints left!");
        } else alert("You can't make any of your traits lower than zero!");
    }

</script>

{#if ((skills !== undefined) && (skillpoints !== undefined))}
<div id = "grid">
    <div id = "imgContainer">
        <div id = "img"></div>
    </div>
    <div id = "armor" class="fancybox">
        <h1>Armor</h1>
        <div id = "armorGrid">
            <div class = "armorSlot fancybox"></div><h3>Helmet</h3>
            <div class = "armorSlot fancybox"></div><h3>Chestplate</h3>
            <div class = "armorSlot fancybox"></div><h3>Leggings</h3>
            <div class = "armorSlot fancybox"></div><h3>Boots</h3>
        </div>
    </div>
    <div class="fancybox" id="hotbar">
        <h1>Hotbar</h1>
        {#each hotbar_slots as slot,index}
            <div class="fancybox slot" bind:this={hotbar_slots[index]["component"]}></div>
        {/each}
    </div>
    <div id="skills" class="fancybox">
        <h1>Skills (+{skillpoints})</h1>
        <div id = "skillrows">
            {#each Object.keys(skills) as skill}
                <h3>{skill}</h3>
                <div class = "valueSetter">
                    <button class="fancybox" on:click={()=>change_value(skill, -1)}>-</button>
                    <div id="number">
                        <h3>{skills[skill]}</h3>
                    </div>
                    <button class="fancybox" on:click={()=>change_value(skill, 1)}>+</button>
                </div>
            {/each}
        </div>
    </div>
    <div id="lore">
        <article class="smallred">
            Deep within the heart of the enchanted forest, there lives a fierce and captivating maiden with flowing locks of crimson red, cascading down her back like a blazing fire. Her eyes, the color of the richest ruby, glimmer with an otherworldly intensity, reflecting the secrets of the universe.
            <br>
            She is a woman of great power, with a stare that can penetrate the soul of any man or beast. With a flick of her wrist, she can command the elements to do her bidding, summoning the wind and rain to unleash her fury upon her enemies.
            <br>
            Her beauty is matched only by her strength, for she is a fierce warrior who has mastered the art of combat. Her armor is adorned with precious stones and intricate designs, a testament to her skill and prowess in battle.
            <br>
            Despite her fearsome reputation, she is a woman of great compassion and empathy. She seeks to protect the innocent and uphold justice, using her power and strength to defend those who cannot defend themselves.
            <br>
            Her name is Eira, and she is a woman of mystery and intrigue, a symbol of power, beauty, and grace. Her presence in the enchanted forest is both feared and revered, for those who cross her path know that they have encountered a force of nature unlike any other.
        </article>
    </div>
</div>
{/if}
<style lang="scss">
    @import url("../../src/styles/scrollbar.scss");
    div#grid {
      text-align: center;
      display: grid;
      grid-template-areas:
          "img armor skills"
          "hotbar armor lore";
      grid-template-columns: 1fr 1fr 1fr;
      grid-template-rows: 50% 50%;
      justify-content: stretch;
      align-content: stretch;
      width: 100%;
      height: 100%;

      div#imgContainer {
        grid-area: img;
        padding: 10px;
        div#img {
          background-image: url("src/imgs/face.PNG");
          background-position: center;
          background-size: cover;
          background-repeat: no-repeat;
          width: 100%;
          height: 100%;
          box-shadow: 0 0 5px 5px rgba(0,0,0,.5);
        }
      }
      div#hotbar {
        grid-area: hotbar;
        margin: 10px;
        overflow-y: auto;
        overflow-x: hidden;
        min-width: 120px;
        div.slot {
          display: inline-block;
          width: 80px;
          height: 80px;
          justify-self: center;
          align-self: center;
          margin: 10px;
        }
      }
      div#armor {
        grid-area: armor;
        margin: 10px;
        padding: 10px;
        overflow-y: auto;
        min-width: 250px;
        div#armorGrid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          div.armorSlot {
            width: 80px;
            height: 80px;
            justify-self: center;
            align-self: center;
            margin: 10px;
          }

        }
      }
      div#skills {
        grid-area: skills;
        margin: 10px;
        * { margin: auto auto;}
        min-width: 400px;
        div#skillrows {
          display: grid;
          grid-template-columns: 1fr 1fr;
          overflow: auto;
          height: 80%;
          h2, div#number, button {display: inline-block;}
          div#number {width: 60px;}
          button {
            background: none;
            font-size: 30px;
            font-weight: bolder;
            height: 100%;
          }
        }
      }
      div#lore {
        grid-area: lore;
        margin: 10px;
        overflow: auto;
        padding: 20px;
        text-align: justify;
      }
    }
</style>