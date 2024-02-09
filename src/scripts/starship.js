import Mobile from "./mobile" ;
import MoveState from "./stat" ;
export default class StarShip extends Mobile {
  shift ;
  constructor(a,b,src){
    super(a,b,src);
    this.moving = MoveState.NONE ;
  }
  moveUp(){
    this.shift = -8 ;
    this.moving = MoveState.UP ;
  }
  moveDown(){
    this.shift = 8 ;
    this.moving = MoveState.DOWN
  }
  Up(){
    return this.moving === MoveState.UP ;
    }
  Down(){
    return this.moving === MoveState.DOWN ;
  }
  stopMoving(){
    this.shift = 8 ;
    this.moving = MoveState.NONE ;
  }
  move(box){
    if(this.Up()){
      this.y = Math.max(0 , this.y+this.shift) ;
    }
    if(this.Down()) {
      this.y = Math.min(box.height - 40 , this.y + this.shift)  ;
    }
  }
}
