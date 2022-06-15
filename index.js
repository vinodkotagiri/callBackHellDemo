let displayText=document.getElementById("display");

//function to set value to display
function setValue(value){
    displayText.innerHTML=value;
}

setTimeout(()=>{
    setValue(10);
    setTimeout(()=>{
        setValue(9);
        setTimeout(()=>{
            setValue(8);
            setTimeout(()=>{
                setValue(7);
                setTimeout(()=>{
                    setValue(6);
                    setTimeout(()=>{
                        setValue(5);
                        setTimeout(()=>{
                            setValue(4);
                            setTimeout(()=>{
                                setValue(3);
                                setTimeout(()=>{
                                    setValue(2);
                                    setTimeout(()=>{
                                        setValue(1);
                                        setTimeout(()=>{
                                            setValue("Happy Independence Day!!")
                                        },1000)
                                    },1000)
                                },1000)
                            },1000)
                        },1000)
                    },1000)
                },1000)
            },1000)
        },1000)
    },1000)
},1000);