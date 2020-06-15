require(["esri/Map","esri/views/MapView","esri/widgets/Expand","esri/widgets/Home","esri/widgets/Legend","esri/widgets/LayerList","esri/widgets/BasemapGallery","esri/widgets/Fullscreen","esri/widgets/Zoom","esri/layers/MapImageLayer","esri/layers/FeatureLayer","esri/tasks/IdentifyTask","esri/tasks/support/IdentifyParameters","dojo/domReady!"],function(e,i,a,t,s,n,r,d,l,o,m,c,p){var u="peta5_legend",y=new e({basemap:"gray"}),w=new i({container:"peta-5",center:[117,-4],zoom:4,map:y});var v;v=new m({title:"Faskes_Kemenkes",url:"https://portal.ina-sdi.or.id/gis/rest/services/Kemenkes/Faskes_Puskesmas/MapServer/0",renderer:{type:"simple",symbol:{type:"picture-marker",url:"assets/images/puskesmas.png",width:"8px",height:"8px"},label:"Puskesmas"},popupTemplate:{title:"Faskes_Kemenkes",content:[{type:"fields",fieldInfos:[{fieldName:"KODE_BARU",label:"KODE_BARU"},{fieldName:"LINTANG",label:"LINTANG"},{fieldName:"BUJUR",label:"BUJUR"},{fieldName:"WADMKC",label:"Nama wilayah administrasi Kecamatan/Distrik"},{fieldName:"WADMKK",label:"Nama wilayah administrasi Kebupaten/ Kota"},{fieldName:"WADMPR",label:"Nama wilayah administrasi Provinsi"},{fieldName:"NAMOBJ",label:"Nama Objek"},{fieldName:"PKMKODE",label:"Kode Puskesmas"},{fieldName:"PKMLMT",label:"Alamat Puskesmas"}]}]}}),y.layers.add(v),w.ui.components=[];var g=new t({view:w});w.ui.add(g,"top-right");var f=new l({view:w});w.ui.add(f,"bottom-right");var b=new a({expandIconClass:"esri-icon-basemap",expandTooltip:"Expand BasemapGallery",view:w,content:new r({view:w,container:document.createElement("div")}).domNode});w.ui.add(b,"top-right");var h=new n({container:document.createElement("div"),view:w,listItemCreatedFunction:function(e){e.item.actionsSections=[[{title:"URL service information",className:"esri-icon-description",id:"information"}]]}});h.on("trigger-action",function(e){var i=e.action.id;console.log(e.item.layer.url),"information"===i&&window.open(e.item.layer.url)});var k=new a({expandIconClass:"esri-icon-layer-list",expandTooltip:"Expand LayerList",view:w,content:h.domNode});w.ui.add(k,"top-right");var N=document.createElement("div");N.style.width="185px",N.setAttribute("id",u);var L=document.createElement("i");L.classList.add("fa","fa-close","w3-right"),L.style.paddingTop="10px",L.style.paddingRight="10px",L.style.cursor="pointer",N.appendChild(L),L.addEventListener("click",function(e){document.getElementById(u).style.visibility="hidden"});new s({view:w,layerInfos:[{layer:v,title:"Faskes Puskesmas"}],container:N,style:"classic"});w.ui.add(N,"top-left");var E=document.createElement("div");E.classList.add("esri-component","esri-home","esri-widget--button","esri-widget"),E.setAttribute("title","Legend");var K=document.createElement("span");K.classList.add("esri-icon-documentation","toggle-icon"),E.appendChild(K),w.ui.add(E,"top-right"),E.addEventListener("click",function(e){var i;"hidden"===(i=document.getElementById(u)).style.visibility?i.style.visibility="visible":i.style.visibility="hidden"}),fullscreen=new d({view:w}),w.ui.add(fullscreen,"top-right")});