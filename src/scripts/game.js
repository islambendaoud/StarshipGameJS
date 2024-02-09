import StarShip from './starship' ;
export default class Game {
  constructor(canvas){
    this.context = canvas.getContext("2d") ;
    this.canva = canvas ;
    this.raf = window.requestAnimationFrame(this.moveAndDraw.bind(this)); ;
    this.ufo = new StarShip(5,Math.floor(this.context.height/2), './assets/images/vaisseau-ballon-petit.png') ;
    this.score = 0 ;
    this.saucers = new Array() ;
  }
  keyDownActionHandler(event) {
   switch (event.key) {
      case "ArrowUp" :
      case "Up" :
          this.ufo.moveUp() ;
          break ;
      case "ArrowDown" :
      case "Down" :
          this.ufo.moveDown() ;
          break ;
       default: return;
   }
 }
 keyUpActionHandler(event) {
     switch (event.key) {
         case "ArrowUp" :
         case "Up" :
         case "ArrowDown" :
         case "Down" :
             this.ufo.stopMoving();
             break;
         default: return;
     }
     event.preventDefault();
 }
 modifyscore(){
   this.score = this.score + 1 ;
 }
 moveAndDraw(){

   this.context.clearRect(0,0,this.canva.width , this.canva.height) ;
   this.ufo.move(this.canva) ;
   this.ufo.draw(this.context) ;
   this.saucers.forEach(ball => { ball.move(this.context);
      ball.draw(this.context) ;
    })
   this.raf = window.requestAnimationFrame(this.moveAndDraw.bind(this));
 }

}
