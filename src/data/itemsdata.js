const getRandomNumber = (min, max) => {
    return parseInt(Math.random() * (Number(max) - Number(min) + 2));
  };

const dummyItems =[
    {
        id: 1,
        src: `https://picsum.photos/id/${getRandomNumber(1,99)}/300/300`,
        itemName: "루미니 카라 bl",
        itemPrice: "35,600",
    },
    {
        id: 2,
        src: `https://picsum.photos/id/${getRandomNumber(1,99)}/300/300`,
        itemName: "코니엣 하프넥 반팔 t",
        itemPrice: "35,600",
    },
    {
        id: 3,
        src: `https://picsum.photos/id/${getRandomNumber(1,99)}/300/300`,
        itemName: "앤드 폴라 t",
        itemPrice: "20,000",
    },
    {
        id: 4,
        src: `https://picsum.photos/id/${getRandomNumber(1,99)}/300/300`,
        itemName: "젤리빈 폴라 nt",
        itemPrice: "46,000",
    },
    {
        id: 5,
        src: `https://picsum.photos/id/${getRandomNumber(1,99)}/300/300`,
        itemName: "체니 투웨이 후드 집업 nt",
        itemPrice: "24,000",
    },
    {
        id: 6,
        src: `https://picsum.photos/id/${getRandomNumber(1,99)}/300/300`,
        itemName: "첼린 양기모 mtm",
        itemPrice: "34,000",
    },
    {
        id: 7,
        src: `https://picsum.photos/id/${getRandomNumber(1,99)}/300/300`,
        itemName: "베이닝 벨벳 캉캉 ops",
        itemPrice: "32,300",
    },
    {
        id: 8,
        src: `https://picsum.photos/id/${getRandomNumber(1,99)}/300/300`,
        itemName: "테리 미니 sk",
        itemPrice: "16,100",
    },
]

export default dummyItems;