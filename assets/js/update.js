const userAction = async () => {
    const response = await fetch('http://127.0.0.1:5000/api/prs/users/top10');
    const myJson = await response.json(); //extract JSON from the http response
    return myJson;
// do something with myJson
    }

    const updateList = async () => {
        setInterval(() => {
            const p = userAction().then((response)=> {
                document.getElementById("plist").innerHTML = '<div class="row">\
                <div class="col" style="font-size: 31px;"><label class="col-form-label head" style="font-size: 31px;">Rank</label></div>\
                <div class="col" style="font-size: 28px;"><label class="col-form-label head" style="font-size: 25px;">Name</label></div>\
                <div class="col" style="font-size: 25px;"><label class="col-form-label head" style="font-size: 25px;">Number of Pull Requests</label></div>\
            </div>';
                for (var key in response) {
                    if (response.hasOwnProperty(key)) {
                      var val = response[key];
                      createEle(response, key)
                    }
                  }
            }); 
        }, 1200);
    };

    updateList();
    

var createEle = (response, rank) => {
    var div = document.createElement('div');
    div.className = "row"
    div.style.color = "#ffd700"
    prank = parseInt(parseInt(rank) + 1)    
    div.innerHTML = '<div class="col" style="font-size: 21px;"><label id="rank" class="col-form-label">' + prank + '</label></div>\
    <div class="col"><a id="name" target="_blank" href="https://github.com/' + response[rank].Name + '" style="font-size: 31px;color: #ffd700;">' + response[rank].Name + '</a></div>\
    <div class="col"><label id="pr" class="col-form-label">' + response[rank].PRs + '</label></div>'

    document.getElementById("plist").appendChild(div);
}