import saucer from './assets/images/flyingSaucer-petit.png';
import ufo from './assets/images/vaisseau-ballon-petit.png';
export default class Mobile {
  constructor(a,b , src){
    this.x = a ;
    this.y = b ;
    this.image = this.createImage( src ) ;


  }
  draw(context){
    context.drawImage(this.image , this.x , this.y ) ;
  }
  move(){
    this.x = this.x  + this.deltaX ;
    this.y = this.y + this.deltaY ;
  }
  createImage(a ) {
  const myImg = new Image();
myImg.width = 40 ;
myImg.src = a ;

return myImg;
  }
}
