function encodeAndDecodeMessages() {
    const encodeMessage = document.querySelector("#main > div > textarea")
    const decodeMessage = document.querySelector("#main div:nth-child(2) textarea")
    const encodeBtn = document.querySelector("#main div:nth-child(1) button")
    const decodeBtn = document.querySelector("#main div:nth-child(2) button")

    encodeBtn.addEventListener("click", encodeMsg);
    decodeBtn.addEventListener("click", decodeMsg);

    function encodeMsg () {
        let text = encodeMessage.value;
        let newMsg = ""
        for (let i = 0; i < text.length; i++) {
            const element = text[i];
            newMsg += String.fromCharCode(element.charCodeAt(0) + 1)
        }
        encodeMessage.value = ""
        decodeMessage.value = newMsg
    }

    function decodeMsg () {
        let codeMsg = decodeMessage.value;
        let text = ""
        for (let i = 0; i < codeMsg.length; i++) {
            const element = codeMsg[i];
            text += String.fromCharCode(element.charCodeAt(0) - 1)
        }
        decodeMessage.value = text
    }  
}
