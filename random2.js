var cname=document.getElementById('name');
var btnrandom=document.querySelector('.btn');
var story=document.querySelector('.story');
function randomValueSelectionFromArray(array){
 return array[Math.floor(Math.random()*array.length)];
}
    var oldstory= "Jerry is a :insertx: character of a cartoon series Tom and Jerry. The director of the :inserty: Tom and Jerry is William Hanna and Joseph Barbera.Jerry is a small, brown house mouse who always lives in close proximity to Tom, his favorite food is :insertz:. Jerry also possesses surprising strength for his size, approximately the equivalent of Tom's, lifting items such as anvils with relative ease and withstanding considerable impacts";
    var insertX=["main","leading"];
    var insertY=["show","television show","program series"];
    var insertZ=["cheese","butter","sandwich"]; 
    btnrandom.addEventListener('click',result);
    function result(){
      var newstory=oldstory;
      var xitem=randomValueSelectionFromArray(insertX);
      var yitem=randomValueSelectionFromArray(insertY);
      var zitem=randomValueSelectionFromArray(insertZ);
      var newstory=newstory.replace(":insertx:",xitem);
      var newstory=newstory.replace(":inserty:",yitem);
      var newstory=newstory.replace(":insertz:",zitem);
      if(cname.value!=''){
          var name=cname.value;
          newstory=newstory.replace('Bheem',name);
      }
      story.textContent=newstory;
      story.style.visibility='visible';
        }