class FetchData{
  constructor(){
    this.repos=[];
  }

  getProfile(){
    return new Promise((resolve,reject)=>{
      const request= new XMLHttpRequest();
      const url='https://api.github.com/users/grobergm/repos';
      request.onload=function(){
        if(this.status===200){
          resolve(request.response)
        } else{
          reject(Error(request.statusText))
        }
      }
      request.open("GET",url,true);
      request.send();
    });
  }
}

const testRequest= new FetchData();
const profileData= testRequest.getProfile();
profileData.then((response)=>{
  console.log(response);
});
