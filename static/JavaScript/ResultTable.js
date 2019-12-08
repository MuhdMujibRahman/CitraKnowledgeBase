
var row_1_col_1=document.getElementById('Row-1-col-1'),
    row_1_col_2=document.getElementById('Row-1-col-2'),
    row_1_col_3=document.getElementById('Row-1-col-3'),
    row_1_col_4=document.getElementById('Row-1-col-4'),
    row_1_col_5=document.getElementById('Row-1-col-5'),
    row_1_col_6=document.getElementById('Row-1-col-6');

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
console.log(newValue)

if(newValue=="GIG 1002 | Hubungan Etnik(HE)"||newValue=="GIG 1002 | Ethnic Relation"){

    HEdetail.get().then(function (doc){
    
        row_1_col_1.innerHTML=doc.data()['Code'];
        row_1_col_2.innerHTML=doc.data()['Name'];
        row_1_col_3.innerHTML=doc.data()['Description'];
        row_1_col_4.innerHTML=doc.data()['Credit'];
        row_1_col_5.innerHTML=doc.data()['Assessment'];
        row_1_col_6.innerHTML=doc.data()['Language'];
    })

  }else if(newValue=="GIG 1001 | Tamadun Islam dan Tamadun Asia"||newValue=="GIG 1001 | Islamic Civilization and Asian Civilization"){
    TITASdetail.get().then(function (doc){
    
        row_1_col_1.innerHTML=doc.data()['Code'];
        row_1_col_2.innerHTML=doc.data()['Name'];
        row_1_col_3.innerHTML=doc.data()['Description'];
        row_1_col_4.innerHTML=doc.data()['Credit'];
        row_1_col_5.innerHTML=doc.data()['Assessment'];
        row_1_col_6.innerHTML=doc.data()['Language'];
    })
  }else if(newValue=="GIG 1004 | Literasi Maklumat"||newValue=="GIG 1004 | Information Literacy"){
    ILdetail.get().then(function (doc){
    
        row_1_col_1.innerHTML=doc.data()['Code'];
        row_1_col_2.innerHTML=doc.data()['Name'];
        row_1_col_3.innerHTML=doc.data()['Description'];
        row_1_col_4.innerHTML=doc.data()['Credit'];
        row_1_col_5.innerHTML=doc.data()['Assessment'];
        row_1_col_6.innerHTML=doc.data()['Language'];
    })
  }else if (newValue=="GIG 1003 | Asas Pembudayaan dan Keusahawan(APK)"||newValue=="GIG 1003 | Basic Entrepreneurship Enculturation") {
    APKdetail.get().then(function (doc){
    
        row_1_col_1.innerHTML=doc.data()['Code'];
        row_1_col_2.innerHTML=doc.data()['Name'];
        row_1_col_3.innerHTML=doc.data()['Description'];
        row_1_col_4.innerHTML=doc.data()['Credit'];
        row_1_col_5.innerHTML=doc.data()['Assessment'];
        row_1_col_6.innerHTML=doc.data()['Language'];
    })    
  } else if (newValue=="GIG 1005 | Jalinan Masyarakat(JM)"||newValue=="GIG 1005 | Social Engagement") {
    SEdetail.get().then(function (doc){
    
        row_1_col_1.innerHTML=doc.data()['Code'];
        row_1_col_2.innerHTML=doc.data()['Name'];
        row_1_col_3.innerHTML=doc.data()['Description'];
        row_1_col_4.innerHTML=doc.data()['Credit'];
        row_1_col_5.innerHTML=doc.data()['Assessment'];
        row_1_col_6.innerHTML=doc.data()['Language'];
    })  
  } else if (newValue=="GIG 1006 | Introduction to Malaysia") {
    IMdetail.get().then(function (doc){
    
        row_1_col_1.innerHTML=doc.data()['Code'];
        row_1_col_2.innerHTML=doc.data()['Name'];
        row_1_col_3.innerHTML=doc.data()['Description'];
        row_1_col_4.innerHTML=doc.data()['Credit'];
        row_1_col_5.innerHTML=doc.data()['Assessment'];
        row_1_col_6.innerHTML=doc.data()['Language'];
    })    
  } else if (newValue=="GIX 1004 | Apresiasi STEM"||newValue=="GIX 1004 | STEM Appreciation") {
    STEMdetail.get().then(function (doc){
    
        row_1_col_1.innerHTML=doc.data()['Code'];
        row_1_col_2.innerHTML=doc.data()['Name'];
        row_1_col_3.innerHTML=doc.data()['Description'];
        row_1_col_4.innerHTML=doc.data()['Credit'];
        row_1_col_5.innerHTML=doc.data()['Assessment'];
        row_1_col_6.innerHTML=doc.data()['Language'];
    })   
  } else if (newValue=="GIX 1003 | Pengenalan Kepada Keamanan dan Kemanusiaan"||newValue=="GIX 1003 | Introduction to Peace and Humanitarian") {
    IPHdetail.get().then(function (doc){
    
        row_1_col_1.innerHTML=doc.data()['Code'];
        row_1_col_2.innerHTML=doc.data()['Name'];
        row_1_col_3.innerHTML=doc.data()['Description'];
        row_1_col_4.innerHTML=doc.data()['Credit'];
        row_1_col_5.innerHTML=doc.data()['Assessment'];
        row_1_col_6.innerHTML=doc.data()['Language'];
    })   
  } else if (newValue=="GKK 1001 | Talent Development") {
    Talent_detai.get().then(function (doc){
    
        row_1_col_1.innerHTML=doc.data()['Code'];
        row_1_col_2.innerHTML=doc.data()['Name'];
        row_1_col_3.innerHTML=doc.data()['Description'];
        row_1_col_4.innerHTML=doc.data()['Credit'];
        row_1_col_5.innerHTML=doc.data()['Assessment'];
        row_1_col_6.innerHTML=doc.data()['Language'];
    })    
  } else if (newValue=="GKA 1001 | Attach@Industry") {
    Attach_detail.get().then(function (doc){
    
        row_1_col_1.innerHTML=doc.data()['Code'];
        row_1_col_2.innerHTML=doc.data()['Name'];
        row_1_col_3.innerHTML=doc.data()['Description'];
        row_1_col_4.innerHTML=doc.data()['Credit'];
        row_1_col_5.innerHTML=doc.data()['Assessment'];
        row_1_col_6.innerHTML=doc.data()['Language'];
    })
  } else if (newValue=="GKN 1002 | Independent Research") {
    IRdetail.get().then(function (doc){
    
        row_1_col_1.innerHTML=doc.data()['Code'];
        row_1_col_2.innerHTML=doc.data()['Name'];
        row_1_col_3.innerHTML=doc.data()['Description'];
        row_1_col_4.innerHTML=doc.data()['Credit'];
        row_1_col_5.innerHTML=doc.data()['Assessment'];
        row_1_col_6.innerHTML=doc.data()['Language'];
    }) 
  } else if (newValue=="GKN 1001 | Community Service") {
    CommuServDetail.get().then(function (doc){
    
        row_1_col_1.innerHTML=doc.data()['Code'];
        row_1_col_2.innerHTML=doc.data()['Name'];
        row_1_col_3.innerHTML=doc.data()['Description'];
        row_1_col_4.innerHTML=doc.data()['Credit'];
        row_1_col_5.innerHTML=doc.data()['Assessment'];
        row_1_col_6.innerHTML=doc.data()['Language'];
    })  
  } else if (newValue=="GKU 1001 | Student Enterpreneurship") {
    StudentEnt_detail.get().then(function (doc){
    
        row_1_col_1.innerHTML=doc.data()['Code'];
        row_1_col_2.innerHTML=doc.data()['Name'];
        row_1_col_3.innerHTML=doc.data()['Description'];
        row_1_col_4.innerHTML=doc.data()['Credit'];
        row_1_col_5.innerHTML=doc.data()['Assessment'];
        row_1_col_6.innerHTML=doc.data()['Language'];
    })   
  }

  if(newValue2=="GIG 1002 | Hubungan Etnik(HE)"||newValue2=="GIG 1002 | Ethnic Relation"){

    HEdetail.get().then(function (doc){
    
        row_1_col_1.innerHTML=doc.data()['Code'];
        row_1_col_2.innerHTML=doc.data()['Name'];
        row_1_col_3.innerHTML=doc.data()['Description'];
        row_1_col_4.innerHTML=doc.data()['Credit'];
        row_1_col_5.innerHTML=doc.data()['Assessment'];
        row_1_col_6.innerHTML=doc.data()['Language'];
    })

  }else if(newValue2=="GIG 1001 | Tamadun Islam dan Tamadun Asia"||newValue2=="GIG 1001 | Islamic Civilization and Asian Civilization"){
    TITASdetail.get().then(function (doc){
    
        row_1_col_1.innerHTML=doc.data()['Code'];
        row_1_col_2.innerHTML=doc.data()['Name'];
        row_1_col_3.innerHTML=doc.data()['Description'];
        row_1_col_4.innerHTML=doc.data()['Credit'];
        row_1_col_5.innerHTML=doc.data()['Assessment'];
        row_1_col_6.innerHTML=doc.data()['Language'];
    })
  }else if(newValue2=="GIG 1004 | Literasi Maklumat"||newValue2=="GIG 1004 | Information Literacy"){
    ILdetail.get().then(function (doc){
    
        row_1_col_1.innerHTML=doc.data()['Code'];
        row_1_col_2.innerHTML=doc.data()['Name'];
        row_1_col_3.innerHTML=doc.data()['Description'];
        row_1_col_4.innerHTML=doc.data()['Credit'];
        row_1_col_5.innerHTML=doc.data()['Assessment'];
        row_1_col_6.innerHTML=doc.data()['Language'];
    })
  }else if (newValue2=="GIG 1003 | Asas Pembudayaan dan Keusahawan(APK)"||newValue2=="GIG 1003 | Basic Entrepreneurship Enculturation") {
    APKdetail.get().then(function (doc){
    
        row_1_col_1.innerHTML=doc.data()['Code'];
        row_1_col_2.innerHTML=doc.data()['Name'];
        row_1_col_3.innerHTML=doc.data()['Description'];
        row_1_col_4.innerHTML=doc.data()['Credit'];
        row_1_col_5.innerHTML=doc.data()['Assessment'];
        row_1_col_6.innerHTML=doc.data()['Language'];
    })    
  } else if (newValue2=="GIG 1005 | Jalinan Masyarakat(JM)"||newValue2=="GIG 1005 | Social Engagement") {
    SEdetail.get().then(function (doc){
    
        row_1_col_1.innerHTML=doc.data()['Code'];
        row_1_col_2.innerHTML=doc.data()['Name'];
        row_1_col_3.innerHTML=doc.data()['Description'];
        row_1_col_4.innerHTML=doc.data()['Credit'];
        row_1_col_5.innerHTML=doc.data()['Assessment'];
        row_1_col_6.innerHTML=doc.data()['Language'];
    })  
  } else if (newValue2=="GIG 1006 | Introduction to Malaysia") {
    IMdetail.get().then(function (doc){
    
        row_1_col_1.innerHTML=doc.data()['Code'];
        row_1_col_2.innerHTML=doc.data()['Name'];
        row_1_col_3.innerHTML=doc.data()['Description'];
        row_1_col_4.innerHTML=doc.data()['Credit'];
        row_1_col_5.innerHTML=doc.data()['Assessment'];
        row_1_col_6.innerHTML=doc.data()['Language'];
    })    
  } else if (newValue2=="GIX 1004 | Apresiasi STEM"||newValue2=="GIX 1004 | STEM Appreciation") {
    STEMdetail.get().then(function (doc){
    
        row_1_col_1.innerHTML=doc.data()['Code'];
        row_1_col_2.innerHTML=doc.data()['Name'];
        row_1_col_3.innerHTML=doc.data()['Description'];
        row_1_col_4.innerHTML=doc.data()['Credit'];
        row_1_col_5.innerHTML=doc.data()['Assessment'];
        row_1_col_6.innerHTML=doc.data()['Language'];
    })   
  } else if (newValue2=="GIX 1003 | Pengenalan Kepada Keamanan dan Kemanusiaan"||newValue2=="GIX 1003 | Introduction to Peace and Humanitarian") {
    IPHdetail.get().then(function (doc){
    
        row_1_col_1.innerHTML=doc.data()['Code'];
        row_1_col_2.innerHTML=doc.data()['Name'];
        row_1_col_3.innerHTML=doc.data()['Description'];
        row_1_col_4.innerHTML=doc.data()['Credit'];
        row_1_col_5.innerHTML=doc.data()['Assessment'];
        row_1_col_6.innerHTML=doc.data()['Language'];
    })   
  } else if (newValue2=="GKK 1001 | Talent Development") {
    Talent_detai.get().then(function (doc){
    
        row_1_col_1.innerHTML=doc.data()['Code'];
        row_1_col_2.innerHTML=doc.data()['Name'];
        row_1_col_3.innerHTML=doc.data()['Description'];
        row_1_col_4.innerHTML=doc.data()['Credit'];
        row_1_col_5.innerHTML=doc.data()['Assessment'];
        row_1_col_6.innerHTML=doc.data()['Language'];
    })    
  } else if (newValue2=="GKA 1001 | Attach@Industry") {
    Attach_detail.get().then(function (doc){
    
        row_1_col_1.innerHTML=doc.data()['Code'];
        row_1_col_2.innerHTML=doc.data()['Name'];
        row_1_col_3.innerHTML=doc.data()['Description'];
        row_1_col_4.innerHTML=doc.data()['Credit'];
        row_1_col_5.innerHTML=doc.data()['Assessment'];
        row_1_col_6.innerHTML=doc.data()['Language'];
    })
  } else if (newValue2=="GKN 1002 | Independent Research") {
    IRdetail.get().then(function (doc){
    
        row_1_col_1.innerHTML=doc.data()['Code'];
        row_1_col_2.innerHTML=doc.data()['Name'];
        row_1_col_3.innerHTML=doc.data()['Description'];
        row_1_col_4.innerHTML=doc.data()['Credit'];
        row_1_col_5.innerHTML=doc.data()['Assessment'];
        row_1_col_6.innerHTML=doc.data()['Language'];
    }) 
  } else if (newValue2=="GKN 1001 | Community Service") {
    CommuServDetail.get().then(function (doc){
    
        row_1_col_1.innerHTML=doc.data()['Code'];
        row_1_col_2.innerHTML=doc.data()['Name'];
        row_1_col_3.innerHTML=doc.data()['Description'];
        row_1_col_4.innerHTML=doc.data()['Credit'];
        row_1_col_5.innerHTML=doc.data()['Assessment'];
        row_1_col_6.innerHTML=doc.data()['Language'];
    })  
  } else if (newValue2=="GKU 1001 | Student Enterpreneurship") {
    StudentEnt_detail.get().then(function (doc){
    
        row_1_col_1.innerHTML=doc.data()['Code'];
        row_1_col_2.innerHTML=doc.data()['Name'];
        row_1_col_3.innerHTML=doc.data()['Description'];
        row_1_col_4.innerHTML=doc.data()['Credit'];
        row_1_col_5.innerHTML=doc.data()['Assessment'];
        row_1_col_6.innerHTML=doc.data()['Language'];
    })   
  }

  if(newValue3=="GIG 1002 | Hubungan Etnik(HE)"||newValue3=="GIG 1002 | Ethnic Relation"){

    HEdetail.get().then(function (doc){
    
        row_1_col_1.innerHTML=doc.data()['Code'];
        row_1_col_2.innerHTML=doc.data()['Name'];
        row_1_col_3.innerHTML=doc.data()['Description'];
        row_1_col_4.innerHTML=doc.data()['Credit'];
        row_1_col_5.innerHTML=doc.data()['Assessment'];
        row_1_col_6.innerHTML=doc.data()['Language'];
    })

  }else if(newValue3=="GIG 1001 | Tamadun Islam dan Tamadun Asia"||newValue3=="GIG 1001 | Islamic Civilization and Asian Civilization"){
    TITASdetail.get().then(function (doc){
    
        row_1_col_1.innerHTML=doc.data()['Code'];
        row_1_col_2.innerHTML=doc.data()['Name'];
        row_1_col_3.innerHTML=doc.data()['Description'];
        row_1_col_4.innerHTML=doc.data()['Credit'];
        row_1_col_5.innerHTML=doc.data()['Assessment'];
        row_1_col_6.innerHTML=doc.data()['Language'];
    })
  }else if(newValue3=="GIG 1004 | Literasi Maklumat"||newValue3=="GIG 1004 | Information Literacy"){
    ILdetail.get().then(function (doc){
    
        row_1_col_1.innerHTML=doc.data()['Code'];
        row_1_col_2.innerHTML=doc.data()['Name'];
        row_1_col_3.innerHTML=doc.data()['Description'];
        row_1_col_4.innerHTML=doc.data()['Credit'];
        row_1_col_5.innerHTML=doc.data()['Assessment'];
        row_1_col_6.innerHTML=doc.data()['Language'];
    })
  }else if (newValue3=="GIG 1003 | Asas Pembudayaan dan Keusahawan(APK)"||newValue3=="GIG 1003 | Basic Entrepreneurship Enculturation") {
    APKdetail.get().then(function (doc){
    
        row_1_col_1.innerHTML=doc.data()['Code'];
        row_1_col_2.innerHTML=doc.data()['Name'];
        row_1_col_3.innerHTML=doc.data()['Description'];
        row_1_col_4.innerHTML=doc.data()['Credit'];
        row_1_col_5.innerHTML=doc.data()['Assessment'];
        row_1_col_6.innerHTML=doc.data()['Language'];
    })    
  } else if (newValue3=="GIG 1005 | Jalinan Masyarakat(JM)"||newValue3=="GIG 1005 | Social Engagement") {
    SEdetail.get().then(function (doc){
    
        row_1_col_1.innerHTML=doc.data()['Code'];
        row_1_col_2.innerHTML=doc.data()['Name'];
        row_1_col_3.innerHTML=doc.data()['Description'];
        row_1_col_4.innerHTML=doc.data()['Credit'];
        row_1_col_5.innerHTML=doc.data()['Assessment'];
        row_1_col_6.innerHTML=doc.data()['Language'];
    })  
  } else if (newValue3=="GIG 1006 | Introduction to Malaysia") {
    IMdetail.get().then(function (doc){
    
        row_1_col_1.innerHTML=doc.data()['Code'];
        row_1_col_2.innerHTML=doc.data()['Name'];
        row_1_col_3.innerHTML=doc.data()['Description'];
        row_1_col_4.innerHTML=doc.data()['Credit'];
        row_1_col_5.innerHTML=doc.data()['Assessment'];
        row_1_col_6.innerHTML=doc.data()['Language'];
    })    
  } else if (newValue3=="GIX 1004 | Apresiasi STEM"||newValue3=="GIX 1004 | STEM Appreciation") {
    STEMdetail.get().then(function (doc){
    
        row_1_col_1.innerHTML=doc.data()['Code'];
        row_1_col_2.innerHTML=doc.data()['Name'];
        row_1_col_3.innerHTML=doc.data()['Description'];
        row_1_col_4.innerHTML=doc.data()['Credit'];
        row_1_col_5.innerHTML=doc.data()['Assessment'];
        row_1_col_6.innerHTML=doc.data()['Language'];
    })   
  } else if (newValue3=="GIX 1003 | Pengenalan Kepada Keamanan dan Kemanusiaan"||newValue3=="GIX 1003 | Introduction to Peace and Humanitarian") {
    IPHdetail.get().then(function (doc){
    
        row_1_col_1.innerHTML=doc.data()['Code'];
        row_1_col_2.innerHTML=doc.data()['Name'];
        row_1_col_3.innerHTML=doc.data()['Description'];
        row_1_col_4.innerHTML=doc.data()['Credit'];
        row_1_col_5.innerHTML=doc.data()['Assessment'];
        row_1_col_6.innerHTML=doc.data()['Language'];
    })   
  } else if (newValue3=="GKK 1001 | Talent Development") {
    Talent_detai.get().then(function (doc){
    
        row_1_col_1.innerHTML=doc.data()['Code'];
        row_1_col_2.innerHTML=doc.data()['Name'];
        row_1_col_3.innerHTML=doc.data()['Description'];
        row_1_col_4.innerHTML=doc.data()['Credit'];
        row_1_col_5.innerHTML=doc.data()['Assessment'];
        row_1_col_6.innerHTML=doc.data()['Language'];
    })    
  } else if (newValue3=="GKA 1001 | Attach@Industry") {
    Attach_detail.get().then(function (doc){
    
        row_1_col_1.innerHTML=doc.data()['Code'];
        row_1_col_2.innerHTML=doc.data()['Name'];
        row_1_col_3.innerHTML=doc.data()['Description'];
        row_1_col_4.innerHTML=doc.data()['Credit'];
        row_1_col_5.innerHTML=doc.data()['Assessment'];
        row_1_col_6.innerHTML=doc.data()['Language'];
    })
  } else if (newValue3=="GKN 1002 | Independent Research") {
    IRdetail.get().then(function (doc){
    
        row_1_col_1.innerHTML=doc.data()['Code'];
        row_1_col_2.innerHTML=doc.data()['Name'];
        row_1_col_3.innerHTML=doc.data()['Description'];
        row_1_col_4.innerHTML=doc.data()['Credit'];
        row_1_col_5.innerHTML=doc.data()['Assessment'];
        row_1_col_6.innerHTML=doc.data()['Language'];
    }) 
  } else if (newValue3=="GKN 1001 | Community Service") {
    CommuServDetail.get().then(function (doc){
    
        row_1_col_1.innerHTML=doc.data()['Code'];
        row_1_col_2.innerHTML=doc.data()['Name'];
        row_1_col_3.innerHTML=doc.data()['Description'];
        row_1_col_4.innerHTML=doc.data()['Credit'];
        row_1_col_5.innerHTML=doc.data()['Assessment'];
        row_1_col_6.innerHTML=doc.data()['Language'];
    })  
  } else if (newValue3=="GKU 1001 | Student Enterpreneurship") {
    StudentEnt_detail.get().then(function (doc){
    
        row_1_col_1.innerHTML=doc.data()['Code'];
        row_1_col_2.innerHTML=doc.data()['Name'];
        row_1_col_3.innerHTML=doc.data()['Description'];
        row_1_col_4.innerHTML=doc.data()['Credit'];
        row_1_col_5.innerHTML=doc.data()['Assessment'];
        row_1_col_6.innerHTML=doc.data()['Language'];
    })   
  }


  


console.log("masuk sini");

function Back(){
  location.replace("https://citra-knowledge-base-system.herokuapp.com/Home/")
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
