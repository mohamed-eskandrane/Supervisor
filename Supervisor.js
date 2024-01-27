const sheetId = '1OQyGg_udAZ28CCndUV1dPtLFmBoLfMwdWNaw7PO-2q0';
const Script = 'https://script.google.com/macros/s/AKfycbzh3A5oGxthqpHQE12HncCvq6Lk7Q5x9QoSR79tdo4jnGaCFUHf8TT2j339pPVuWUPDLg/exec'
const base = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?`;
let query = encodeURIComponent('Select *');
let Data0="Data";
let UrlData0 = `${base}&sheet=${Data0}&tq=${query}`;
let DataData0 = [];
let Supervisor="Supervisor";
let UrlSupervisor = `${base}&sheet=${Supervisor}&tq=${query}`;
let DataSupervisor = [];
document.addEventListener('DOMContentLoaded', init)
function init() {
  let FormLoad=document.getElementById("FormLoad");
  let Loading=document.getElementById("LoadingFormBrowser");
  Loading.className="fa fa-refresh fa-spin";
  ConvertMode();
  LoadSupervisor();
  LoadDate0();
  const myTimeout = setTimeout(function(){ 
    FormLoad.style.display="none";
    Loading.className="fa fa-refresh";
  clearTimeout(myTimeout);
}, 2500);
}

// ********************SalesWi
function LoadSupervisor(){
DataSupervisor=[];
  fetch(UrlSupervisor)
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
          DataSupervisor.push(rowSetting);
      })
      LoadSupervisorName();
  })
}

function LoadSupervisorName(){
  let Num,Supervisor;
  let SupervisorE =document.getElementById("Supervisor");
  SupervisorE.innerHTML="";
  for (let index = 0; index < DataSupervisor.length; index++) {
    Num=DataSupervisor[index].Num;
    Supervisor=DataSupervisor[index].Supervisor;
    if(Num!="" ){
      optionClass=document.createElement("option");
      optionClass.value=Supervisor;
      optionClass.textContent=Supervisor;
      SupervisorE.appendChild(optionClass);
    }
  }
  SupervisorE.value="";
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
        LoadData0Name();
    })
  }
  function LoadData0Name(){
    let Num,StudentName;
    let StudentNameE =document.getElementById("StudentName");
    StudentNameE.innerHTML="";
    for (let index = 0; index < DataData0.length; index++) {
      Num=DataData0[index].Num;
      StudentName=DataData0[index].StudentName;
      if(Num!="" ){
        optionClass=document.createElement("option");
        optionClass.value=Number(Num) + 1;
        optionClass.textContent=StudentName;
        StudentNameE.appendChild(optionClass);
      }
    }
    StudentNameE.value="";
  }

  function ClearItemSa(){
    document.getElementById("StudentName").value="";
    document.getElementById("Supervisor").value="";
    document.getElementById("Degree").value="";
  }

  function onsubmitFormS1(){
    document.getElementById("Type").value="2";
          onsubmitFormS(6000);
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
  
  
