function CreateResponse() {

    /* Make sure that the form is valid */
    if ($("#survey").valid()) {

        var myURL = "https://phillip-fredieu-it-emerald-phifred.c9users.io/itec-3650/survey/restapi.php/survey/";

        // POST to insert new record

        var myMethod = "POST";

        // Form handling

        var myData = {};

        myData.DateVisited = document.getElementById("DateVisited").value;

        if (document.getElementById("DineIn").checked) {
            myData.DineInTakeOut = document.getElementById("DineIn").value;
        }

        if (document.getElementById("TakeOut").checked) {
            myData.DineInTakeOut = document.getElementById("TakeOut").value;
        }

        if (document.getElementById("FoodQualityExcellent").checked) {
            myData.FoodQuality = document.getElementById("FoodQualityExcellent").value;
        }
        if (document.getElementById("FoodQualityGood").checked) {
            myData.FoodQuality = document.getElementById("FoodQualityGood").value;
        }
        if (document.getElementById("FoodQualityAverage").checked) {
            myData.FoodQuality = document.getElementById("FoodQualityAverage").value;
        }
        if (document.getElementById("FoodQualityDisatisfied").checked) {
            myData.FoodQuality = document.getElementById("FoodQualityDisatisfied").value;
        }

        if (document.getElementById("ServiceQualityExcellent").checked) {
            myData.ServiceQuality = document.getElementById("ServiceQualityExcellent").value;
        }
        if (document.getElementById("ServiceQualityGood").checked) {
            myData.ServiceQuality = document.getElementById("ServiceQualityGood").value;
        }
        if (document.getElementById("ServiceQualityAverage").checked) {
            myData.ServiceQuality = document.getElementById("ServiceQualityAverage").value;
        }
        if (document.getElementById("ServiceQualityDisatisfied").checked) {
            myData.ServiceQuality = document.getElementById("ServiceQualityDisatisfied").value;
        }

        if (document.getElementById("OrderAccuracyExcellent").checked) {
            myData.OrderAccuracy = document.getElementById("OrderAccuracyExcellent").value;
        }
        if (document.getElementById("OrderAccuracyGood").checked) {
            myData.OrderAccuracy = document.getElementById("OrderAccuracyGood").value;
        }
        if (document.getElementById("OrderAccuracyAverage").checked) {
            myData.OrderAccuracy = document.getElementById("OrderAccuracyAverage").value;
        }
        if (document.getElementById("OrderAccuracyDisatisfied").checked) {
            myData.OrderAccuracy = document.getElementById("OrderAccuracyDisatisfied").value;
        }

        if (document.getElementById("SpeedOfServiceExcellent").checked) {
            myData.SpeedOfService = document.getElementById("SpeedOfServiceExcellent").value;
        }
        if (document.getElementById("SpeedOfServiceGood").checked) {
            myData.SpeedOfService = document.getElementById("SpeedOfServiceGood").value;
        }
        if (document.getElementById("SpeedOfServiceAverage").checked) {
            myData.SpeedOfService = document.getElementById("SpeedOfServiceAverage").value;
        }
        if (document.getElementById("SpeedOfServiceDisatisfied").checked) {
            myData.SpeedOfService = document.getElementById("SpeedOfServiceDisatisfied").value;
        }

        if (document.getElementById("ValueExcellent").checked) {
            myData.Value = document.getElementById("ValueExcellent").value;
        }
        if (document.getElementById("ValueGood").checked) {
            myData.Value = document.getElementById("ValueGood").value;
        }
        if (document.getElementById("ValueAverage").checked) {
            myData.Value = document.getElementById("ValueAverage").value;
        }
        if (document.getElementById("ValueDisatisfied").checked) {
            myData.Value = document.getElementById("ValueDisatisfied").value;
        }

        if (document.getElementById("OverallExperienceExcellent").checked) {
            myData.OverallExperience = document.getElementById("OverallExperienceExcellent").value;
        }
        if (document.getElementById("OverallExperienceGood").checked) {
            myData.OverallExperience = document.getElementById("OverallExperienceGood").value;
        }
        if (document.getElementById("OverallExperienceAverage").checked) {
            myData.OverallExperience = document.getElementById("OverallExperienceAverage").value;
        }
        if (document.getElementById("OverallExperienceDisatisfied").checked) {
            myData.OverallExperience = document.getElementById("OverallExperienceDisatisfied").value;
        }

        myData.Comments = document.getElementById("Comments").value;
        myData.Name = document.getElementById("Name").value;
        myData.Age = document.getElementById("Age").value;
        myData.Email = document.getElementById("Email").value;

        // Ajax call & result display

        $.ajax({
                method: myMethod,
                data: myData,
                url: myURL,
                asynch: false
            })

            .done(function(msg) {
                alert(msg);
            });

        // Form Validation
        $("#myform").validate({

        });
    }
}
