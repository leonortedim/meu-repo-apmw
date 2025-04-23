<script>
    let light = src=("https://i.postimg.cc/KjK1wL3c/bulb-off.png");
    let dark = src=("https://i.postimg.cc/3x0JYq2g/bulb-on.png");
    let lightOn = lightOff;
    let bgColor = 'bg-black';
    let buttonTxt = 'Turn On';

    function toggleLight() {
        if (lightOn === lightOff) {
            lightOn = light;
            bgColor = 'bg-white transition duration-500 ease-in-out';
            buttonTxt = 'Turn Off';
        } else {
            lightOn = dark;
            bgColor = 'bg-black transition duration-500 ease-in-out';
            buttonTxt = 'Turn On';
        }
    }
</script>

<div class="{bgColor} items-center justify-center gap-4 flex flex-col">
    <img class="items-center mx-auto" src={light} alt="lightbulb"/>
    <button on:click={toggleLight} class="bg-amber-400 hover:bg-amber-600 text-white font-bold py-2 px-4 rounded">
        {buttonTxt}</button>
</div>
    

