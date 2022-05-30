function startClassification()
{
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/',modelReady);
}
function modelReady()
{
    classifier.classify(gotResults);
}

function gotResults(error,results)
{
    if(error)
    {
        console.log(error);
    }
    else 
    {
        console.log(results);
        r = Math.floor(Math.random() * 255) + 1;
        g = Math.floor(Math.random() * 255) + 1;
        b = Math.floor(Math.random() * 255) + 1;

        img1 = document.getElementById("alien1");
        img2 = document.getElementById("alien2");
        img3 = document.getElementById("alien3");
        img4 = document.getElementById("alien4");
        
        result_label = results[0].label;
        result_confidence = results[0].confidence.toFixed(2) * 100;

        document.getElementById("result_label").innerHTML = result_label;
        document.getElementById("result_confidence").innerHTML = result_confidence+"%";

        document.getElementById("result_confidence").style.color = "rgb("+r+","+g+","+b+")";
        document.getElementById("result_label").style.color = "rgb("+r+","+g+","+b+")";

        if(result_label == "bark")
        {
            img1.src = "porita-german-sheperd.gif";
            img2.src = "istockphoto-1072769156-612*612.jpg";
            img3.src = "aliens-03.png";
            img4.src = "aliens-04.png";
        }
        else if(result_label == "roar")
        {
            img1.src = "aliens-01.png";
            img2.src = "aliens-02.gif";
            img3.src = "aliens-03.png";
            img4.src = "aliens-04.png";
        }
        else if(result_label == "meow")
        {
            img1.src = "aliens-01.png";
            img2.src = "aliens-02.png";
            img3.src = "aliens-03.gif";
            img4.src = "aliens-04.png";
        }
        else 
        {
              img1.src = "aliens-01.png";
            img2.src = "aliens-02.png";
            img3.src = "aliens-03.png";
            img4.src = "aliens-04.gif";
        }
    }
};