const _=document.querySelector(".js-model1"),h=document.querySelector(".js-model2"),v=document.querySelector(".js-model3"),s=document.querySelector(".js-previewCard");_.addEventListener("change",e=>{t.field1=parseInt(e.target.value),s.classList.add("background__model1"),s.classList.remove("background__model2","background__model3")});h.addEventListener("change",e=>{t.field1=parseInt(e.target.value),s.classList.add("background__model2"),s.classList.remove("background__model1","background__model3")});v.addEventListener("change",e=>{t.field1=parseInt(e.target.value),s.classList.add("background__model3"),s.classList.remove("background__model1","background__model2")});const i=document.querySelector(".js-formfill"),u=document.querySelector(".js-preview-name"),m=document.querySelector(".js-preview-phrase"),p=document.querySelector(".js-preview-place"),g=document.querySelector(".js-preview-date"),f=document.querySelector(".js-preview-age"),t={field1:0,field2:"",field3:"",field4:"",field5:"",field6:"",photo:""};i.addEventListener("input",e=>{console.log(e.target.value),e.target.id==="name"?(u.innerHTML=e.target.value||"Nombre",t.field2=e.target.value):e.target.id==="phrase"?(m.innerHTML=e.target.value||"Frase",t.field3=e.target.value):e.target.id==="place"?(p.innerHTML=e.target.value||"Lugar",t.field4=e.target.value):e.target.id==="date"?(g.innerHTML=e.target.value||"Fecha",t.field5=e.target.value):e.target.id==="age"?(f.innerHTML=e.target.value||"Edad",t.field6=e.target.value):console.log(t)});document.querySelector(".js-share-btn-createCard");document.querySelector(".js-createdCardText");const n=document.querySelector(".js-design-models"),c=document.querySelector(".js-fillout-display"),d=document.querySelector(".js-shareOptions"),y=document.querySelectorAll(".js_collapsable_header"),j=e=>{e.currentTarget.classList.contains("js_legend_design")?(n.classList.toggle("collapsed"),c.classList.add("collapsed"),d.classList.add("collapsed")):e.currentTarget.classList.contains("js_legend_fillout")?(c.classList.toggle("collapsed"),n.classList.add("collapsed"),d.classList.add("collapsed")):e.currentTarget.classList.contains("js_legend_share")&&(d.classList.toggle("collapsed"),c.classList.add("collapsed"),n.classList.add("collapsed"))};for(const e of y)e.addEventListener("click",j);const S=document.querySelector(".js-reset-btn");S.addEventListener("click",e=>{e.preventDefault(),i.reset(),u.innerHTML="Nombre",m.innerHTML="Frase",p.innerHTML="Lugar",g.innerHTML="Fecha",f.innerHTML="Edad",s.classList.remove("background__model1"),s.classList.remove("background__model2"),s.classList.remove("background__model3"),document.querySelector(".js__profile-image").src="./../Images/nina.png",document.querySelector(".js__profile-preview").src="./../Images/nina.png",document.querySelector(".js__profile-upload-btn").value=""});const o=new FileReader,q=document.querySelector(".js__profile-upload-btn"),w=document.querySelector(".js__profile-image"),b=document.querySelector(".js__profile-preview");function k(e){const r=e.currentTarget.files[0];o.addEventListener("load",T),o.readAsDataURL(r)}function T(){w.src=o.result,b.src=o.result,t.photo=o.result}q.addEventListener("change",k);const C=document.querySelector(".js-createCard-btn"),l=document.querySelector(".js-linkCard");document.querySelector(".js-divLinks");const E=document.querySelector(".js-phrase"),H=document.querySelector(".js-twitterBtn");function M(e){e.preventDefault(),fetch("https://dev.adalab.es/api/info/data",{method:"POST",body:JSON.stringify(t),headers:{"Content-type":"application/json"}}).then(r=>r.json()).then(r=>{console.log(r);const a=r.infoID;console.log(a),l.classList.remove("hidden"),E.classList.remove("hidden"),H.classList.remove("hidden"),L.classList.remove("hidden"),l.href=`./card.html?id=${a}`,l.innerHTML=`./card.html?id=${a}`})}C.addEventListener("click",M);const L=document.querySelector(".js-whatsappBtn");function I(){const r=`¡Te invito a mi cumple!! ${l.href}`,a=`https://api.whatsapp.com/send?text=${encodeURIComponent(r)}`;window.open(a,"_blank")}L.addEventListener("click",I);
//# sourceMappingURL=main.js.map
