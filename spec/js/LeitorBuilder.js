function LeitorBuilder(){

    var glbid = '';
    var produto = '';

    var clazz = {

        setGlbid : function(valor){
            glbid = valor;
            return this;
        },

        setProduto : function(valor){
            produto = valor;
            return this;
        }, 

        build : function(){
            return {glbid, produto};
        }


    };

    return clazz;
}