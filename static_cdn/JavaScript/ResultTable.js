
var row_1_col_1=document.getElementById('Row-1-col-1'),
    row_1_col_2=document.getElementById('Row-1-col-2'),
    row_1_col_3=document.getElementById('Row-1-col-3'),
    row_1_col_4=document.getElementById('Row-1-col-4'),
    row_1_col_5=document.getElementById('Row-1-col-5'),
    row_1_col_6=document.getElementById('Row-1-col-6')

SEdetail = db.collection("Subject").doc("6YUlE4POohZisT9w7lGG");
Attach_detail=db.collection("Subject").doc("6R70e832NGtKxAB2wWqq");
IMdetail=db.collection("Subject").doc("AeugHqoX4xq4mxSYfNYU");
STEMdetail=db.collection("Subject").doc("F3BuOI1KsTAlhfevlcVg");
IPHdetail=db.collection("Subject").doc("LR3uqHdeh4hLDRACYyHM");
VolunteerDetail=db.collection("Subject").doc("SQfYS73PLilewwiWjGBf");
CommuServDetail=db.collection("Subject").doc("awnhClvldYrQHxL4dm4J");
APKdetail=db.collection("Subject").doc("dn2NeXj05xHPNUcXrtDd");
StudentEnt_detail=db.collection("Subject").doc("jSm4qZqv6dQfQ63zXg0N");
TITASdetail=db.collection("Subject").doc("l3W39lVh3Cnec7eAOnG8");
ILdetail=db.collection("Subject").doc("nlfx8GbHGlSJcBETwCAj");
HEdetail=db.collection("Subject").doc("q3cKEjPR75znT9AnC1go");
Talent_detai=db.collection("Subject").doc("wB5jGgA7yRd9NuBSOceq");
IRdetail=db.collection("Subject").doc("yTEp2gAi73ziwxuLNNCy");

docRef.get().then(function (doc){
    console.log(doc.data()['Code'])
    row_1_col_1.innerHTML=doc.data()['Code'];
    row_1_col_2.innerHTML=doc.data()['Name'];
    row_1_col_3.innerHTML=doc.data()['Description'];
    row_1_col_4.innerHTML-doc.data()['Credit'];
    row_1_col_5.innerHTML=doc.data()['Assessment'];
    row_1_col_6.innerHTML=doc.data()['Language'];
})

function SubjectGet(){
  
    
}

// Add a new document in collection 
// db.collection("Subject").doc("wB5jGgA7yRd9NuBSOceq").set({
//     Name: "Talent Development",
//     Code: "GKK1001",
//     Description: "This course provides exposure on the sports/arts talents learned by the students practically through specified training. Skills in sports / arts / leadership can be built with various exercises. In addition, the University Community Engagement (UCE) element is applied. Students are required to perform activities such as clinics, seminars, competitions or other sports / art / leadership related programs learned for community-sharing. At the end of the course,students will master sports / arts / leadership skills, communication and social skills with the community.",
//     Credit:"2 Credit Hour",
//     Assessment:"Continuous Assessment:100%",
//     Language:"Malay and English"
// })
// .then(function() {
//     console.log("Document successfully written!");
// })
// .catch(function(error) {
//     console.error("Error writing document: ", error);
// });
