function operacion(valor2, nega){

    console.log("-****-****-*****-****-****-res", valor2, nega)

    let valor = eval(valor2)

    let size = valor.toString().length

    if(valor < 0 && nega == false){
      valor = 'ERROR**'
    } else if(valor > 999999999){
      valor = 'ERROR'
    } else{
      if(size >= 10){
        let varW = true
        while(varW == true){
          if(size == 9){
            varW = false
          }else{
            valor = valor.toString().slice(0,-1)
            size = size - 1;
          }
        }
      } 
    }
   
    valor = valor + "";
    return(valor)

}
export default operacion