setInterval(()=>{
    const h = document.querySelector('.hour');
    const m = document.querySelector('.minute');
    const s = document.querySelector('.second');
    d = new Date();
    hours = d.getHours();
    minutes = d.getMinutes();
    seconds = d.getSeconds();
    hrotation = 30 * hours + minutes/2 + seconds/120;
    mrotation = 6 * minutes;
    srotation = 6 * seconds;

    h.style.transform = `rotate(${hrotation}deg)`;
    m.style.transform = `rotate(${mrotation}deg)`;
    s.style.transform = `rotate(${srotation}deg)`;
},1000)