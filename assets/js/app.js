let cl = console.log;

const selectboxcolor = document.getElementById('selectboxcolor')

const all = [...document.querySelectorAll('.all')]


const oncolorChange = (eve) => {
    let getcls = eve.target.value;
    cl(getcls)
    all.forEach(div => {
        div.classList.add('d-none')
        
    })

    const showdiv = [...document.getElementsByClassName(getcls)]


    showdiv.forEach(div => {

     div.classList.remove('d-none')
  })
       
  cl(showdiv)
  
}

selectboxcolor.addEventListener('change', oncolorChange)