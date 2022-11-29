let dog1=20;
let dog2=0;

let totalcount=dog1+dog2;

  console.log("Giving out 20 Steps");
for(let i=1; i<=20; i++){
            let r=Math.random();
            if(r<=dog1/totalcount){
                        dog1-=1;
                        dog2+=1;
            }else{
                        dog1+=1;
                        dog2-=1;
            }
            console.log('i=',i);
            console.log('r=',r);
            console.log('X(',i,'):(','Dog1=',dog1,', ','Dog2=',dog2, ')');
}
console.log("Giving returning step to initial stage");

 
results=[]
for(let j=0; j<20; j++){

            let i=0;
            do {
                        let r=Math.random();
                        if(r<=dog1/20){
                                    dog1-=1;
                                    dog2+=1;
                        }
                        else{
                                    dog1+=1;
                                    dog2-=1;
                        }
                        i+=1;
            }while((dog1!==20)&&(dog2!==0))
            results.push(i)
            console.log(i)
}
const avrg = array => array.reduce ((a, b) => a + b, 0) / array.length;
console.log('Average=',avrg(results));