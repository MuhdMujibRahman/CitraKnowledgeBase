
var input = document.getElementById("search");
input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   event.preventDefault();
   document.getElementById("myBtn").click();
  }
});
var current=0;
var Freshman=false, 
    Senior=false,
    Sceince=false,
    Art=false,
    local=false,
    HE=false,
    IL=false,
    TITAS=false,
    SE=false,
    APK=false,
    None=false,
    Nonlocal=false,
    SSNL=false,
    SSL=false,
    SAL=false,
    SANL=false,
    SSNL=false,
    FANL=false,
    FSNL=false,
    FSL=false,
    FAL=false,
    Take=false,
    Drop=false,
    KoK=false,
    Sport=false,
    Indoor=false,
    Outdoor=false,
    Arts1=false,
    Lship=false,
    e_S=false,
    Music=false,
    Draw=false,
    Dance=false,
    WPT=false,
    Freelance=false,
    Fb=false,
    rug=false,
    Fbee=false,
    Vball=false,
    Bad_m=false,
    MA=false,
    Bball=false,
    Takr=false,
    IM=false,
    No=false,
    STEM=false,
    IPH=false,
    Both=false,
    ILsubject=false,
    JMsubject=false,
    HEsubject=false,
    APKsubject=false,
    TITASsubject=false,
    IMsubject=false,
    STEMsubject=false,
    IPHsubject=false,
    result1=document.getElementById("result-1"),
    result2=document.getElementById("result-2"),
    result3=document.getElementById("result-3"),
    result4=document.getElementById("result-4"),
    RC1=document.getElementById("RC1"),
    RC2=document.getElementById("RC2"),
    RC3=document.getElementById("RC3"),
    RC4=document.getElementById("RC4"),
    radio_d1=document.getElementById("radio_d1"),
    radio_d2=document.getElementById("radio_d2"),
    radio_d3=document.getElementById("radio_d3"),
    radio_d4=document.getElementById("radio_d4");
    Q_area= document.getElementById('questionToAsk'),
    inputGroup=document.getElementsByClassName("inputGroup"),
    check1=document.getElementById('check1'),
    check2=document.getElementById('check2'),
    check3=document.getElementById('check3'),
    check4=document.getElementById('check4'),
    option1_text=document.getElementById('option1_text'),
    option2_text=document.getElementById('option2_text'),
    option3_text=document.getElementById('option3_text'),
    option4_text=document.getElementById('option4_text'),
    para=document.getElementById("p");

var CheckBox=[check1,check2,check3,check4],
    Option=[option1_text,option2_text,option3_text,option4_text],
    RadText=[radio_d1,radio_d2,radio_d3,radio_d4],
    RadSel=[RC1,RC2,RC3,RC4];
var btn_value="hello",
    Interest=" ",
    btn_value2=" ";


var all_questions = [{
  question_string: "what year are you currently?",                //question 0
  choices:["First year","Second year","Third year","Fourth year"]
}, {
  question_string: "Which program are you?",                       //question 1
  choices: ["Science Stream", "Art Stream","I'm not sure"]
}, {
  question_string: "Which faculty are you from",                  //question 2
  choices:["Science,Medicine,Computer Science,Engineering", "Social Science,Linguistic", "API,APM,Sport","Bussiness,Law,Education"]
}, {
  question_string: 'Are you local ? ',                            //question 3
  choices: ["Yes, I'm Local", "International Student"]
},{
  question_string: 'Which subject are you taking this semester ? ',             //question 4
  choices: ["Ethnic Relation(HE)", "TITAS","None above"]
},{
  question_string: 'Choose the subject you have taken before(choose one or multiple) ',         //question 5
  choices: ["Social Engagement", "Information Literacy", "Entrepernuership","Ko-K"]
},{
  question_string: 'How many total of credits do you have now ? ',//After choosing subject
  choices: ["Exactly 22", "Less than 22", "less than 18","More than 22"]
},{
  question_string: 'Do you prefer... ',//If choose Ko-k
  choices: ["Sports", "Arts", "Leadership"]
},{
  question_string: 'What are you most interested in ? ',//Sports
  choices: ["e-Sports", "Outdoor sports", "indoor sports"]
},{
    question_string: 'What are you most interested in ? ',//Arts
    choices: ["Music", "Drawing", "Dancing"]
},{
  question_string: 'What are you most interested in ? ',//Casual work
  choices: ["Working part-time", "Freelance"]
},{
  question_string: 'What are you most interested in ? ',//Outdoor sport
    choices: ["Football", "Rugby", "Freesbee","Volleyball"]
},{
  question_string: 'What are you most interested in ? ', //Indoor sports
  choices: ["Badminton", "Martial arts", "Basketball","Takraw"]
},{
  question_string: 'Have you taken Introduction to Malaysia ? ', //Question 13
  choices: ["Yes", "NO"]
},{
  question_string: 'Have you taken this subject below ? ',   //question 14
  choices: ["Ethnic Relation(HE)", "TITAS","Both"]
},{
  question_string: 'Hey, have you taken Introduction to Malaysia ? ',   //question 15
  choices: ["Yes", "No"]
},{
  question_string: 'Choose the subject that you have taken before ? ',   //question 16
  choices: ["STEM Appreciation", "Introduction to Peace and Humanitarian", "None above"]
}
];

var str = document.getElementById('search-value').value;
//var str="I want to take Jalinan Masyarakat"
console.log(str)
            // Displaying the value
document.getElementById("Explain").innerHTML='';
document.getElementById('result-1').style.display='none';
document.getElementById('result-2').style.display='none';
document.getElementById('label').style.display='none';
factReset();
            
if(str.match(/Jalinan Masyarakat/g)){
  JMsubject=true;
  getInputValue();             
}else if(str.match(/Ethnic Relation/g)){
  HEsubject=true;
  getInputValue();
}else if(str.match(/Tamadun Islam/g)){
  TITASsubject=true;
  getInputValue();
}else if(str.match(/Pembudayaan Keusahawan/g)){
  APKsubject=true;
  getInputValue();
}else if(str.match(/Intoduction to Malaysia/g)){
  IMsubject=true;
  getInputValue();
}else if(str.match(/STEM/g)){
    STEMsubject=true;
    getInputValue();
}else if(str.match(/Peace and Humanitarian/g)){
  IPHsubject=true;
  getInputValue();
}else if(str.match(/Information literacy/g)){
  IL=true;
  getInputValue();
}else if(str.match(/register/g)){
  getInputValue();
}

function getInputValue(){
  document.getElementById("content_id").style.display = "grid";
  current=0;           
  Q_area.innerHTML=all_questions[0].question_string;

  for (var i=0;i<4;i+=1){
    inputGroup[i].style.display='block';
             }
  for(var i=0;i<4;i+=1){
      RadText[i].innerHTML=all_questions[0].choices[i];
             }                      
    }

function RadioBtton(){

  if(document.getElementById('radio_1').checked||
  document.getElementById('radio_2').checked||
  document.getElementById('radio_3').checked||
  document.getElementById('radio_4').checked||
  document.getElementById('option1').checked||
  document.getElementById('option2').checked||
  document.getElementById('option3').checked||
  document.getElementById('option4').checked){
    return true;
  }

}
function RadioReset(){
  document.getElementById('radio_1').checked=false;
  document.getElementById('radio_2').checked=false;
  document.getElementById('radio_3').checked=false;
  document.getElementById('radio_4').checked=false;
}

function ChangeQuestion(){
  
  if(RadioBtton())
  {
        var answers=all_questions[current].choices;
        CheckValueForRadio();
        InferenceEngine();
        console.log("Locacl: "+local)
        console.log("FSL: "+FSL)
        RadioReset();
        current+=1;
        
        var question=all_questions[current].question_string;
      if(FAL||FSL){
        if(FSL&&HEsubject){
            answers=all_questions[6].choices;
            question=all_questions[6].question_string;
            Q_area.innerHTML='';
            Q_area.innerHTML=question;
            for(var i =0;i<answers.length;i+=1){
              RadSel[i].style.display='block';
              RadText[i].innerHTML=all_questions[6].choices[i];
            }
            CheckValueForRadio();
            if(Take){
              HideAnswer();
              Q_area.innerHTML='';
              Q_area.innerHTML="We recommend you to take the subject below: ";
              document.getElementById('result-1').style.display='block';
              document.getElementById('TextResult').innerHTML="GIG 1002 | Hubungan Etnik(HE)";
              btn_value="GIG 1002 | Hubungan Etnik(HE)";
              localStorage.setItem("value", btn_value);
              document.getElementById('label').style.display='block';
              
            }else if(Drop){
              Q_area.innerHTML='';
              HideAnswer();
                document.getElementById("Explain").innerHTML="<h1>I'm Sorry, before taking any of this subject you should drop any 2 credit subject";
              }
            
        }else if(FAL&&HEsubject){
            answers=all_questions[6].choices;
            question=all_questions[6].question_string;
            Q_area.innerHTML='';
            Q_area.innerHTML=question;
            for(var i =0;i<answers.length;i+=1){
              RadSel[i].style.display='block';
              RadText[i].innerHTML=all_questions[6].choices[i];
            }
            CheckValueForRadio();
            if(Take){
              HideAnswer();
              Q_area.innerHTML='';
              Q_area.innerHTML="We recommend you to take the subject below: ";
              document.getElementById('result-1').style.display='block';
              document.getElementById('TextResult').innerHTML="GIG 1002 | Hubungan Etnik(HE)";
              document.getElementById('label').style.display='block';
              btn_value="GIG 1002 | Hubungan Etnik(HE)";
              localStorage.setItem("value", btn_value);
              document.getElementById("Explain").innerHTML="<h1>You can take this subject next semester</h1>";

              
            }else if(Drop){
              Q_area.innerHTML='';
              HideAnswer();
                document.getElementById("Explain").innerHTML="<h1>I'm Sorry, before taking any of this subject you should drop any 2 credit subject";
              }
        }else if(FAL&&TITASsubject){
            answers=all_questions[6].choices;
            question=all_questions[6].question_string;
            Q_area.innerHTML='';
            Q_area.innerHTML=question;
            for(var i =0;i<answers.length;i+=1){
              RadSel[i].style.display='block';
              RadText[i].innerHTML=all_questions[6].choices[i];
            }
            CheckValueForRadio();
            if(Take){
              HideAnswer();
              Q_area.innerHTML='';
              Q_area.innerHTML="We recommend you to take the subject below: ";
              document.getElementById('result-1').style.display='block';
              document.getElementById('TextResult').innerHTML="GIG 1001 | Tamadun Islam dan Tamadun Asia";
              document.getElementById('label').style.display='block';
              btn_value="GIG 1001 | Tamadun Islam dan Tamadun Asia";
              localStorage.setItem("value", btn_value);
              
            }else if(Drop){
              Q_area.innerHTML='';
              HideAnswer();
                document.getElementById("Explain").innerHTML="<h1>I'm Sorry, before taking any of this subject you should drop any 2 credit subject";
              }
        }else if(FAL){
          HideAnswer();
            if(JMsubject||ILsubject||STEMsubject||APK){
              Q_area.innerHTML='';              
              document.getElementById("Explain").innerHTML="<h1>I'm Sorry, this subject can be taken starting your Second year";
            }else {
              question=all_questions[4].question_string;
              Q_area.innerHTML='';
              Q_area.innerHTML=question;
              answers=all_questions[4].choices;
              for(var i =0;i<answers.length;i+=1){
                RadSel[i].style.display='block';
                RadText[i].innerHTML=all_questions[4].choices[i];
              }       CheckValueForRadio();
              if(FAL&&HE){
            
                answers=all_questions[6].choices;
                question=all_questions[6].question_string;
                Q_area.innerHTML='';
                Q_area.innerHTML=question;
                for(var i =0;i<answers.length;i+=1){
                  RadSel[i].style.display='block';
                  RadText[i].innerHTML=all_questions[6].choices[i];
                }
                CheckValueForRadio();
                if(Take){
                  HideAnswer();
                  Q_area.innerHTML='';
                  Q_area.innerHTML="We recommend you to take the subject below: ";
                  document.getElementById('result-1').style.display='block';
                  document.getElementById('TextResult').innerHTML="GIG 1001 | Tamadun Islam dan Tamadun Asia";
                  document.getElementById('label').style.display='block';
                  btn_value="GIG 1001 | Tamadun Islam dan Tamadun Asia";
                  localStorage.setItem("value", btn_value);
                  document.getElementById("Explain").innerHTML="<h1>You can take this subject next semester</h1>";
                  
                }else if(Drop){
                  Q_area.innerHTML='';
                  HideAnswer();
                    document.getElementById("Explain").innerHTML="<h1>I'm Sorry, before taking any of this subject you should drop any 2 credit subject";
                  }
            }else if(FAL&&TITAS){
                HideAnswer();
                answers=all_questions[6].choices;
                question=all_questions[6].question_string;
                Q_area.innerHTML='';
                Q_area.innerHTML=question;
                for(var i =0;i<answers.length;i+=1){
                  RadSel[i].style.display='block';
                  RadText[i].innerHTML=all_questions[6].choices[i];
                }
                CheckValueForRadio();
                if(Take){
                  HideAnswer();
                  Q_area.innerHTML='';
                  Q_area.innerHTML="We recommend you to take the subject below: ";
                  document.getElementById('result-1').style.display='block';
                  document.getElementById('TextResult').innerHTML="GIG 1002 | Hubungan Etnik(HE)";
                  btn_value="GIG 1002 | Hubungan Etnik(HE)";
                  localStorage.setItem("value", btn_value);
                  document.getElementById('label').style.display='block';
                  document.getElementById("Explain").innerHTML="<h1>You can take this subject next semester</h1>";
                }else if(Drop){
                  Q_area.innerHTML='';
                  HideAnswer();
                    document.getElementById("Explain").innerHTML="<h1>I'm Sorry, before taking any of this subject you should drop any 2 credit subject";
                  }
            }else if(FAL&&None){
                  HideAnswer();
                  answers=all_questions[6].choices;
                  question=all_questions[6].question_string;
                  Q_area.innerHTML='';
                  Q_area.innerHTML=question;
                  for(var i =0;i<answers.length;i+=1){
                    RadSel[i].style.display='block';
                    RadText[i].innerHTML=all_questions[6].choices[i];
                  }
                  CheckValueForRadio();
                  if(Take){
                    HideAnswer();
                    Q_area.innerHTML='';
                    Q_area.innerHTML="We recommend you to take the subject below: ";
                    document.getElementById('result-1').style.display='block';
                    document.getElementById('TextResult').innerHTML="GIG 1001 | Tamadun Islam dan Tamadun Asia";
                    btn_value="GIG 1001 | Tamadun Islam dan Tamadun Asia";
                    localStorage.setItem("value", btn_value);
                    document.getElementById('label').style.display='block';
                  }else if (Drop){
                    Q_area.innerHTML='';
                    HideAnswer();
                    document.getElementById("Explain").innerHTML="<h1>I'm Sorry, before taking any of this subject you should drop any 2 credit subject";
                  }
                
            }
            }
              
        }else if(FSL&&HEsubject){
          answers=all_questions[6].choices;
            question=all_questions[6].question_string;
            Q_area.innerHTML='';
            Q_area.innerHTML=question;
            for(var i =0;i<answers.length;i+=1){
              RadSel[i].style.display='block';
              RadText[i].innerHTML=all_questions[6].choices[i];
            }
            CheckValueForRadio();
            if(Take){
              HideAnswer();
              Q_area.innerHTML='';
              Q_area.innerHTML="We recommend you to take the subject below: ";
              document.getElementById('result-1').style.display='block';
              document.getElementById('TextResult').innerHTML="GIG 1002 | Hubungan Etnik(HE)";
              btn_value="GIG 1002 | Hubungan Etnik(HE)";
                localStorage.setItem("value", btn_value);
              document.getElementById('label').style.display='block';
              
            }else if(Drop){
              Q_area.innerHTML='';
              HideAnswer();
                document.getElementById("Explain").innerHTML="<h1>I'm Sorry, before taking any of this subject you should drop any 2 credit subject";
              }
        }else if(FSL&&TITASsubject){
            answers=all_questions[6].choices;
            question=all_questions[6].question_string;
            Q_area.innerHTML='';
            Q_area.innerHTML=question;
            for(var i =0;i<answers.length;i+=1){
              RadSel[i].style.display='block';
              RadText[i].innerHTML=all_questions[6].choices[i];
            }
            CheckValueForRadio();
            if(Take){
              HideAnswer();
              Q_area.innerHTML='';
              Q_area.innerHTML="We recommend you to take the subject below: ";
              document.getElementById('result-1').style.display='block';
              document.getElementById('TextResult').innerHTML="GIG 1001 | Tamadun Islam dan Tamadun Asia";
              document.getElementById('label').style.display='block';
              btn_value="GIG 1001 | Tamadun Islam dan Tamadun Asia";
              localStorage.setItem("value", btn_value);
              document.getElementById("Explain").innerHTML="<h1>You can take this subject next semester</h1>";
              
            }else if(Drop){
              Q_area.innerHTML='';
              HideAnswer();
              document.getElementById("Explain").innerHTML="<h1>I'm Sorry, before taking any of this subject you should drop any 2 credit subject";
              }
        }else if(FSL){
          HideAnswer();
          if(JMsubject||ILsubject||STEMsubject||APK){
            Q_area.innerHTML='';
            HideAnswer();
            document.getElementById("Explain").innerHTML="<h1>I'm Sorry, this subject can be taken starting your Second year";
          }else{
            question=all_questions[4].question_string;
              Q_area.innerHTML='';
              Q_area.innerHTML=question;
              answers=all_questions[4].choices;
              for(var i =0;i<answers.length;i+=1){
                RadSel[i].style.display='block';
                RadText[i].innerHTML=all_questions[4].choices[i];
              }       CheckValueForRadio();
            console.log("HE: "+HE)
            if(FSL&TITAS){
              answers=all_questions[6].choices;
              question=all_questions[6].question_string;
              Q_area.innerHTML='';
              Q_area.innerHTML=question;
              for(var i =0;i<answers.length;i+=1){
                RadSel[i].style.display='block';
                RadText[i].innerHTML=all_questions[6].choices[i];
              }
              CheckValueForRadio();
              
              if(Take){
                HideAnswer();
                Q_area.innerHTML='';
                Q_area.innerHTML="We recommend you to take the subject below: ";
                document.getElementById('result-1').style.display='block';
                document.getElementById('TextResult').innerHTML="GIG 1001 | Tamadun Islam dan Tamadun Asia";
                document.getElementById('label').style.display='block';
                btn_value="GIG 1001 | Tamadun Islam dan Tamadun Asia";
                  localStorage.setItem("value", btn_value);
                
              }else if(Drop){
                Q_area.innerHTML='';
                HideAnswer();
                  document.getElementById("Explain").innerHTML="<h1>I'm Sorry, before taking any of this subject you should drop any 2 credit subject";
                }
            }else if(FSL&&HE){
              HideAnswer();
              answers=all_questions[6].choices;
              question=all_questions[6].question_string;
              Q_area.innerHTML='';
              Q_area.innerHTML=question;
              for(var i =0;i<answers.length;i+=1){
                RadSel[i].style.display='block';
                RadText[i].innerHTML=all_questions[6].choices[i];
              }
              CheckValueForRadio();
              if(Take){
                HideAnswer();
                Q_area.innerHTML='';
                Q_area.innerHTML="We recommend you to take the subject below: ";
                document.getElementById('result-1').style.display='block';
                document.getElementById('TextResult').innerHTML="GIG 1002 | Hubungan Etnik(HE)";
                document.getElementById('label').style.display='block';
                btn_value="GIG 1002 | Hubungan Etnik(HE)";
                  localStorage.setItem("value", btn_value);
              }else if(Drop){
                Q_area.innerHTML='';
                HideAnswer();
                  document.getElementById("Explain").innerHTML="<h1>I'm Sorry, before taking any of this subject you should drop any 2 credit subject";
                }
            }else if(FSL&&None){
                  HideAnswer();
                  answers=all_questions[6].choices;
                  question=all_questions[6].question_string;
                  Q_area.innerHTML='';
                  Q_area.innerHTML=question;
                  for(var i =0;i<answers.length;i+=1){
                    RadSel[i].style.display='block';
                    RadText[i].innerHTML=all_questions[6].choices[i];
                  }
                  CheckValueForRadio();
                  if(Take){
                    HideAnswer();
                    Q_area.innerHTML='';
                    Q_area.innerHTML="We recommend you to take the subject below: ";
                    document.getElementById('result-1').style.display='block';
                    document.getElementById('TextResult').innerHTML="GIG 1002 | Hubungan Etnik(HE)";
                    document.getElementById('label').style.display='block';
                    btn_value="GIG 1002 | Hubungan Etnik(HE)";
                  localStorage.setItem("value", btn_value);
                  }else if (Drop){
                    Q_area.innerHTML='';
                    HideAnswer();
                    document.getElementById("Explain").innerHTML="<h1>I'm Sorry, before taking any of this subject you should drop any 2 credit subject";
                  }
              
            }
          }
        }}else if(SSL||SAL){
          HideAnswer();
          if(SSL&&JMsubject){
            HideAnswer();
            answers=all_questions[6].choices;
            question=all_questions[6].question_string;
            Q_area.innerHTML='';
            Q_area.innerHTML=question;
            for(var i =0;i<answers.length;i+=1){
              RadSel[i].style.display='block';
              RadText[i].innerHTML=all_questions[6].choices[i];
            }
            CheckValueForRadio();
            if(Take){
              HideAnswer();
              Q_area.innerHTML='';
              Q_area.innerHTML="We recommend you to take the subject below: ";
              document.getElementById('result-1').style.display='block';
              document.getElementById('TextResult').innerHTML="GIG 1005 | Jalinan Masyarakat(JM)";
              document.getElementById('label').style.display='block';
              btn_value="GIG 1005 | Jalinan Masyarakat(JM)";
              localStorage.setItem("value", btn_value);
            }else if(Drop){
              Q_area.innerHTML='';
              HideAnswer();
              document.getElementById("Explain").innerHTML="<h1>I'm Sorry, before taking any of this subject you should drop any 2 credit subject";
              }          
          }else if(SSL&&APKsubject){
            HideAnswer();
            answers=all_questions[6].choices;
            question=all_questions[6].question_string;
            Q_area.innerHTML='';
            Q_area.innerHTML=question;
            for(var i =0;i<answers.length;i+=1){
              RadSel[i].style.display='block';
              RadText[i].innerHTML=all_questions[6].choices[i];
            }
            CheckValueForRadio();
            if(Take){
              HideAnswer();
              Q_area.innerHTML='';
              Q_area.innerHTML="We recommend you to take the subject below: ";
              document.getElementById('result-1').style.display='block';
              document.getElementById('TextResult').innerHTML="GIG 1003 | Asas Pembudayaan dan Keusahawan";
              document.getElementById('label').style.display='block';
              btn_value="GIG 1003 | Asas Pembudayaan dan Keusahawan";
              localStorage.setItem("value", btn_value);
            }else if(Drop){
              Q_area.innerHTML='';
              HideAnswer();
              document.getElementById("Explain").innerHTML="<h1>I'm Sorry, before taking any of this subject you should drop any 2 credit subject";
              }          
          }else if(SSL&&ILsubject){
            HideAnswer();
            answers=all_questions[6].choices;
            question=all_questions[6].question_string;
            Q_area.innerHTML='';
            Q_area.innerHTML=question;
            for(var i =0;i<answers.length;i+=1){
              RadSel[i].style.display='block';
              RadText[i].innerHTML=all_questions[6].choices[i];
            }
            CheckValueForRadio();
            if(Take){
              HideAnswer();
              Q_area.innerHTML='';
              Q_area.innerHTML="We recommend you to take the subject below: ";
              document.getElementById('result-1').style.display='block';
              document.getElementById('TextResult').innerHTML="GIG 1004 | Literasi Maklumat";
              document.getElementById('label').style.display='block';
              btn_value="GIG 1004 | Literasi Maklumat";
              localStorage.setItem("value", btn_value);
            }else if(Drop){
              Q_area.innerHTML='';
              HideAnswer();
              document.getElementById("Explain").innerHTML="<h1>I'm Sorry, before taking any of this subject you should drop any 2 credit subject";
              }
          }else if(SSL&&IPHsubject){
            HideAnswer();
            answers=all_questions[6].choices;
            question=all_questions[6].question_string;
            Q_area.innerHTML='';
            Q_area.innerHTML=question;
            for(var i =0;i<answers.length;i+=1){
              RadSel[i].style.display='block';
              RadText[i].innerHTML=all_questions[6].choices[i];
            }
            CheckValueForRadio();
            if(Take){
              HideAnswer();
              Q_area.innerHTML='';
              Q_area.innerHTML="We recommend you to take the subject below: ";
              document.getElementById('result-1').style.display='block';
              document.getElementById('TextResult').innerHTML="GIX 1003 | Pengenalan Kepada Keamanan dan Kemanusiaan";
              document.getElementById('label').style.display='block';
              btn_value="GIX 1003 | Pengenalan Kepada Keamanan dan Kemanusiaan";
              localStorage.setItem("value", btn_value);
            }else if(Drop){
              Q_area.innerHTML='';
              HideAnswer();
              document.getElementById("Explain").innerHTML="<h1>I'm Sorry, before taking any of this subject you should drop any 2 credit subject";
              }
          }else if(SSL&&STEMsubject){
            HideAnswer();
            answers=all_questions[6].choices;
            question=all_questions[6].question_string;
            Q_area.innerHTML='';
            Q_area.innerHTML=question;
            for(var i =0;i<answers.length;i+=1){
              RadSel[i].style.display='block';
              RadText[i].innerHTML=all_questions[6].choices[i];
            }
            CheckValueForRadio();
            if(Take){
              HideAnswer();
              Q_area.innerHTML='';
              Q_area.innerHTML="We recommend you to take the subject below: ";
              document.getElementById('result-1').style.display='block';
              document.getElementById('TextResult').innerHTML="GIX 1004 | Apresiasi STEM";
              document.getElementById('label').style.display='block';
              btn_value="GIX 1004 | Apresiasi STEM";
              localStorage.setItem("value", btn_value);
            }else if(Drop){
              Q_area.innerHTML='';
              HideAnswer();
              document.getElementById("Explain").innerHTML="<h1>I'm Sorry, before taking any of this subject you should drop any 2 credit subject";
              }
          }else if(TITASsubject||HEsubject){
            answers=all_questions[6].choices;
            question=all_questions[6].question_string;
            Q_area.innerHTML='';
            Q_area.innerHTML=question;
            for(var i =0;i<answers.length;i+=1){
              RadSel[i].style.display='block';
              RadText[i].innerHTML=all_questions[6].choices[i];
            }
            CheckValueForRadio();
            if(Take&&HEsubject){
              HideAnswer();
              Q_area.innerHTML='';
              Q_area.innerHTML="We recommend you to take the subject below: ";
              document.getElementById('result-1').style.display='block';
              document.getElementById('TextResult').innerHTML="GIG 1002 | Hubungan Etnik(HE)";
              document.getElementById('label').style.display='block';
              btn_value="GIG 1002 | Hubungan Etnik(HE)";
              localStorage.setItem("value", btn_value);
              document.getElementById("Explain").innerHTML="<h1>You can only pick a group on FRIDAY ONLY</h1>";

            }else if(Take&&TITASsubject){
              HideAnswer();
              Q_area.innerHTML='';
              Q_area.innerHTML="We recommend you to take the subject below: ";
              document.getElementById('result-1').style.display='block';
              document.getElementById('TextResult').innerHTML="GIG 1002 | Hubungan Etnik(HE)";
              document.getElementById('label').style.display='block';
              btn_value="GIG 1002 | Hubungan Etnik(HE)";
              localStorage.setItem("value", btn_value);
              document.getElementById("Explain").innerHTML="<h1>You can only pick a group on FRIDAY ONLY</h1>";
            }else if(Drop){
              Q_area.innerHTML='';
              HideAnswer();
                document.getElementById("Explain").innerHTML="<h1>I'm Sorry, before taking any of this subject you should drop any 2 credit subject";
              }
          }else if(SSL){
            current=5;
            var question=all_questions[current].question_string;
            Q_area.innerHTML='';
            Q_area.innerHTML=question;
            answers=all_questions[current].choices;
            for(var i =0;i<answers.length;i+=1){
              CheckBox[i].style.display='block';
              Option[i].innerHTML=all_questions[current].choices[i];
            }       CheckValueForCheckBox();
                  
                  if(SE&&IL&&APK&&KoK){
                    Q_area.innerHTML='';
                    HideAnswer();
                    Q_area.innerHTML=all_questions[14].question_string;
                    answers=all_questions[14].choices;
                    for(var i =0;i<answers.length;i+=1){
                      RadSel[i].style.display='block';
                      RadText[i].innerHTML=all_questions[14].choices[i];
                    }
                    CheckValueForRadio();
                    
                        if(HE){
                                HideAnswer();
                                answers=all_questions[6].choices;
                                question=all_questions[6].question_string;
                                Q_area.innerHTML='';
                                Q_area.innerHTML=question;
                                for(var i =0;i<answers.length;i+=1){
                                  RadSel[i].style.display='block';
                                  RadText[i].innerHTML=all_questions[6].choices[i];
                                }
                                CheckValueForRadio();
                                if(Take){
                                  HideAnswer();
                                  Q_area.innerHTML='';
                                  Q_area.innerHTML="We recommend you to take the subject below: ";
                                  document.getElementById('result-1').style.display='block';
                                  document.getElementById('TextResult').innerHTML="GIG 1001 | Tamadun Islam dan Tamadun Asia";
                                  document.getElementById('label').style.display='block';
                                  btn_value="GIG 1001 | Tamadun Islam dan Tamadun Asia";
                                  localStorage.setItem("value", btn_value);
                                }else if(Drop){
                                  Q_area.innerHTML='';
                                  HideAnswer();
                                  document.getElementById("Explain").innerHTML="<h1>I'm Sorry, before taking any of this subject you should drop any 2 credit subject";
                                  }
                          
                        }else if(TITAS){
                          HideAnswer();
                          answers=all_questions[6].choices;
                          question=all_questions[6].question_string;
                          Q_area.innerHTML='';
                          Q_area.innerHTML=question;
                          for(var i =0;i<answers.length;i+=1){
                            RadSel[i].style.display='block';
                            RadText[i].innerHTML=all_questions[6].choices[i];
                          }
                          CheckValueForRadio();
                          if(Take){
                            HideAnswer();
                            Q_area.innerHTML='';
                            Q_area.innerHTML="We recommend you to take the subject below: ";
                            document.getElementById('result-1').style.display='block';
                            document.getElementById('TextResult').innerHTML="GIG 1002 | Hubungan Etnik(HE)";
                            document.getElementById('label').style.display='block';
                            btn_value="GIG 1002 | Hubungan Etnik(HE)";
                            localStorage.setItem("value", btn_value);
                            }else if(Drop){
                              Q_area.innerHTML='';
                              HideAnswer();
                              document.getElementById("Explain").innerHTML="<h1>I'm Sorry, before taking any of this subject you should drop any 2 credit subject";
                              }
                          
                        }else if(Both){
                          HideAnswer();
                          Q_area.innerHTML='';                   
                          Q_area.innerHTML=all_questions[16].question_string;
                          answers=all_questions[16].choices;
                          for(var i =0;i<answers.length;i+=1){
                          RadSel[i].style.display='block';
                          RadText[i].innerHTML=all_questions[16].choices[i];
                            }
                          CheckValueForRadio();
                              if(STEM){
                                HideAnswer();
                                answers=all_questions[6].choices;
                                question=all_questions[6].question_string;
                                Q_area.innerHTML='';
                                Q_area.innerHTML=question;
                                for(var i =0;i<answers.length;i+=1){
                                  RadSel[i].style.display='block';
                                  RadText[i].innerHTML=all_questions[6].choices[i];
                                }
                                CheckValueForRadio();
                                if(Take){
                                  HideAnswer();
                                    Q_area.innerHTML='';
                                    Q_area.innerHTML="We recommend you to take the subject below: ";
                                    document.getElementById('result-1').style.display='block';
                                    document.getElementById('TextResult').innerHTML="GIX 1003 | Introduction to Peace and Humanitarian";
                                    document.getElementById('label').style.display='block';
                                    btn_value="GIX 1003 | Introduction to Peace and Humanitarian";
                                    localStorage.setItem("value", btn_value);
                                }else if(Drop){
                                  Q_area.innerHTML='';
                                  HideAnswer();
                                    document.getElementById("Explain").innerHTML="<h1>I'm Sorry, before taking any of this subject you should drop any 2 credit subject";
                                  }
                              }else if(IPH){
                                HideAnswer();
                                answers=all_questions[6].choices;
                                question=all_questions[6].question_string;
                                Q_area.innerHTML='';
                                Q_area.innerHTML=question;
                                for(var i =0;i<answers.length;i+=1){
                                  RadSel[i].style.display='block';
                                  RadText[i].innerHTML=all_questions[6].choices[i];
                                }
                                CheckValueForRadio();
                                if(Take){
                                  HideAnswer();
                                  Q_area.innerHTML='';
                                  Q_area.innerHTML="We recommend you to take the subject below: ";
                                  document.getElementById('result-1').style.display='block';
                                  document.getElementById('TextResult').innerHTML="GIX 1004 | STEM Appreciation";
                                  document.getElementById('label').style.display='block';
                                  btn_value="GIX 1004 | STEM Appreciation";
                                  localStorage.setItem("value", btn_value);
                                }else if(Drop){
                                  Q_area.innerHTML='';
                                  HideAnswer();
                                    document.getElementById("Explain").innerHTML="<h1>I'm Sorry, before taking any of this subject you should drop any 2 credit subject";
                                  }
                                
                              }else if(None){
                                HideAnswer();
                                answers=all_questions[6].choices;
                                question=all_questions[6].question_string;
                                Q_area.innerHTML='';
                                Q_area.innerHTML=question;
                                for(var i =0;i<answers.length;i+=1){
                                  RadSel[i].style.display='block';
                                  RadText[i].innerHTML=all_questions[6].choices[i];
                                }
                                CheckValueForRadio();
                                if(Take){
                                  HideAnswer();
                                  Q_area.innerHTML='';
                                  Q_area.innerHTML="We recommend you to take the subject below: ";
                                  document.getElementById('result-1').style.display='block';
                                  document.getElementById('TextResult').innerHTML="GIX 1004 | STEM Appreciation";
                                  document.getElementById('label').style.display='block';
                                  document.getElementById('result-2').style.display='block';
                                  document.getElementById('TextResult2').innerHTML="GIX 1003 | Introduction to Peace and Humanitarian";
                                  btn_value="GIX 1004 | STEM Appreciation";
                                  btn_value2="GIX 1003 | Introduction to Peace and Humanitarian"
                                  localStorage.setItem("value", btn_value);
                                  localStorage.setItem("value2",btn_value2);
  
                                }else if(Drop){
                                  Q_area.innerHTML='';
                                  HideAnswer();
                                    document.getElementById("Explain").innerHTML="<h1>I'm Sorry, before taking any of this subject you should drop any 2 credit subject";
                                }
  
                              }
                        }
                    }else if(SE&&IL&&APK){
                      current=7
                      Q_area.innerHTML='';
                      HideAnswer();
                      Q_area.innerHTML=all_questions[current].question_string;
                      answers=all_questions[current].choices;
                      for(var i =0;i<answers.length;i+=1){
                        RadSel[i].style.display='block';
                        RadText[i].innerHTML=all_questions[current].choices[i];
                      }
                      CheckValueForRadio();
                      
                      if(Sport){//Look this up
                        current=8;
                        Q_area.innerHTML='';
                        HideAnswer();
                        Q_area.innerHTML=all_questions[current].question_string;
                        answers=all_questions[current].choices;
                        for(var i =0;i<answers.length;i+=1){
                          RadSel[i].style.display='block';
                          RadText[i].innerHTML=all_questions[current].choices[i];
                        }
                        CheckValueForRadio();
                          if(e_S){
                            answers=all_questions[6].choices;
                            question=all_questions[6].question_string;
                            Q_area.innerHTML='';
                            Q_area.innerHTML=question;
                            for(var i =0;i<answers.length;i+=1){
                              RadSel[i].style.display='block';
                              RadText[i].innerHTML=all_questions[6].choices[i];
                            }
                            CheckValueForRadio();
                            if(Take){
                              HideAnswer();
                              Q_area.innerHTML='';
                              Q_area.innerHTML="We recommend you to take the subject below: ";
                              document.getElementById('result-1').style.display='block';
                              document.getElementById('TextResult').innerHTML="GKK 1001 | Talent Development";
                              document.getElementById('label').style.display='block';
                              btn_value="GKK 1001 | Talent Development";
                              localStorage.setItem("value", btn_value);
                              Interest="esport";
                              localStorage.setItem("Intersert",Interest);
                              
    
                              
                            }else if(Drop){
                              Q_area.innerHTML='';
                              HideAnswer();
                                document.getElementById("Explain").innerHTML="<h1>I'm Sorry, before taking any of this subject you should drop any 2 credit subject";
                              }
                          }else if(Outdoor){
                            HideAnswer();
                            answers=all_questions[11].choices;
                            question=all_questions[11].question_string;
                            Q_area.innerHTML='';
                            Q_area.innerHTML=question;
                            for(var i =0;i<answers.length;i+=1){
                              RadSel[i].style.display='block';
                              RadText[i].innerHTML=all_questions[11].choices[i];
                            }
                            CheckValueForRadio(); 
                            if(Fb||rug||Fbee||Vball){
                              answers=all_questions[6].choices;
                              question=all_questions[6].question_string;
                              Q_area.innerHTML='';
                              Q_area.innerHTML=question;
                              for(var i =0;i<answers.length;i+=1){
                                RadSel[i].style.display='block';
                                RadText[i].innerHTML=all_questions[6].choices[i];
                              }
                              CheckValueForRadio();
                              if(Take&&Fb){
                                HideAnswer();
                                Q_area.innerHTML='';
                                Q_area.innerHTML="We recommend you to take the subject below: ";
                                document.getElementById('result-1').style.display='block';
                                document.getElementById('TextResult').innerHTML="GKK 1001 | Talent Development";
                                document.getElementById('label').style.display='block';
                                btn_value="GKK 1001 | Talent Development";
                                localStorage.setItem("value", btn_value);
                                Interest="football";
                              localStorage.setItem("Intersert",Interest);
                                
                              }else if(Take&&rug){
                                HideAnswer();
                                Q_area.innerHTML='';
                                Q_area.innerHTML="We recommend you to take the subject below: ";
                                document.getElementById('result-1').style.display='block';
                                document.getElementById('TextResult').innerHTML="GKK 1001 | Talent Development";
                                document.getElementById('label').style.display='block';
                                btn_value="GKK 1001 | Talent Development";
                                localStorage.setItem("value", btn_value);
                                Interest="rugby";
                              localStorage.setItem("Intersert",Interest);
                              }else if(Take&&Fbee){
                                HideAnswer();
                                Q_area.innerHTML='';
                                Q_area.innerHTML="We recommend you to take the subject below: ";
                                document.getElementById('result-1').style.display='block';
                                document.getElementById('TextResult').innerHTML="GKK 1001 | Talent Development";
                                document.getElementById('label').style.display='block';
                                btn_value="GKK 1001 | Talent Development";
                              localStorage.setItem("value", btn_value);
                              Interest="fbee";
                              localStorage.setItem("Intersert",Interest);
                              }else if(Take&&Vball){
                                HideAnswer();
                                Q_area.innerHTML='';
                                Q_area.innerHTML="We recommend you to take the subject below: ";
                                document.getElementById('result-1').style.display='block';
                                document.getElementById('TextResult').innerHTML="GKK 1001 | Talent Development";
                                document.getElementById('label').style.display='block';
                                btn_value="GKK 1001 | Talent Development";
                              localStorage.setItem("value", btn_value);
                              Interest="volleyball";
                              localStorage.setItem("Intersert",Interest);
                              }else if(Drop){
                                Q_area.innerHTML='';
                                HideAnswer();
                                  document.getElementById("Explain").innerHTML="<h1>I'm Sorry, before taking any of this subject you should drop any 2 credit subject";
                                }
  
                            }
                          }else if(Indoor){
                            HideAnswer();
                            answers=all_questions[12].choices;
                            question=all_questions[12].question_string;
                            Q_area.innerHTML='';
                            Q_area.innerHTML=question;
                            for(var i =0;i<answers.length;i+=1){
                              RadSel[i].style.display='block';
                              RadText[i].innerHTML=all_questions[12].choices[i];
                            }
                            CheckValueForRadio();
                            if(Bad_m||MA||Bball||Takraw){
                              answers=all_questions[6].choices;
                              question=all_questions[6].question_string;
                              Q_area.innerHTML='';
                              Q_area.innerHTML=question;
                              for(var i =0;i<answers.length;i+=1){
                                RadSel[i].style.display='block';
                                RadText[i].innerHTML=all_questions[6].choices[i];
                              }
                              CheckValueForRadio();
                              if(Take&&Bad_m){
                                HideAnswer();
                                Q_area.innerHTML='';
                                Q_area.innerHTML="We recommend you to take the subject below: ";
                                document.getElementById('result-1').style.display='block';
                                document.getElementById('TextResult').innerHTML="GKK 1001 | Talent Development";
                                document.getElementById('label').style.display='block';
                                btn_value="GKK 1001 | Talent Development";
                              localStorage.setItem("value", btn_value);
                              Interest="badminton";
                              localStorage.setItem("Intersert",Interest);
      
                                
                              }else if(Take&&MA){
                                HideAnswer();
                                Q_area.innerHTML='';
                                Q_area.innerHTML="We recommend you to take the subject below: ";
                                document.getElementById('result-1').style.display='block';
                                document.getElementById('TextResult').innerHTML="GKK 1001 | Talent Development";
                                document.getElementById('label').style.display='block';
                                btn_value="GKK 1001 | Talent Development";
                              localStorage.setItem("value", btn_value);
                              Interest="martialarts";
                              localStorage.setItem("Intersert",Interest);
                              }else if(Take&&Bball){
                                HideAnswer();
                                Q_area.innerHTML='';
                                Q_area.innerHTML="We recommend you to take the subject below: ";
                                document.getElementById('result-1').style.display='block';
                                document.getElementById('TextResult').innerHTML="GKK 1001 | Talent Development";
                                document.getElementById('label').style.display='block';
                                btn_value="GKK 1001 | Talent Development";
                                localStorage.setItem("value", btn_value);
                                Interest="basketball";
                              localStorage.setItem("Intersert",Interest);
                              }else if(Take&&Takraw){
                                HideAnswer();
                                Q_area.innerHTML='';
                                Q_area.innerHTML="We recommend you to take the subject below: ";
                                document.getElementById('result-1').style.display='block';
                                document.getElementById('TextResult').innerHTML="GKK 1001 | Talent Development";
                                document.getElementById('label').style.display='block';
                                btn_value="GKK 1001 | Talent Development";
                                localStorage.setItem("value", btn_value);
                                Interest="takraw";
                                localStorage.setItem("Intersert",Interest);
                              }else if(Drop){
                                Q_area.innerHTML='';
                                HideAnswer();
                                  document.getElementById("Explain").innerHTML="<h1>I'm Sorry, before taking any of this subject you should drop any 2 credit subject";
                                }                              
  
                            }
                          }
                        
                      }else if(Arts1){
                        HideAnswer();
                        answers=all_questions[9].choices;
                        question=all_questions[9].question_string;
                        Q_area.innerHTML='';
                        Q_area.innerHTML=question;
                        for(var i =0;i<answers.length;i+=1){
                          RadSel[i].style.display='block';
                          RadText[i].innerHTML=all_questions[9].choices[i];
                        }
                        CheckValueForRadio();  
                        if(Music||Draw||Dance){
                          answers=all_questions[6].choices;
                              question=all_questions[6].question_string;
                              Q_area.innerHTML='';
                              Q_area.innerHTML=question;
                              for(var i =0;i<answers.length;i+=1){
                                RadSel[i].style.display='block';
                                RadText[i].innerHTML=all_questions[6].choices[i];
                              }
                              CheckValueForRadio();
                              if(Take&&Music){
                                HideAnswer();
                                Q_area.innerHTML='';
                                Q_area.innerHTML="We recommend you to take the subject below: ";
                                document.getElementById('result-1').style.display='block';
                                document.getElementById('TextResult').innerHTML="GKK 1001 | Talent Development";
                                document.getElementById('label').style.display='block';
                                btn_value="GKK 1001 | Talent Development";
                                localStorage.setItem("value", btn_value);
                                
                                Interest="music";
                                localStorage.setItem("Intersert",Interest);
      
                                
                              }else if(Take&&Dance){
                                HideAnswer();
                                Q_area.innerHTML='';
                                Q_area.innerHTML="We recommend you to take the subject below: ";
                                document.getElementById('result-1').style.display='block';
                                document.getElementById('TextResult').innerHTML="GKK 1001 | Talent Development";
                                document.getElementById('label').style.display='block';
                                btn_value="GKK 1001 | Talent Development";
                                localStorage.setItem("value", btn_value);
                                Interest="dance";
                                localStorage.setItem("Intersert",Interest);
                              }else if(Take&&Draw){
                                HideAnswer();
                                Q_area.innerHTML='';
                                Q_area.innerHTML="We recommend you to take the subject below: ";
                                document.getElementById('result-1').style.display='block';
                                document.getElementById('TextResult').innerHTML="GKK 1001 | Talent Development";
                                document.getElementById('label').style.display='block';
                                btn_value="GKK 1001 | Talent Development";
                                localStorage.setItem("value", btn_value);
                                Interest="dance";
                                localStorage.setItem("Intersert",Interest);
                              }else if(Drop){
                                Q_area.innerHTML='';
                                HideAnswer();
                                  document.getElementById("Explain").innerHTML="<h1>I'm Sorry, before taking any of this subject you should drop any 2 credit subject";
                                }
  
                        }
                      }else if(Lship){
                        HideAnswer();
                        answers=all_questions[10].choices;
                        question=all_questions[10].question_string;
                        Q_area.innerHTML='';
                        Q_area.innerHTML=question;
                        for(var i =0;i<answers.length;i+=1){
                          RadSel[i].style.display='block';
                          RadText[i].innerHTML=all_questions[10].choices[i];
                        }
                        CheckValueForRadio();                       
  
                        if(WPT){
                          HideAnswer();
                          answers=all_questions[6].choices;
                          question=all_questions[6].question_string;
                          Q_area.innerHTML='';
                          Q_area.innerHTML=question;
                          for(var i =0;i<answers.length;i+=1){
                            RadSel[i].style.display='block';
                            RadText[i].innerHTML=all_questions[6].choices[i];
                          }
                          CheckValueForRadio();
                          if(Take){
                            HideAnswer();
                            Q_area.innerHTML='';
                            Q_area.innerHTML="We recommend you to take the subject below: ";
                            document.getElementById('result-1').style.display='block';
                            document.getElementById('TextResult').innerHTML="GKA 1001 | Attach@Industry";
                            document.getElementById('label').style.display='block';
                            btn_value="GKK 1001 | Talent Development";
                                localStorage.setItem("value", btn_value);
                                Interest="wpt";
                                localStorage.setItem("Intersert",Interest);
                          }else if(Drop){
                            Q_area.innerHTML='';
                            HideAnswer();
                              document.getElementById("Explain").innerHTML="<h1>I'm Sorry, before taking any of this subject you should drop any 2 credit subject";
                            }
  
                        }else if(Freelance){
                          HideAnswer();
                          answers=all_questions[6].choices;
                          question=all_questions[6].question_string;
                          Q_area.innerHTML='';
                          Q_area.innerHTML=question;
                          for(var i =0;i<answers.length;i+=1){
                            RadSel[i].style.display='block';
                            RadText[i].innerHTML=all_questions[6].choices[i];
                          }
                          CheckValueForRadio();
                          if(Take){
                            HideAnswer();
                            Q_area.innerHTML='';
                            Q_area.innerHTML="We recommend you to take the subject below: ";
                            document.getElementById('result-1').style.display='block';
                            document.getElementById('TextResult').innerHTML="GKN 1002 | Independent Research";
                            document.getElementById('label').style.display='block';
                            document.getElementById('result-3').style.display='block';
                            document.getElementById('TextResult3').innerHTML="GKU 1001 | Student Enterpreneurship";
                            btn_value="GKK 1001 | Talent Development";
                            localStorage.setItem("value", btn_value);
                            btn_value2="GKU 1001 | Student Enterpreneurship";
                            localStorage.setItem("value2",btn_value2);


                          }else if(Drop){
                            Q_area.innerHTML='';
                            HideAnswer();
                              document.getElementById("Explain").innerHTML="<h1>I'm Sorry, before taking any of this subject you should drop any 2 credit subject";
                            }                    
                        }
  
                      }
                    }else if(SE&&IL){
                      
                      HideAnswer();
                      answers=all_questions[6].choices;
                      question=all_questions[6].question_string;
                      Q_area.innerHTML='';
                      Q_area.innerHTML=question;
                      for(var i =0;i<answers.length;i+=1){
                        RadSel[i].style.display='block';
                        RadText[i].innerHTML=all_questions[6].choices[i];
                      }
                      CheckValueForRadio();
                      if(Take){
                        HideAnswer();
                        Q_area.innerHTML='';
                        Q_area.innerHTML="We recommend you to take the subject below: ";
                        document.getElementById('result-1').style.display='block';
                        document.getElementById('TextResult').innerHTML="GIG 1003 | Asas Pembudayaan Keusahawan(APK)";
                        document.getElementById('label').style.display='block';
                        btn_value="GIG 1003 | Asas Pembudayaan Keusahawan(APK)";
                          localStorage.setItem("value", btn_value);
                      }else if (Drop){
                        Q_area.innerHTML='';
                        HideAnswer();
                        document.getElementById("Explain").innerHTML="<h1>I'm Sorry, before taking any of this subject you should drop any 2 credit subject";
                      }
                      
  
            
                    }else if(SE&&APK){
                          HideAnswer();
                          answers=all_questions[6].choices;
                          question=all_questions[6].question_string;
                          Q_area.innerHTML='';
                          Q_area.innerHTML=question;
                          for(var i =0;i<answers.length;i+=1){
                            RadSel[i].style.display='block';
                            RadText[i].innerHTML=all_questions[6].choices[i];
                          }
                          CheckValueForRadio();
                          if(Take){
                            HideAnswer();
                            Q_area.innerHTML='';
                            Q_area.innerHTML="We recommend you to take the subject below: ";
                            document.getElementById('result-1').style.display='block';
                            document.getElementById('TextResult').innerHTML="GIG 1004 | Literasi Maklumat";
                            document.getElementById('label').style.display='block';
                            btn_value="GIG 1004 | Literasi Maklumat";
                            localStorage.setItem("value", btn_value);
                          }else if (Drop){
                            Q_area.innerHTML='';
                            HideAnswer();
                            document.getElementById("Explain").innerHTML="<h1>I'm Sorry, before taking any of this subject you should drop any 2 credit subject";
                          }
                          
                    }else if(IL&&APK){
                          HideAnswer();
                          answers=all_questions[6].choices;
                          question=all_questions[6].question_string;
                          Q_area.innerHTML='';
                          Q_area.innerHTML=question;
                          for(var i =0;i<answers.length;i+=1){
                            RadSel[i].style.display='block';
                            RadText[i].innerHTML=all_questions[6].choices[i];
                          }
                          CheckValueForRadio();
                          if(Take){
                            HideAnswer();
                            Q_area.innerHTML='';
                            Q_area.innerHTML="We recommend you to take the subject below: ";
                            document.getElementById('result-1').style.display='block';
                            document.getElementById('TextResult').innerHTML="GIG 1005 | Jalinan Masyarakat(JM)";
                            document.getElementById('label').style.display='block';
                            btn_value="GIG 1005 | Jalinan Masyarakat(JM)";
                            localStorage.setItem("value", btn_value);
                          }else if (Drop){
                            Q_area.innerHTML='';
                            HideAnswer();
                            document.getElementById("Explain").innerHTML="<h1>I'm Sorry, before taking any of this subject you should drop any 2 credit subject";
                          }
                          
                    }else if(SE){
                          HideAnswer();
                          answers=all_questions[6].choices;
                          question=all_questions[6].question_string;
                          Q_area.innerHTML='';
                          Q_area.innerHTML=question;
                          for(var i =0;i<answers.length;i+=1){
                            RadSel[i].style.display='block';
                            RadText[i].innerHTML=all_questions[6].choices[i];
                          }
                          CheckValueForRadio();
                          if(Take){
                            HideAnswer();
                            Q_area.innerHTML='';
                            Q_area.innerHTML="We recommend you to take the subject below: ";
                            document.getElementById('result-1').style.display='block';
                            document.getElementById('TextResult').innerHTML="GIG 1004 | Literasi Maklumat";
                            document.getElementById('label').style.display='block';

                            document.getElementById('result-2').style.display='block';
                            document.getElementById('TextResult2').innerHTML="GIG 1003 | Asas Pembudayaan Keusahawan(APK)";
                            btn_value="GIG 1004 | Literasi Maklumat";
                            localStorage.setItem("value", btn_value);
                            btn_value2="GIG 1003 | Asas Pembudayaan Keusahawan(APK)"
                            localStorage.setItem("value", btn_value2);
                          }else if (Drop){
                            Q_area.innerHTML='';
                            HideAnswer();
                            document.getElementById("Explain").innerHTML="<h1>I'm Sorry, before taking any of this subject you should drop any 2 credit subject";
                          }
                      
                    }else if(APK){
                      HideAnswer();
                          answers=all_questions[6].choices;
                          question=all_questions[6].question_string;
                          Q_area.innerHTML='';
                          Q_area.innerHTML=question;
                          for(var i =0;i<answers.length;i+=1){
                            RadSel[i].style.display='block';
                            RadText[i].innerHTML=all_questions[6].choices[i];
                          }
                          CheckValueForRadio();
                      if(Take){
                        HideAnswer();
                        Q_area.innerHTML='';
                        Q_area.innerHTML="We recommend you to take the subject below: ";
                        document.getElementById('result-1').style.display='block';
                        document.getElementById('TextResult').innerHTML="GIG 1004 | Literasi Maklumat";
                        document.getElementById('label').style.display='block';
    
                        document.getElementById('result-2').style.display='block';
                        document.getElementById('TextResult2').innerHTML="GIG 1005 | Jalinan Masyarakat(JM)";
                        btn_value="GIG 1004 | Literasi Maklumat";
                        localStorage.setItem("value", btn_value);
                        btn_value2="GIG 1005 | Jalinan Masyarakat(JM)"
                        localStorage.setItem("value", btn_value2);        
                      }else if (Drop){
                        Q_area.innerHTML='';
                        HideAnswer();
                        document.getElementById("Explain").innerHTML="<h1>I'm Sorry, before taking any of this subject you should drop any 2 credit subject";
                      }
                      
                    }else if(IL){
                      HideAnswer();
                          answers=all_questions[6].choices;
                          question=all_questions[6].question_string;
                          Q_area.innerHTML='';
                          Q_area.innerHTML=question;
                          for(var i =0;i<answers.length;i+=1){
                            RadSel[i].style.display='block';
                            RadText[i].innerHTML=all_questions[6].choices[i];
                          }
                          CheckValueForRadio();
                      if(Take){
                        HideAnswer();
                        Q_area.innerHTML='';
                        Q_area.innerHTML="We recommend you to take the subject below: ";
                        document.getElementById('result-1').style.display='block';
                        document.getElementById('TextResult').innerHTML="GIG 1003 | Asas Pembudayaan Keusahawan(APK)";
                        document.getElementById('label').style.display='block';
  
                        document.getElementById('result-2').style.display='block';
                        document.getElementById('TextResult2').innerHTML="GIG 1005 | Jalinan Masyarakat(JM)";
                        btn_value="GIG 1003 | Asas Pembudayaan Keusahawan(APK)";
                        localStorage.setItem("value", btn_value);
                        btn_value2="GIG 1005 | Jalinan Masyarakat(JM)"
                        localStorage.setItem("value", btn_value2);
                        
                      }else if (Drop){
                        Q_area.innerHTML='';
                        HideAnswer();
                        document.getElementById("Explain").innerHTML="<h1>I'm Sorry, before taking any of this subject you should drop any 2 credit subject";
                      }
                      HideAnswer();
                      Q_area.innerHTML='';
                      Q_area.innerHTML="We recommend you to take the subject below: ";
                      document.getElementById('result-1').style.display='block';
                      document.getElementById('TextResult').innerHTML="GIG 1003 | Asas Pembudayaan Keusahawan(APK)";
                      document.getElementById('label').style.display='block';
  
                      document.getElementById('result-2').style.display='block';
                      document.getElementById('TextResult2').innerHTML="GIG 1005 | Jalinan Masyarakat(JM)";
                      btn_value="GIG 1003 | Asas Pembudayaan Keusahawan(APK)";
                        localStorage.setItem("value", btn_value);
                        btn_value2="GIG 1005 | Jalinan Masyarakat(JM)"
                        localStorage.setItem("value", btn_value2);
                    }
          }else if(SAL){
            current=5;
            var question=all_questions[current].question_string;
            Q_area.innerHTML='';
            Q_area.innerHTML=question;
            answers=all_questions[current].choices;
            for(var i =0;i<answers.length;i+=1){
              CheckBox[i].style.display='block';
              Option[i].innerHTML=all_questions[current].choices[i];
            }       CheckValueForCheckBox();
            if(SE&&IL&&APK&&KoK){
              Q_area.innerHTML='';
              HideAnswer();
              Q_area.innerHTML=all_questions[14].question_string;
              answers=all_questions[14].choices;
              for(var i =0;i<answers.length;i+=1){
                RadSel[i].style.display='block';
                RadText[i].innerHTML=all_questions[14].choices[i];
              }
              CheckValueForRadio();
              InferenceEngine();
              if(HE){
                HideAnswer();
                answers=all_questions[6].choices;
                question=all_questions[6].question_string;
                Q_area.innerHTML='';
                Q_area.innerHTML=question;
                for(var i =0;i<answers.length;i+=1){
                  RadSel[i].style.display='block';
                  RadText[i].innerHTML=all_questions[6].choices[i];
                }
                CheckValueForRadio();
                if(Take){
                  HideAnswer();
                  Q_area.innerHTML='';
                  Q_area.innerHTML="We recommend you to take the subject below: ";
                  document.getElementById('result-1').style.display='block';
                  document.getElementById('TextResult').innerHTML="GIG 1001 | Tamadun Islam dan Tamadun Asia";
                  document.getElementById('label').style.display='block';
                  btn_value="GIG 1001 | Tamadun Islam dan Tamadun Asia";
                  localStorage.setItem("value", btn_value);
                }else if(Drop){
                  Q_area.innerHTML='';
                  HideAnswer();
                  document.getElementById("Explain").innerHTML="<h1>I'm Sorry, before taking any of this subject you should drop any 2 credit subject";
                  }
          
        }else if(TITAS){
          HideAnswer();
          answers=all_questions[6].choices;
          question=all_questions[6].question_string;
          Q_area.innerHTML='';
          Q_area.innerHTML=question;
          for(var i =0;i<answers.length;i+=1){
            RadSel[i].style.display='block';
            RadText[i].innerHTML=all_questions[6].choices[i];
          }
          CheckValueForRadio();
          if(Take){
            HideAnswer();
            Q_area.innerHTML='';
            Q_area.innerHTML="We recommend you to take the subject below: ";
            document.getElementById('result-1').style.display='block';
            document.getElementById('TextResult').innerHTML="GIG 1002 | Hubungan Etnik(HE)";
            document.getElementById('label').style.display='block';
            btn_value="GIG 1002 | Hubungan Etnik(HE)";
            localStorage.setItem("value", btn_value);
            }else if(Drop){
              Q_area.innerHTML='';
              HideAnswer();
              document.getElementById("Explain").innerHTML="<h1>I'm Sorry, before taking any of this subject you should drop any 2 credit subject";
              }
          
        }else if(Both){
          HideAnswer();
          Q_area.innerHTML='';                   
          Q_area.innerHTML=all_questions[16].question_string;
          answers=all_questions[16].choices;
          for(var i =0;i<answers.length;i+=1){
          RadSel[i].style.display='block';
          RadText[i].innerHTML=all_questions[16].choices[i];
            }
          CheckValueForRadio();
              if(STEM){
                HideAnswer();
                answers=all_questions[6].choices;
                question=all_questions[6].question_string;
                Q_area.innerHTML='';
                Q_area.innerHTML=question;
                for(var i =0;i<answers.length;i+=1){
                  RadSel[i].style.display='block';
                  RadText[i].innerHTML=all_questions[6].choices[i];
                }
                CheckValueForRadio();
                if(Take){
                  HideAnswer();
                    Q_area.innerHTML='';
                    Q_area.innerHTML="We recommend you to take the subject below: ";
                    document.getElementById('result-1').style.display='block';
                    document.getElementById('TextResult').innerHTML="GIX 1003 | Introduction to Peace and Humanitarian";
                    document.getElementById('label').style.display='block';
                    btn_value="GIX 1003 | Introduction to Peace and Humanitarian";
                    localStorage.setItem("value", btn_value);
                }else if(Drop){
                  Q_area.innerHTML='';
                  HideAnswer();
                    document.getElementById("Explain").innerHTML="<h1>I'm Sorry, before taking any of this subject you should drop any 2 credit subject";
                  }
              }else if(IPH){
                HideAnswer();
                answers=all_questions[6].choices;
                question=all_questions[6].question_string;
                Q_area.innerHTML='';
                Q_area.innerHTML=question;
                for(var i =0;i<answers.length;i+=1){
                  RadSel[i].style.display='block';
                  RadText[i].innerHTML=all_questions[6].choices[i];
                }
                CheckValueForRadio();
                if(Take){
                  HideAnswer();
                  Q_area.innerHTML='';
                  Q_area.innerHTML="We recommend you to take the subject below: ";
                  document.getElementById('result-1').style.display='block';
                  document.getElementById('TextResult').innerHTML="GIX 1004 | STEM Appreciation";
                  document.getElementById('label').style.display='block';
                  btn_value="GIX 1004 | STEM Appreciation";
                  localStorage.setItem("value", btn_value);
                }else if(Drop){
                  Q_area.innerHTML='';
                  HideAnswer();
                    document.getElementById("Explain").innerHTML="<h1>I'm Sorry, before taking any of this subject you should drop any 2 credit subject";
                  }
                
              }else if(None){
                HideAnswer();
                answers=all_questions[6].choices;
                question=all_questions[6].question_string;
                Q_area.innerHTML='';
                Q_area.innerHTML=question;
                for(var i =0;i<answers.length;i+=1){
                  RadSel[i].style.display='block';
                  RadText[i].innerHTML=all_questions[6].choices[i];
                }
                CheckValueForRadio();
                if(Take){
                  HideAnswer();
                  Q_area.innerHTML='';
                  Q_area.innerHTML="We recommend you to take the subject below: ";
                  document.getElementById('result-1').style.display='block';
                  document.getElementById('TextResult').innerHTML="GIX 1004 | STEM Appreciation";
                  document.getElementById('label').style.display='block';
                  document.getElementById('result-2').style.display='block';
                  document.getElementById('TextResult2').innerHTML="GIX 1003 | Introduction to Peace and Humanitarian";
                  btn_value="GIX 1004 | STEM Appreciation";
                  btn_value2="GIX 1003 | Introduction to Peace and Humanitarian"
                  localStorage.setItem("value", btn_value);
                  localStorage.setItem("value2",btn_value2);

                }else if(Drop){
                  Q_area.innerHTML='';
                  HideAnswer();
                    document.getElementById("Explain").innerHTML="<h1>I'm Sorry, before taking any of this subject you should drop any 2 credit subject";
                }

              }
                      }if(HE){
                                HideAnswer();
                                answers=all_questions[6].choices;
                                question=all_questions[6].question_string;
                                Q_area.innerHTML='';
                                Q_area.innerHTML=question;
                                for(var i =0;i<answers.length;i+=1){
                                  RadSel[i].style.display='block';
                                  RadText[i].innerHTML=all_questions[6].choices[i];
                                }
                                CheckValueForRadio();
                                if(Take){
                                  HideAnswer();
                                  Q_area.innerHTML='';
                                  Q_area.innerHTML="We recommend you to take the subject below: ";
                                  document.getElementById('result-1').style.display='block';
                                  document.getElementById('TextResult').innerHTML="GIG 1001 | Tamadun Islam dan Tamadun Asia";
                                  document.getElementById('label').style.display='block';
                                  btn_value="GIG 1001 | Tamadun Islam dan Tamadun Asia";
                                  localStorage.setItem("value", btn_value);
                                }else if(Drop){
                                  Q_area.innerHTML='';
                                  HideAnswer();
                                  document.getElementById("Explain").innerHTML="<h1>I'm Sorry, before taking any of this subject you should drop any 2 credit subject";
                                  }
                          
                        }else if(TITAS){
                          HideAnswer();
                          answers=all_questions[6].choices;
                          question=all_questions[6].question_string;
                          Q_area.innerHTML='';
                          Q_area.innerHTML=question;
                          for(var i =0;i<answers.length;i+=1){
                            RadSel[i].style.display='block';
                            RadText[i].innerHTML=all_questions[6].choices[i];
                          }
                          CheckValueForRadio();
                          if(Take){
                            HideAnswer();
                            Q_area.innerHTML='';
                            Q_area.innerHTML="We recommend you to take the subject below: ";
                            document.getElementById('result-1').style.display='block';
                            document.getElementById('TextResult').innerHTML="GIG 1002 | Hubungan Etnik(HE)";
                            document.getElementById('label').style.display='block';
                            btn_value="GIG 1002 | Hubungan Etnik(HE)";
                            localStorage.setItem("value", btn_value);
                            }else if(Drop){
                              Q_area.innerHTML='';
                              HideAnswer();
                              document.getElementById("Explain").innerHTML="<h1>I'm Sorry, before taking any of this subject you should drop any 2 credit subject";
                              }
                          
                        }else if(Both){
                          HideAnswer();
                          Q_area.innerHTML='';                   
                          Q_area.innerHTML=all_questions[16].question_string;
                          answers=all_questions[16].choices;
                          for(var i =0;i<answers.length;i+=1){
                          RadSel[i].style.display='block';
                          RadText[i].innerHTML=all_questions[16].choices[i];
                            }
                          CheckValueForRadio();
                              if(STEM){
                                HideAnswer();
                                answers=all_questions[6].choices;
                                question=all_questions[6].question_string;
                                Q_area.innerHTML='';
                                Q_area.innerHTML=question;
                                for(var i =0;i<answers.length;i+=1){
                                  RadSel[i].style.display='block';
                                  RadText[i].innerHTML=all_questions[6].choices[i];
                                }
                                CheckValueForRadio();
                                if(Take){
                                  HideAnswer();
                                    Q_area.innerHTML='';
                                    Q_area.innerHTML="We recommend you to take the subject below: ";
                                    document.getElementById('result-1').style.display='block';
                                    document.getElementById('TextResult').innerHTML="GIX 1003 | Introduction to Peace and Humanitarian";
                                    document.getElementById('label').style.display='block';
                                    btn_value="GIX 1003 | Introduction to Peace and Humanitarian";
                                    localStorage.setItem("value", btn_value);
                                }else if(Drop){
                                  Q_area.innerHTML='';
                                  HideAnswer();
                                    document.getElementById("Explain").innerHTML="<h1>I'm Sorry, before taking any of this subject you should drop any 2 credit subject";
                                  }
                              }else if(IPH){
                                HideAnswer();
                                answers=all_questions[6].choices;
                                question=all_questions[6].question_string;
                                Q_area.innerHTML='';
                                Q_area.innerHTML=question;
                                for(var i =0;i<answers.length;i+=1){
                                  RadSel[i].style.display='block';
                                  RadText[i].innerHTML=all_questions[6].choices[i];
                                }
                                CheckValueForRadio();
                                if(Take){
                                  HideAnswer();
                                  Q_area.innerHTML='';
                                  Q_area.innerHTML="We recommend you to take the subject below: ";
                                  document.getElementById('result-1').style.display='block';
                                  document.getElementById('TextResult').innerHTML="GIX 1004 | STEM Appreciation";
                                  document.getElementById('label').style.display='block';
                                  btn_value="GIX 1004 | STEM Appreciation";
                                  localStorage.setItem("value", btn_value);
                                }else if(Drop){
                                  Q_area.innerHTML='';
                                  HideAnswer();
                                    document.getElementById("Explain").innerHTML="<h1>I'm Sorry, before taking any of this subject you should drop any 2 credit subject";
                                  }
                                
                              }else if(None){
                                HideAnswer();
                                answers=all_questions[6].choices;
                                question=all_questions[6].question_string;
                                Q_area.innerHTML='';
                                Q_area.innerHTML=question;
                                for(var i =0;i<answers.length;i+=1){
                                  RadSel[i].style.display='block';
                                  RadText[i].innerHTML=all_questions[6].choices[i];
                                }
                                CheckValueForRadio();
                                if(Take){
                                  HideAnswer();
                                  Q_area.innerHTML='';
                                  Q_area.innerHTML="We recommend you to take the subject below: ";
                                  document.getElementById('result-1').style.display='block';
                                  document.getElementById('TextResult').innerHTML="GIX 1004 | STEM Appreciation";
                                  document.getElementById('label').style.display='block';
                                  document.getElementById('result-2').style.display='block';
                                  document.getElementById('TextResult2').innerHTML="GIX 1003 | Introduction to Peace and Humanitarian";
                                  btn_value="GIX 1004 | STEM Appreciation";
                                  btn_value2="GIX 1003 | Introduction to Peace and Humanitarian"
                                  localStorage.setItem("value", btn_value);
                                  localStorage.setItem("value2",btn_value2);
  
                                }else if(Drop){
                                  Q_area.innerHTML='';
                                  HideAnswer();
                                    document.getElementById("Explain").innerHTML="<h1>I'm Sorry, before taking any of this subject you should drop any 2 credit subject";
                                }
  
                              }
                        }
            }else if(SE&&IL&&APK){
                current=7
                Q_area.innerHTML='';
                HideAnswer();
                Q_area.innerHTML=all_questions[current].question_string;
                answers=all_questions[current].choices;
                for(var i =0;i<answers.length;i+=1){
                  RadSel[i].style.display='block';
                  RadText[i].innerHTML=all_questions[current].choices[i];
                }
                CheckValueForRadio();

                if(Sport){//Look this up
                  current=8;
                  Q_area.innerHTML='';
                  HideAnswer();
                  Q_area.innerHTML=all_questions[current].question_string;
                  answers=all_questions[current].choices;
                  for(var i =0;i<answers.length;i+=1){
                    RadSel[i].style.display='block';
                    RadText[i].innerHTML=all_questions[current].choices[i];
                  }
                  CheckValueForRadio();
                    if(e_S){
                      answers=all_questions[6].choices;
                      question=all_questions[6].question_string;
                      Q_area.innerHTML='';
                      Q_area.innerHTML=question;
                      for(var i =0;i<answers.length;i+=1){
                        RadSel[i].style.display='block';
                        RadText[i].innerHTML=all_questions[6].choices[i];
                      }
                      CheckValueForRadio();
                      if(Take){
                        HideAnswer();
                        Q_area.innerHTML='';
                        Q_area.innerHTML="We recommend you to take the subject below: ";
                        document.getElementById('result-1').style.display='block';
                        document.getElementById('TextResult').innerHTML="GKK 1001 | Talent Development";
                        document.getElementById('label').style.display='block';
                        btn_value="GKK 1001 | Talent Development";
                        localStorage.setItem("value", btn_value);
                        Interest="esport";
                        localStorage.setItem("Intersert",Interest);
                        

                        
                      }else if(Drop){
                        Q_area.innerHTML='';
                        HideAnswer();
                          document.getElementById("Explain").innerHTML="<h1>I'm Sorry, before taking any of this subject you should drop any 2 credit subject";
                        }
                    }else if(Outdoor){
                      HideAnswer();
                      answers=all_questions[11].choices;
                      question=all_questions[11].question_string;
                      Q_area.innerHTML='';
                      Q_area.innerHTML=question;
                      for(var i =0;i<answers.length;i+=1){
                        RadSel[i].style.display='block';
                        RadText[i].innerHTML=all_questions[11].choices[i];
                      }
                      CheckValueForRadio(); 
                      if(Fb||rug||Fbee||Vball){
                        answers=all_questions[6].choices;
                        question=all_questions[6].question_string;
                        Q_area.innerHTML='';
                        Q_area.innerHTML=question;
                        for(var i =0;i<answers.length;i+=1){
                          RadSel[i].style.display='block';
                          RadText[i].innerHTML=all_questions[6].choices[i];
                        }
                        CheckValueForRadio();
                        if(Take&&Fb){
                          HideAnswer();
                          Q_area.innerHTML='';
                          Q_area.innerHTML="We recommend you to take the subject below: ";
                          document.getElementById('result-1').style.display='block';
                          document.getElementById('TextResult').innerHTML="GKK 1001 | Talent Development";
                          document.getElementById('label').style.display='block';
                          btn_value="GKK 1001 | Talent Development";
                          localStorage.setItem("value", btn_value);
                          Interest="football";
                        localStorage.setItem("Intersert",Interest);
                          
                        }else if(Take&&rug){
                          HideAnswer();
                          Q_area.innerHTML='';
                          Q_area.innerHTML="We recommend you to take the subject below: ";
                          document.getElementById('result-1').style.display='block';
                          document.getElementById('TextResult').innerHTML="GKK 1001 | Talent Development";
                          document.getElementById('label').style.display='block';
                          btn_value="GKK 1001 | Talent Development";
                          localStorage.setItem("value", btn_value);
                          Interest="rugby";
                        localStorage.setItem("Intersert",Interest);
                        }else if(Take&&Fbee){
                          HideAnswer();
                          Q_area.innerHTML='';
                          Q_area.innerHTML="We recommend you to take the subject below: ";
                          document.getElementById('result-1').style.display='block';
                          document.getElementById('TextResult').innerHTML="GKK 1001 | Talent Development";
                          document.getElementById('label').style.display='block';
                          btn_value="GKK 1001 | Talent Development";
                        localStorage.setItem("value", btn_value);
                        Interest="fbee";
                        localStorage.setItem("Intersert",Interest);
                        }else if(Take&&Vball){
                          HideAnswer();
                          Q_area.innerHTML='';
                          Q_area.innerHTML="We recommend you to take the subject below: ";
                          document.getElementById('result-1').style.display='block';
                          document.getElementById('TextResult').innerHTML="GKK 1001 | Talent Development";
                          document.getElementById('label').style.display='block';
                          btn_value="GKK 1001 | Talent Development";
                        localStorage.setItem("value", btn_value);
                        Interest="volleyball";
                        localStorage.setItem("Intersert",Interest);
                        }else if(Drop){
                          Q_area.innerHTML='';
                          HideAnswer();
                            document.getElementById("Explain").innerHTML="<h1>I'm Sorry, before taking any of this subject you should drop any 2 credit subject";
                          }

                      }
                    }else if(Indoor){
                      HideAnswer();
                      answers=all_questions[12].choices;
                      question=all_questions[12].question_string;
                      Q_area.innerHTML='';
                      Q_area.innerHTML=question;
                      for(var i =0;i<answers.length;i+=1){
                        RadSel[i].style.display='block';
                        RadText[i].innerHTML=all_questions[12].choices[i];
                      }
                      CheckValueForRadio();
                      if(Bad_m||MA||Bball||Takraw){
                        answers=all_questions[6].choices;
                        question=all_questions[6].question_string;
                        Q_area.innerHTML='';
                        Q_area.innerHTML=question;
                        for(var i =0;i<answers.length;i+=1){
                          RadSel[i].style.display='block';
                          RadText[i].innerHTML=all_questions[6].choices[i];
                        }
                        CheckValueForRadio();
                        if(Take&&Bad_m){
                          HideAnswer();
                          Q_area.innerHTML='';
                          Q_area.innerHTML="We recommend you to take the subject below: ";
                          document.getElementById('result-1').style.display='block';
                          document.getElementById('TextResult').innerHTML="GKK 1001 | Talent Development";
                          document.getElementById('label').style.display='block';
                          btn_value="GKK 1001 | Talent Development";
                        localStorage.setItem("value", btn_value);
                        Interest="badminton";
                        localStorage.setItem("Intersert",Interest);

                          
                        }else if(Take&&MA){
                          HideAnswer();
                          Q_area.innerHTML='';
                          Q_area.innerHTML="We recommend you to take the subject below: ";
                          document.getElementById('result-1').style.display='block';
                          document.getElementById('TextResult').innerHTML="GKK 1001 | Talent Development";
                          document.getElementById('label').style.display='block';
                          btn_value="GKK 1001 | Talent Development";
                        localStorage.setItem("value", btn_value);
                        Interest="martialarts";
                        localStorage.setItem("Intersert",Interest);
                        }else if(Take&&Bball){
                          HideAnswer();
                          Q_area.innerHTML='';
                          Q_area.innerHTML="We recommend you to take the subject below: ";
                          document.getElementById('result-1').style.display='block';
                          document.getElementById('TextResult').innerHTML="GKK 1001 | Talent Development";
                          document.getElementById('label').style.display='block';
                          btn_value="GKK 1001 | Talent Development";
                          localStorage.setItem("value", btn_value);
                          Interest="basketball";
                        localStorage.setItem("Intersert",Interest);
                        }else if(Take&&Takraw){
                          HideAnswer();
                          Q_area.innerHTML='';
                          Q_area.innerHTML="We recommend you to take the subject below: ";
                          document.getElementById('result-1').style.display='block';
                          document.getElementById('TextResult').innerHTML="GKK 1001 | Talent Development";
                          document.getElementById('label').style.display='block';
                          btn_value="GKK 1001 | Talent Development";
                          localStorage.setItem("value", btn_value);
                          Interest="takraw";
                          localStorage.setItem("Intersert",Interest);
                        }else if(Drop){
                          Q_area.innerHTML='';
                          HideAnswer();
                            document.getElementById("Explain").innerHTML="<h1>I'm Sorry, before taking any of this subject you should drop any 2 credit subject";
                          }                              

                      }
                    }
                  
                }else if(Arts1){
                  HideAnswer();
                  answers=all_questions[9].choices;
                  question=all_questions[9].question_string;
                  Q_area.innerHTML='';
                  Q_area.innerHTML=question;
                  for(var i =0;i<answers.length;i+=1){
                    RadSel[i].style.display='block';
                    RadText[i].innerHTML=all_questions[9].choices[i];
                  }
                  CheckValueForRadio();  
                  if(Music||Draw||Dance){
                    answers=all_questions[6].choices;
                        question=all_questions[6].question_string;
                        Q_area.innerHTML='';
                        Q_area.innerHTML=question;
                        for(var i =0;i<answers.length;i+=1){
                          RadSel[i].style.display='block';
                          RadText[i].innerHTML=all_questions[6].choices[i];
                        }
                        CheckValueForRadio();
                        if(Take&&Music){
                          HideAnswer();
                          Q_area.innerHTML='';
                          Q_area.innerHTML="We recommend you to take the subject below: ";
                          document.getElementById('result-1').style.display='block';
                          document.getElementById('TextResult').innerHTML="GKK 1001 | Talent Development";
                          document.getElementById('label').style.display='block';
                          btn_value="GKK 1001 | Talent Development";
                          localStorage.setItem("value", btn_value);
                          
                          Interest="music";
                          localStorage.setItem("Intersert",Interest);

                          
                        }else if(Take&&Dance){
                          HideAnswer();
                          Q_area.innerHTML='';
                          Q_area.innerHTML="We recommend you to take the subject below: ";
                          document.getElementById('result-1').style.display='block';
                          document.getElementById('TextResult').innerHTML="GKK 1001 | Talent Development";
                          document.getElementById('label').style.display='block';
                          btn_value="GKK 1001 | Talent Development";
                          localStorage.setItem("value", btn_value);
                          Interest="dance";
                          localStorage.setItem("Intersert",Interest);
                        }else if(Take&&Draw){
                          HideAnswer();
                          Q_area.innerHTML='';
                          Q_area.innerHTML="We recommend you to take the subject below: ";
                          document.getElementById('result-1').style.display='block';
                          document.getElementById('TextResult').innerHTML="GKK 1001 | Talent Development";
                          document.getElementById('label').style.display='block';
                          btn_value="GKK 1001 | Talent Development";
                          localStorage.setItem("value", btn_value);
                          Interest="dance";
                          localStorage.setItem("Intersert",Interest);
                        }else if(Drop){
                          Q_area.innerHTML='';
                          HideAnswer();
                            document.getElementById("Explain").innerHTML="<h1>I'm Sorry, before taking any of this subject you should drop any 2 credit subject";
                          }

                  }
                }else if(Lship){
                  HideAnswer();
                  answers=all_questions[10].choices;
                  question=all_questions[10].question_string;
                  Q_area.innerHTML='';
                  Q_area.innerHTML=question;
                  for(var i =0;i<answers.length;i+=1){
                    RadSel[i].style.display='block';
                    RadText[i].innerHTML=all_questions[10].choices[i];
                  }
                  CheckValueForRadio();                       

                  if(WPT){
                    HideAnswer();
                    answers=all_questions[6].choices;
                    question=all_questions[6].question_string;
                    Q_area.innerHTML='';
                    Q_area.innerHTML=question;
                    for(var i =0;i<answers.length;i+=1){
                      RadSel[i].style.display='block';
                      RadText[i].innerHTML=all_questions[6].choices[i];
                    }
                    CheckValueForRadio();
                    if(Take){
                      HideAnswer();
                      Q_area.innerHTML='';
                      Q_area.innerHTML="We recommend you to take the subject below: ";
                      document.getElementById('result-1').style.display='block';
                      document.getElementById('TextResult').innerHTML="GKA 1001 | Attach@Industry";
                      document.getElementById('label').style.display='block';
                      btn_value="GKK 1001 | Talent Development";
                          localStorage.setItem("value", btn_value);
                          Interest="wpt";
                          localStorage.setItem("Intersert",Interest);
                    }else if(Drop){
                      Q_area.innerHTML='';
                      HideAnswer();
                        document.getElementById("Explain").innerHTML="<h1>I'm Sorry, before taking any of this subject you should drop any 2 credit subject";
                      }

                  }else if(Freelance){
                    HideAnswer();
                    answers=all_questions[6].choices;
                    question=all_questions[6].question_string;
                    Q_area.innerHTML='';
                    Q_area.innerHTML=question;
                    for(var i =0;i<answers.length;i+=1){
                      RadSel[i].style.display='block';
                      RadText[i].innerHTML=all_questions[6].choices[i];
                    }
                    CheckValueForRadio();
                    if(Take){
                      HideAnswer();
                      Q_area.innerHTML='';
                      Q_area.innerHTML="We recommend you to take the subject below: ";
                      document.getElementById('result-1').style.display='block';
                      document.getElementById('TextResult').innerHTML="GKN 1002 | Independent Research";
                      document.getElementById('label').style.display='block';
                      document.getElementById('result-3').style.display='block';
                      document.getElementById('TextResult3').innerHTML="GKU 1001 | Student Enterpreneurship";
                      btn_value="GKK 1001 | Talent Development";
                      localStorage.setItem("value", btn_value);
                      btn_value2="GKU 1001 | Student Enterpreneurship";
                      localStorage.setItem("value2",btn_value2);


                    }else if(Drop){
                      Q_area.innerHTML='';
                      HideAnswer();
                        document.getElementById("Explain").innerHTML="<h1>I'm Sorry, before taking any of this subject you should drop any 2 credit subject";
                      }                    
                  }

                }
              }else if(SE&&IL){
                      
                HideAnswer();
                answers=all_questions[6].choices;
                question=all_questions[6].question_string;
                Q_area.innerHTML='';
                Q_area.innerHTML=question;
                for(var i =0;i<answers.length;i+=1){
                  RadSel[i].style.display='block';
                  RadText[i].innerHTML=all_questions[6].choices[i];
                }
                CheckValueForRadio();
                if(Take){
                  HideAnswer();
                  Q_area.innerHTML='';
                  Q_area.innerHTML="We recommend you to take the subject below: ";
                  document.getElementById('result-1').style.display='block';
                  document.getElementById('TextResult').innerHTML="GIG 1003 | Asas Pembudayaan Keusahawan(APK)";
                  document.getElementById('label').style.display='block';
                  btn_value="GIG 1003 | Asas Pembudayaan Keusahawan(APK)";
                    localStorage.setItem("value", btn_value);
                }else if (Drop){
                  Q_area.innerHTML='';
                  HideAnswer();
                  document.getElementById("Explain").innerHTML="<h1>I'm Sorry, before taking any of this subject you should drop any 2 credit subject";
                }
                

      
              }else if(SE&&APK){
                    HideAnswer();
                    answers=all_questions[6].choices;
                    question=all_questions[6].question_string;
                    Q_area.innerHTML='';
                    Q_area.innerHTML=question;
                    for(var i =0;i<answers.length;i+=1){
                      RadSel[i].style.display='block';
                      RadText[i].innerHTML=all_questions[6].choices[i];
                    }
                    CheckValueForRadio();
                    if(Take){
                      HideAnswer();
                      Q_area.innerHTML='';
                      Q_area.innerHTML="We recommend you to take the subject below: ";
                      document.getElementById('result-1').style.display='block';
                      document.getElementById('TextResult').innerHTML="GIG 1004 | Literasi Maklumat";
                      document.getElementById('label').style.display='block';
                      btn_value="GIG 1004 | Literasi Maklumat";
                      localStorage.setItem("value", btn_value);
                    }else if (Drop){
                      Q_area.innerHTML='';
                      HideAnswer();
                      document.getElementById("Explain").innerHTML="<h1>I'm Sorry, before taking any of this subject you should drop any 2 credit subject";
                    }
                    
              }else if(IL&&APK){
                    HideAnswer();
                    answers=all_questions[6].choices;
                    question=all_questions[6].question_string;
                    Q_area.innerHTML='';
                    Q_area.innerHTML=question;
                    for(var i =0;i<answers.length;i+=1){
                      RadSel[i].style.display='block';
                      RadText[i].innerHTML=all_questions[6].choices[i];
                    }
                    CheckValueForRadio();
                    if(Take){
                      HideAnswer();
                      Q_area.innerHTML='';
                      Q_area.innerHTML="We recommend you to take the subject below: ";
                      document.getElementById('result-1').style.display='block';
                      document.getElementById('TextResult').innerHTML="GIG 1005 | Jalinan Masyarakat(JM)";
                      document.getElementById('label').style.display='block';
                      btn_value="GIG 1005 | Jalinan Masyarakat(JM)";
                      localStorage.setItem("value", btn_value);
                    }else if (Drop){
                      Q_area.innerHTML='';
                      HideAnswer();
                      document.getElementById("Explain").innerHTML="<h1>I'm Sorry, before taking any of this subject you should drop any 2 credit subject";
                    }
                    
              }else if(SE){
                    HideAnswer();
                    answers=all_questions[6].choices;
                    question=all_questions[6].question_string;
                    Q_area.innerHTML='';
                    Q_area.innerHTML=question;
                    for(var i =0;i<answers.length;i+=1){
                      RadSel[i].style.display='block';
                      RadText[i].innerHTML=all_questions[6].choices[i];
                    }
                    CheckValueForRadio();
                    if(Take){
                      HideAnswer();
                      Q_area.innerHTML='';
                      Q_area.innerHTML="We recommend you to take the subject below: ";
                      document.getElementById('result-1').style.display='block';
                      document.getElementById('TextResult').innerHTML="GIG 1004 | Literasi Maklumat";
                      document.getElementById('label').style.display='block';

                      document.getElementById('result-2').style.display='block';
                      document.getElementById('TextResult2').innerHTML="GIG 1003 | Asas Pembudayaan Keusahawan(APK)";
                      btn_value="GIG 1004 | Literasi Maklumat";
                      localStorage.setItem("value", btn_value);
                      btn_value2="GIG 1003 | Asas Pembudayaan Keusahawan(APK)"
                      localStorage.setItem("value", btn_value2);
                    }else if (Drop){
                      Q_area.innerHTML='';
                      HideAnswer();
                      document.getElementById("Explain").innerHTML="<h1>I'm Sorry, before taking any of this subject you should drop any 2 credit subject";
                    }
                
              }else if(APK){
                HideAnswer();
                    answers=all_questions[6].choices;
                    question=all_questions[6].question_string;
                    Q_area.innerHTML='';
                    Q_area.innerHTML=question;
                    for(var i =0;i<answers.length;i+=1){
                      RadSel[i].style.display='block';
                      RadText[i].innerHTML=all_questions[6].choices[i];
                    }
                    CheckValueForRadio();
                if(Take){
                  HideAnswer();
                  Q_area.innerHTML='';
                  Q_area.innerHTML="We recommend you to take the subject below: ";
                  document.getElementById('result-1').style.display='block';
                  document.getElementById('TextResult').innerHTML="GIG 1004 | Literasi Maklumat";
                  document.getElementById('label').style.display='block';

                  document.getElementById('result-2').style.display='block';
                  document.getElementById('TextResult2').innerHTML="GIG 1005 | Jalinan Masyarakat(JM)";
                  btn_value="GIG 1004 | Literasi Maklumat";
                  localStorage.setItem("value", btn_value);
                  btn_value2="GIG 1005 | Jalinan Masyarakat(JM)"
                  localStorage.setItem("value", btn_value2);        
                }else if (Drop){
                  Q_area.innerHTML='';
                  HideAnswer();
                  document.getElementById("Explain").innerHTML="<h1>I'm Sorry, before taking any of this subject you should drop any 2 credit subject";
                }
                
              }else if(IL){
                HideAnswer();
                    answers=all_questions[6].choices;
                    question=all_questions[6].question_string;
                    Q_area.innerHTML='';
                    Q_area.innerHTML=question;
                    for(var i =0;i<answers.length;i+=1){
                      RadSel[i].style.display='block';
                      RadText[i].innerHTML=all_questions[6].choices[i];
                    }
                    CheckValueForRadio();
                if(Take){
                  HideAnswer();
                  Q_area.innerHTML='';
                  Q_area.innerHTML="We recommend you to take the subject below: ";
                  document.getElementById('result-1').style.display='block';
                  document.getElementById('TextResult').innerHTML="GIG 1003 | Asas Pembudayaan Keusahawan(APK)";
                  document.getElementById('label').style.display='block';

                  document.getElementById('result-2').style.display='block';
                  document.getElementById('TextResult2').innerHTML="GIG 1005 | Jalinan Masyarakat(JM)";
                  btn_value="GIG 1003 | Asas Pembudayaan Keusahawan(APK)";
                  localStorage.setItem("value", btn_value);
                  btn_value2="GIG 1005 | Jalinan Masyarakat(JM)"
                  localStorage.setItem("value", btn_value2);
                  
                }else if (Drop){
                  Q_area.innerHTML='';
                  HideAnswer();
                  document.getElementById("Explain").innerHTML="<h1>I'm Sorry, before taking any of this subject you should drop any 2 credit subject";
                }
                HideAnswer();
                Q_area.innerHTML='';
                Q_area.innerHTML="We recommend you to take the subject below: ";
                document.getElementById('result-1').style.display='block';
                document.getElementById('TextResult').innerHTML="GIG 1003 | Asas Pembudayaan Keusahawan(APK)";
                document.getElementById('label').style.display='block';

                document.getElementById('result-2').style.display='block';
                document.getElementById('TextResult2').innerHTML="GIG 1005 | Jalinan Masyarakat(JM)";
                btn_value="GIG 1003 | Asas Pembudayaan Keusahawan(APK)";
                  localStorage.setItem("value", btn_value);
                  btn_value2="GIG 1005 | Jalinan Masyarakat(JM)"
                  localStorage.setItem("value", btn_value2);
              }
          }

        }else if(FANL|FSNL){
          if(TITASsubject||HEsubject){
            HideAnswer();
            answers=all_questions[15].choices;
            question=all_questions[15].question_string;
            Q_area.innerHTML='';
            Q_area.innerHTML=question;
            for(var i =0;i<answers.length;i+=1){
              RadSel[i].style.display='block';
              RadText[i].innerHTML=all_questions[15].choices[i];
            }
            CheckValueForRadio();
            if(IM){
              HideAnswer();
              answers=all_questions[6].choices;
              question=all_questions[6].question_string;
              Q_area.innerHTML='';
              Q_area.innerHTML=question;
              for(var i =0;i<answers.length;i+=1){
                RadSel[i].style.display='block';
                RadText[i].innerHTML=all_questions[6].choices[i];
              }
              CheckValueForRadio();
              if(Take&&HEsubject){
                HideAnswer();
                Q_area.innerHTML='';
                Q_area.innerHTML="We recommend you to take the subject below: ";
                document.getElementById('result-1').style.display='block';
                document.getElementById('TextResult').innerHTML="GIG 1002 | Ethnic Relation";
                document.getElementById('label').style.display='block';
                btn_value="GIG 1002 | Ethnic Relation";
                localStorage.setItem("value",btn_value);

              }else if(Take&&TITASsubject){
                HideAnswer();
                Q_area.innerHTML='';
                Q_area.innerHTML="We recommend you to take the subject below: ";
                document.getElementById('result-1').style.display='block';
                document.getElementById('TextResult').innerHTML="GIG 1001 | Islamic Civilization and Asian Civilization";
                document.getElementById('label').style.display='block'; 
                btn_value="GIG 1001 | Islamic Civilization and Asian Civilization";
                localStorage.setItem("value",btn_value);              
              }else if(Drop){
                Q_area.innerHTML='';
                HideAnswer();
                  document.getElementById("Explain").innerHTML="<h1>I'm Sorry, before taking any of this subject you should drop any 2 credit subject";
                }else if(No){
                  HideAnswer();
                  answers=all_questions[6].choices;
                  question=all_questions[6].question_string;
                  Q_area.innerHTML='';
                  Q_area.innerHTML=question;
                  for(var i =0;i<answers.length;i+=1){
                    RadSel[i].style.display='block';
                    RadText[i].innerHTML=all_questions[6].choices[i];
                  }
                  CheckValueForRadio();
                  if(Take){
                    HideAnswer();
                    Q_area.innerHTML='';
                    Q_area.innerHTML="We recommend you to take the subject below: ";
                    document.getElementById('result-1').style.display='block';
                    document.getElementById('TextResult').innerHTML="GIG 1006 | Introduction to Malaysia";
                    document.getElementById('label').style.display='block';
                    btn_value="GIG 1006 | Introduction to Malaysia";
                    localStorage.setItem("value",btn_value); 
                    document.getElementById("Explain").innerHTML="<h1>It is compulsary for you take this subject first before taking an other subject";
                  }else if (Drop){
                    Q_area.innerHTML='';
                    HideAnswer();
                    document.getElementById("Explain").innerHTML="<h1>I'm Sorry, before taking any of this subject you should drop any 2 credit subject";
                  }
                }

            }
          }else if(JMsubject||APKsubject||ILsubject||IPHsubject||STEMsubject){
            Q_area.innerHTML='';
            HideAnswer();
            document.getElementById("Explain").innerHTML="<h1>I'm Sorry, this subject can be taken starting your Second year";           
          }else{
            HideAnswer();
            answers=all_questions[15].choices;
            question=all_questions[15].question_string;
            Q_area.innerHTML='';
            Q_area.innerHTML=question;
            for(var i =0;i<answers.length;i+=1){
              RadSel[i].style.display='block';
              RadText[i].innerHTML=all_questions[15].choices[i];
            }
            CheckValueForRadio();
            if(IM){
              HideAnswer();
              answers=all_questions[4].choices;
              question=all_questions[4].question_string;
              Q_area.innerHTML='';
              Q_area.innerHTML=question;

              for(var i =0;i<answers.length;i+=1)             {
              RadSel[i].style.display='block';
              RadText[i].innerHTML=all_questions[4].choices[i];
                                                                }
                
                if(TITAS){
                  answers=all_questions[6].choices;
                  question=all_questions[6].question_string;
                  Q_area.innerHTML='';
                  Q_area.innerHTML=question;
                  for(var i =0;i<answers.length;i+=1){
                    RadSel[i].style.display='block';
                    RadText[i].innerHTML=all_questions[6].choices[i];
                  }
                  CheckValueForRadio();
                  if(Take){
                    HideAnswer();
                    Q_area.innerHTML='';
                    Q_area.innerHTML="We recommend you to take the subject below: ";
                    document.getElementById('result-1').style.display='block';
                    document.getElementById('TextResult').innerHTML="GIG 1002 | Ethnic Relation";
                    document.getElementById('label').style.display='block';
                    btn_value="GIG 1002 | Ethnic Relation";
                    localStorage.setItem("value",btn_value); 
                    
                  }else if(Drop){
                    Q_area.innerHTML='';
                    HideAnswer();
                      document.getElementById("Explain").innerHTML="<h1>I'm Sorry, before taking any of this subject you should drop any 2 credit subject";
                    }

                }else if(HE){
                  answers=all_questions[6].choices;
                  question=all_questions[6].question_string;
                  Q_area.innerHTML='';
                  Q_area.innerHTML=question;
                  for(var i =0;i<answers.length;i+=1){
                    RadSel[i].style.display='block';
                    RadText[i].innerHTML=all_questions[6].choices[i];
                  }
                  CheckValueForRadio();
                  if(Take){
                    HideAnswer();
                    Q_area.innerHTML='';
                    Q_area.innerHTML="We recommend you to take the subject below: ";
                    document.getElementById('result-1').style.display='block';
                    document.getElementById('TextResult').innerHTML="GIG 1001 | Islamic Civilization and Asian Civilization";
                    document.getElementById('label').style.display='block';
                    btn_value="GIG 1001 | Islamic Civilization and Asian Civilization";
                    localStorage.setItem("value",btn_value);
                    
                  }else if(Drop){
                    Q_area.innerHTML='';
                    HideAnswer();
                      document.getElementById("Explain").innerHTML="<h1>I'm Sorry, before taking any of this subject you should drop any 2 credit subject";
                    }
                    
                }else if(FANL&None){
                  HideAnswer();
                  answers=all_questions[6].choices;
                  question=all_questions[6].question_string;
                  Q_area.innerHTML='';
                  Q_area.innerHTML=question;
                  for(var i =0;i<answers.length;i+=1){
                    RadSel[i].style.display='block';
                    RadText[i].innerHTML=all_questions[6].choices[i];
                  }
                  CheckValueForRadio();
                  if(Take){
                    HideAnswer();
                    Q_area.innerHTML='';
                    Q_area.innerHTML="We recommend you to take the subject below: ";
                    document.getElementById('result-1').style.display='block';
                    document.getElementById('TextResult').innerHTML="GIG 1001 | Islamic Civilization and Asian Civilization";
                    document.getElementById('label').style.display='block';
                    btn_value="GIG 1001 | Islamic Civilization and Asian Civilization";
                    localStorage.setItem("value",btn_value);
                  }else if (Drop){
                    Q_area.innerHTML='';
                    HideAnswer();
                    document.getElementById("Explain").innerHTML="<h1>I'm Sorry, before taking any of this subject you should drop any 2 credit subject";
                  }
              }else if(FSNL&None){
                  HideAnswer();
                  answers=all_questions[6].choices;
                  question=all_questions[6].question_string;
                  Q_area.innerHTML='';
                  Q_area.innerHTML=question;
                  for(var i =0;i<answers.length;i+=1){
                    RadSel[i].style.display='block';
                    RadText[i].innerHTML=all_questions[6].choices[i];
                  }
                  CheckValueForRadio();
                  if(Take){
                    HideAnswer();
                    Q_area.innerHTML='';
                    Q_area.innerHTML="We recommend you to take the subject below: ";
                    document.getElementById('result-1').style.display='block';
                    document.getElementById('TextResult').innerHTML="GIG 1002 | Ethnic Relation";
                    document.getElementById('label').style.display='block';
                    btn_value="GIG 1002 | Ethnic Relation";
                    localStorage.setItem("value",btn_value);
                  }else if (Drop){
                    Q_area.innerHTML='';
                    HideAnswer();
                    document.getElementById("Explain").innerHTML="<h1>I'm Sorry, before taking any of this subject you should drop any 2 credit subject";
                  }
              }
              }else if(No){
                  HideAnswer();
                  answers=all_questions[6].choices;
                  question=all_questions[6].question_string;
                  Q_area.innerHTML='';
                  Q_area.innerHTML=question;
                  for(var i =0;i<answers.length;i+=1){
                    RadSel[i].style.display='block';
                    RadText[i].innerHTML=all_questions[6].choices[i];
                  }
                  CheckValueForRadio();
                  if(Take){
                    HideAnswer();
                    Q_area.innerHTML='';
                    Q_area.innerHTML="We recommend you to take the subject below: ";
                    document.getElementById('result-1').style.display='block';
                    document.getElementById('TextResult').innerHTML="GIG 1006 | Introduction to Malaysia";
                    document.getElementById('label').style.display='block';
                    btn_value="GIG 1006 | Introduction to Malaysia";
                    localStorage.setItem("value",btn_value);
                  }else if (Drop){
                    Q_area.innerHTML='';
                    HideAnswer();
                    document.getElementById("Explain").innerHTML="<h1>I'm Sorry, before taking any of this subject you should drop any 2 credit subject";
                  }
              }
          }  
        }else if(SSNL|SANL){//look this up
          HideAnswer();
          if(JMsubject||APKsubject||ILsubject||STEMsubject){
            answers=all_questions[6].choices;
            question=all_questions[6].question_string;
            Q_area.innerHTML='';
            Q_area.innerHTML=question;
            for(var i =0;i<answers.length;i+=1){
              RadSel[i].style.display='block';
              RadText[i].innerHTML=all_questions[6].choices[i];
            }
            CheckValueForRadio();
            if(Take&&JMsubject){
              HideAnswer();
              Q_area.innerHTML='';
              Q_area.innerHTML="We recommend you to take the subject below: ";
              document.getElementById('result-1').style.display='block';
              document.getElementById('TextResult').innerHTML="GIG 1005 | Social Engagement";
              document.getElementById('label').style.display='block';
              btn_value="GIG 1005 | Social Engagement";
              localStorage.setItem("value",btn_value);

            }else if(Take&&APKsubject){
              HideAnswer();
              Q_area.innerHTML='';
              Q_area.innerHTML="We recommend you to take the subject below: ";
              document.getElementById('result-1').style.display='block';
              document.getElementById('TextResult').innerHTML="GIG 1003 | Basic Entrepreneurship Enculturation";
              document.getElementById('label').style.display='block';
              btn_value="GIG 1003 | Basic Entrepreneurship Enculturation";
              localStorage.setItem("value",btn_value);
            }else if(Take&&ILsubject){
              HideAnswer();
              Q_area.innerHTML='';
              Q_area.innerHTML="We recommend you to take the subject below: ";
              document.getElementById('result-1').style.display='block';
              document.getElementById('TextResult').innerHTML="GIG 1004 | Information Literacy";
              document.getElementById('label').style.display='block';
              btn_value="GIG 1004 | Information Literacy";
              localStorage.setItem("value",btn_value);
            }else if(Take&&STEMsubject){
              HideAnswer();
              Q_area.innerHTML='';
              Q_area.innerHTML="We recommend you to take the subject below: ";
              document.getElementById('result-1').style.display='block';
              document.getElementById('TextResult').innerHTML="GIX 1004 | STEM Appreciation";
              document.getElementById('label').style.display='block';
              btn_value="GIX 1004 | STEM Appreciation";
              localStorage.setItem("value",btn_value);
            }else if(Drop){
              Q_area.innerHTML='';
              HideAnswer();
                document.getElementById("Explain").innerHTML="<h1>I'm Sorry, before taking any of this subject you should drop any 2 credit subject";
              }
          }else{
            current=5;
            var question=all_questions[current].question_string;
            Q_area.innerHTML='';
            Q_area.innerHTML=question;
            answers=all_questions[current].choices;
            for(var i =0;i<answers.length;i+=1){
              CheckBox[i].style.display='block';
              Option[i].innerHTML=all_questions[current].choices[i];
            }       CheckValueForCheckBox();
                  
                  if(SE&&IL&&APK&&KoK){
                    Q_area.innerHTML='';
                    HideAnswer();
                    Q_area.innerHTML=all_questions[14].question_string;
                    answers=all_questions[14].choices;
                    for(var i =0;i<answers.length;i+=1){
                      RadSel[i].style.display='block';
                      RadText[i].innerHTML=all_questions[14].choices[i];
                    }
                    CheckValueForRadio();
                    InferenceEngine();
                        if(HE){
                          HideAnswer();
                          Q_area.innerHTML='';
                          Q_area.innerHTML="We recommend you to take the subject below: ";
                          document.getElementById('result-1').style.display='block';
                          document.getElementById('TextResult').innerHTML="GIG 1001 | Islamic Civilization and Asian Civilization";
                          document.getElementById('label').style.display='block';
                          btn_value="GIG 1001 | Islamic Civilization and Asian Civilization";
                          localStorage.setItem("value",btn_value);
                        }else if(TITAS){
                          HideAnswer();
                          Q_area.innerHTML='';
                          Q_area.innerHTML="We recommend you to take the subject below: ";
                          document.getElementById('result-1').style.display='block';
                          document.getElementById('TextResult').innerHTML="GIG 1002 | Ethnic Relation";
                          document.getElementById('label').style.display='block';
                          btn_value="GIG 1002 | Ethnic Relation";
                          localStorage.setItem("value",btn_value);
                        }else if(Both){
                          HideAnswer();
                          Q_area.innerHTML='';                   
                          Q_area.innerHTML=all_questions[16].question_string;
                          answers=all_questions[16].choices;
                          for(var i =0;i<answers.length;i+=1){
                          RadSel[i].style.display='block';
                          RadText[i].innerHTML=all_questions[16].choices[i];
                            }
                          CheckValueForRadio();
                              if(STEM){
                                HideAnswer();
                                answers=all_questions[6].choices;
                                question=all_questions[6].question_string;
                                Q_area.innerHTML='';
                                Q_area.innerHTML=question;
                                for(var i =0;i<answers.length;i+=1){
                                  RadSel[i].style.display='block';
                                  RadText[i].innerHTML=all_questions[6].choices[i];
                                }
                                CheckValueForRadio();
                                if(Take){
                                  HideAnswer();
                                    Q_area.innerHTML='';
                                    Q_area.innerHTML="We recommend you to take the subject below: ";
                                    document.getElementById('result-1').style.display='block';
                                    document.getElementById('TextResult').innerHTML="GIX 1003 | Introduction to Peace and Humanitarian";
                                    document.getElementById('label').style.display='block';
                                    btn_value="GIX 1003 | Introduction to Peace and Humanitarian";
                                    localStorage.setItem("value",btn_value);
                                }else if(Drop){
                                  Q_area.innerHTML='';
                                  HideAnswer();
                                    document.getElementById("Explain").innerHTML="<h1>I'm Sorry, before taking any of this subject you should drop any 2 credit subject";
                                  }
                              }else if(IPH){
                                HideAnswer();
                                answers=all_questions[6].choices;
                                question=all_questions[6].question_string;
                                Q_area.innerHTML='';
                                Q_area.innerHTML=question;
                                for(var i =0;i<answers.length;i+=1){
                                  RadSel[i].style.display='block';
                                  RadText[i].innerHTML=all_questions[6].choices[i];
                                }
                                CheckValueForRadio();
                                if(Take){
                                  HideAnswer();
                                  Q_area.innerHTML='';
                                  Q_area.innerHTML="We recommend you to take the subject below: ";
                                  document.getElementById('result-1').style.display='block';
                                  document.getElementById('TextResult').innerHTML="GIX 1004 | STEM Appreciation";
                                  document.getElementById('label').style.display='block';
                                  btn_value="GIX 1004 | STEM Appreciation";
                                  localStorage.setItem("value",btn_value);
                                }else if(Drop){
                                  Q_area.innerHTML='';
                                  HideAnswer();
                                    document.getElementById("Explain").innerHTML="<h1>I'm Sorry, before taking any of this subject you should drop any 2 credit subject";
                                  }
                                
                              }else if(None){
                                HideAnswer();
                                answers=all_questions[6].choices;
                                question=all_questions[6].question_string;
                                Q_area.innerHTML='';
                                Q_area.innerHTML=question;
                                for(var i =0;i<answers.length;i+=1){
                                  RadSel[i].style.display='block';
                                  RadText[i].innerHTML=all_questions[6].choices[i];
                                }
                                CheckValueForRadio();
                                if(Take){
                                  HideAnswer();
                                  Q_area.innerHTML='';
                                  Q_area.innerHTML="We recommend you to take the subject below: ";
                                  document.getElementById('result-1').style.display='block';
                                  document.getElementById('TextResult').innerHTML="GIX 1004 | STEM Appreciation";
                                  document.getElementById('label').style.display='block';
                                  document.getElementById('result-2').style.display='block';
                                  document.getElementById('TextResult2').innerHTML="GIX 1003 | Introduction to Peace and Humanitarian";
                                  btn_value="GIX 1004 | STEM Appreciation";
                                  localStorage.setItem("value",btn_value);
                                  btn_value2="GIX 1003 | Introduction to Peace and Humanitarian";
                                  localStorage.setItem("value2",btn_value2);
  
                                }else if(Drop){
                                  Q_area.innerHTML='';
                                  HideAnswer();
                                    document.getElementById("Explain").innerHTML="<h1>I'm Sorry, before taking any of this subject you should drop any 2 credit subject";
                                }
  
                              }
                        }
                    }else if(SE&&IL&&APK){
                      current=7
                      Q_area.innerHTML='';
                      HideAnswer();
                      Q_area.innerHTML=all_questions[current].question_string;
                      answers=all_questions[current].choices;
                      for(var i =0;i<answers.length;i+=1){
                        RadSel[i].style.display='block';
                        RadText[i].innerHTML=all_questions[current].choices[i];
                      }
                        CheckValueForRadio();
                        if(Sport){//Look this up
                          current=8;
                          Q_area.innerHTML='';
                          HideAnswer();
                          Q_area.innerHTML=all_questions[current].question_string;
                          answers=all_questions[current].choices;
                          for(var i =0;i<answers.length;i+=1){
                            RadSel[i].style.display='block';
                            RadText[i].innerHTML=all_questions[current].choices[i];
                          }
                          CheckValueForRadio();
                            if(e_S){
                              answers=all_questions[6].choices;
                              question=all_questions[6].question_string;
                              Q_area.innerHTML='';
                              Q_area.innerHTML=question;
                              for(var i =0;i<answers.length;i+=1){
                                RadSel[i].style.display='block';
                                RadText[i].innerHTML=all_questions[6].choices[i];
                              }
                              CheckValueForRadio();
                              if(Take){
                                HideAnswer();
                                Q_area.innerHTML='';
                                Q_area.innerHTML="We recommend you to take the subject below: ";
                                document.getElementById('result-1').style.display='block';
                                document.getElementById('TextResult').innerHTML="GKK 1001 | Talent Development";
                                document.getElementById('label').style.display='block';
                                btn_value="GKK 1001 | Talent Development";
                                localStorage.setItem("value",btn_value);
                                Interest="esport";
                                localStorage.setItem("Interest", Interest);
                                
                              }else if(Drop){
                                Q_area.innerHTML='';
                                HideAnswer();
                                  document.getElementById("Explain").innerHTML="<h1>I'm Sorry, before taking any of this subject you should drop any 2 credit subject";
                                }
                            }else if(Outdoor){
                              HideAnswer();
                              answers=all_questions[11].choices;
                              question=all_questions[11].question_string;
                              Q_area.innerHTML='';
                              Q_area.innerHTML=question;
                              for(var i =0;i<answers.length;i+=1){
                                RadSel[i].style.display='block';
                                RadText[i].innerHTML=all_questions[11].choices[i];
                              }
                              CheckValueForRadio(); 
                              if(Fb||rug||Fbee||Vball){
                                answers=all_questions[6].choices;
                                question=all_questions[6].question_string;
                                Q_area.innerHTML='';
                                Q_area.innerHTML=question;
                                for(var i =0;i<answers.length;i+=1){
                                  RadSel[i].style.display='block';
                                  RadText[i].innerHTML=all_questions[6].choices[i];
                                }
                                CheckValueForRadio();
                                if(Take&&Fb){
                                  HideAnswer();
                                  Q_area.innerHTML='';
                                  Q_area.innerHTML="We recommend you to take the subject below: ";
                                  document.getElementById('result-1').style.display='block';
                                  document.getElementById('TextResult').innerHTML="GKK 1001 | Talent Development";
                                  document.getElementById('label').style.display='block';
                                  btn_value="GKK 1001 | Talent Development";
                                  localStorage.setItem("value",btn_value);
                                  Interest="football";
                                  localStorage.setItem("Interest", Interest);
        
                                  
                                }else if(Take&&rug){
                                  HideAnswer();
                                  Q_area.innerHTML='';
                                  Q_area.innerHTML="We recommend you to take the subject below: ";
                                  document.getElementById('result-1').style.display='block';
                                  document.getElementById('TextResult').innerHTML="GKK 1001 | Talent Development";
                                  document.getElementById('label').style.display='block';
                                  btn_value="GKK 1001 | Talent Development";
                                  localStorage.setItem("value",btn_value);
                                  Interest="rugby";
                                  localStorage.setItem("Interest", Interest);
                                }else if(Take&&Fbee){
                                  HideAnswer();
                                  Q_area.innerHTML='';
                                  Q_area.innerHTML="We recommend you to take the subject below: ";
                                  document.getElementById('result-1').style.display='block';
                                  document.getElementById('TextResult').innerHTML="GKK 1001 | Talent Development";
                                  document.getElementById('label').style.display='block';
                                  btn_value="GKK 1001 | Talent Development";
                                  localStorage.setItem("value",btn_value);
                                  Interest="Fbee";
                                  localStorage.setItem("Interest", Interest);
                                }else if(Take&&Vball){
                                  HideAnswer();
                                  Q_area.innerHTML='';
                                  Q_area.innerHTML="We recommend you to take the subject below: ";
                                  document.getElementById('result-1').style.display='block';
                                  document.getElementById('TextResult').innerHTML="GKK 1001 | Talent Development";
                                  document.getElementById('label').style.display='block';
                                  btn_value="GKK 1001 | Talent Development";
                                  localStorage.setItem("value",btn_value);
                                  Interest="volleyball";
                                  localStorage.setItem("Interest", Interest);
                                }else if(Drop){
                                  Q_area.innerHTML='';
                                  HideAnswer();
                                    document.getElementById("Explain").innerHTML="<h1>I'm Sorry, before taking any of this subject you should drop any 2 credit subject";
                                  }
    
                              }
                            }else if(Indoor){
                              HideAnswer();
                              answers=all_questions[12].choices;
                              question=all_questions[12].question_string;
                              Q_area.innerHTML='';
                              Q_area.innerHTML=question;
                              for(var i =0;i<answers.length;i+=1){
                                RadSel[i].style.display='block';
                                RadText[i].innerHTML=all_questions[12].choices[i];
                              }
                              CheckValueForRadio();
                              if(Bad_m||MA||Bball||Takraw){
                                answers=all_questions[6].choices;
                                question=all_questions[6].question_string;
                                Q_area.innerHTML='';
                                Q_area.innerHTML=question;
                                for(var i =0;i<answers.length;i+=1){
                                  RadSel[i].style.display='block';
                                  RadText[i].innerHTML=all_questions[6].choices[i];
                                }
                                CheckValueForRadio();
                                if(Take&&Bad_m){
                                  HideAnswer();
                                  Q_area.innerHTML='';
                                  Q_area.innerHTML="We recommend you to take the subject below: ";
                                  document.getElementById('result-1').style.display='block';
                                  document.getElementById('TextResult').innerHTML="GKK 1001 | Talent Development";
                                  document.getElementById('label').style.display='block';
                                  btn_value="GKK 1001 | Talent Development";
                                  localStorage.setItem("value",btn_value);
                                  Interest="badminton";
                                  localStorage.setItem("Interest", Interest);
        
                                  
                                }else if(Take&&MA){
                                  HideAnswer();
                                  Q_area.innerHTML='';
                                  Q_area.innerHTML="We recommend you to take the subject below: ";
                                  document.getElementById('result-1').style.display='block';
                                  document.getElementById('TextResult').innerHTML="GKK 1001 | Talent Development";
                                  document.getElementById('label').style.display='block';
                                  btn_value="GKK 1001 | Talent Development";
                                  localStorage.setItem("value",btn_value);
                                  Interest="martialarts";
                                  localStorage.setItem("Interest", Interest);
                                }else if(Take&&Bball){
                                  HideAnswer();
                                  Q_area.innerHTML='';
                                  Q_area.innerHTML="We recommend you to take the subject below: ";
                                  document.getElementById('result-1').style.display='block';
                                  document.getElementById('TextResult').innerHTML="GKK 1001 | Talent Development";
                                  document.getElementById('label').style.display='block';
                                  btn_value="GKK 1001 | Talent Development";
                                  localStorage.setItem("value",btn_value);
                                  Interest="basketball";
                                  localStorage.setItem("Interest", Interest);
                                }else if(Take&&Takraw){
                                  HideAnswer();
                                  Q_area.innerHTML='';
                                  Q_area.innerHTML="We recommend you to take the subject below: ";
                                  document.getElementById('result-1').style.display='block';
                                  document.getElementById('TextResult').innerHTML="GKK 1001 | Talent Development";
                                  document.getElementById('label').style.display='block';
                                  btn_value="GKK 1001 | Talent Development";
                                  localStorage.setItem("value",btn_value);
                                  Interest="takraw";
                                  localStorage.setItem("Interest", Interest);
                                }else if(Drop){
                                  Q_area.innerHTML='';
                                  HideAnswer();
                                    document.getElementById("Explain").innerHTML="<h1>I'm Sorry, before taking any of this subject you should drop any 2 credit subject";
                                  }                              
    
                              }
                            }
                          
                        }else if(Arts1){
                          HideAnswer();
                          answers=all_questions[9].choices;
                          question=all_questions[9].question_string;
                          Q_area.innerHTML='';
                          Q_area.innerHTML=question;
                          for(var i =0;i<answers.length;i+=1){
                            RadSel[i].style.display='block';
                            RadText[i].innerHTML=all_questions[9].choices[i];
                          }
                          CheckValueForRadio();  
                          if(Music||Draw||Dance){
                            answers=all_questions[6].choices;
                                question=all_questions[6].question_string;
                                Q_area.innerHTML='';
                                Q_area.innerHTML=question;
                                for(var i =0;i<answers.length;i+=1){
                                  RadSel[i].style.display='block';
                                  RadText[i].innerHTML=all_questions[6].choices[i];
                                }
                                CheckValueForRadio();
                                if(Take&&Music){
                                  HideAnswer();
                                  Q_area.innerHTML='';
                                  Q_area.innerHTML="We recommend you to take the subject below: ";
                                  document.getElementById('result-1').style.display='block';
                                  document.getElementById('TextResult').innerHTML="GKK 1001 | Talent Development";
                                  document.getElementById('label').style.display='block';
                                  btn_value="GKK 1001 | Talent Development";
                                  localStorage.setItem("value",btn_value);
                                  Interest="music";
                                  localStorage.setItem("Interest", Interest);
        
                                  
                                }else if(Take&&Dance){
                                  HideAnswer();
                                  Q_area.innerHTML='';
                                  Q_area.innerHTML="We recommend you to take the subject below: ";
                                  document.getElementById('result-1').style.display='block';
                                  document.getElementById('TextResult').innerHTML="GKK 1001 | Talent Development";
                                  document.getElementById('label').style.display='block';

                                  btn_value="GKK 1001 | Talent Development";
                                  localStorage.setItem("value",btn_value);
                                  Interest="dance";
                                  localStorage.setItem("Interest", Interest);
                                }else if(Drop){
                                  Q_area.innerHTML='';
                                  HideAnswer();
                                    document.getElementById("Explain").innerHTML="<h1>I'm Sorry, before taking any of this subject you should drop any 2 credit subject";
                                  }
    
                          }
                        }else if(Lship){
                          HideAnswer();
                          answers=all_questions[10].choices;
                          question=all_questions[10].question_string;
                          Q_area.innerHTML='';
                          Q_area.innerHTML=question;
                          for(var i =0;i<answers.length;i+=1){
                            RadSel[i].style.display='block';
                            RadText[i].innerHTML=all_questions[10].choices[i];
                          }
                          CheckValueForRadio();                       
    
                          if(WPT){
                            HideAnswer();
                            answers=all_questions[6].choices;
                            question=all_questions[6].question_string;
                            Q_area.innerHTML='';
                            Q_area.innerHTML=question;
                            for(var i =0;i<answers.length;i+=1){
                              RadSel[i].style.display='block';
                              RadText[i].innerHTML=all_questions[6].choices[i];
                            }
                            CheckValueForRadio();
                            if(Take){
                              HideAnswer();
                              Q_area.innerHTML='';
                              Q_area.innerHTML="We recommend you to take the subject below: ";
                              document.getElementById('result-1').style.display='block';
                              document.getElementById('TextResult').innerHTML="GKA 1001 | Attach@Industry";
                              document.getElementById('label').style.display='block';
                              btn_value="GKK 1001 | Talent Development";
                              localStorage.setItem("value",btn_value);
                            }else if(Drop){
                              Q_area.innerHTML='';
                              HideAnswer();
                                document.getElementById("Explain").innerHTML="<h1>I'm Sorry, before taking any of this subject you should drop any 2 credit subject";
                              }
    
                          }else if(Freelance){
                            HideAnswer();
                            answers=all_questions[6].choices;
                            question=all_questions[6].question_string;
                            Q_area.innerHTML='';
                            Q_area.innerHTML=question;
                            for(var i =0;i<answers.length;i+=1){
                              RadSel[i].style.display='block';
                              RadText[i].innerHTML=all_questions[6].choices[i];
                            }
                            CheckValueForRadio();
                            if(Take){
                              HideAnswer();
                              Q_area.innerHTML='';
                              Q_area.innerHTML="We recommend you to take the subject below: ";
                              document.getElementById('result-1').style.display='block';
                              document.getElementById('TextResult').innerHTML="GKN 1002 | Independent Research";
                              document.getElementById('label').style.display='block';
                              
                              document.getElementById('result-3').style.display='block';
                              document.getElementById('TextResult3').innerHTML="GKU 1001 | Student Enterpreneurship";
                              btn_value="GKN 1002 | Independent Research";
                              localStorage.setItem("value",btn_value);
                              btn_value2="GKU 1001 | Student Enterpreneurship";
                              localStorage.setItem("Interest", btn_value2);
  
                            }else if(Drop){
                              Q_area.innerHTML='';
                              HideAnswer();
                                document.getElementById("Explain").innerHTML="<h1>I'm Sorry, before taking any of this subject you should drop any 2 credit subject";
                              }                    
                          }
    
                        } 
                    }else if(SE&&IL){
                      
                      HideAnswer();
                      answers=all_questions[6].choices;
                      question=all_questions[6].question_string;
                      Q_area.innerHTML='';
                      Q_area.innerHTML=question;
                      for(var i =0;i<answers.length;i+=1){
                        RadSel[i].style.display='block';
                        RadText[i].innerHTML=all_questions[6].choices[i];
                      }
                      CheckValueForRadio();
                      if(Take){
                        HideAnswer();
                        Q_area.innerHTML='';
                        Q_area.innerHTML="We recommend you to take the subject below: ";
                        document.getElementById('result-1').style.display='block';
                        document.getElementById('TextResult').innerHTML="GIG 1003 | Basic Entrepreneurship Enculturation";
                        document.getElementById('label').style.display='block';
                        btn_value="GIG 1003 | Basic Entrepreneurship Enculturation";
                        localStorage.setItem("value",btn_value);
                      }else if (Drop){
                        Q_area.innerHTML='';
                        HideAnswer();
                        document.getElementById("Explain").innerHTML="<h1>I'm Sorry, before taking any of this subject you should drop any 2 credit subject";
                      }
                      
  
            
                    }else if(SE&&APK){
                          HideAnswer();
                          answers=all_questions[6].choices;
                          question=all_questions[6].question_string;
                          Q_area.innerHTML='';
                          Q_area.innerHTML=question;
                          for(var i =0;i<answers.length;i+=1){
                            RadSel[i].style.display='block';
                            RadText[i].innerHTML=all_questions[6].choices[i];
                          }
                          CheckValueForRadio();
                          if(Take){
                            HideAnswer();
                            Q_area.innerHTML='';
                            Q_area.innerHTML="We recommend you to take the subject below: ";
                            document.getElementById('result-1').style.display='block';
                            document.getElementById('TextResult').innerHTML="GIG 1004 | Information Literacy";
                            document.getElementById('label').style.display='block';
                            btn_value="GIG 1004 | Information Literacy";
                            localStorage.setItem("value",btn_value);
                          }else if (Drop){
                            Q_area.innerHTML='';
                            HideAnswer();
                            document.getElementById("Explain").innerHTML="<h1>I'm Sorry, before taking any of this subject you should drop any 2 credit subject";
                          }
                          
                    }else if(IL&&APK){
                          HideAnswer();
                          answers=all_questions[6].choices;
                          question=all_questions[6].question_string;
                          Q_area.innerHTML='';
                          Q_area.innerHTML=question;
                          for(var i =0;i<answers.length;i+=1){
                            RadSel[i].style.display='block';
                            RadText[i].innerHTML=all_questions[6].choices[i];
                          }
                          CheckValueForRadio();
                          if(Take){
                            HideAnswer();
                            Q_area.innerHTML='';
                            Q_area.innerHTML="We recommend you to take the subject below: ";
                            document.getElementById('result-1').style.display='block';
                            document.getElementById('TextResult').innerHTML="GIG 1005 | Social Engagement";
                            document.getElementById('label').style.display='block';
                            btn_value="GIG 1005 | Social Engagement";
                            localStorage.setItem("value",btn_value);
                          }else if (Drop){
                            Q_area.innerHTML='';
                            HideAnswer();
                            document.getElementById("Explain").innerHTML="<h1>I'm Sorry, before taking any of this subject you should drop any 2 credit subject";
                          }
                          
                    }else if(SE){
                          HideAnswer();
                          answers=all_questions[6].choices;
                          question=all_questions[6].question_string;
                          Q_area.innerHTML='';
                          Q_area.innerHTML=question;
                          for(var i =0;i<answers.length;i+=1){
                            RadSel[i].style.display='block';
                            RadText[i].innerHTML=all_questions[6].choices[i];
                          }
                          CheckValueForRadio();
                          if(Take){
                            HideAnswer();
                            Q_area.innerHTML='';
                            Q_area.innerHTML="We recommend you to take the subject below: ";
                            document.getElementById('result-1').style.display='block';
                            document.getElementById('TextResult').innerHTML="GIG 1004 | Information Literacy";
                            document.getElementById('label').style.display='block';
  
                            document.getElementById('result-2').style.display='block';
                            document.getElementById('TextResult2').innerHTML="GIG 1003 | Basic Entrepreneurship Enculturation";
                            btn_value="GIG 1004 | Information Literacy";
                            localStorage.setItem("value",btn_value);
                            btn_value2="GIG 1003 | Basic Entrepreneurship Enculturation"
                            localStorage.setItem("value2",btn_value2);
                          }else if (Drop){
                            Q_area.innerHTML='';
                            HideAnswer();
                            document.getElementById("Explain").innerHTML="<h1>I'm Sorry, before taking any of this subject you should drop any 2 credit subject";
                          }
                      
                    }else if(APK){
                      HideAnswer();
                          answers=all_questions[6].choices;
                          question=all_questions[6].question_string;
                          Q_area.innerHTML='';
                          Q_area.innerHTML=question;
                          for(var i =0;i<answers.length;i+=1){
                            RadSel[i].style.display='block';
                            RadText[i].innerHTML=all_questions[6].choices[i];
                          }
                          CheckValueForRadio();
                      if(Take){
                        HideAnswer();
                        Q_area.innerHTML='';
                        Q_area.innerHTML="We recommend you to take the subject below: ";
                        document.getElementById('result-1').style.display='block';
                        document.getElementById('TextResult').innerHTML="GIG 1004 | Information Literacy";
                        document.getElementById('label').style.display='block';
    
                        document.getElementById('result-2').style.display='block';
                        document.getElementById('TextResult2').innerHTML="GIG 1005 | Social Engagement";
                        btn_value="GIG 1004 | Information Literacy";
                            localStorage.setItem("value",btn_value);
                            btn_value2="GIG 1005 | Social Engagement"
                            localStorage.setItem("value2",btn_value2);
                      }else if (Drop){
                        Q_area.innerHTML='';
                        HideAnswer();
                        document.getElementById("Explain").innerHTML="<h1>I'm Sorry, before taking any of this subject you should drop any 2 credit subject";
                      }
                      
                    }else if(IL){
                      HideAnswer();
                          answers=all_questions[6].choices;
                          question=all_questions[6].question_string;
                          Q_area.innerHTML='';
                          Q_area.innerHTML=question;
                          for(var i =0;i<answers.length;i+=1){
                            RadSel[i].style.display='block';
                            RadText[i].innerHTML=all_questions[6].choices[i];
                          }
                          CheckValueForRadio();
                      if(Take){
                        HideAnswer();
                        Q_area.innerHTML='';
                        Q_area.innerHTML="We recommend you to take the subject below: ";
                        document.getElementById('result-1').style.display='block';
                        document.getElementById('TextResult').innerHTML="GIG 1003 | Basic Entrepreneurship Enculturationss";
                        document.getElementById('label').style.display='block';
  
                        document.getElementById('result-2').style.display='block';
                        document.getElementById('TextResult2').innerHTML="GIG 1005 | Social Engagement";
                        btn_value="GIG 1003 | Basic Entrepreneurship Enculturation";
                        localStorage.setItem("value",btn_value);
                        btn_value2="GIG 1005 | Social Engagement"
                        localStorage.setItem("value2",btn_value2);    
                      }else if (Drop){
                        Q_area.innerHTML='';
                        HideAnswer();
                        document.getElementById("Explain").innerHTML="<h1>I'm Sorry, before taking any of this subject you should drop any 2 credit subject";
                      }

                    }
          }

        }
        else{
          Q_area.innerHTML='';
          Q_area.innerHTML=question;
          answers=all_questions[current].choices;
          HideAnswer();
  
          if(current==5){
            for(var i =0;i<answers.length;i+=1){
              CheckBox[i].style.display='block';
              Option[i].innerHTML=all_questions[current].choices[i];
            }
          }else{
            for(var i =0;i<answers.length;i+=1){
              RadSel[i].style.display='block';
              RadText[i].innerHTML=all_questions[current].choices[i];
            }
            
            
            }
            InferenceEngine();
          }}else{
            console.log("Please choose an answer");
          }    
}


function CheckValueForRadio(){
  if(document.getElementById('radio_1').checked){
    var value = radio_d1.innerHTML;
    if(value=="First year"){
      Freshman=true;
    }
    if(value=="Science Stream"){
        Sceince=true;
        return current+=1;
    }
    if(value=="Science,Medicine,Computer Science,Engineering"){
      Sceince=true;
    }
    if(value=="Yes, I'm Local"){
        local=true;
    }
    if(value=="Ethnic Relation(HE)"){
        HE=true;
    }
    if(value=="Exactly 22"){
      Drop=true;
    }
    if(value=="Sports"){
      Sport=true;
    }
    if(value=="e-Sports"){
      e_S=true;
    }
    if(value=="Music"){
      Music=true;
    }
    if(value=="Working part-time"){
      WPT=true;
    }
    if(value=="Badminton"){
      Bad_m=true;
    }
    if(value=="Yes"){
      IM=true;
    }
    if(value=="STEM Appreciation"){
      STEM=true;
    }
    if(value=="Football"){
      Fb=true;
    }
  }
  if(document.getElementById('radio_2').checked){
  
    var value = radio_d2.innerHTML;
   if(value=="Second year"){
     Senior=true;
    }
    if(value=="Art Stream"){
      Art=true;
      return current+=1;
    }
    if(value=='Less than 22'){
      Take=true;
    }
    if(value=="Social Science,Linguistic"){
      Art=true;
    }
    if(value=="International Student"){
      Nonlocal=true;
    }
    if(value=="TITAS"){
      TITAS=true;
    }
    if(value=="Arts"){
      Arts1=true;
    }
    if(value=="Outdoor sports"){
      Outdoor=true;
    }
    if(value=="Drawing"){
      Draw=true;
    }
    if(value=="Freelance"){
      Freelance=true;
    }
    if(value=="Rugby"){
      rug=true;
    }
    if(value=="Martial arts"){
      MA=true;
    }
    if(value=="No"){
      No=true;
    }
    if(value=="Introduction to Peace and Humanitarian")
    IPH=true;
  }
  if(document.getElementById('radio_3').checked){
    
    var value = radio_d3.innerHTML;
    if(value=="Third year"){
      Senior=true;
    }
    if(value=="API,APM,Sport"){
      Art=true;
    }
    if(value=="None above"){
        None=true;
    }
    if(value=='less than 18'){
      Take=true;
    }
    if(value=="Leadership"){
      Lship=true;
    }
    if(value=="indoor sports"){
      Indoor=true;
    }
    if(value=="Dancing"){
        Dance=true;
    }
    if(value=='Freesbee'){
      Fbee=true;
    }
    if(value=='Basketball'){
      Bball=true;
    }
    if(value=="Both"){
      Both=true;
    }
  }

  if(document.getElementById('radio_4').checked){
    var value = radio_d4.innerHTML;
    if(value=="Fourth year"){
      Senior=true;
    }
    if(value=="More than 22"){
      Drop=true;
    }
    if(value=="Bussiness,Law,Education"){
      Art=true;
    }
    if(value=="Volleyball"){
      Vball=true;
    }
    if(value='Takraw'){
      Takr=true;
    }

}
}

function CheckValueForCheckBox(){
  if(document.getElementById('option1').checked){
    var value = option1_text.innerHTML;
    if(value=='Social Engagement'){
      SE=true;
    }
  }
  if(document.getElementById('option2').checked){
    var value = option2_text.innerHTML;
    if(value=='Information Literacy'){
      IL=true;
    }
  }
  if(document.getElementById('option3').checked){
    var value = option3_text.innerHTML;
    if(value=='Enterpernueship'){
      APK=true;
    }
  }
  if(document.getElementById('option4').checked){
  
    var value = option4_text.innerHTML;
    if(value=='Ko-K'){
    KoK=true;
    }
  }
}

function InferenceEngine(){
 
  if(Freshman==true 
    && Sceince==true 
    && local==true)
    {
            FSL=true;
    }else if
    (Freshman==true 
      && Sceince==true 
      && local==true)
      {
            FSL=true
  } else if
  (Freshman==true 
    && Sceince==true 
    && local==true)
    {
      FSL=true;
  }else if
  (Freshman==true 
    && Art==true 
    && local==true)
    {
      FAL=true;
  }else if
  (Freshman==true 
    && Art==true 
    && local==true)
    {
      FAL=true;
    
  }else if
  (Freshman==true 
    && Art==true 
    && local==true){
      FAL=true;
    
  }else if
  (Freshman==true 
    && Sceince==true 
    && Nonlocal==true){
      FSNL=true;
      
  }else if(
    Freshman==true 
    && Art==true 
    && Nonlocal==true){
      FANL=true;
    }else if(Senior
      &&Sceince
      &&local){
        SSL=true;
    }else if(
      Senior 
      &&Art
      &&local
    ){
        SAL=true;
    }else if(
      Senior
      &&Sceince
      &&Nonlocal
    ){
      SSNL=true;
    }else if(
      Senior
      &&Art
      &&Nonlocal
    ){
      SANL=true;
    }
  }
  

  function HideAnswer(){
    for (var i=0;i<8;i+=1){
      inputGroup[i].style.display='none';
    }
  }


  function factReset(){
    Freshman=false, 
    Senior=false,
    Sceince=false,
    Art=false,
    local=false,
    HE=false,
    IL=false,
    TITAS=false,
    SE=false,
    APK=false,
    None=false,
    Nonlocal=false,
    SSNL=false,
    SSL=false,
    SAL=false,
    SANL=false,
    SSNL=false,
    FANL=false,
    FSNL=false,
    FSL=false,
    FAL=false,
    Take=false,
    Drop=false,
    KoK=false,
    Sport=false,
    Indoor=false,
    Outdoor=false,
    Arts1=false,
    Lship=false,
    e_S=false,
    Music=false,
    Draw=false,
    Dance=false,
    WPT=false,
    Freelance=false,
    Fb=false,
    rug=false,
    Fbee=false,
    Vball=false,
    Bad_m=false,
    MA=false,
    Bball=false,
    Takr=false,
    IM=false,
    No=false;
  }

  function SubjectGet(){
    
    location.replace("https://citra-knowledge-base-system.herokuapp.com/Result/")
    
}
