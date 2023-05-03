import { enableProdMode } from "@angular/core";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

import { AppModule } from "./app/app.module";
import { environment } from "./environments/environment.prod";

import { AppComponent } from "./app.component";
import { ToastUiImageEditorModule } from "toast-ui-image-editor";

enableProdMode();

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch(err => console.log(err));
