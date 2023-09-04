


export class Product
{
        UserName ;
        Role;
        Error;
        _productName;

        get ProductName(){
            return this._productName;
        }

        set ProductName(newName){
          if(this.Role == "admin"){
            this._productName = newName;
          }
          else
          {
           this.Error = `Hello  !! ${this.UserName} your ${this.Role} role is not authorized to set the product name.`;
          }
        }
}