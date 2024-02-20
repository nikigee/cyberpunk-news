import "./App.css";
import Articles from "./components/Articles";

const data = [
    {
        id: "psychic1",
        title: "What's the deal with psychics?",
        author: "[AI] John Doe",
        img_url:
            "https://cdn.discordapp.com/attachments/885083261997563944/1208983112244142100/shroud.png?ex=65e54443&is=65d2cf43&hm=f7420c69fa276584d6e10932147824c61299c1af8bac2ce7d3dc59e0fa0abaca&",
        description:
            "Psychics are a very rare breed in the world. There's a lot of questions when it comes to them and the Shroud in general, and modern science has come up with very few answers...",
    },
    {
        id: "hammerhead1",
        title: "Hammerhead Hammered Once Again",
        author: "Trisha Walkers",
        img_url: "https://cdna.artstation.com/p/assets/images/images/000/162/350/large/felipecollazo-collazo-felipecollazo-interiorpaintover.jpg?1407709504",
        description: "The CEO of NanoDigital, Duncan Hammerhead, has once again caused controversy with his latest public outburst. This is not the first time..."
    },
    {
        id: "war1",
        title: "Trouble in Little China!",
        author: "Razor",
        img_url: "https://cdn.discordapp.com/attachments/536930875791638529/1109823366195585164/cyberpunk-2077-concept-art-1024x576.png",
        description: "Things are heating up in Little China, as the Weng Fang Tong and the Princess Gang are going at it tooth and nail. That's right, the streets will be ablaze with gunfire and explosions and I, for one, can't wait!"
    },
    {
        id: "naturalbeauty1",
        title: "The Influence of Celebrity Cosmetic Augmentations. Jade Says No",
        author: "Sofia Balme",
        img_url: "https://cdn.discordapp.com/attachments/536930875791638529/1109836818964291645/image.png",
        description: "In a world where cosmetic augmentations have become a widespread trend, concerns are mounting over the detrimental effects on body image and self-esteem, particularly among women who are unable to afford these costly enhancements..."
    }
];

const App = () => {
    return (
        <div className="app-wrap">
            <div className="container text-center">
                <h1 className="m-4">Network News 54</h1>
                <Articles data={data} heading="Recommended Articles" />
            </div>
        </div>
    );
};

export default App;
