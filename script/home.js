let allCard = [];




const createElement = (arr) => {
    const htmlElement = arr.map((el)=>
    `
    <span class =  "bg-[#BBF7D0] text-[#00A96E] border-[#00A96E] btn rounded-xl" > ${el} </span>
    `)
    return (htmlElement.join(" "));
    
}

const removeActive = () => {
  const buttons = document.querySelectorAll(".show");
  buttons.forEach((btn) => btn.classList.remove("active"));
}