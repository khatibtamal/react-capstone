// This is the code taken from https://raw.githubusercontent.com/courseraap/capstone/main/api.js
// In course I was asked to import via script tag in index.html file and use it in my custom hook.
// Could not figure out any way that I could make it work, therefore I have just copied the code
// here to be able to use it.
// No Copyrights infringement intender.


const seededRandom = function (seed) {
    var m = 2**35 - 31;
    var a = 185852;
    var s = seed % m;
    return function () {
        return (s = s * a % m) / m;
    };
}

const fetchAPI = function(date) {
    let result = [];
    let random = seededRandom(date.getDate());

    for(let i = 17; i <= 23; i++) {
        if(random() < 0.5) {
            result.push(i + ':00');
        }
        if(random() < 0.5) {
            result.push(i + ':30');
        }
    }
    return result;
};
const submitAPI = function(formData) {
    return true;
};

export { fetchAPI, submitAPI };
