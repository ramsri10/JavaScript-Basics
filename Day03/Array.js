let array=[23,45,65,78,23,90,65]

       for(i=0;i<array.length;i++){
         for(j=i+1;j<array.length;j++){
            if(array[i]==array[j])
            {
               console.log(array[j])
            }
         }
       }

       console.log(typeof new String('abc'))