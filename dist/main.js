(()=>{"use strict";const e=[];class t{constructor(e){this.title=e,this.tasks=[]}removeProject(){e.splice(e.indexOf(this),1)}addTask(e){console.log(this.tasks),this.tasks.push(e)}removeTask(e){this.tasks.splice(this.tasks.indexOf(e),1)}}class n{constructor(e,t,n,d,c){this.title=e,this.desc=t,this.duedate=n,this.priority=d,this.complete=c}}let d=!1,c=document.getElementById("project-header");const a=document.getElementById("task-form-container"),o=document.getElementById("task-form");function s(n){r();const d=document.createElement("div"),a=document.createElement("p"),o=document.createElement("button");for(c.innerText=n,d.classList.add("project"),d.setAttribute("data-project-index",e.length),a.classList.add("mouse-effect"),a.innerText=n,o.classList.add("close-btn"),o.innerText="X",document.getElementById("add-project-btn").disabled=!1,a.addEventListener("click",(()=>{c.innerText=n;let t=d.dataset.projectIndex;document.getElementById("task-form").dataset.projectIndex=t,r();for(let n of s.tasks)l(n.title,n.desc,n.duedate,n.priority,n.complete,t,e[t].tasks.indexOf(n))})),o.addEventListener("click",(()=>{let t=d.dataset.projectIndex;if(function(t,n){let d=t.dataset.projectIndex;t.remove(),n.removeProject(),d>0?(document.getElementById("task-form").dataset.projectIndex=d-1,c.innerText=e[d-1].title):c.innerText="";const a=document.querySelectorAll(`div.task[data-project-index="${d}"]`);for(let e of a)e.remove();const o=document.querySelectorAll(".project");for(let t in e)o[t].setAttribute("data-project-index",t)}(d,s),t>0)for(let d of e[t-1].tasks)l(d.title,d.desc,d.duedate,d.priority,d.complete,t-1,n)}));d.hasChildNodes();)d.removeChild(d.lastChild);document.getElementById("task-container").appendChild(c),document.getElementById("projects-container").appendChild(d),d.append(a,o),document.getElementById("task-form").dataset.projectIndex=d.dataset.projectIndex,document.getElementById("project-form").reset(),document.getElementById("project-form-container").style.display="none";const s=function(n){const d=new t(n);return e.push(d),d}(a.innerText)}function l(e,t,n,d,c,a,o){const s=document.createElement("div"),l=document.createElement("label"),r=document.createElement("input"),m=document.createElement("p"),u=document.createElement("p"),p=document.createElement("p"),E=document.createElement("p"),k=document.createElement("button");s.classList.add("task"),s.setAttribute("data-project-index",a),s.setAttribute("data-task-index",o),l.innerText=!0===c?"Complete":"Unfinished",r.type="checkbox",r.classList.add("checkbox"),m.innerText=e,u.classList.add("desc"),u.innerText=t,p.innerText=n,E.innerText=d,k.classList.add("close-btn"),k.innerText="X",k.addEventListener("click",(()=>{i(s,task)})),document.getElementById("task-container").appendChild(s),s.append(l,m,u,p,E,k),l.appendChild(r)}function r(){const e=document.getElementById("task-container");for(;e.hasChildNodes()&&e.childElementCount>1;)e.removeChild(e.lastChild)}function i(t,n){let d=t.dataset.projectIndex;t.remove(),e[d].removeTask(n);const c=document.querySelectorAll(".task");for(let t in e[d].tasks)c[t].dataset.taskIndex=t}s("Default");const m=document.getElementById("add-project-btn"),u=document.getElementById("add-task-btn"),p=document.getElementById("task-form");document.getElementById("project-form").addEventListener("submit",(e=>{e.preventDefault(),s(e.target[0].value)})),m.addEventListener("click",(()=>{document.getElementById("project-form-container").style.display="block"})),p.addEventListener("submit",(t=>{t.preventDefault(),!1===d?function(t){const c=document.createElement("div"),s=document.createElement("label"),l=document.createElement("input"),r=document.createElement("p"),m=document.createElement("p"),u=document.createElement("p"),p=document.createElement("p"),E=document.createElement("span"),k=document.createElement("span");let y=e[t].tasks.length,x=document.getElementById("title").value,g=document.getElementById("desc").value,f=document.getElementById("due-date").value,I=document.getElementById("priority").value;c.classList.add("task"),c.setAttribute("data-project-index",t),c.setAttribute("data-task-index",y),s.innerText="Unfinished",l.type="checkbox",l.classList.add("checkbox"),r.innerText=x,m.classList.add("desc"),m.innerText=g,u.innerText=f,p.innerText=I;let h=function(e){switch(console.log(e),e){case 1:return"red";case 2:return"orange";case 3:return"green";case 4:return"blue"}}(Number(I));p.style.backgroundColor=h,E.classList.add("icon","edit-icon"),k.classList.add("icon","delete-icon"),l.addEventListener("click",(()=>{!1===v.complete?(v.complete=!0,s.innerText="Complete",c.classList.add("complete")):(v.complete=!1,s.innerText="Unfinished",c.classList.remove("complete"))})),E.addEventListener("click",(()=>{var e,t,n,c;d=!0,a.style.display="block",o.dataset.taskIndex=y,e=r.innerText,t=m.innerText,n=u.innerText,c=p.innerText,document.getElementById("title").value=e,document.getElementById("desc").value=t,document.getElementById("due-date").value=n,document.getElementById("priority").value=c})),k.addEventListener("click",(()=>{i(c,v)})),document.getElementById("task-container").appendChild(c),c.append(l,s,r,m,u,p,E,k),document.getElementById("task-form").reset(),document.getElementById("task-form-container").style.display="none";const v=function(t,d,c,a,o,s){const l=new n(t,d,c,a,!1);return e[s].addTask(l),l}(x,g,f,I,0,t);console.log(e)}(t.target.dataset.projectIndex):!0===d&&function(t,n,...d){const c=document.querySelector(`div.task[data-project-index="${n}"]`).childNodes;let s=2;for(let n in d)c[s].innerText=d[n],e[t].tasks[n]=d[n],s++;console.log(e[t].tasks),o.reset(),a.style.display="none"}(t.target.dataset.projectIndex,t.target.dataset.taskIndex,t.target[0].value,t.target[1].value,t.target[2].value,t.target[3].value)})),u.addEventListener("click",(()=>{document.querySelectorAll(".project").length>0&&(document.getElementById("task-form-container").style.display="block")}))})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoibUJBQUEsTUFBTUEsRUFBYyxHQUVwQixNQUFNQyxFQUNKQyxZQUFZQyxHQUNWQyxLQUFLRCxNQUFRQSxFQUNiQyxLQUFLQyxNQUFRLEVBQ2YsQ0FDQUMsZ0JBQ0VOLEVBQVlPLE9BQU9QLEVBQVlRLFFBQVFKLE1BQU8sRUFDaEQsQ0FFQUssUUFBUUMsR0FDTkMsUUFBUUMsSUFBSVIsS0FBS0MsT0FDakJELEtBQUtDLE1BQU1RLEtBQUtILEVBQ2xCLENBRUFJLFdBQVdKLEdBQ1ROLEtBQUtDLE1BQU1FLE9BQU9ILEtBQUtDLE1BQU1HLFFBQVFFLEdBQU8sRUFDOUMsRUFHRixNQUFNSyxFQUNKYixZQUFZQyxFQUFPYSxFQUFNQyxFQUFTQyxFQUFVQyxHQUMxQ2YsS0FBS0QsTUFBUUEsRUFDYkMsS0FBS1ksS0FBT0EsRUFDWlosS0FBS2EsUUFBVUEsRUFDZmIsS0FBS2MsU0FBV0EsRUFDaEJkLEtBQUtlLFNBQVdBLENBQ2xCLEVDM0JGLElBQUlDLEdBQU8sRUFDUEMsRUFBZ0JDLFNBQVNDLGVBQWUsa0JBQzVDLE1BQU1DLEVBQW9CRixTQUFTQyxlQUFlLHVCQUM1Q0UsRUFBV0gsU0FBU0MsZUFBZSxhQUV6QyxTQUFTRyxFQUFjQyxHQUNyQkMsSUFDQSxNQUFNQyxFQUFNUCxTQUFTUSxjQUFjLE9BQzdCQyxFQUFJVCxTQUFTUSxjQUFjLEtBQzNCRSxFQUFNVixTQUFTUSxjQUFjLFVBZ0NuQyxJQTlCQVQsRUFBY1ksVUFBWU4sRUFDMUJFLEVBQUlLLFVBQVVDLElBQUksV0FDbEJOLEVBQUlPLGFBQWEscUJBQXNCcEMsRUFBWXFDLFFBQ25ETixFQUFFRyxVQUFVQyxJQUFJLGdCQUNoQkosRUFBRUUsVUFBWU4sRUFDZEssRUFBSUUsVUFBVUMsSUFBSSxhQUNsQkgsRUFBSUMsVUFBWSxJQUNoQlgsU0FBU0MsZUFBZSxtQkFBbUJlLFVBQVcsRUFFdERQLEVBQUVRLGlCQUFpQixTQUFTLEtBQzFCbEIsRUFBY1ksVUFBWU4sRUFDMUIsSUFBSWEsRUFBZVgsRUFBSVksUUFBUUQsYUFDL0JsQixTQUFTQyxlQUFlLGFBQWFrQixRQUFRRCxhQUFlQSxFQUM1RFosSUFDQSxJQUFJLElBQUlsQixLQUFRZ0MsRUFBUXJDLE1BQ3RCc0MsRUFBV2pDLEVBQUtQLE1BQU9PLEVBQUtNLEtBQU1OLEVBQUtPLFFBQVNQLEVBQUtRLFNBQVVSLEVBQUtTLFNBQVVxQixFQUM1RXhDLEVBQVl3QyxHQUFjbkMsTUFBTUcsUUFBUUUsR0FDNUMsSUFHRnNCLEVBQUlPLGlCQUFpQixTQUFTLEtBQzVCLElBQUlDLEVBQWVYLEVBQUlZLFFBQVFELGFBRS9CLEdBc0JKLFNBQXVCWCxFQUFLYSxHQUMxQixJQUFJRSxFQUFRZixFQUFJWSxRQUFRRCxhQUN4QlgsRUFBSWdCLFNBQ0pILEVBQVFwQyxnQkFDTHNDLEVBQVEsR0FDVHRCLFNBQVNDLGVBQWUsYUFBYWtCLFFBQVFELGFBQWVJLEVBQVEsRUFDcEV2QixFQUFjWSxVQUFZakMsRUFBWTRDLEVBQVEsR0FBR3pDLE9BRWpEa0IsRUFBY1ksVUFBWSxHQUU1QixNQUFNYSxFQUFleEIsU0FBU3lCLGlCQUFpQixnQ0FBZ0NILE9BQy9FLElBQUksSUFBSWxDLEtBQVFvQyxFQUNkcEMsRUFBS21DLFNBRVAsTUFBTUcsRUFBVzFCLFNBQVN5QixpQkFBaUIsWUFDM0MsSUFBSSxJQUFJRSxLQUFLakQsRUFDWGdELEVBQVNDLEdBQUdiLGFBQWEscUJBQXNCYSxFQUVuRCxDQXpDSUMsQ0FBY3JCLEVBQUthLEdBQ2hCRixFQUFlLEVBQ2hCLElBQUksSUFBSTlCLEtBQVFWLEVBQVl3QyxFQUFlLEdBQUduQyxNQUM1Q3NDLEVBQVdqQyxFQUFLUCxNQUFPTyxFQUFLTSxLQUFNTixFQUFLTyxRQUFTUCxFQUFLUSxTQUFVUixFQUFLUyxTQUFVcUIsRUFBZSxFQUFHYixFQUVwRyxJQUdJRSxFQUFJc0IsaUJBQ1J0QixFQUFJdUIsWUFBWXZCLEVBQUl3QixXQUd0Qi9CLFNBQVNDLGVBQWUsa0JBQWtCK0IsWUFBWWpDLEdBQ3REQyxTQUFTQyxlQUFlLHNCQUFzQitCLFlBQVl6QixHQUMxREEsRUFBSTBCLE9BQU94QixFQUFHQyxHQUVkVixTQUFTQyxlQUFlLGFBQWFrQixRQUFRRCxhQUFlWCxFQUFJWSxRQUFRRCxhQUN4RWxCLFNBQVNDLGVBQWUsZ0JBQWdCaUMsUUFDeENsQyxTQUFTQyxlQUFlLDBCQUEwQmtDLE1BQU1DLFFBQVUsT0FFbEUsTUFBTWhCLEVEdkJSLFNBQTRCdkMsR0FDMUIsTUFBTXVDLEVBQVUsSUFBSXpDLEVBQVFFLEdBRTVCLE9BREFILEVBQVlhLEtBQUs2QixHQUNWQSxDQUNULENDbUJrQmlCLENBQW1CNUIsRUFBRUUsVUFDdkMsQ0FzR0EsU0FBU1UsRUFBV3hDLEVBQU9hLEVBQU1DLEVBQVNDLEVBQVVDLEVBQVVxQixFQUFjb0IsR0FDMUUsTUFBTS9CLEVBQU1QLFNBQVNRLGNBQWMsT0FDN0IrQixFQUFRdkMsU0FBU1EsY0FBYyxTQUMvQmdDLEVBQVF4QyxTQUFTUSxjQUFjLFNBQy9CaUMsRUFBU3pDLFNBQVNRLGNBQWMsS0FDaENrQyxFQUFRMUMsU0FBU1EsY0FBYyxLQUMvQm1DLEVBQVczQyxTQUFTUSxjQUFjLEtBQ2xDb0MsRUFBWTVDLFNBQVNRLGNBQWMsS0FDbkNFLEVBQU1WLFNBQVNRLGNBQWMsVUFFbkNELEVBQUlLLFVBQVVDLElBQUksUUFDbEJOLEVBQUlPLGFBQWEscUJBQXNCSSxHQUN2Q1gsRUFBSU8sYUFBYSxrQkFBbUJ3QixHQUVsQ0MsRUFBTTVCLFdBRFEsSUFBYmQsRUFDaUIsV0FFQSxhQUVwQjJDLEVBQU1LLEtBQU8sV0FDYkwsRUFBTTVCLFVBQVVDLElBQUksWUFDcEI0QixFQUFPOUIsVUFBWTlCLEVBQ25CNkQsRUFBTTlCLFVBQVVDLElBQUksUUFDcEI2QixFQUFNL0IsVUFBWWpCLEVBQ2xCaUQsRUFBU2hDLFVBQVloQixFQUNyQmlELEVBQVVqQyxVQUFZZixFQUN0QmMsRUFBSUUsVUFBVUMsSUFBSSxhQUNsQkgsRUFBSUMsVUFBWSxJQUdoQkQsRUFBSU8saUJBQWlCLFNBQVMsS0FDNUI2QixFQUFXdkMsRUFBS25CLEtBQUssSUFHdkJZLFNBQVNDLGVBQWUsa0JBQWtCK0IsWUFBWXpCLEdBQ3REQSxFQUFJMEIsT0FBT00sRUFBT0UsRUFBUUMsRUFBT0MsRUFBVUMsRUFBV2xDLEdBQ3RENkIsRUFBTVAsWUFBWVEsRUFDcEIsQ0FFQSxTQUFTbEMsSUFDUCxNQUFNeUMsRUFBWS9DLFNBQVNDLGVBQWUsa0JBQzFDLEtBQU04QyxFQUFVbEIsaUJBQW1Ca0IsRUFBVUMsa0JBQW9CLEdBQy9ERCxFQUFVakIsWUFBWWlCLEVBQVVoQixVQUVwQyxDQXVCQSxTQUFTZSxFQUFXdkMsRUFBS25CLEdBQ3ZCLElBQUlrQyxFQUFRZixFQUFJWSxRQUFRRCxhQUN4QlgsRUFBSWdCLFNBQ0o3QyxFQUFZNEMsR0FBTzlCLFdBQVdKLEdBQzlCLE1BQU1MLEVBQVFpQixTQUFTeUIsaUJBQWlCLFNBQ3hDLElBQUksSUFBSUUsS0FBS2pELEVBQVk0QyxHQUFPdkMsTUFDOUJBLEVBQU00QyxHQUFHUixRQUFRbUIsVUFBWVgsQ0FFakMsQ0FFQXZCLEVBQWMsV0N2T2QsTUFBTTZDLEVBQWFqRCxTQUFTQyxlQUFlLG1CQUNyQ2lELEVBQWFsRCxTQUFTQyxlQUFlLGdCQUNyQyxFQUFXRCxTQUFTQyxlQUFlLGFBQ3JCRCxTQUFTQyxlQUFlLGdCQUVoQ2dCLGlCQUFpQixVQUFXa0MsSUFDdENBLEVBQUVDLGlCQUNGaEQsRUFBYytDLEVBQUVFLE9BQU8sR0FBR0MsTUFBTSxJQUdsQ0wsRUFBV2hDLGlCQUFpQixTQUFTLEtBQ25DakIsU0FBU0MsZUFBZSwwQkFBMEJrQyxNQUFNQyxRQUFVLE9BQU8sSUFHM0UsRUFBU25CLGlCQUFpQixVQUFXa0MsSUFDbkNBLEVBQUVDLGtCQUNVLElBQVR0RCxFRDJETCxTQUFvQm9CLEdBQ2xCLE1BQU1YLEVBQU1QLFNBQVNRLGNBQWMsT0FDN0IrQixFQUFRdkMsU0FBU1EsY0FBYyxTQUMvQitDLEVBQVd2RCxTQUFTUSxjQUFjLFNBQ2xDaUMsRUFBU3pDLFNBQVNRLGNBQWMsS0FDaENrQyxFQUFRMUMsU0FBU1EsY0FBYyxLQUMvQm1DLEVBQVczQyxTQUFTUSxjQUFjLEtBQ2xDb0MsRUFBWTVDLFNBQVNRLGNBQWMsS0FDbkNnRCxFQUFVeEQsU0FBU1EsY0FBYyxRQUNqQ2lELEVBQVl6RCxTQUFTUSxjQUFjLFFBRXpDLElBQUk4QixFQUFZNUQsRUFBWXdDLEdBQWNuQyxNQUFNZ0MsT0FDNUMyQyxFQUFhMUQsU0FBU0MsZUFBZSxTQUFTcUQsTUFDOUNLLEVBQVkzRCxTQUFTQyxlQUFlLFFBQVFxRCxNQUM1Q00sRUFBZTVELFNBQVNDLGVBQWUsWUFBWXFELE1BQ25ETyxFQUFnQjdELFNBQVNDLGVBQWUsWUFBWXFELE1BRXhEL0MsRUFBSUssVUFBVUMsSUFBSSxRQUNsQk4sRUFBSU8sYUFBYSxxQkFBc0JJLEdBQ3ZDWCxFQUFJTyxhQUFhLGtCQUFtQndCLEdBQ3BDQyxFQUFNNUIsVUFBWSxhQUNsQjRDLEVBQVNWLEtBQU8sV0FDaEJVLEVBQVMzQyxVQUFVQyxJQUFJLFlBQ3ZCNEIsRUFBTzlCLFVBQVkrQyxFQUNuQmhCLEVBQU05QixVQUFVQyxJQUFJLFFBQ3BCNkIsRUFBTS9CLFVBQVlnRCxFQUNsQmhCLEVBQVNoQyxVQUFZaUQsRUFDckJoQixFQUFVakMsVUFBWWtELEVBQ3RCLElBQUlDLEVBc0NOLFNBQTBCQyxHQUV4QixPQURBMUUsUUFBUUMsSUFBSXlFLEdBQ0pBLEdBQ04sS0FBSyxFQUNILE1BQU8sTUFDVCxLQUFLLEVBQ0gsTUFBTyxTQUNULEtBQUssRUFDSCxNQUFPLFFBQ1QsS0FBSyxFQUNILE1BQU8sT0FFYixDQWxEY0MsQ0FBaUJDLE9BQU9KLElBQ3BDakIsRUFBVVQsTUFBTStCLGdCQUFrQkosRUFDbENOLEVBQVE1QyxVQUFVQyxJQUFJLE9BQVEsYUFDOUI0QyxFQUFVN0MsVUFBVUMsSUFBSSxPQUFRLGVBRWhDMEMsRUFBU3RDLGlCQUFpQixTQUFTLE1BQ1osSUFBbEI3QixFQUFLUyxVQUNOVCxFQUFLUyxVQUFXLEVBQ2hCMEMsRUFBTTVCLFVBQVksV0FDbEJKLEVBQUlLLFVBQVVDLElBQUksY0FFbEJ6QixFQUFLUyxVQUFXLEVBQ2hCMEMsRUFBTTVCLFVBQVksYUFDbEJKLEVBQUlLLFVBQVVXLE9BQU8sWUFDdkIsSUFHRmlDLEVBQVF2QyxpQkFBaUIsU0FBUyxLQWdGcEMsSUFBc0JwQyxFQUFPYSxFQUFNQyxFQUFTQyxFQS9FeENFLEdBQU8sRUFDUEksRUFBa0JpQyxNQUFNQyxRQUFVLFFBQ2xDakMsRUFBU2dCLFFBQVFtQixVQUFZQSxFQTZFWHpELEVBNUVMNEQsRUFBTzlCLFVBNEVLakIsRUE1RU1nRCxFQUFNL0IsVUE0RU5oQixFQTVFaUJnRCxFQUFTaEMsVUE0RWpCZixFQTVFNEJnRCxFQUFVakMsVUE2RWhGWCxTQUFTQyxlQUFlLFNBQVNxRCxNQUFRekUsRUFDekNtQixTQUFTQyxlQUFlLFFBQVFxRCxNQUFRNUQsRUFDeENNLFNBQVNDLGVBQWUsWUFBWXFELE1BQVEzRCxFQUM1Q0ssU0FBU0MsZUFBZSxZQUFZcUQsTUFBUTFELENBaEY4QyxJQUcxRjZELEVBQVV4QyxpQkFBaUIsU0FBUyxLQUNsQzZCLEVBQVd2QyxFQUFLbkIsRUFBSyxJQUd2QlksU0FBU0MsZUFBZSxrQkFBa0IrQixZQUFZekIsR0FDdERBLEVBQUkwQixPQUFPc0IsRUFBVWhCLEVBQU9FLEVBQVFDLEVBQU9DLEVBQVVDLEVBQVdZLEVBQVNDLEdBRXpFekQsU0FBU0MsZUFBZSxhQUFhaUMsUUFDckNsQyxTQUFTQyxlQUFlLHVCQUF1QmtDLE1BQU1DLFFBQVUsT0FFL0QsTUFBTWhELEVEdEdSLFNBQXlCUCxFQUFPYSxFQUFNQyxFQUFTQyxFQUFVQyxFQUFVcUIsR0FDakUsTUFBTTlCLEVBQU8sSUFBSUssRUFBS1osRUFBT2EsRUFBTUMsRUFBU0MsR0NxR3FDLEdEbkdqRixPQURBbEIsRUFBWXdDLEdBQWMvQixRQUFRQyxHQUMzQkEsQ0FDVCxDQ2tHZStFLENBQWdCVCxFQUFZQyxFQUFXQyxFQUFjQyxFQUFlLEVBQU8zQyxHQUN4RjdCLFFBQVFDLElBQUlaLEVBQ2QsQ0MxSEkwRixDQUFXakIsRUFBRUUsT0FBT2xDLFFBQVFELGVBQ1gsSUFBVHBCLEdENkxaLFNBQWtCb0IsRUFBY29CLEtBQWMrQixHQUM1QyxNQUNNQyxFQURNdEUsU0FBU3VFLGNBQWMsZ0NBQWdDakMsT0FDbERrQyxXQUNqQixJQUFJQyxFQUFVLEVBQ2QsSUFBSSxJQUFJOUMsS0FBSzBDLEVBQ1hDLEVBQUtHLEdBQVM5RCxVQUFZMEQsRUFBVzFDLEdBQ3JDakQsRUFBWXdDLEdBQWNuQyxNQUFNNEMsR0FBSzBDLEVBQVcxQyxHQUNoRDhDLElBRUZwRixRQUFRQyxJQUFJWixFQUFZd0MsR0FBY25DLE9BQ3RDb0IsRUFBUytCLFFBQ1RoQyxFQUFrQmlDLE1BQU1DLFFBQVUsTUFDcEMsQ0N4TUlzQyxDQUFTdkIsRUFBRUUsT0FBT2xDLFFBQVFELGFBQWNpQyxFQUFFRSxPQUFPbEMsUUFBUW1CLFVBQVdhLEVBQUVFLE9BQU8sR0FBR0MsTUFBT0gsRUFBRUUsT0FBTyxHQUFHQyxNQUNqR0gsRUFBRUUsT0FBTyxHQUFHQyxNQUFPSCxFQUFFRSxPQUFPLEdBQUdDLE1BQ25DLElBR0ZKLEVBQVdqQyxpQkFBaUIsU0FBUyxLQUNsQmpCLFNBQVN5QixpQkFBaUIsWUFDL0JWLE9BQVMsSUFDbkJmLFNBQVNDLGVBQWUsdUJBQXVCa0MsTUFBTUMsUUFBVSxRQUNqRSxHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2xvZ2ljLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9ET00uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGFyclByb2plY3RzID0gW11cblxuY2xhc3MgUHJvamVjdCB7XG4gIGNvbnN0cnVjdG9yKHRpdGxlKSB7XG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgIHRoaXMudGFza3MgPSBbXTtcbiAgfVxuICByZW1vdmVQcm9qZWN0KCkge1xuICAgIGFyclByb2plY3RzLnNwbGljZShhcnJQcm9qZWN0cy5pbmRleE9mKHRoaXMpLCAxKTtcbiAgfVxuICBcbiAgYWRkVGFzayh0YXNrKSB7XG4gICAgY29uc29sZS5sb2codGhpcy50YXNrcyk7XG4gICAgdGhpcy50YXNrcy5wdXNoKHRhc2spO1xuICB9XG5cbiAgcmVtb3ZlVGFzayh0YXNrKSB7XG4gICAgdGhpcy50YXNrcy5zcGxpY2UodGhpcy50YXNrcy5pbmRleE9mKHRhc2spLCAxKTtcbiAgfVxufVxuXG5jbGFzcyBUYXNrIHtcbiAgY29uc3RydWN0b3IodGl0bGUsIGRlc2MsIGR1ZWRhdGUsIHByaW9yaXR5LCBjb21wbGV0ZSkge1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB0aGlzLmRlc2MgPSBkZXNjO1xuICAgIHRoaXMuZHVlZGF0ZSA9IGR1ZWRhdGU7XG4gICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgIHRoaXMuY29tcGxldGUgPSBjb21wbGV0ZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVQcm9qZWN0Q2xhc3ModGl0bGUpIHtcbiAgY29uc3QgcHJvamVjdCA9IG5ldyBQcm9qZWN0KHRpdGxlKTtcbiAgYXJyUHJvamVjdHMucHVzaChwcm9qZWN0KTtcbiAgcmV0dXJuIHByb2plY3Q7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVRhc2tDbGFzcyh0aXRsZSwgZGVzYywgZHVlZGF0ZSwgcHJpb3JpdHksIGNvbXBsZXRlLCBwcm9qZWN0SW5kZXgpIHtcbiAgY29uc3QgdGFzayA9IG5ldyBUYXNrKHRpdGxlLCBkZXNjLCBkdWVkYXRlLCBwcmlvcml0eSwgY29tcGxldGUpO1xuICBhcnJQcm9qZWN0c1twcm9qZWN0SW5kZXhdLmFkZFRhc2sodGFzayk7XG4gIHJldHVybiB0YXNrO1xufVxuXG5leHBvcnQge2NyZWF0ZVByb2plY3RDbGFzcywgY3JlYXRlVGFza0NsYXNzLCBhcnJQcm9qZWN0c30iLCJpbXBvcnQgeyBjcmVhdGVQcm9qZWN0Q2xhc3MsIGNyZWF0ZVRhc2tDbGFzcywgYXJyUHJvamVjdHMgfSBmcm9tIFwiLi9sb2dpYy5qc1wiO1xubGV0IGVkaXQgPSBmYWxzZTtcbmxldCBwcm9qZWN0SGVhZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3QtaGVhZGVyJyk7XG5jb25zdCB0YXNrRm9ybUNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrLWZvcm0tY29udGFpbmVyJyk7XG5jb25zdCB0YXNrRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrLWZvcm0nKTtcblxuZnVuY3Rpb24gY3JlYXRlUHJvamVjdChwcm9qZWN0TmFtZSkge1xuICBjbGVhclRhc2soKTtcbiAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGNvbnN0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXG4gIHByb2plY3RIZWFkZXIuaW5uZXJUZXh0ID0gcHJvamVjdE5hbWU7XG4gIGRpdi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0Jyk7XG4gIGRpdi5zZXRBdHRyaWJ1dGUoJ2RhdGEtcHJvamVjdC1pbmRleCcsIGFyclByb2plY3RzLmxlbmd0aCk7XG4gIHAuY2xhc3NMaXN0LmFkZCgnbW91c2UtZWZmZWN0Jyk7XG4gIHAuaW5uZXJUZXh0ID0gcHJvamVjdE5hbWU7XG4gIGJ0bi5jbGFzc0xpc3QuYWRkKCdjbG9zZS1idG4nKTtcbiAgYnRuLmlubmVyVGV4dCA9IFwiWFwiO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkLXByb2plY3QtYnRuJykuZGlzYWJsZWQgPSBmYWxzZTtcblxuICBwLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHByb2plY3RIZWFkZXIuaW5uZXJUZXh0ID0gcHJvamVjdE5hbWU7XG4gICAgbGV0IHByb2plY3RJbmRleCA9IGRpdi5kYXRhc2V0LnByb2plY3RJbmRleDtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFzay1mb3JtJykuZGF0YXNldC5wcm9qZWN0SW5kZXggPSBwcm9qZWN0SW5kZXg7XG4gICAgY2xlYXJUYXNrKCk7XG4gICAgZm9yKGxldCB0YXNrIG9mIHByb2plY3QudGFza3MpIHtcbiAgICAgIGFwcGVuZFRhc2sodGFzay50aXRsZSwgdGFzay5kZXNjLCB0YXNrLmR1ZWRhdGUsIHRhc2sucHJpb3JpdHksIHRhc2suY29tcGxldGUsIHByb2plY3RJbmRleCxcbiAgICAgICAgYXJyUHJvamVjdHNbcHJvamVjdEluZGV4XS50YXNrcy5pbmRleE9mKHRhc2spKTtcbiAgICB9XG4gIH0pO1xuXG4gIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBsZXQgcHJvamVjdEluZGV4ID0gZGl2LmRhdGFzZXQucHJvamVjdEluZGV4O1xuICAgIGRlbGV0ZVByb2plY3QoZGl2LCBwcm9qZWN0KTtcbiAgICBpZihwcm9qZWN0SW5kZXggPiAwKSB7XG4gICAgICBmb3IobGV0IHRhc2sgb2YgYXJyUHJvamVjdHNbcHJvamVjdEluZGV4IC0gMV0udGFza3MpIHtcbiAgICAgICAgYXBwZW5kVGFzayh0YXNrLnRpdGxlLCB0YXNrLmRlc2MsIHRhc2suZHVlZGF0ZSwgdGFzay5wcmlvcml0eSwgdGFzay5jb21wbGV0ZSwgcHJvamVjdEluZGV4IC0gMSwgcHJvamVjdE5hbWUpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgd2hpbGUoZGl2Lmhhc0NoaWxkTm9kZXMoKSkge1xuICAgIGRpdi5yZW1vdmVDaGlsZChkaXYubGFzdENoaWxkKTtcbiAgfVxuXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrLWNvbnRhaW5lcicpLmFwcGVuZENoaWxkKHByb2plY3RIZWFkZXIpO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdHMtY29udGFpbmVyJykuYXBwZW5kQ2hpbGQoZGl2KTtcbiAgZGl2LmFwcGVuZChwLCBidG4pO1xuXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrLWZvcm0nKS5kYXRhc2V0LnByb2plY3RJbmRleCA9IGRpdi5kYXRhc2V0LnByb2plY3RJbmRleDtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3QtZm9ybScpLnJlc2V0KCk7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0LWZvcm0tY29udGFpbmVyJykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblxuICBjb25zdCBwcm9qZWN0ID0gY3JlYXRlUHJvamVjdENsYXNzKHAuaW5uZXJUZXh0KTtcbn1cblxuZnVuY3Rpb24gZGVsZXRlUHJvamVjdChkaXYsIHByb2plY3QpIHtcbiAgbGV0IGluZGV4ID0gZGl2LmRhdGFzZXQucHJvamVjdEluZGV4O1xuICBkaXYucmVtb3ZlKCk7XG4gIHByb2plY3QucmVtb3ZlUHJvamVjdCgpO1xuICBpZihpbmRleCA+IDApIHtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFzay1mb3JtJykuZGF0YXNldC5wcm9qZWN0SW5kZXggPSBpbmRleCAtIDE7XG4gICAgcHJvamVjdEhlYWRlci5pbm5lclRleHQgPSBhcnJQcm9qZWN0c1tpbmRleCAtIDFdLnRpdGxlO1xuICB9IGVsc2Uge1xuICAgIHByb2plY3RIZWFkZXIuaW5uZXJUZXh0ID0gXCJcIjtcbiAgfVxuICBjb25zdCBwcm9qZWN0VGFza3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGBkaXYudGFza1tkYXRhLXByb2plY3QtaW5kZXg9XCIke2luZGV4fVwiXWApO1xuICBmb3IobGV0IHRhc2sgb2YgcHJvamVjdFRhc2tzKSB7XG4gICAgdGFzay5yZW1vdmUoKTtcbiAgfVxuICBjb25zdCBwcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9qZWN0Jyk7XG4gIGZvcihsZXQgaSBpbiBhcnJQcm9qZWN0cykge1xuICAgIHByb2plY3RzW2ldLnNldEF0dHJpYnV0ZSgnZGF0YS1wcm9qZWN0LWluZGV4JywgaSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlVGFzayhwcm9qZWN0SW5kZXgpIHtcbiAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgY29uc3QgY2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBjb25zdCBwVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGNvbnN0IHBEZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBjb25zdCBwRHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgY29uc3QgcFByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBjb25zdCBlZGl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICBjb25zdCBkZWxldGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG5cbiAgbGV0IHRhc2tJbmRleCA9IGFyclByb2plY3RzW3Byb2plY3RJbmRleF0udGFza3MubGVuZ3RoO1xuICBsZXQgdGl0bGVWYWx1ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aXRsZScpLnZhbHVlO1xuICBsZXQgZGVzY1ZhbHVlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rlc2MnKS52YWx1ZTtcbiAgbGV0IGR1ZURhdGVWYWx1ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkdWUtZGF0ZScpLnZhbHVlO1xuICBsZXQgcHJpb3JpdHlWYWx1ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcmlvcml0eScpLnZhbHVlO1xuXG4gIGRpdi5jbGFzc0xpc3QuYWRkKCd0YXNrJyk7XG4gIGRpdi5zZXRBdHRyaWJ1dGUoJ2RhdGEtcHJvamVjdC1pbmRleCcsIHByb2plY3RJbmRleCk7XG4gIGRpdi5zZXRBdHRyaWJ1dGUoJ2RhdGEtdGFzay1pbmRleCcsIHRhc2tJbmRleCk7XG4gIGxhYmVsLmlubmVyVGV4dCA9IFwiVW5maW5pc2hlZFwiO1xuICBjaGVja2JveC50eXBlID0gXCJjaGVja2JveFwiO1xuICBjaGVja2JveC5jbGFzc0xpc3QuYWRkKCdjaGVja2JveCcpO1xuICBwVGl0bGUuaW5uZXJUZXh0ID0gdGl0bGVWYWx1ZTtcbiAgcERlc2MuY2xhc3NMaXN0LmFkZCgnZGVzYycpO1xuICBwRGVzYy5pbm5lclRleHQgPSBkZXNjVmFsdWU7XG4gIHBEdWVEYXRlLmlubmVyVGV4dCA9IGR1ZURhdGVWYWx1ZTtcbiAgcFByaW9yaXR5LmlubmVyVGV4dCA9IHByaW9yaXR5VmFsdWU7XG4gIGxldCBjb2xvciA9IHNldFByaW9yaXR5Q29sb3IoTnVtYmVyKHByaW9yaXR5VmFsdWUpKTtcbiAgcFByaW9yaXR5LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGNvbG9yO1xuICBlZGl0QnRuLmNsYXNzTGlzdC5hZGQoJ2ljb24nLCAnZWRpdC1pY29uJyk7XG4gIGRlbGV0ZUJ0bi5jbGFzc0xpc3QuYWRkKCdpY29uJywgJ2RlbGV0ZS1pY29uJyk7XG5cbiAgY2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgaWYodGFzay5jb21wbGV0ZSA9PT0gZmFsc2UpIHtcbiAgICAgIHRhc2suY29tcGxldGUgPSB0cnVlO1xuICAgICAgbGFiZWwuaW5uZXJUZXh0ID0gXCJDb21wbGV0ZVwiO1xuICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoJ2NvbXBsZXRlJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRhc2suY29tcGxldGUgPSBmYWxzZTtcbiAgICAgIGxhYmVsLmlubmVyVGV4dCA9IFwiVW5maW5pc2hlZFwiO1xuICAgICAgZGl2LmNsYXNzTGlzdC5yZW1vdmUoJ2NvbXBsZXRlJyk7XG4gICAgfVxuICB9KTtcblxuICBlZGl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGVkaXQgPSB0cnVlO1xuICAgIHRhc2tGb3JtQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgdGFza0Zvcm0uZGF0YXNldC50YXNrSW5kZXggPSB0YXNrSW5kZXg7XG4gICAgZmlsbEVkaXRGb3JtKHBUaXRsZS5pbm5lclRleHQsIHBEZXNjLmlubmVyVGV4dCwgcER1ZURhdGUuaW5uZXJUZXh0LCBwUHJpb3JpdHkuaW5uZXJUZXh0KTtcbiAgfSk7XG5cbiAgZGVsZXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGRlbGV0ZVRhc2soZGl2LCB0YXNrKTtcbiAgfSk7XG5cbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2stY29udGFpbmVyJykuYXBwZW5kQ2hpbGQoZGl2KTtcbiAgZGl2LmFwcGVuZChjaGVja2JveCwgbGFiZWwsIHBUaXRsZSwgcERlc2MsIHBEdWVEYXRlLCBwUHJpb3JpdHksIGVkaXRCdG4sIGRlbGV0ZUJ0bik7XG5cbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2stZm9ybScpLnJlc2V0KCk7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrLWZvcm0tY29udGFpbmVyJykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblxuICBjb25zdCB0YXNrID0gY3JlYXRlVGFza0NsYXNzKHRpdGxlVmFsdWUsIGRlc2NWYWx1ZSwgZHVlRGF0ZVZhbHVlLCBwcmlvcml0eVZhbHVlLCBmYWxzZSwgcHJvamVjdEluZGV4KTtcbiAgY29uc29sZS5sb2coYXJyUHJvamVjdHMpO1xufVxuXG5mdW5jdGlvbiBzZXRQcmlvcml0eUNvbG9yKG51bSkge1xuICBjb25zb2xlLmxvZyhudW0pXG4gIHN3aXRjaCAobnVtKSB7XG4gICAgY2FzZSAxOlxuICAgICAgcmV0dXJuIFwicmVkXCI7O1xuICAgIGNhc2UgMjpcbiAgICAgIHJldHVybiBcIm9yYW5nZVwiO1xuICAgIGNhc2UgMzpcbiAgICAgIHJldHVybiBcImdyZWVuXCI7XG4gICAgY2FzZSA0OlxuICAgICAgcmV0dXJuIFwiYmx1ZVwiO1xuIH1cbn1cblxuZnVuY3Rpb24gYXBwZW5kVGFzayh0aXRsZSwgZGVzYywgZHVlZGF0ZSwgcHJpb3JpdHksIGNvbXBsZXRlLCBwcm9qZWN0SW5kZXgsIHRhc2tJbmRleCkge1xuICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIGNvbnN0IHBUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgY29uc3QgcERlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGNvbnN0IHBEdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBjb25zdCBwUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGNvbnN0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXG4gIGRpdi5jbGFzc0xpc3QuYWRkKCd0YXNrJyk7XG4gIGRpdi5zZXRBdHRyaWJ1dGUoJ2RhdGEtcHJvamVjdC1pbmRleCcsIHByb2plY3RJbmRleCk7XG4gIGRpdi5zZXRBdHRyaWJ1dGUoJ2RhdGEtdGFzay1pbmRleCcsIHRhc2tJbmRleCk7XG4gIGlmKGNvbXBsZXRlID09PSB0cnVlKSB7XG4gICAgbGFiZWwuaW5uZXJUZXh0ID0gXCJDb21wbGV0ZVwiO1xuICB9IGVsc2Uge1xuICAgIGxhYmVsLmlubmVyVGV4dCA9IFwiVW5maW5pc2hlZFwiO1xuICB9XG4gIGlucHV0LnR5cGUgPSBcImNoZWNrYm94XCI7XG4gIGlucHV0LmNsYXNzTGlzdC5hZGQoJ2NoZWNrYm94Jyk7XG4gIHBUaXRsZS5pbm5lclRleHQgPSB0aXRsZTtcbiAgcERlc2MuY2xhc3NMaXN0LmFkZCgnZGVzYycpO1xuICBwRGVzYy5pbm5lclRleHQgPSBkZXNjO1xuICBwRHVlRGF0ZS5pbm5lclRleHQgPSBkdWVkYXRlO1xuICBwUHJpb3JpdHkuaW5uZXJUZXh0ID0gcHJpb3JpdHk7XG4gIGJ0bi5jbGFzc0xpc3QuYWRkKCdjbG9zZS1idG4nKTtcbiAgYnRuLmlubmVyVGV4dCA9IFwiWFwiO1xuXG5cbiAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGRlbGV0ZVRhc2soZGl2LCB0YXNrKTtcbiAgfSlcblxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFzay1jb250YWluZXInKS5hcHBlbmRDaGlsZChkaXYpO1xuICBkaXYuYXBwZW5kKGxhYmVsLCBwVGl0bGUsIHBEZXNjLCBwRHVlRGF0ZSwgcFByaW9yaXR5LCBidG4pO1xuICBsYWJlbC5hcHBlbmRDaGlsZChpbnB1dCk7XG59XG5cbmZ1bmN0aW9uIGNsZWFyVGFzaygpIHtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2stY29udGFpbmVyJyk7XG4gIHdoaWxlKGNvbnRhaW5lci5oYXNDaGlsZE5vZGVzKCkgJiYgY29udGFpbmVyLmNoaWxkRWxlbWVudENvdW50ID4gMSkge1xuICAgIGNvbnRhaW5lci5yZW1vdmVDaGlsZChjb250YWluZXIubGFzdENoaWxkKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBmaWxsRWRpdEZvcm0odGl0bGUsIGRlc2MsIGR1ZWRhdGUsIHByaW9yaXR5KSB7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aXRsZScpLnZhbHVlID0gdGl0bGU7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZXNjJykudmFsdWUgPSBkZXNjO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZHVlLWRhdGUnKS52YWx1ZSA9IGR1ZWRhdGU7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcmlvcml0eScpLnZhbHVlID0gcHJpb3JpdHk7XG59XG5cbmZ1bmN0aW9uIGVkaXRUYXNrKHByb2plY3RJbmRleCwgdGFza0luZGV4LCAuLi5mb3JtVmFsdWVzKSB7XG4gIGNvbnN0IGRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGRpdi50YXNrW2RhdGEtcHJvamVjdC1pbmRleD1cIiR7dGFza0luZGV4fVwiXWApO1xuICBjb25zdCBub2RlID0gZGl2LmNoaWxkTm9kZXM7XG4gIGxldCBjb3VudGVyID0gMjtcbiAgZm9yKGxldCBpIGluIGZvcm1WYWx1ZXMpIHtcbiAgICBub2RlW2NvdW50ZXJdLmlubmVyVGV4dCA9IGZvcm1WYWx1ZXNbaV07XG4gICAgYXJyUHJvamVjdHNbcHJvamVjdEluZGV4XS50YXNrc1tpXSA9IGZvcm1WYWx1ZXNbaV07XG4gICAgY291bnRlcisrXG4gIH1cbiAgY29uc29sZS5sb2coYXJyUHJvamVjdHNbcHJvamVjdEluZGV4XS50YXNrcylcbiAgdGFza0Zvcm0ucmVzZXQoKTtcbiAgdGFza0Zvcm1Db250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xufVxuXG5mdW5jdGlvbiBkZWxldGVUYXNrKGRpdiwgdGFzaykge1xuICBsZXQgaW5kZXggPSBkaXYuZGF0YXNldC5wcm9qZWN0SW5kZXg7XG4gIGRpdi5yZW1vdmUoKTtcbiAgYXJyUHJvamVjdHNbaW5kZXhdLnJlbW92ZVRhc2sodGFzayk7XG4gIGNvbnN0IHRhc2tzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhc2snKTtcbiAgZm9yKGxldCBpIGluIGFyclByb2plY3RzW2luZGV4XS50YXNrcykge1xuICAgIHRhc2tzW2ldLmRhdGFzZXQudGFza0luZGV4ID0gaTtcbiAgfVxufVxuXG5jcmVhdGVQcm9qZWN0KFwiRGVmYXVsdFwiKTtcblxuZXhwb3J0IHsgY3JlYXRlUHJvamVjdCwgY3JlYXRlVGFzaywgZWRpdFRhc2ssIGVkaXQgfSIsImltcG9ydCB7IGNyZWF0ZVByb2plY3QsIGNyZWF0ZVRhc2ssIGVkaXRUYXNrLCBlZGl0IH0gZnJvbSBcIi4vRE9NXCI7XG5cbmNvbnN0IHByb2plY3RCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkLXByb2plY3QtYnRuJyk7XG5jb25zdCBhZGRUYXNrQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZC10YXNrLWJ0bicpO1xuY29uc3QgdGFza0Zvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFzay1mb3JtJyk7XG5jb25zdCBwcm9qZWN0Rm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0LWZvcm0nKTtcblxucHJvamVjdEZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICBjcmVhdGVQcm9qZWN0KGUudGFyZ2V0WzBdLnZhbHVlKTtcbn0pO1xuXG5wcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdC1mb3JtLWNvbnRhaW5lcicpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xufSk7XG5cbnRhc2tGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgaWYoZWRpdCA9PT0gZmFsc2UpIHtcbiAgICBjcmVhdGVUYXNrKGUudGFyZ2V0LmRhdGFzZXQucHJvamVjdEluZGV4KTtcbiAgfSBlbHNlIGlmKGVkaXQgPT09IHRydWUpIHtcbiAgICBlZGl0VGFzayhlLnRhcmdldC5kYXRhc2V0LnByb2plY3RJbmRleCwgZS50YXJnZXQuZGF0YXNldC50YXNrSW5kZXgsIGUudGFyZ2V0WzBdLnZhbHVlLCBlLnRhcmdldFsxXS52YWx1ZSxcbiAgICAgIGUudGFyZ2V0WzJdLnZhbHVlLCBlLnRhcmdldFszXS52YWx1ZSk7XG4gIH1cbn0pO1xuXG5hZGRUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBjb25zdCBwcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucHJvamVjdFwiKTtcbiAgaWYocHJvamVjdHMubGVuZ3RoID4gMCkge1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrLWZvcm0tY29udGFpbmVyJykuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gIH1cbn0pOyJdLCJuYW1lcyI6WyJhcnJQcm9qZWN0cyIsIlByb2plY3QiLCJjb25zdHJ1Y3RvciIsInRpdGxlIiwidGhpcyIsInRhc2tzIiwicmVtb3ZlUHJvamVjdCIsInNwbGljZSIsImluZGV4T2YiLCJhZGRUYXNrIiwidGFzayIsImNvbnNvbGUiLCJsb2ciLCJwdXNoIiwicmVtb3ZlVGFzayIsIlRhc2siLCJkZXNjIiwiZHVlZGF0ZSIsInByaW9yaXR5IiwiY29tcGxldGUiLCJlZGl0IiwicHJvamVjdEhlYWRlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJ0YXNrRm9ybUNvbnRhaW5lciIsInRhc2tGb3JtIiwiY3JlYXRlUHJvamVjdCIsInByb2plY3ROYW1lIiwiY2xlYXJUYXNrIiwiZGl2IiwiY3JlYXRlRWxlbWVudCIsInAiLCJidG4iLCJpbm5lclRleHQiLCJjbGFzc0xpc3QiLCJhZGQiLCJzZXRBdHRyaWJ1dGUiLCJsZW5ndGgiLCJkaXNhYmxlZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJwcm9qZWN0SW5kZXgiLCJkYXRhc2V0IiwicHJvamVjdCIsImFwcGVuZFRhc2siLCJpbmRleCIsInJlbW92ZSIsInByb2plY3RUYXNrcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJwcm9qZWN0cyIsImkiLCJkZWxldGVQcm9qZWN0IiwiaGFzQ2hpbGROb2RlcyIsInJlbW92ZUNoaWxkIiwibGFzdENoaWxkIiwiYXBwZW5kQ2hpbGQiLCJhcHBlbmQiLCJyZXNldCIsInN0eWxlIiwiZGlzcGxheSIsImNyZWF0ZVByb2plY3RDbGFzcyIsInRhc2tJbmRleCIsImxhYmVsIiwiaW5wdXQiLCJwVGl0bGUiLCJwRGVzYyIsInBEdWVEYXRlIiwicFByaW9yaXR5IiwidHlwZSIsImRlbGV0ZVRhc2siLCJjb250YWluZXIiLCJjaGlsZEVsZW1lbnRDb3VudCIsInByb2plY3RCdG4iLCJhZGRUYXNrQnRuIiwiZSIsInByZXZlbnREZWZhdWx0IiwidGFyZ2V0IiwidmFsdWUiLCJjaGVja2JveCIsImVkaXRCdG4iLCJkZWxldGVCdG4iLCJ0aXRsZVZhbHVlIiwiZGVzY1ZhbHVlIiwiZHVlRGF0ZVZhbHVlIiwicHJpb3JpdHlWYWx1ZSIsImNvbG9yIiwibnVtIiwic2V0UHJpb3JpdHlDb2xvciIsIk51bWJlciIsImJhY2tncm91bmRDb2xvciIsImNyZWF0ZVRhc2tDbGFzcyIsImNyZWF0ZVRhc2siLCJmb3JtVmFsdWVzIiwibm9kZSIsInF1ZXJ5U2VsZWN0b3IiLCJjaGlsZE5vZGVzIiwiY291bnRlciIsImVkaXRUYXNrIl0sInNvdXJjZVJvb3QiOiIifQ==