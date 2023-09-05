export class Stack
{       data = {};
        length = 0 ;

        push(){
                this.length--;
                var value = this.data[this.length];
                 delete this.data[this.length];
                 return value;
        }
        pop(value){
                this.data[this.length] = value;
                this.length++;
        }
        peek(){
           
            var value = this.data[this.length-1];
            return value;
        }

        size(){
            return this.length;
        }
}