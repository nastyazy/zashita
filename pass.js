const change = document.getElementById("change")
change.addEventListener("click", change_all)

function change_all(){
     if(document.getElementsByTagName("div")[0].innerHTML==="Зыонг") {
         document.getElementsByTagName("div")[0].innerHTML = "Zyong"
         document.getElementsByTagName("div")[1].innerHTML = "Anastasiia"
         document.getElementsByTagName("div")[2].innerHTML = "Lamovna"
         document.getElementsByTagName("div")[3].innerHTML="Female &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 16.04.2007"
         document.getElementsByTagName("div")[6].innerHTML="MVD PO RESPUBLIKE TUVA"
         document.getElementsByTagName("div")[7].innerHTML="G.KYZYL"
     }
     else{
         document.getElementsByTagName("div")[0].innerHTML="Зыонг"
         document.getElementsByTagName("div")[1].innerHTML="Анастасия"
         document.getElementsByTagName("div")[2].innerHTML="Ламовна"
         document.getElementsByTagName("div")[3].innerHTML="Жен &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 16.04.2007"
         document.getElementsByTagName("div")[6].innerHTML="МВД ПО РЕСПУБЛИКЕ ТЫВА"
         document.getElementsByTagName("div")[7].innerHTML="Г.КЫЗЫЛ"

     }
}