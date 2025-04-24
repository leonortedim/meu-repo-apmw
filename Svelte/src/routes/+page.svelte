<script>
    import { get } from "svelte/store";

    let dark = 'https://i.postimg.cc/KjK1wL3c/bulb-off.png';
    let light = 'https://i.postimg.cc/6QyTynzr/bulb-on.png';
    let bulb = dark;
    let bgColor = 'bg-black';
    let buttonTxt = 'Turn On';

    function toggleLight() {
        if (bulb === dark) {
            bulb = light;
            bgColor = 'bg-white transition duration-500 ease-in-out';
            buttonTxt = 'Turn Off';
        } else {
            bulb = dark;
            bgColor = 'bg-black transition duration-500 ease-in-out';
            buttonTxt = 'Turn On';
        }
    }
</script>

<div class="{bgColor} items-center justify-center gap-4 flex flex-col">
    <img class="items-center mx-auto" src={bulb} alt="lightbulb"/>
    <button on:click={toggleLight} class="bg-amber-400 hover:bg-amber-600 text-white font-bold py-2 px-4 rounded">
        {buttonTxt}</button>
</div>


<style>

</style>
    

