const colors = document.querySelectorAll(".col");
const toolBox=document.querySelector(".tools")
const tools=toolBox.childNodes


colors.forEach(color => {
    color.addEventListener("click", function(e) {
      console.log(e)
    });
});


tools.forEach(tool=>{
    tool.addEventListener("click",function(e){
        console.log(e)
    })
})




