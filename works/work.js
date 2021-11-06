console.log(data.length)
let z = 11056/10
console.log(Math.round(z))
function makenumbers(d, g){
    let r;
    let q
    for(let i=0; i<d.length; i++){
        if(g>11980){
            return 'error'
        }else if(g < 0){
            return 'error'
        }else if(g/10 == i){
            return (d[i])  
        }else if(g % 10 !=0){
            r = g.toString();
            console.log(i)
            console.log(r)
           r= parseInt(r.charAt(r.length-1));
           if(r<6){
            console.log(r)
            q = findnumbers(g, r)
            console.log(q)
            g=parseInt(g/10)
            console.log(g)
            q= d[g] + q
            return (q)
            }else if(r>=6){
                u=Math.round(g/10)
               let k= d[u]
               let h=u*10;
                console.log(h)
               let z= h-g
               console.log(k)
                q = findnumbers(h, z)
                console.log(q)
                q= k - q
                return (q) 
            }

        }
        
    }

}

const dform = document.querySelector('#dip');
const getResult = dform.addEventListener('submit', (e)=>{
    const result = dform.elements.height.value
    let summed = makenumbers(data, result);
    const res = document.querySelector('#res')
    res.value = summed;
   e.preventDefault()
})