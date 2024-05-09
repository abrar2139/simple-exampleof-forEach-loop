const mountImages = [
    {
        img:"https://www.muchbetteradventures.com/magazine/content/images/size/w2000/2019/06/13091225/iStock-157644719.jpg"
    },
    {
        img:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Mount_Everest_as_seen_from_Drukair2_PLW_edit.jpg/330px-Mount_Everest_as_seen_from_Drukair2_PLW_edit.jpg"
    },
    {
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmf7k9NFMfVjsCLCcshY5yFc7U-N2uMOIJv6UC-Uping&s"
    },
    {
        img:"https://cdn.britannica.com/73/189273-131-DA3E2F9A/Denali-peak-center-Alaska-Range-North-America.jpg?w=840&h=460&c=crop"
    },
    {
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4E0BqAmDyK03SElfs8ZitDSA07fpZx0-eqABDE0gcjg&s"
    },
    {
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHpVfq6XVm3-HZ8mMTTI26nt6Wl_UxtIQs-fKAOqw7dg&s"
    },
]

const mounts = document.querySelector(".mounts");
let allImages = '';
mountImages.forEach(function(img,index){
  allImages += `<div class="mount"><img id=${index} src=${img.img} alt=""></div>`
})
console.log(allImages)
mounts.innerHTML=allImages


















