// Constants 
const keys = {
    upperCase: "ASDFGHJKLQWERTYUIOPZXCVBNM",
    lowerCase: "asdfghjklqwertyuiopzxcvbnm",
    number: "0123456789",
    symbol: "!@#$%^&*()_=?.,<>/{}[]"
}
// checkbox function array
const getKey = [
    function upperCase() {
        return keys.upperCase[(Math.random() * keys.upperCase.length)];
    },
    function lowerCase() {
        return keys.lowerCase[(Math.random() * keys.lowerCase.length)]
    },
    function number() {
        return keys.number[(Math.random() * keys.number.length)];
    },
    function symbol() {
        return keys.symbol[(Math.random() * keys.number.length)];
    }
];