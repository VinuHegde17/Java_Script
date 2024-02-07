console.log(" har\"".length)

const sentence = 'The quick brown fox jumps over the lazy dog.';
const word = 'fox';
console.log(`The word "${word}" ${sentence.includes(word)?'is':'is not'}in the sentence`);

const sen = 'fox jumps over the lazy dog.';
console.log(`The word "${word}" ${sen.startsWith(word)?'is':'is not '} start with the sentence`);

const s = 'dog jumps over the lazy fox.';
console.log(`The word "${word}" ${s.endsWith(word)?'is':'is not '} ends with the sentence`);

let st="ABCDE"
console.log(st.toLowerCase())

amt="Please give Rs 1000"
console.log(amt.slice(15))

let at="abcdef"
at[3]="G"
console.log(at)
//String is immutable unable to change