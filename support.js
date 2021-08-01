export const getPosTop = (i, j) => 20+100*i

export const getPosLeft = (i, j) => 20+100*j

export const getNumberBackgroundColor = (num) => {
    switch(num){
        case(2): return '#92f5f2'
        case(4): return '#06dbf3'
        case(8): return '#02a7f2'
        case(16): return '#749ffb'
        case(32): return '#007ae0'
        case(64): return '#0242e3'
        case(128): return '#13446b'
        case(256): return '#6155db'
        case(512): return '#a580eb'
        case(1024): return '#37137b'
        case(2048): return '#9c01e9'
        default: return 'black'
    }
}

export const getNumberColor = (num) => {
    if(num==2)
        return 'black'
    else
        return '#fdfefd'     
}