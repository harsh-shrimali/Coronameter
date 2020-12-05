const URL ="https://covid19.mathdro.id/api"


let app = angular.module("MyApp",[]);

app.controller("MyCtrl" , ($scope , $http) => {
    //this is app controller
    $scope.title = "Stay Home Stay Safe"


    console.log("APP Loaded")

    //calling an api
    $http.get(URL).then( (response) => {
        //response/success code        
        console.log(response.data);

        $scope.all_data = response.data;


    } ,(error) => {
        //error code
        console.log(error);
    } ); 



    //fetch country data code

    $scope.get_c_data = ()=> {
        console.log($scope.c);
        let country = $scope.c;
        if(country=='')
        {
            return;
        }

        $http.get(`${URL}/countries/${country}`).then(
            (response) => {
                //success 
                console.log(response.data)
                $scope.c_data = response.data;

            },
            (error) => {
                console.log(error);
            }
        );
    };
});