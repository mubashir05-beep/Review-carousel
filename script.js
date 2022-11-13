const reviews=[
    {
    id:1,
    name:'Alan Benjamin',
    job: "Web Developer",
    text:"I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    img:"https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
     },
     {
        id: 2,
        name: "Anna Johnson",
        job: "Web Designer",
        img:
          "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
        text:
          "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal",
      },
      {
        id: 3,
        name: "Peter Jones",
        job: "Intern",
        img:
          "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
        text:
          "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
      },
      {
        id: 4,
        name: "Bill Anderson",
        job: "The Boss",
        img:
          "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
        text:
          "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
      },
];
const replaceImage = document.getElementById('image');
const replaceName = document.getElementById('name');
const replaceJob = document.getElementById('job');
const replaceReview = document.getElementById('text');
const leftBTN=document.getElementsByClassName('.left');
const rightBTN=document.getElementsByClassName('right');
const surpriseBTN=document.getElementsByClassName('.surprise');
let currentReview=0;
window.addEventListener('DOMContentLoaded',()=>{
    const item=reviews[currentItem];
replaceImage.src=item.img;
replaceName.textContent=item.name;
replaceJob.textContent=item.job; 
replaceReview.textContent=item.text; 
})
function showData(person){
const item=reviews[person];
replaceImage.src=item.img;
replaceName.textContent=item.name;
replaceJob.textContent=item.job; 
replaceReview.textContent=item.text; 
};
const rightGen=()=>{
    if(currentReview>=reviews.length-1)
     {
        currentReview=0;
     }
     currentReview++;
     showData(currentReview);
}
const leftGen=()=>{
    if(currentReview<0)
    {
       currentReview=reviews.length-1;
    }
    currentReview--;
    showData(currentReview);
};

const surprise=()=>{
let random=Math.floor(Math.random()*reviews.length)
showData(random);
}
