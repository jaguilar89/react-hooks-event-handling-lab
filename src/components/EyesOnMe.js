// Code EyesOnMe Component Here

function EyesOnMe() {
    return <button onFocus={focus} onBlur={blur}>Eyes on me</button>
}

const focus = () => console.log('Good!');
const blur = () => console.log('Hey! Eyes on me!');

export default EyesOnMe;