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
        return keys.upperCase[Math.floor(Math.random() * keys.upperCase.length)];
    },
    function lowerCase() {
        return keys.lowerCase[Math.floor(Math.random() * keys.lowerCase.length)]
    },
    function number() {
        return keys.number[Math.floor(Math.random() * keys.number.length)];
    },
    function symbol() {
        return keys.symbol[Math.floor(Math.random() * keys.number.length)];
    }
];
