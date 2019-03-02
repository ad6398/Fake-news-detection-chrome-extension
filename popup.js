$(function(){

   
    chrome.storage.sync.get(["body", "headline"], function(result){
        $("#head1").text(result.headline);
        $("#body1").text(result.body);
    });

    $("#check1").click(function(){

        chrome.storage.sync.get(["body", "headline"], function(result){
            $("#head1").text(result.headline);
            $("#body1").text(result.body);
        });
        var xhr = new XMLHttpRequest();
        var url = "https://fake-news-api-v0.herokuapp.com/predict";
        xhr.open("POST", url, true);
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                var json = JSON.parse(xhr.responseText);
                $("#result").text(json["prediciton"]);
            }
            
        };
        head= $("#head1").text();
        body= $("#body1").text();
        var data = JSON.stringify([{"head": head , "body": body}]);
        xhr.send(data);
        

    });


});