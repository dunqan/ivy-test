import {ɵrenderComponent as renderComponent, Component, ComponentFactoryResolver, Injector, ViewContainerRef} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './uuu.component.html',
  styleUrls: ['./uuu.component.css']
})
export class UuuComponent {
  title = 'ivy-test';

  loaded = false;

  constructor(private vvCntRef: ViewContainerRef, private cmpFacRes: ComponentFactoryResolver, private injector: Injector) {}

  onclick() {
    console.log('clickc');
    import('ivy-app').then(({MyTestComponent}) => {
      this.loaded = true;

      console.log('loaded');
      console.log(MyTestComponent);
      console.log(MyTestComponent['ngComponentDef']);
      const factory = MyTestComponent['ngComponentDef'].factory;

      console.log('factory', factory);
      const component = factory();
      console.log('ccomponent', component);


      renderComponent(MyTestComponent);
      const superFactory = {
        'create': () => factory()
      };

      //debugger;
      //
      //
      // // const component = factory(this.injector);
      //const factory2 = this.cmpFacRes.resolveComponentFactory(AppComponent);
      //this.vvCntRef.createComponent(superFactory as any);


    });
  }


}
