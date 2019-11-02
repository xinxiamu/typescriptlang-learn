//======this的学习

//=======this和箭头函数
//createCardPicker返回的函数里的this被设置成了window而不是deck对象。 因为我们只是独立的调用了 cardPicker()。 顶级的非方法式调用会将 this视为window。 （注意：在严格模式下， this为undefined而不是window）。
/*let deck = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    createCardPicker: function() {
        return function() {
            let pickedCard = Math.floor(Math.random() * 52);
            let pickedSuit = Math.floor(pickedCard / 13);

            return {
                suit: this.suits[pickedSuit],
                card: pickedCard % 13
            };
        }
    }
}

let cardPicker = deck.createCardPicker();
let pickedCard = cardPicker();*/

//========更正以上代码
//我们可以在函数被返回时就绑好正确的this。
//我们需要改变函数表达式来使用ECMAScript 6箭头语法。 箭头函数能保存函数创建时的 this值，而不是调用时的值。
/*let deck = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    createCardPicker: function() {
        // NOTE: the line below is now an arrow function, allowing us to capture 'this' right here
        return () => {
            let pickedCard = Math.floor(Math.random() * 52);
            let pickedSuit = Math.floor(pickedCard / 13);

            return {suit: this.suits[pickedSuit], card: pickedCard % 13};
        }
    }
}

let cardPicker = deck.createCardPicker();
let pickedCard = cardPicker();*/

//======进一步完善
//改用箭头后，虽然没报错，正确运行了，但不幸的是，this.suits[pickedSuit]的类型依旧为any。 这是因为 this来自对象字面量里的函数表达式。
//修改的方法是，提供一个显式的 this参数。 this参数是个假的参数，它出现在参数列表的最前面。
//下面，往例子里添加一些接口，Card 和 Deck，让类型重用能够变得清晰简单些：
interface Card {
    suit: string;
    card: number;
}
interface Deck {
    suits: string[];
    cards: number[];
    createCardPicker(this: Deck): () => Card;
}
let deck: Deck = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    // NOTE: The function now explicitly specifies that its callee must be of type Deck
    createCardPicker: function(this: Deck) { //这里添加显式this参数，是个假的参数
        return () => {
            let pickedCard = Math.floor(Math.random() * 52);
            let pickedSuit = Math.floor(pickedCard / 13);

            return {suit: this.suits[pickedSuit], card: pickedCard % 13};
        }
    }
}

let cardPicker = deck.createCardPicker();
let pickedCard = cardPicker();

//现在TypeScript知道createCardPicker期望在某个Deck对象上调用。 也就是说 this是Deck类型的，而非any，因此--noImplicitThis不会报错了

function fucnThisTest1() {
    alert("card: " + pickedCard.card + " of " + pickedCard.suit);
}




