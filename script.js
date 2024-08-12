let count = document.getElementById('count');
console.log(count)
let type = document.getElementById('text');
console.log(type)
let c = 0;
function incr ()
{
    c++;
    if(c<=0) type.textContent = 'Type';
    else
    {
        if(c%2==0)
            {
                /*if(c==0) type.textContent = 'Type'; 
                else */type.textContent = 'Even';
                count.textContent = c;
            }
            else
            {
                /*if(c==0) type.textContent = 'Type'; 
                else */type.textContent = 'Odd';
                count.textContent = c;
            }
    }
}
function decr ()
{
    if(c<=0)
        {
            alert("Least number is 0");
            /*type.textContent = 'Type'; */
        }
    else{
        c--;
        if(c%2==0)
            {
                /*if(c==0) type.textContent = 'Type'; 
                else */type.textContent = 'Even';
                count.textContent = c;
            }
            else
            {
                /*if(c==0) type.textContent = 'Type'; 
                else */type.textContent = 'Odd';
                count.textContent = c;
            }
    }

}
function reset ()
{
    c=0;
    type.textContent = 'Type';
    count.textContent = c;
}