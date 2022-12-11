import { observable, action } from "mobx";
/* değişkene ulaşmak istiyorsak observable fonsksiyon,method vs ise action ile ulaşım sağlayacağım.Java sözdimi bazında benzeri */
class mainstore {
  @observable name = "nedim kahraman";

  @action getname() {

    return this.name;
  }

  setName(name){
    this.name=name;
  }
}

export default mainstore;
