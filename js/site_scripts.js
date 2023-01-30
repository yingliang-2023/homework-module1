var photo=[];
        var fileNames=[];
        var imageList=[];
        var image;
        var openList="<li class='partner'>";
        var closeList="</li>";

        for (var i=0; i<6; i++){
            fileNames.push("partner"+(i+1));
            photo.push("<img src='images/partners/"+fileNames[i]+".png'>");
            image=openList+photo[i]+closeList;
            imageList.push(image);
        }

        //insert all final image elements in the album.

        //Display
        document.getElementById("partners").innerHTML=imageList.join(" ");


        



        