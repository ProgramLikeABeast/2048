export const move = (board, direction) => {
    switch(direction){
        case "up":{
            for(var j=0; j<4; j++){
                var stacked = lineStacking([board[0][j], board[1][j], board[2][j], board[3][j]]);
                [board[0][j], board[1][j], board[2][j], board[3][j]] = [stacked[0], stacked[1], stacked[2], stacked[3]]   
            }break
        }
        case "down":{
            for(var j=0; j<4; j++){
                var stacked = lineStacking([board[3][j], board[2][j], board[1][j], board[0][j]]);
                [board[3][j], board[2][j], board[1][j], board[0][j]] = [stacked[0], stacked[1], stacked[2], stacked[3]]
            }break
        }
        case "left":{
            for(var i=0; i<4; i++){
                var stacked = lineStacking(board[i]);
                board[i] = stacked
            }break
        }
        case "right":{
            for(var i=0; i<4; i++){
                var stacked = lineStacking(board[i].reverse());
                board[i] = stacked.reverse()
            }break
        }
        default:
            console.log('error');
    }
}   

const lineStacking = (array) => {
    var compactStack = []
    for(var i=0; i<4; i++){
        if(array[i]>0)
            compactStack.push(array[i])
    }
    array = [0, 0, 0, 0]
    switch(compactStack.length){
        case 0:
            break
        case 1:{
            array[0] = compactStack[0]
            break
        }
        case 2:{
            if(compactStack[0]==compactStack[1])
                array[0] = compactStack[0] + compactStack[1]
            else{
                array[0] = compactStack[0]
                array[1] = compactStack[1]
            }
            break
        }
        case 3:{
            if(compactStack[0]==compactStack[1]){
                array[0]=compactStack[0]+compactStack[1]
                array[1]=compactStack[2]
            }else{
                array[0]=compactStack[0]
                if(compactStack[1]==compactStack[2]){
                    array[1]=compactStack[1]+compactStack[2]
                }else{
                    array[1]=compactStack[1]
                    array[2]=compactStack[2]
                }
            }
            break
        }
        case 4:{
            if(compactStack[0]==compactStack[1]){
                array[0]=compactStack[0]+compactStack[1]
                if(compactStack[2]==compactStack[3]){
                    array[1]=compactStack[2]+compactStack[3]
                }else{
                    array[1]=compactStack[2]
                    array[2]=compactStack[3]
                }
            }else{
                if(compactStack[1]==compactStack[2]){
                    array[0]=compactStack[0]
                    array[1]=compactStack[1]+compactStack[2]
                    array[2]=compactStack[3]
                }else{
                    array[0]=compactStack[0]
                    array[1]=compactStack[1]
                    if(compactStack[2]==compactStack[3]){
                        array[2]=compactStack[2]+compactStack[3]
                    }else{
                        array[2]=compactStack[2]
                        array[3]=compactStack[3]
                    }
                }
            }
            break
        }
    }
    return array
}