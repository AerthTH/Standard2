const STORE_KEY="da_standard2_drive_links_v1";
function loadLinks(){try{return JSON.parse(localStorage.getItem(STORE_KEY)||"{}");}catch(e){return {};}}
function saveLinks(o){localStorage.setItem(STORE_KEY, JSON.stringify(o));}
function initDriveLink(sectionId){
  const links=loadLinks();
  const input=document.getElementById("driveLinkInput");
  const a=document.getElementById("driveLinkBtn");
  if(!input||!a) return;
  input.value=links[sectionId]||"";
  if(input.value){a.href=input.value;a.classList.add("primary");a.textContent="เปิด Google Drive";}
  else{a.href="#";a.classList.remove("primary");a.textContent="ยังไม่ใส่ลิงก์";}
  document.getElementById("saveDriveLink").addEventListener("click", ()=>{
    const url=input.value.trim();
    const links2=loadLinks(); links2[sectionId]=url; saveLinks(links2);
    if(url){a.href=url;a.classList.add("primary");a.textContent="เปิด Google Drive"; alert("บันทึกลิงก์แล้ว (เก็บในเครื่อง)");}
    else{a.href="#";a.classList.remove("primary");a.textContent="ยังไม่ใส่ลิงก์"; alert("ลบลิงก์แล้ว");}
  });
}
