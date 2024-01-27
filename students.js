const sheetId = '1OQyGg_udAZ28CCndUV1dPtLFmBoLfMwdWNaw7PO-2q0';
const Script = 'https://script.google.com/macros/s/AKfycbzh3A5oGxthqpHQE12HncCvq6Lk7Q5x9QoSR79tdo4jnGaCFUHf8TT2j339pPVuWUPDLg/exec'
const base = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?`;
let query = encodeURIComponent('Select *');
let Schools="Schools";
let UrlSchools = `${base}&sheet=${Schools}&tq=${query}`;
let DataSchools = [];
let Data0="Data";
let UrlData0 = `${base}&sheet=${Data0}&tq=${query}`;
let DataData0 = [];
let Setting="Setting";
let UrlSetting = `${base}&sheet=${Setting}&tq=${query}`;
let DataSetting = [];
let Teaching="Teaching";
let UrlTeaching = `${base}&sheet=${Teaching}&tq=${query}`;
let DataTeaching = [];
let Mats="Mats";
let UrlMats = `${base}&sheet=${Mats}&tq=${query}`;
let DataMats = [];

document.addEventListener('DOMContentLoaded', init)
function init() {
  let FormLoad=document.getElementById("FormLoad");
  let Loading=document.getElementById("LoadingFormBrowser");
  Loading.className="fa fa-refresh fa-spin";
  ConvertMode();
  LoadSetting();
  LoadSchools();
  LoadMats();
  LoadTeaching();
  LoadDate0();
  const myTimeout = setTimeout(function(){ 
    FormLoad.style.display="none";
    Loading.className="fa fa-refresh";
  clearTimeout(myTimeout);
}, 2500);
}

// ********************SalesWi
function LoadSetting(){
  DataSetting=[];
  fetch(UrlSetting)
  .then(res => res.text())
  .then(rep => {
      const jsonSetting = JSON.parse(rep.substring(47).slice(0, -2));
      const colzSetting = [];
      jsonSetting.table.cols.forEach((headingSetting) => {
          if (headingSetting.label) {
              let columnSetting = headingSetting.label;
              colzSetting.push(columnSetting);
          }
      })
      jsonSetting.table.rows.forEach((rowData1) => {
          const rowSetting = {};
          colzSetting.forEach((ele, ind) => {
              rowSetting[ele] = (rowData1.c[ind] != null) ? rowData1.c[ind].v : '';
          })
          DataSetting.push(rowSetting);
      })
      LoadSettingName();
  })
}

function LoadSettingName(){
  let MainLabel =document.getElementById("MainLabel");
  MainLabel.textContent=DataSetting[0].MainAdress;
  let MainLabel2 =document.getElementById("MainLabel2");
  MainLabel2.textContent=DataSetting[1].MainAdress;
}

function LoadSchools(){
  DataSchools=[];
  fetch(UrlSchools)
  .then(res => res.text())
  .then(rep => {
      const jsonSchools = JSON.parse(rep.substring(47).slice(0, -2));
      const colzSchools = [];
      jsonSchools.table.cols.forEach((headingSchools) => {
          if (headingSchools.label) {
              let columnSchools = headingSchools.label;
              colzSchools.push(columnSchools);
          }
      })
      jsonSchools.table.rows.forEach((rowSchools) => {
          const rowSchools0 = {};
          colzSchools.forEach((ele, ind) => {
              rowSchools0[ele] = (rowSchools.c[ind] != null) ? rowSchools.c[ind].v : '';
          })
          DataSchools.push(rowSchools0);
      })
      LoadSchoolsName();
  })
}

function LoadSchoolsName(){
  let Num,SchoolName,ISOK;
  let SchoolNameE =document.getElementById("SchoolName");
  SchoolNameE.innerHTML="";
  for (let index = 0; index < DataSchools.length; index++) {
    Num=DataSchools[index].Num;
    SchoolName=DataSchools[index].SchoolName;
    ISOK=DataSchools[index].ISOK;
    if(Num!="" ){
      optionClass=document.createElement("option");
      optionClass.value=SchoolName;
      optionClass.textContent=SchoolName;
      optionClass.id="SchoolNameE"&index;
      SchoolNameE.appendChild(optionClass);
      if(ISOK==false ){
        document.getElementById("SchoolNameE"&index).disabled=true;
        document.getElementById("SchoolNameE"&index).className="NotEnable";
      }
    }
  }
  SchoolNameE.value="";
}

function GetAdress(SChoolN){
  let Num,SchoolName,Adress;
  let AdressE=document.getElementById("Adress");
  for (let index = 0; index < DataSchools.length; index++) {
    Num=DataSchools[index].Num;
    SchoolName=DataSchools[index].SchoolName;
    Adress=DataSchools[index].Adress;
    if(SchoolName==SChoolN.value ){
      AdressE.value=Adress;
    }
  }
}

function LoadMats(){
  DataMats=[];
  fetch(UrlMats)
  .then(res => res.text())
  .then(rep => {
      const jsonMats = JSON.parse(rep.substring(47).slice(0, -2));
      const colzMats = [];
      jsonMats.table.cols.forEach((headingMats) => {
          if (headingMats.label) {
              let columnMats = headingMats.label;
              colzMats.push(columnMats);
          }
      })
      jsonMats.table.rows.forEach((rowMats) => {
          const rowMats0 = {};
          colzMats.forEach((ele, ind) => {
              rowMats0[ele] = (rowMats.c[ind] != null) ? rowMats.c[ind].v : '';
          })
          DataMats.push(rowMats0);
      })
      LoadMatsName();
  })
}

function LoadMatsName(){
  let Num,MatName;
  let MatNameE =document.getElementById("MatName");
  MatNameE.innerHTML="";
  for (let index = 0; index < DataMats.length; index++) {
    Num=DataMats[index].Num;
    MatName=DataMats[index].MatName;
    if(Num!="" && Num!=1){
      optionClass=document.createElement("option");
      optionClass.value=MatName;
      optionClass.textContent=MatName;
      MatNameE.appendChild(optionClass);
    }
  }
  MatNameE.value="";
}

function LoadTeaching(){
  DataTeaching=[];
  fetch(UrlTeaching)
  .then(res => res.text())
  .then(rep => {
      const jsonTeach = JSON.parse(rep.substring(47).slice(0, -2));
      const colzTeach = [];
      jsonTeach.table.cols.forEach((headingTeach) => {
          if (headingTeach.label) {
              let columnTeach = headingTeach.label;
              colzTeach.push(columnTeach);
          }
      })
      jsonTeach.table.rows.forEach((rowTeach) => {
          const rowTeach0 = {};
          colzTeach.forEach((ele, ind) => {
              rowTeach0[ele] = (rowTeach.c[ind] != null) ? rowTeach.c[ind].v : '';
          })
          DataTeaching.push(rowTeach0);
      })
  })
}

function GetTeachName(MatN){
  let MatName,MatTeacher;
  let MatTeacherE=document.getElementById("MatTeacher");
  MatTeacherE.innerHTML="";
  for (let index = 0; index < DataTeaching.length; index++) {
    MatName=DataTeaching[index].MatName;
    MatTeacher=DataTeaching[index].MatTeacher;
    if(MatName==MatN.value ){
      optionClass=document.createElement("option");
      optionClass.value=MatTeacher;
      optionClass.textContent=MatTeacher;
      MatTeacherE.appendChild(optionClass);
    }
  }
  MatTeacherE.value=""
}

function ClearItemSa(){
   document.getElementById("SchoolName").value="";
   document.getElementById("Adress").value="";
   document.getElementById("StudentName").value="";
   document.getElementById("UniNumber").value="";
   document.getElementById("Class").value="";
   document.getElementById("MatName").value="";
   document.getElementById("MatTeacher").value="";
}

function IstrueDataInformS(){
  let SchoolName=document.getElementById("SchoolName");
  let Adress=document.getElementById("Adress");
  let StudentName=document.getElementById("StudentName");
  let UniNumber=document.getElementById("UniNumber");
  let Class=document.getElementById("Class");
  let MatName=document.getElementById("MatName");
  let MatTeacher=document.getElementById("MatTeacher");
  if(SchoolName.value==""){SchoolName.style.border="2px solid #ff0000";return false}else{SchoolName.style.border="none";}
  if(Adress.value==""){Adress.style.border="2px solid #ff0000";return false}else{Adress.style.border="none";}
  if(StudentName.value==""){StudentName.style.border="2px solid #ff0000";return false}else{StudentName.style.border="none";}
  if(UniNumber.value==""){UniNumber.style.border="2px solid #ff0000";return false}else{UniNumber.style.border="none";}
  if(Class.value==""){Class.style.border="2px solid #ff0000";return false}else{Class.style.border="none";}
  if(MatName.value==""){MatName.style.border="2px solid #ff0000";return false}else{MatName.style.border="none";}
  if(MatTeacher.value==""){MatTeacher.style.border="2px solid #ff0000";return false}else{MatTeacher.style.border="none";}
  return true;
}

function LoadDate0(){
  DataData0=[];
  fetch(UrlData0)
  .then(res => res.text())
  .then(rep => {
      const jsonData0 = JSON.parse(rep.substring(47).slice(0, -2));
      const colzData0 = [];
      jsonData0.table.cols.forEach((headingData0) => {
          if (headingData0.label) {
              let columnData0 = headingData0.label;
              colzData0.push(columnData0);
          }
      })
      jsonData0.table.rows.forEach((rowData0) => {
          const rowData00 = {};
          colzData0.forEach((ele, ind) => {
              rowData00[ele] = (rowData0.c[ind] != null) ? rowData0.c[ind].v : '';
          })
          DataData0.push(rowData00);
      })
  })
}

function onsubmitFormS1(){
  document.getElementById("Type").value="1";
  let StudentName=document.getElementById("StudentName");
  if(IstrueDataInformS()===true){
    if(IsNameFound(StudentName.value)!=-1){StudentName.style.border="2px solid #ff0000";return }else{StudentName.style.border="none";
    onsubmitFormS(6000);
    }
  }
}

function IsNameFound(MyNum){
  for (let index = 0; index < DataData0.length; index++) {
    if(DataData0[index].StudentName==MyNum ){
      return index
    }
  }
  return -1
}

function onsubmitFormS(Time){
  let MainForm=document.getElementById("FormSalesWiDetails");
  var w = window.open('', 'form_target', 'width=600, height=400');
  MainForm.target = 'form_target';
  MainForm.action=Script;
  MainForm.submit();
  if (MainForm.onsubmit()==true){
    const myTimeout = setTimeout(function(){ 
                w.close();
                location.reload();
                clearTimeout(myTimeout)
    }, Time);
  }
} 


// ***********************Mode*********************
function ConvertMode(){
  if (localStorage.getItem("FColor")==1){
    ConvertModeToSun();
  }else{
    ConvertModeToMoon();
  }
 }

function ConvertModeToSun(){
  localStorage.setItem("FColor", 1);
  document.getElementById("Moon").style.display="inline-block";
  document.getElementById("Sun").style.display="none";
  document.querySelector(':root').style.setProperty('--FColor', "wheat"); 
  document.querySelector(':root').style.setProperty('--EColor', "white");
  document.querySelector(':root').style.setProperty('--loginColor', "whitesmoke"); 
  document.querySelector(':root').style.setProperty('--FontColor', "#f2a20b"); 
  document.querySelector(':root').style.setProperty('--Font2Color', "#a53333"); 
  document.querySelector(':root').style.setProperty('--Font3Color', "#a53333");
  document.querySelector(':root').style.setProperty('--THColor', "wheat");  
  document.querySelector(':root').style.setProperty('--TDColor', "yellow"); 
} 
function ConvertModeToMoon(){
  localStorage.setItem("FColor", 2);
  document.getElementById("Sun").style.display="inline-block";
  document.getElementById("Moon").style.display="none";
  document.querySelector(':root').style.setProperty('--FColor', "#141e30"); 
  document.querySelector(':root').style.setProperty('--EColor', "#243b55");
  document.querySelector(':root').style.setProperty('--loginColor', "#00000080"); 
  document.querySelector(':root').style.setProperty('--FontColor', "white"); 
  document.querySelector(':root').style.setProperty('--Font2Color', "#d3f6f8"); 
  document.querySelector(':root').style.setProperty('--Font3Color', "black"); 
  document.querySelector(':root').style.setProperty('--THColor', "gray");  
  document.querySelector(':root').style.setProperty('--TDColor', "Red"); 
}  

