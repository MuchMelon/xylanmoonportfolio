var boxwrap = document.querySelector('#classbox');


$.getJSON('https://raw.githubusercontent.com/emuel/api/master/5110', function(data) {
    for(let i = 0; i < data.length; i++) {
        boxwrap.innerHTML += "<div>" + grabName(i)+"<img src =https://"+grabPicture(i)+">"+ grabFact(i) +"</div>"
    }
    
    function grabName(count) {
        return "<h2>" + data[count].stu_name + " "+ data[count].last_name +"</h2>";
    }
    function grabFact(count) {
        return "<h2>Fact</h2><p>"+ data[count].fact+"</p>";
    }

    function grabPicture(count) {
        return  data[count].domain + "/images/me.jpg"
    }
});




