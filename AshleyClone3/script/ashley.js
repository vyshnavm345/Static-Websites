const imageBox = document.querySelector('.js-images-chairs');
let arr = ``;
      imageList.forEach((item) => {
          arr+= `
          <div class="col-md-3 col-sm-12"><img class="sm-img" src="images/${item}.jpg"> </div>
          `;
      });
      imageBox.innerHTML = arr;


let imageListElements1 = ``;
let imageListElements2 = ``;
imageAndTextList.forEach((image, index) => {
    if(index <=2)
    {
      imageListElements1+=`
    <div class="col-md-4 col-sm-12 ">
          <img class="sm-img" src="images/${image.name}.jpg">
          <h4 >${image.text}</h4>
      </div>
    `;
    }
    else{
      imageListElements2+=`
    <div class="col-md-4 col-sm-12 ">
          <img class="sm-img" src="images/${image.name}.jpg">
          <h4 >${image.text}</h4>
      </div>
    `;
    }
    
});
// console.log(imageListElements2);
  document.querySelector('.js-tablet-image-box').innerHTML = imageListElements1;
  document.querySelector('.js-tablet-image-box2').innerHTML = imageListElements2;

 
  let miniImageBoxElements = ``;
  miniImageList.forEach((image) => {
      miniImageBoxElements+= `
      <div class="col-md-2 col-sm-6 ">
      <img class="sm-img" src="images/${image.name}.jpg">
      <h5 >${image.text}</h5>           
  </div>
      `;
  });
  // console.log(miniImageBoxElements);
  document.querySelector('.js-mini-image-box').innerHTML = miniImageBoxElements;
