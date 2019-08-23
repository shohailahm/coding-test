
  function solution2(N,arr){
 
    var initObj=arr.reduce((acc,val)=>{
        if(val>N){return acc}
       if(acc[val]===undefined){
          acc[val]=1
       }else{
         acc[val]=acc[val]+1
       }
       return acc;
    },{});

     var remain=arr.length;
     var arr2={};
      for(var i=1;i<=N;i++){
        if(initObj[i]){
           arr2[i]=(initObj[i]/remain)
           remain=remain-initObj[i]
        }else{
          arr2[i]=(0/remain);
        }
        
      }
      arr2
    var objArr=Object.entries(arr2).sort((a,b)=>{
     
         if(a[1]>b[1])return -1
         if (a[1] < b[1]) return 1;
         return 0;
      })
      return objArr.map((item)=>Number(item[0]))
 
   
   }
 
   console.log("second solution",solution2(5,[2,1,2,6,2,4,3,3]));
 
 
   function getStatus(string){
      switch (string) {
         case "Enter":
            return " came in"
       case "Leave":
          return " has left"
         default:
            return ""
            break;
      }
   }
 
   function solution1(records){
      var obj=records.reduce((acc,i)=>{
         let item=i.split(" ");
             acc[item[1]]={name:item[2]}
         return acc; 
      },{})
       
      var arr=records.map((item,ind)=>{
         item=item.split(" ")
         if(item[0]=="Change")return
         return obj[item[1]].name+getStatus(item[0])
      }).filter((it)=>it)
      
    return arr
    
     
   }
 
   console.log("First solution",solution1(["Enter uid1234 Muzi", "Enter uid4567 Prodo", "Leave uid1234", "Enter uid1234 Prodo", "Change uid4567 Ryan"]));
 
 
   function solution3(records){
   var answer_list = []
    for(var i=1;i<records.length;i++){
       var mySet = new Set();
       for(var j=0;j<records[0].length;j++){
          var tmp="";
          for(var k=0;j<records[0].length;k++){
             tmp += records[j][k]
             mySet.add(tmp);
          }
          if(mySet.length===records.length){
             var not_duplicate=true;
             for (num in answer_list){
                if (num  == num){
                   not_duplicate = false
                }
                
             }
             if (not_duplicate){
                answer_list.push(i)
             }
           
          }
       }
       
    }
    return answer_list.length;
 
 
   }
 
   console.log("Third solution",solution3([["100","ryan","music","2"],["200","apeach","math","2"],["300","tube","computer","3"],["400","con","computer","4"],["500","muzi","music","3"],["600","apeach","music","2"]]));