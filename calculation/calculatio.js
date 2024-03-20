import express from "express";
const prev=0;
const eve=2;
export const prime=async(req,res)=>{
    try{
        const num=[];
        if(prev==0){
            for(let i=1;i<=5;i++){
                num.push(2)
                num.push(3)
                num.push(5)
                num.push(7)
                num.push(11)
            }
        }
        else
        {
            let i=1;
            let a=prev+1;
            while(i<=5)
            {
                let f=true;
                for(let j=2;j<prev;j++)
                {
                    if(prev%j==0)
                        f=false;
                }
                if(f)
                {
                    num.push(prev);
                    i++;
                    prev++;
                }
                
            }
        }
        prev=num[4];
        res.status(200).json({"numbers":num})
    }
    catch(err()=>{
        console.log(err);
    })
}

export const even=async(req,res)=>{
    try
    {
        let num=[];
        if(eve==2)
        {
            num=[2,4,6,8,10,12];
        }
        else
        {
            for(let i=1;i<=6;i++)
            {
                num.push(eve+=2);
            }
        }
        eve=num[5];
        res.status(200).json({"numbers":num});
    }
}