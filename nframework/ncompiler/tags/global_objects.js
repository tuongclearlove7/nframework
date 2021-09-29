var Tag=require('../tag/tag');

var tag=new Tag();

tag.isAutoClose=true;

tag.Compile=function(element,childsCode,code){
    var inputs=tag.GetInputs(element,childsCode,code);
    

    if(inputs[0]=='*'){
        return `
            this.useAllGlobalObjects=true;
        `;
    }
    else{
        var code=`this.customTypeDatas=[];
        `;
    
        for(var i=0;i<inputs.length;i++){
            code+=`this.customTypeDatas.push('${inputs[i]}');
            `;
        }
        
        return `
        
            ${code}
        
        `;
    }

    
}


module.exports=tag;